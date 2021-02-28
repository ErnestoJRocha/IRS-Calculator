// Interfaces
import { IRS_Calc } from '../_models/IRS_Calc';
import { IRS_Tax } from '../_models/IRS_Tax';
import { IRS_User } from '../_models/IRS_User';
import { IRS_Simulation } from '../_models/IRS_Simulation';

export class Calculator {
  constructor() {}

  // DATA
  currentUser: IRS_User;
  simulationUser: IRS_Simulation;

  // Main Buttons
  baseSalary: number;
  irs: number;

  carTotalValue: number;
  carExpenses: number;
  carFuel: number;
  justifiedExpenses: number;
  variable: number;
  bonus: number;

  // ----- Calculator Vars -----

  // Base Salary
  baseSalaryMonthGross: number;
  baseSalaryMonthNet: number;
  baseSalaryYearGross: number;
  baseSalaryYearNet: number;
  baseSalaryYearTotal: number;

  // IHT
  ihtMonthGross: number;
  ihtMonthNet: number;
  ihtYearGross: number;
  ihtYearNet: number;
  ihtTotal: number;

  // SubsRefeicao
  subsRefeicaoMonthGross: number;
  subsRefeicaoMonthNet: number;
  subsRefeicaoYearGross: number;
  subsRefeicaoYearNet: number;
  subsRefeicaoTotal: number;

  // Justified Expenses
  justifiedExpensesMonthGross: number;
  justifiedExpensesMonthNet: number;
  justifiedExpensesYearGross: number;
  justifiedExpensesYearNet: number;
  justifiedExpensesTotal: number;

  // Car
  carMonthGross: number;
  carMonthNet: number;
  carYearGross: number;
  carYearNet: number;
  carTotal: number;

  // Car Expenses
  carExpensesMonthGross: number;
  carExpensesMonthNet: number;
  carExpensesYearGross: number;
  carExpensesYearNet: number;
  carExpensesTotal: number;

  // Car Fuel
  carFuelMonthGross: number;
  carFuelMonthNet: number;
  carFuelYearGross: number;
  carFuelYearNet: number;
  carFuelTotal: number;

  // Variable
  variableMonthGross: number;
  variableMonthNet: number;
  variableYearGross: number;
  variableYearNet: number;
  variableTotal: number;

  // Bonus
  bonusMonthGross: number;
  bonusMonthNet: number;
  bonusYearGross: number;
  bonusYearNet: number;
  bonusTotal: number;

  // Total
  totalMonthGross: number;
  totalMonthNet: number;
  totalYearGross: number;
  totalYearNet: number;
  totalTotal: number;

  // Tax Table
  totalMonthNetAfterExtraTaxWithBonus: number;
  totalYearNetAfterExtraTaxWithBonus: number;
  totalMonthNetAfterExtraTaxWithoutBonus: number;
  totalYearNetAfterExtraTaxWithoutBonus: number;

  // Employee Euros Table
  employeeIrsEuros: number;
  employeeSocialSecurityEuros: number;
  extraTaxEuros: number;

  // Bonus Table
  costMonthWithBonus: number;
  costMonthWithoutBonus: number;
  costDayWithBonus: number;
  costDayWithoutBonus: number;
  monthTargetMarginWithBonus: number;
  monthTargetMarginWithoutBonus: number;
  dayTargetMarginWithBonus: number;
  dayTargetMarginWithoutBonus: number;

  // Proposed Bonus Table
  proposedDailyRate: number;
  proposedHourRate: number;
  marginWithBonus: number;
  marginWithoutBonus: number;

  //

  // // ----- API Objects ----- //
  irsCalc: IRS_Calc;
  irsTax: IRS_Tax;
  irsUser: IRS_User;

  area: number = 1;
  nivel: number = 1;
  maritalStatus: number = 1;
  dependets: number = 1;

  // ----- API Vars ----- //

