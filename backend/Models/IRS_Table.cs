using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
  public class IRS_Table
  {
    [Key]
    public int id_row { get; set; }
    public int id_irs_table { get; set; }
    [Column(TypeName = "nvarchar(50)")]
    public string irs_table_name { get; set; }
    [Column(TypeName = "money")]
    public decimal salary { get; set; }
    public int num_dep { get; set; }
    [Column(TypeName = "nvarchar(50)")]
    public string married_status { get; set; }
    [Column(TypeName = "nvarchar(4)")]
    public string fiscal_year { get; set; }
    [Column(TypeName = "decimal(18,2)")]
    public decimal irs_tax { get; set; }
  }
}

