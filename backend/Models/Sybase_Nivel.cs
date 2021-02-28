using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace backend.Models
{
  public class Sybase_Nivel
  {
    [Key, Column(TypeName = "numeric(10,0)")]
    public int nivelid { get; set; }
    [Column(TypeName = "varchar(30)")]
    public string shortdesc { get; set; }
    [Column(TypeName = "varchar(100)")]
    public string desc { get; set; }
    [Column(TypeName = "money")]
    public double? vencimento { get; set; }
    [Column(TypeName = "money")]
    public double? abonos { get; set; }
    [Column(TypeName = "money")]
    public double? subsrefeicao { get; set; }
    [Column(TypeName = "money")]
    public double? despesas { get; set; }
    [Column(TypeName = "money")]
    public double? atribviatura { get; set; }
    [Column(TypeName = "money")]
    public double? despesasviatura { get; set; }
    [Column(TypeName = "money")]
    public double? despesasgasolina { get; set; }
    [Column(TypeName = "money")]
    public double? variavel { get; set; }
    [Column(TypeName = "money")]
    public double? premio { get; set; }
  }
}
