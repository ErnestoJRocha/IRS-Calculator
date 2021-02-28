using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
//using Microsoft.Graph;
using OfficeOpenXml;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Db_teste.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class FileUploadController : ControllerBase
  {
    SqlCommand myCommand = new SqlCommand();

    // SqlConnection myConn = new SqlConnection(ConfigurationManager.ConnectionStrings["irs_calc"].ConnectionString);
    // SqlConnection myConn = new SqlConnection("Server=23.102.32.185;Database=Sybase_AppLife_Timesheets_Dev;user = timesheet_dev;password=timesheet_dev;MultipleActiveResultSets=true");
    // pedrom connection string
    SqlConnection myConn = new SqlConnection("Server=23.102.32.185;Database=Sybase_AppLife_Timesheets_Dev;user=timesheet_dev;password=timesheet_dev;MultipleActiveResultSets=true");
    //SqlConnection myConn = new SqlConnection("Server=SBS-ERNROC;Database=Syfidb;Trusted_Connection=True;MultipleActiveResultSets=true");

    //SqlCommand myCommand = new SqlCommand();

    int f = 0;
    int contador = 0;
    int ate = 0, superior = 0;
    int contlinhas = 0;

    // Registo tabela
    double salary = 0;
    int num_dep = 0;
    int np = 0;
    int id_irs_table = 0;
    string status = "";
    string irs_table_name = "";
    double irs_tax = 0;
    string table_name = "";
    string married_status = "";
    string married_status2 = "";
    string fiscal_year = string.Format("{0:yyyy}", DateTime.Now);
    int? anofisc;

    // GET: api/fileupload
    [HttpGet]
    public IEnumerable<string> Get()
    {
      //return new string[] { "value1", "value2" };
      return new string[] { "Excel File upload" };
    }

    // GET api/<FileUploadController>/5
    [HttpGet("{id}")]
    public string Get(int id)
    {
      return "IRSTables File upload";
    }

    // POST api/<FileUploadController>
    [HttpPost]
    //public void Post([FromBody] string value)
    //public IActionResult PostFileUpload()
    public IActionResult PostFileUpload()
    //public IActionResult PostFileUpload([FromBody] string s)
    {
      ExcelPackage.LicenseContext = LicenseContext.NonCommercial;

      //using (ExcelPackage xl = new ExcelPackage(new FileInfo(Request.Body.ToString())))
      using (ExcelPackage xl = new ExcelPackage(Request.Body))
      {
        var firstSheet = xl.Workbook.Worksheets["Página1"];

        // cdi
        if (firstSheet.Cells[2, 2].Text.Contains("Tabelas de retenção"))
        {
          string titulo = firstSheet.Cells[2, 2].Text;
          string anoFiscal = titulo.Substring(titulo.Length - 4);
          int anonum = int.Parse(anoFiscal);
          anofisc = anonum;

          myCommand.Parameters.Clear();
          myCommand.Parameters.AddWithValue("@fiscal_year ", anoFiscal);
          myCommand.CommandText = "select max(fiscal_year) from irs_table where fiscal_year = @fiscal_year";
          myCommand.Connection = myConn;
          try
          {
            myConn.Open();
            SqlDataReader reader = myCommand.ExecuteReader();
            if (reader.HasRows)
            {
              while (reader.Read())
              {
                string? anostr = reader.IsDBNull(0) ? null : reader.GetString(0);
                if (anostr != null)
                {
                  int anotab = int.Parse(anostr);
                  if (anotab >= anonum)
                  {
                    return Conflict($"Tabelas IRS de {anonum} já carregadas anteriormente.");
                  }
                }
              }
            }
            else
            {
              // Não existem registos para o ano indicado, continuar para o carregamento.
            }
            reader.Close();
          }
          catch (Exception m)
          {
            return BadRequest(m);
          }
          finally
          {
            myConn.Close();
          }
        }
        //cdf
        for (int k = ate + 1; k < 400; k++)
        {
          if (firstSheet.Cells[k, 1].Text == "Euros")
          {
            ate = k + 1; // primeira linha dados
            if (contador < 7)
            {
              table_name = firstSheet.Cells[k - 4, 1].Text;
              married_status = firstSheet.Cells[k - 3, 1].Text;
              status = married_status;
            }
            else
            {
              table_name = firstSheet.Cells[k - 3, 1].Text;
              married_status = firstSheet.Cells[k - 1, 3].Text;
              married_status2 = firstSheet.Cells[k - 1, 5].Text;
            }
          }
          if (firstSheet.Cells[k, 1].Text == "Superior a")
          {
            f = 1;
            superior = k;
            contador++;
          }
          if (f == 1)
          {


            for (int i = ate; i <= superior; i++)
            {
              for (int j = 2; j < 9; j++)
              {
                if (j == 2)
                {
                  salary = double.Parse(firstSheet.Cells[i, j].Text);
                }
                if (contador < 7)
                {
                  if (j > 2)
                  {
                    int tam = firstSheet.Cells[i, j].Text.Length - 1;
                    string temp = firstSheet.Cells[i, j].Text.Substring(0, tam);
                    irs_tax = double.Parse(temp);//, CultureInfo.InvariantCulture);
                    np = num_dep;
                    num_dep++;
                    id_irs_table = contador;
                    //fiscal_year = ano;
                    irs_table_name = table_name;
                    InserirDados();
                    contlinhas++;
                  }
                }
                else
                {
                  if (j == 4 || j == 6)
                  {
                    int tam = firstSheet.Cells[i, j].Text.Length - 1;
                    string temp = firstSheet.Cells[i, j].Text.Substring(0, tam);
                    irs_tax = double.Parse(temp);//, CultureInfo.InvariantCulture);
                    np = 0;
                    //np = null;
                    //num_dep++;
                    id_irs_table = contador;
                    // fiscal_year = ano;
                    irs_table_name = table_name;

                    if (j == 4)
                      //married_status = firstSheet.Cells[k - 3, 1].Text;
                      status = married_status;
                    else // j = 6
                      status = married_status2;
                    InserirDados();
                    contlinhas++;

                  }
                }
              }
              num_dep = 0;
            }
            f = 0;
          }
        }
      }
      return Ok($"Tabelas de IRS de {anofisc} carregadas. {contlinhas} registos introduzidos.");
    }

    // PUT api/<FileUploadController>/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody] string value)
    {
    }

    // DELETE api/<FileUploadController>/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }

    public IActionResult InserirDados()
    {
      // myCommand.Parameters.AddWithValue("@utilizador", tb_utilizador.Text);
      myCommand.Parameters.Clear();
      myCommand.Parameters.AddWithValue("@id_irs_table", id_irs_table);
      myCommand.Parameters.AddWithValue("@irs_table_name", irs_table_name);
      myCommand.Parameters.AddWithValue("@salary", salary);
      myCommand.Parameters.AddWithValue("@num_dep", np);
      myCommand.Parameters.AddWithValue("@status", status);
      myCommand.Parameters.AddWithValue("@fiscal_year", fiscal_year);
      myCommand.Parameters.AddWithValue("@irs_tax", irs_tax);

      // myCommand.Parameters.AddWithValue("@pw", tb_pw.Text);

      myCommand.CommandText = "insert irs_table(id_irs_table, irs_table_name, salary, num_dep, married_status, fiscal_year, irs_tax )values (@id_irs_table, @irs_table_name, @salary, @num_dep, @status, @fiscal_year, @irs_tax )";

      myCommand.Connection = myConn;
      try
      {
        myConn.Open();
        myCommand.ExecuteNonQuery();
      }
      catch (Exception m)
      {
        //Console.WriteLine(m.Message);
        return BadRequest("Erro ao inserir na Base de Dados: " + m);
      }
      finally
      {
        myConn.Close();
      }
      return Ok();

    }
  }
}