  employeeSocialSecurity: number;
  companySocialSecutiry: number;
  subsRefeicao: number;
  aLaCardTax: number;
  minimumWage: number;

  // BaseCarData
  ttaKMs: number;
  carAmortizationMonths: number;

  // extraData
  numberOfMonths: number;
  numberOfDaysMonth: number;
  targetMargin: number;
  proposedRate: number;

  tta: number;
  extraTax: number;
  carType: number;

  defaultValues() {
    // DEFAULT VALUES //
    // console.log('DEFAULT VALUES');

    // UserData => CarData
    this.carTotalValue = 0;
    this.carExpenses = 0;
    this.carFuel = 0;
    this.justifiedExpenses = 0;
    this.variable = 0;
    this.bonus = 0;

    this.irsTax = {
      id: 1,
      employee_Social_Security: 0.11,
      company_Social_Security: 0.2375,
      minimum_Wage: 557,
      a_La_Card: 0.01,
      tta_Kms: 0.05,
      car_Amortization: 48,
      lunch: 7.68,
      subsRefeicao: 160.23,
      minimumWage: 557,
      variable: 0,
      tta: 0,
      extraTax: 0,
      proposedDailyRate: 250,
      carType: 0,
      target_Margin: 0.25,
      numberOfMonths: 11,
      numberOfDaysMonth: 20,
    };

    // Extra TAXES
    this.tta = this.irsTax.tta;
    this.extraTax = this.irsTax.extraTax;
    this.proposedDailyRate = this.irsTax.proposedDailyRate;
    this.carType = this.irsTax.carType;
    // END Extra TAXES

    // UserData => extraData
    this.numberOfMonths = this.irsTax.numberOfMonths;
    this.numberOfDaysMonth = this.irsTax.numberOfDaysMonth;
    this.targetMargin = this.irsTax.target_Margin;
    this.proposedRate = this.irsTax.proposedDailyRate;

    // IRS Data
    this.employeeSocialSecurity = this.irsTax.employee_Social_Security;
    this.companySocialSecutiry = this.irsTax.company_Social_Security;
    this.subsRefeicao = this.irsTax.subsRefeicao;
    this.aLaCardTax = this.irsTax.a_La_Card;
    this.minimumWage = this.irsTax.minimumWage;

    // BaseCarData
    this.ttaKMs = this.irsTax.tta_Kms;
    this.carAmortizationMonths = this.irsTax.car_Amortization;
  }

