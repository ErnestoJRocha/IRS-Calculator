export interface IRS_Tax {
  id: number;
  employee_Social_Security: number;
  company_Social_Security: number;
  minimum_Wage: number;
  a_La_Card: number;
  tta_Kms: number;
  car_Amortization: number;
  lunch: number;
  subsRefeicao?: number;
  minimumWage?: number;
  variable?: number;
  tta?: number;
  extraTax?: number;
  proposedDailyRate?: number;
  carType?: number;
  target_Margin?: number;
  numberOfMonths?: number;
  numberOfDaysMonth?: number;
}
