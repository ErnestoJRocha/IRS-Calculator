using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
  public class Sybase_Colaborador_Nivel
  {
    [Key, Column(TypeName = "numeric(10,0)")]
    public int? colaboradorid { get; set; }
    [Column(TypeName = "varchar(100)")]
    public string nome { get; set; }
    [Column(TypeName = "varchar(20)")]
    public string estado_colaborador { get; set; }
    [Column(TypeName = "varchar(100)")]
    public string nivel { get; set; }
    [Column(TypeName = "datetime")]
    public DateTime? data_inicio { get; set; }
    [Column(TypeName = "datetime")]
    public DateTime? data_fim { get; set; }
    [Column(TypeName = "money")]
    public decimal? vencimento { get; set; }
    [Column(TypeName = "money")]
    public decimal? abonos { get; set; }
    [Column(TypeName = "money")]
    public decimal? subs_refeicao { get; set; }
    [Column(TypeName = "money")]
    public decimal? despesas { get; set; }
    [Column(TypeName = "money")]
    public decimal? viatura { get; set; }
    [Column(TypeName = "money")]
    public decimal? despesas_viatura { get; set; }
    [Column(TypeName = "money")]
    public decimal? despesas_gasolina { get; set; }
    [Column(TypeName = "money")]
    public decimal? variavel { get; set; }
    [Column(TypeName = "money")]
    public decimal? premio { get; set; }
    [Column(TypeName = "varchar(3)")]
    public string nivelactual { get; set; }
  }
}
