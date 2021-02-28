using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;


namespace backend.Models
{
  public class IRS_User
  {
    public int Id { get; set; }
    public string Nome { get; set; }
    public string Nivel { get; set; }
    public int? Nivelid { get; set; }
    public int? Marital_Status_Id { get; set; }
    public int? Dependents { get; set; }
    public int? Months { get; set; }
    public int? Days_Months { get; set; }
    public double? Target_Margin { get; set; }
    public double? Justified_Expenses { get; set; }
    public double? Bonus { get; set; }
    public double? Daily_Rate { get; set; }
    public double? Car_Type { get; set; }
    public double? Car_Value { get; set; }
    public double? Car_Fuel { get; set; }
    public double? Car_Expenses { get; set; }
    public double? Extra_Tax { get; set; }
    public double? Food { get; set; }
  }
}
