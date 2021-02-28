using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
  public class IRS_Tax
  {
    public int Id { get; set; }
    public double Employee_Social_Security { get; set; }
    public double Company_Social_Security { get; set; }
    public double Minimum_Wage { get; set; }
    public double A_La_Card { get; set; }
    public double Tta_Kms { get; set; }
    public int Car_Amortization { get; set; }
    public double Lunch { get; set; }
  }
}
