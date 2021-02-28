using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using System.Text.Encodings.Web;
using System.Linq;
using System.Text.RegularExpressions;
using backend.Models;
using backend.Data;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Db_teste.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class IrsCalcController : ControllerBase
  {
    private readonly DataContext _context;
    private readonly SybaseContext _timesheetContext;

    public IrsCalcController(DataContext context, SybaseContext timesheetContext)
    {
      _context = context;
      _timesheetContext = timesheetContext;
    }

    // GET: api/irscalc
    [HttpGet]
    //public async Task<ActionResult<IEnumerable<Status>>> GetStatus([FromQuery] Status stat)
    //public IEnumerable<string> Get() //Original
    //public List<string> Get() //Original
    //public async Task<ActionResult<string>> GetList()

    //public string Get() //Original
    //public async Task<List<Contentor>> GetList()
    //public async Task<List<IQueryable<BaseData>>> GetList()


    /*
    // GET api/irscalc/5
    [HttpGet("{id}")]
    public string Get(int id)
    {
        return "value";
    }
    */

    // POST api/irscalc
    [HttpPost]
    //public void Post([FromBody] string value)
    public async Task<ActionResult<IrsCalcResp>> PostIrsCalc(IrsCalc irsCalc)
    {
      var salary = irsCalc.vencimento;
      var maritalStatus = irsCalc.maritalStatus;
      var dependents = irsCalc.dependents;
      int irstable = _context.IRS_Marital_States.Where(s => s.Id == maritalStatus).Select(s => s.Id).First();
      var irs = _context.IRS_Table
                      .Where(itx => itx.id_irs_table == irstable)
                      .Where(itx => itx.salary <= salary)
                      .Where(itx => itx.num_dep == dependents)
                      .OrderByDescending(itx => itx.salary)
                      .Select(itx => itx.irs_tax)
                      .FirstOrDefault();
      IrsCalcResp resp = new IrsCalcResp() { Irs = irs };
      return resp;

    }

    /*
    // PUT api/irscalc/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody] string value)
    {
    }

    // DELETE api/irscalc/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }
    */
  }
}
