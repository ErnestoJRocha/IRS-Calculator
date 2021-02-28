using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
  public class IRS_Simulation
  {
    public int Id { get; set; }
    public DateTime? Date { get; set; }
    // Base
    public string Name { get; set; }
    public string Syone_User_Name { get; set; }
    public string Area { get; set; }
    public string Position { get; set; }
    public string Marital_Status { get; set; }
    public double? Dependents { get; set; }
    public double? Months { get; set; }
    public double? Days_Months { get; set; }
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

    // Base Salary
    public double? baseSalaryMonthGross { get; set; }
    public double? baseSalaryMonthNet { get; set; }
    public double? baseSalaryYearGross { get; set; }
    public double? baseSalaryYearNet { get; set; }
    public double? baseSalaryYearTotal { get; set; }

    // IHT
    public double? ihtMonthGross { get; set; }
    public double? ihtMonthNet { get; set; }
    public double? ihtYearGross { get; set; }
    public double? ihtYearNet { get; set; }
    public double? ihtTotal { get; set; }

    // SubsRefeicao
    public double? subsRefeicaoMonthGross { get; set; }
    public double? subsRefeicaoMonthNet { get; set; }
    public double? subsRefeicaoYearGross { get; set; }
    public double? subsRefeicaoYearNet { get; set; }
    public double? subsRefeicaoTotal { get; set; }

    // Justified Expenses
    public double? justifiedExpensesMonthGross { get; set; }
    public double? justifiedExpensesMonthNet { get; set; }
    public double? justifiedExpensesYearGross { get; set; }
    public double? justifiedExpensesYearNet { get; set; }
    public double? justifiedExpensesTotal { get; set; }

    // Car
    public double? carMonthGross { get; set; }
    public double? carMonthNet { get; set; }
    public double? carYearGross { get; set; }
    public double? carYearNet { get; set; }
    public double? carTotal { get; set; }

    // Car Expenses
    public double? carExpensesMonthGross { get; set; }
    public double? carExpensesMonthNet { get; set; }
    public double? carExpensesYearGross { get; set; }
    public double? carExpensesYearNet { get; set; }
    public double? carExpensesTotal { get; set; }

    // Car Fuel
    public double? carFuelMonthGross { get; set; }
    public double? carFuelMonthNet { get; set; }
    public double? carFuelYearGross { get; set; }
    public double? carFuelYearNet { get; set; }
    public double? carFuelTotal { get; set; }

    // Variable
    public double? variableMonthGross { get; set; }
    public double? variableMonthNet { get; set; }
    public double? variableYearGross { get; set; }
    public double? variableYearNet { get; set; }
    public double? variableTotal { get; set; }

    // Bonus
    public double? bonusMonthGross { get; set; }
    public double? bonusMonthNet { get; set; }
    public double? bonusYearGross { get; set; }
    public double? bonusYearNet { get; set; }
    public double? bonusTotal { get; set; }

    // Total
    public double? totalMonthGross { get; set; }
    public double? totalMonthNet { get; set; }
    public double? totalYearGross { get; set; }
    public double? totalYearNet { get; set; }
    public double? totalTotal { get; set; }

    // Tax Table
    public double? totalMonthNetAfterExtraTaxWithBonus { get; set; }
    public double? totalYearNetAfterExtraTaxWithBonus { get; set; }
    public double? totalMonthNetAfterExtraTaxWithoutBonus { get; set; }
    public double? totalYearNetAfterExtraTaxWithoutBonus { get; set; }

    // Employee Euros Table
    public double? employeeIrsEuros { get; set; }
    public double? employeeSocialSecurityEuros { get; set; }
    public double? extraTaxEuros { get; set; }

    // Bonus Table
    public double? costMonthWithBonus { get; set; }
    public double? costMonthWithoutBonus { get; set; }
    public double? costDayWithBonus { get; set; }
    public double? costDayWithoutBonus { get; set; }
    public double? monthTargetMarginWithBonus { get; set; }
    public double? monthTargetMarginWithoutBonus { get; set; }
    public double? dayTargetMarginWithBonus { get; set; }
    public double? dayTargetMarginWithoutBonus { get; set; }

    // Proposed Bonus Table
    public double? proposedDailyRate { get; set; }
    public double? proposedHourRate { get; set; }
    public double? marginWithBonus { get; set; }
    public double? marginWithoutBonus { get; set; }
  }
}