  calcs() {
    console.log('START calcs()');

    // Extra Tax

    // Calc TTA

    if (this.carType == 0) {
      if (this.carTotalValue < 25000) {
        this.tta = 0.1;
      }
      if (this.carTotalValue >= 25000) {
        this.tta = 0.275;
      }
      if (this.carTotalValue >= 35000) {
        this.tta = 0.35;
      }
    }
    if (this.carType == 1) {
      if (this.carTotalValue < 25000) {
        this.tta = 0.05;
      }
      if (this.carTotalValue >= 35000) {
        this.tta = 0.1;
      }
      if (this.carTotalValue >= 50000) {
        this.tta = 0.175;
      }
    }

    // Base Salary
    this.baseSalaryMonthGross = this.baseSalary;

    this.baseSalaryMonthNet =
      this.baseSalary * (1 - this.employeeSocialSecurity - this.irs);

    this.baseSalaryYearGross = this.baseSalary * 14;

    this.baseSalaryYearNet =
      this.baseSalary * (1 - this.employeeSocialSecurity - this.irs) * 14;

    this.baseSalaryYearTotal =
      this.baseSalary * 14 * (1 + this.companySocialSecutiry);

    // IHT
    this.ihtMonthGross = this.baseSalary * 0.25;

    this.ihtMonthNet =
      this.baseSalary * 0.25 * (1 - this.employeeSocialSecurity - this.irs);

    this.ihtYearGross = this.ihtMonthGross * 14;

    this.ihtYearNet = this.ihtMonthNet * 14;

    this.ihtTotal =
      this.baseSalary * 0.25 * 14 * (1 + this.companySocialSecutiry);

    // SubsRefeicao
    this.subsRefeicaoMonthGross = this.subsRefeicao;
    this.subsRefeicaoMonthNet = this.subsRefeicao;
    this.subsRefeicaoYearGross = this.subsRefeicao * 11;
    this.subsRefeicaoYearNet = this.subsRefeicao * 11;
    this.subsRefeicaoTotal = this.subsRefeicao * 11 * (1 + this.aLaCardTax);

    // Justified Expenses
    this.justifiedExpensesMonthGross = this.justifiedExpenses;
    this.justifiedExpensesMonthNet = this.justifiedExpenses;
    this.justifiedExpensesYearGross = this.justifiedExpenses * 12;
    this.justifiedExpensesYearNet = this.justifiedExpenses * 12;
    this.justifiedExpensesTotal =
      this.justifiedExpenses * 12 * (1 + this.ttaKMs);

    // Car
    this.carMonthGross = this.carTotalValue / this.carAmortizationMonths;
    this.carMonthNet = this.carTotalValue / this.carAmortizationMonths;
    this.carYearGross = (this.carTotalValue / this.carAmortizationMonths) * 12;
    this.carYearNet = (this.carTotalValue / this.carAmortizationMonths) * 12;
    this.carTotal =
      (this.carTotalValue / this.carAmortizationMonths) * 12 * (1 + this.tta);

    // Car Expenses
    this.carExpensesMonthGross = this.carExpenses;
    this.carExpensesMonthNet = this.carExpenses;
    this.carExpensesYearGross = this.carExpenses * 12;
    this.carExpensesYearNet = this.carExpenses * 12;
    this.carExpensesTotal = this.carExpenses * 12 * (1 + this.tta);

    // Car Fuel
    this.carFuelMonthGross = this.carFuel;
    this.carFuelMonthNet = this.carFuel;
    this.carFuelYearGross = this.carFuel * 12;
    this.carFuelYearNet = this.carFuel * 12;
    this.carFuelTotal = this.carFuel * 12 * (1 + this.tta);

    // Variable
    this.variableMonthGross = this.variable;
    this.variableMonthNet = this.variable * (1 - this.irs);
    this.variableYearGross = this.variable * 12;
    this.variableYearNet = this.variable * (1 - this.irs) * 12;
    this.variableTotal = this.variable * 12;

    // Bonus
    this.bonusMonthGross = this.bonus / 12;
    this.bonusMonthNet = (this.bonus * (1 - this.irs)) / 12;
    this.bonusYearGross = this.bonus;
    this.bonusYearNet = this.bonus * (1 - this.irs);
    this.bonusTotal = this.bonus;

    // Total
    this.totalMonthGross =
      Number(this.baseSalary) +
      Number(this.ihtMonthGross) +
      Number(this.subsRefeicaoMonthNet) +
      Number(this.justifiedExpensesMonthGross) +
      Number(this.carMonthGross) +
      Number(this.carExpensesMonthGross) +
      Number(this.carFuelMonthGross) +
      Number(this.variableMonthGross) +
      Number(this.bonusMonthGross);

    this.totalMonthNet =
      Number(this.baseSalary * (1 - this.employeeSocialSecurity - this.irs)) +
      Number(this.ihtMonthNet) +
      Number(this.subsRefeicaoMonthNet) +
      Number(this.justifiedExpensesMonthNet) +
      Number(this.carMonthNet) +
      Number(this.carExpensesMonthNet) +
      Number(this.carFuelMonthNet) +
      Number(this.variableMonthNet) +
      Number(this.bonusMonthNet);

    this.totalYearGross =
      Number(this.baseSalaryYearGross) +
      Number(this.ihtYearGross) +
      Number(this.subsRefeicaoYearGross) +
      Number(this.justifiedExpensesYearGross) +
      Number(this.carYearGross) +
      Number(this.carExpensesYearGross) +
      Number(this.carFuelYearGross) +
      Number(this.variableYearGross) +
      Number(this.bonusYearGross);

    this.totalYearNet =
      Number(this.baseSalaryYearNet) +
      Number(this.ihtYearNet) +
      Number(this.subsRefeicaoYearNet) +
      Number(this.justifiedExpensesYearNet) +
      Number(this.carYearNet) +
      Number(this.carExpensesYearNet) +
      Number(this.carFuelYearNet) +
      Number(this.variableYearNet) +
      Number(this.bonusYearNet);

    this.totalTotal =
      Number(this.baseSalaryYearTotal) +
      Number(this.ihtTotal) +
      Number(this.subsRefeicaoTotal) +
      Number(this.justifiedExpensesTotal) +
      Number(this.carTotal) +
      Number(this.carExpensesTotal) +
      Number(this.carFuelTotal) +
      Number(this.variableTotal) +
      Number(this.bonusTotal);

    // Tax Tables

    this.totalMonthNetAfterExtraTaxWithBonus =
      this.totalMonthNet - this.extraTaxEuros;
    this.totalYearNetAfterExtraTaxWithBonus =
      this.totalYearNet - this.extraTaxEuros * 14;
    this.totalMonthNetAfterExtraTaxWithoutBonus =
      this.totalMonthNetAfterExtraTaxWithBonus - this.bonusMonthNet;
    this.totalYearNetAfterExtraTaxWithoutBonus =
      this.totalYearNetAfterExtraTaxWithBonus - this.bonusYearNet;

    // Employee Table

    this.employeeIrsEuros =
      (this.baseSalary + this.baseSalary * 0.25) * this.irs;
    this.employeeSocialSecurityEuros =
      (this.baseSalary + this.baseSalary * 0.25) * this.employeeSocialSecurity;
    this.extraTaxEuros =
      (this.totalMonthNet -
        this.subsRefeicaoMonthNet -
        this.justifiedExpensesMonthNet -
        this.carMonthNet -
        this.carExpensesMonthNet -
        this.carFuelMonthNet -
        this.minimumWage) *
      this.extraTax;

    // Bonus Table
    this.costMonthWithBonus = this.totalTotal / this.numberOfMonths;
    this.costMonthWithoutBonus =
      (this.totalTotal - this.bonusTotal) / this.numberOfMonths;
    this.costDayWithBonus =
      this.totalTotal / this.numberOfMonths / this.numberOfDaysMonth;
    this.costDayWithoutBonus =
      (this.totalTotal - this.bonusTotal) /
      this.numberOfMonths /
      this.numberOfDaysMonth;
    this.monthTargetMarginWithBonus =
      this.totalTotal / this.numberOfMonths / (1 - this.targetMargin);
    this.monthTargetMarginWithoutBonus =
      (this.totalTotal - this.bonusTotal) /
      this.numberOfMonths /
      (1 - this.targetMargin);
    this.dayTargetMarginWithBonus =
      this.totalTotal /
      this.numberOfMonths /
      this.numberOfDaysMonth /
      (1 - this.targetMargin);
    this.dayTargetMarginWithoutBonus =
      (this.totalTotal - this.bonusTotal) /
      this.numberOfMonths /
      this.numberOfDaysMonth /
      (1 - this.targetMargin);

    // Proposed Bonus Table
    this.proposedHourRate = this.proposedDailyRate / 8;
    this.marginWithBonus =
      (this.proposedDailyRate -
        this.totalTotal / this.numberOfMonths / this.numberOfDaysMonth) /
      this.proposedDailyRate;
    this.marginWithoutBonus =
      (this.proposedDailyRate -
        (this.totalTotal - this.bonusTotal) /
          this.numberOfMonths /
          this.numberOfDaysMonth) /
      this.proposedDailyRate;
  }
}
