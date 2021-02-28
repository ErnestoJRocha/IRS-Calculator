import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SelectItem } from 'primeng/api';
import { SelectItemGroup } from 'primeng/api';

// Services
import { ColaboradorService } from '../../services/colaborador.service';
import { NivelService } from '../../services/nivel.service';
import { AreaService } from '../../services/area.service';
import { MaritalStatusService } from '../../services/maritalStatus.service';
import { IrsUserService } from '../../services/irsUser.service';
import { SimulationService } from '../../services/simulation.service';
import { IrsCalcService } from '../../services/irsCalc.service';

// Classes
import { Calculator } from '../../_classes/Calculator';

// Interfaces
import { IRS_Area } from '../../_models/IRS_Area';
import { IRS_Marital_status } from '../../_models/IRS_Marital_status';
import { IRS_Calc } from '../../_models/IRS_Calc';
import { IRS_Nivel } from '../../_models/IRS_Nivel';
import { IRS_Tax } from '../../_models/IRS_Tax';
import { IRS_User } from '../../_models/IRS_User';
import { Sybase_Colaborador_Nivel } from 'src/app/_models/Sybase_Colaborador_Nivel';

// Utils
import nameSplitUpper from '../../_utils/nameSplitUpper';

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.css'],
})
export class SimulatorComponent extends Calculator implements OnInit {
  irsUsers: IRS_User[];
  colaboradores: Sybase_Colaborador_Nivel[];
  areas: IRS_Area[];
  maritalStates: IRS_Marital_status[];
  dependents;
  colaborador: string;
  nivels: IRS_Nivel[];
  areaNivels: IRS_Nivel[];

  selectedArea: IRS_Area;
  selectedNivel: IRS_Nivel;
  selectedMaritalStatus: IRS_Marital_status;
  selectedDependents;
  selectedColaborador: Sybase_Colaborador_Nivel;

  currentIrs: IRS_Calc;

  constructor(
    private colaboradorService: ColaboradorService,
    private nivelService: NivelService,
    private areaService: AreaService,
    private maritalStatusService: MaritalStatusService,
    private irsUserService: IrsUserService,
    private simulationservice: SimulationService,
    private irsCalcService: IrsCalcService
  ) {
    super();
  }

  ngOnInit(): void {
    console.log('START ngOnInit');
    this.defaultValues();
    this.calcs();

    // Inicial API Requests do apiData()

    this.dependents = [
      {
        id: 0,
        number: '0',
      },
      {
        id: 1,
        number: '1',
      },
      {
        id: 2,
        number: '2',
      },
      {
        id: 3,
        number: '3',
      },
      {
        id: 4,
        number: '4',
      },
      {
        id: 5,
        number: '5+',
      },
    ];

    // API Data
    this.colaboradorService.getColaboradores().subscribe((users) => {
      this.colaboradores = users;
      // console.log(this.colaboradores);
    });

    this.nivelService.getNivels().subscribe((data) => {
      this.nivels = data;
      // console.log(this.nivels);
    });

    this.areaService.getAreas().subscribe((data) => {
      this.areas = data;
      // console.log(this.areas);
    });

    this.maritalStatusService.getMaritalStates().subscribe((data) => {
      this.maritalStates = data;
      console.log(this.maritalStates);
    });
  }

  getIrs() {
    this.currentIrs = {
      vencimento: this.baseSalary ? Number(this.baseSalary) : 0,
      maritalStatus: this.selectedMaritalStatus
        ? Number(this.selectedMaritalStatus.id)
        : 1,
      dependents: this.selectedDependents
        ? Number(this.selectedDependents.id)
        : 0,
    };
    console.log(this.currentIrs);

    this.irsCalcService.getIrs(this.currentIrs).subscribe((irscalc) => {
      this.irs = irscalc['irs'] / 100;
      console.log(this.irs);
    });
  }

  colaboradorSelected() {
    console.log(
      this.selectedColaborador ? this.selectedColaborador.colaboradorid : 0
    );
    console.log(this.selectedColaborador);
    // this.selectedNivel. = this.selectedColaborador.nivel;
    this.baseSalary = this.selectedColaborador.vencimento;
    this.calcs();
  }

  nivelFilter() {
    this.areaNivels = this.nivels.filter(
      (x) => x.areaid === (this.selectedArea ? this.selectedArea.id : 'none')
    );
    console.log(this.selectedArea ? this.selectedArea.id : 'none');
    console.log(this.selectedNivel);
  }

  nivelSelected() {
    // console.log(this.selectedNivel ? this.selectedNivel.nivelid : 'none');
    // console.log(this.selectedNivel);
    this.baseSalary = this.selectedNivel.vencimento;
    this.calcs();
  }

  saveIrsUser() {
    this.currentUser = {
      id: this.selectedColaborador ? this.selectedColaborador.colaboradorid : 1,
      nome: this.selectedColaborador
        ? String(this.selectedColaborador.nome)
        : this.colaborador,
      nivel: this.selectedNivel ? String(this.selectedNivel.desc) : '',
      nivelid: this.selectedNivel ? Number(this.selectedNivel.nivelid) : 1,
      marital_Status_Id: this.selectedMaritalStatus
        ? Number(this.selectedMaritalStatus.id)
        : 1,
      dependents: this.selectedDependents
        ? Number(this.selectedDependents.id)
        : 0,
      months: this.numberOfMonths ? Number(this.numberOfMonths) : 0,
      days_Months: this.numberOfDaysMonth ? Number(this.numberOfDaysMonth) : 0,
      target_Margin: this.targetMargin ? Number(this.targetMargin) : 0,
      justified_Expenses: this.justifiedExpenses
        ? Number(this.justifiedExpenses)
        : 0,
      bonus: this.bonus ? Number(this.bonus) : 0,
      daily_Rate: this.proposedDailyRate ? Number(this.proposedDailyRate) : 0,
      car_Type: this.carType ? Number(this.carType) : 0,
      car_Value: this.carTotalValue ? Number(this.carTotalValue) : 0,
      car_Fuel: this.carFuel ? Number(this.carFuel) : 0,
      car_Expenses: this.carExpenses ? Number(this.carExpenses) : 0,
      extra_Tax: this.extraTax ? Number(this.extraTax) : 0,
      food: this.subsRefeicaoMonthNet ? Number(this.subsRefeicaoMonthNet) : 0,
    };
    console.log(this.currentUser);

    // this.userService.addIrsUsers(this.currentUser).subscribe();
    this.irsUserService
      .editIrsUsers(
        this.currentUser,
        this.selectedColaborador ? this.selectedColaborador.colaboradorid : 1
      )
      .subscribe();
  }

  saveIrsSimulation() {
    this.simulationUser = {
      date: new Date(),
      name: this.selectedColaborador
        ? String(nameSplitUpper(this.selectedColaborador.nome))
        : this.colaborador,
      syone_User_Name: this.selectedColaborador
        ? String(this.selectedColaborador.nome)
        : '',
      area: this.selectedArea ? String(this.selectedArea.name) : '',
      position: this.selectedNivel ? String(this.selectedNivel.desc) : '',
      marital_Status: this.selectedMaritalStatus
        ? String(this.selectedMaritalStatus.status)
        : '',
      dependents: this.dependets ? Number(this.dependets) : 0,
      months: this.numberOfMonths ? Number(this.numberOfMonths) : 0,
      days_Months: this.numberOfDaysMonth ? Number(this.numberOfDaysMonth) : 0,
      target_Margin: this.targetMargin ? Number(this.targetMargin) : 0,
      justified_Expenses: this.justifiedExpenses
        ? Number(this.justifiedExpenses)
        : 0,
      bonus: this.bonus ? Number(this.bonus) : 0,
      daily_Rate: this.proposedDailyRate ? Number(this.proposedDailyRate) : 0,
      car_Type: this.carType ? Number(this.carType) : 0,
      car_Value: this.carTotalValue ? Number(this.carTotalValue) : 0,
      car_Fuel: this.carFuel ? Number(this.carFuel) : 0,
      car_Expenses: this.carExpenses ? Number(this.carExpenses) : 0,
      extra_Tax: this.extraTaxEuros ? Number(this.extraTaxEuros) : 0,
      food: this.subsRefeicao ? Number(this.subsRefeicao) : 0,
      baseSalaryMonthGross: this.baseSalaryMonthGross
        ? Number(this.baseSalaryMonthGross)
        : 0,
      baseSalaryMonthNet: this.baseSalaryMonthNet
        ? Number(this.baseSalaryMonthNet)
        : 0,
      baseSalaryYearGross: this.baseSalaryYearGross
        ? Number(this.baseSalaryYearGross)
        : 0,
      baseSalaryYearNet: this.baseSalaryYearNet
        ? Number(this.baseSalaryYearNet)
        : 0,
      baseSalaryYearTotal: this.baseSalaryYearTotal
        ? Number(this.baseSalaryYearTotal)
        : 0,
      ihtMonthGross: this.ihtMonthGross ? Number(this.ihtMonthGross) : 0,
      ihtMonthNet: this.ihtMonthNet ? Number(this.ihtMonthNet) : 0,
      ihtYearGross: this.ihtYearGross ? Number(this.ihtYearGross) : 0,
      ihtYearNet: this.ihtYearNet ? Number(this.ihtYearNet) : 0,
      ihtTotal: this.ihtTotal ? Number(this.ihtTotal) : 0,
      subsRefeicaoMonthGross: this.subsRefeicaoMonthGross
        ? Number(this.subsRefeicaoMonthGross)
        : 0,
      subsRefeicaoMonthNet: this.subsRefeicaoMonthNet
        ? Number(this.subsRefeicaoMonthNet)
        : 0,
      subsRefeicaoYearGross: this.subsRefeicaoYearGross
        ? Number(this.subsRefeicaoYearGross)
        : 0,
      subsRefeicaoYearNet: this.subsRefeicaoYearNet
        ? Number(this.subsRefeicaoYearNet)
        : 0,
      subsRefeicaoTotal: this.subsRefeicaoTotal
        ? Number(this.subsRefeicaoTotal)
        : 0,
      justifiedExpensesMonthGross: this.justifiedExpensesMonthGross
        ? Number(this.justifiedExpensesMonthGross)
        : 0,
      justifiedExpensesMonthNet: this.justifiedExpensesMonthNet
        ? Number(this.justifiedExpensesMonthNet)
        : 0,
      justifiedExpensesYearGross: this.justifiedExpensesYearGross
        ? Number(this.justifiedExpensesYearGross)
        : 0,
      justifiedExpensesYearNet: this.justifiedExpensesYearNet
        ? Number(this.justifiedExpensesYearNet)
        : 0,
      justifiedExpensesTotal: this.justifiedExpensesTotal
        ? Number(this.justifiedExpensesTotal)
        : 0,
      carMonthGross: this.carMonthGross ? Number(this.carMonthGross) : 0,
      carMonthNet: this.carMonthNet ? Number(this.carMonthNet) : 0,
      carYearGross: this.carYearGross ? Number(this.carYearGross) : 0,
      carYearNet: this.carYearNet ? Number(this.carYearNet) : 0,
      carTotal: this.carTotal ? Number(this.carTotal) : 0,
      carExpensesMonthGross: this.carExpensesMonthGross
        ? Number(this.carExpensesMonthGross)
        : 0,
      carExpensesMonthNet: this.carExpensesMonthNet
        ? Number(this.carExpensesMonthNet)
        : 0,
      carExpensesYearGross: this.carExpensesYearGross
        ? Number(this.carExpensesYearGross)
        : 0,
      carExpensesYearNet: this.carExpensesYearNet
        ? Number(this.carExpensesYearNet)
        : 0,
      carExpensesTotal: this.carExpensesTotal
        ? Number(this.carExpensesTotal)
        : 0,
      carFuelMonthGross: this.carFuelMonthGross
        ? Number(this.carFuelMonthGross)
        : 0,
      carFuelMonthNet: this.carFuelMonthNet ? Number(this.carFuelMonthNet) : 0,
      carFuelYearGross: this.carFuelYearGross
        ? Number(this.carFuelYearGross)
        : 0,
      carFuelYearNet: this.carFuelYearNet ? Number(this.carFuelYearNet) : 0,
      carFuelTotal: this.carFuelTotal ? Number(this.carFuelTotal) : 0,
      variableMonthGross: this.variableMonthGross
        ? Number(this.variableMonthGross)
        : 0,
      variableMonthNet: this.variableMonthNet
        ? Number(this.variableMonthNet)
        : 0,
      variableYearGross: this.variableYearGross
        ? Number(this.variableYearGross)
        : 0,
      variableYearNet: this.variableYearNet ? Number(this.variableYearNet) : 0,
      variableTotal: this.variableTotal ? Number(this.variableTotal) : 0,
      bonusMonthGross: this.bonusMonthGross ? Number(this.bonusMonthGross) : 0,
      bonusMonthNet: this.bonusMonthNet ? Number(this.bonusMonthNet) : 0,
      bonusYearGross: this.bonusYearGross ? Number(this.bonusYearGross) : 0,
      bonusYearNet: this.bonusYearNet ? Number(this.bonusYearNet) : 0,
      bonusTotal: this.bonusTotal ? Number(this.bonusTotal) : 0,
      totalMonthGross: this.totalMonthGross ? Number(this.totalMonthGross) : 0,
      totalMonthNet: this.totalMonthNet ? Number(this.totalMonthNet) : 0,
      totalYearGross: this.totalYearGross ? Number(this.totalYearGross) : 0,
      totalYearNet: this.totalYearNet ? Number(this.totalYearNet) : 0,
      totalTotal: this.totalTotal ? Number(this.totalTotal) : 0,
      totalMonthNetAfterExtraTaxWithBonus: this
        .totalMonthNetAfterExtraTaxWithBonus
        ? Number(this.totalMonthNetAfterExtraTaxWithBonus)
        : 0,
      totalYearNetAfterExtraTaxWithBonus: this
        .totalYearNetAfterExtraTaxWithBonus
        ? Number(this.totalYearNetAfterExtraTaxWithBonus)
        : 0,
      totalMonthNetAfterExtraTaxWithoutBonus: this
        .totalMonthNetAfterExtraTaxWithoutBonus
        ? Number(this.totalMonthNetAfterExtraTaxWithoutBonus)
        : 0,
      totalYearNetAfterExtraTaxWithoutBonus: this
        .totalYearNetAfterExtraTaxWithoutBonus
        ? Number(this.totalYearNetAfterExtraTaxWithoutBonus)
        : 0,
      employeeIrsEuros: this.employeeIrsEuros
        ? Number(this.employeeIrsEuros)
        : 0,
      employeeSocialSecurityEuros: this.employeeSocialSecurityEuros
        ? Number(this.employeeSocialSecurityEuros)
        : 0,
      extraTaxEuros: this.extraTaxEuros ? Number(this.extraTaxEuros) : 0,
      costMonthWithBonus: this.costMonthWithBonus
        ? Number(this.costMonthWithBonus)
        : 0,
      costMonthWithoutBonus: this.costMonthWithoutBonus
        ? Number(this.costMonthWithoutBonus)
        : 0,
      costDayWithBonus: this.costDayWithBonus
        ? Number(this.costDayWithBonus)
        : 0,
      costDayWithoutBonus: this.costDayWithoutBonus
        ? Number(this.costDayWithoutBonus)
        : 0,
      monthTargetMarginWithBonus: this.monthTargetMarginWithBonus
        ? Number(this.monthTargetMarginWithBonus)
        : 0,
      monthTargetMarginWithoutBonus: this.monthTargetMarginWithoutBonus
        ? Number(this.monthTargetMarginWithoutBonus)
        : 0,
      dayTargetMarginWithBonus: this.dayTargetMarginWithBonus
        ? Number(this.dayTargetMarginWithBonus)
        : 0,
      dayTargetMarginWithoutBonus: this.dayTargetMarginWithoutBonus
        ? Number(this.dayTargetMarginWithoutBonus)
        : 0,
      proposedDailyRate: this.proposedDailyRate
        ? Number(this.proposedDailyRate)
        : 0,
      proposedHourRate: this.proposedHourRate
        ? Number(this.proposedHourRate)
        : 0,
      marginWithBonus: this.marginWithBonus ? Number(this.marginWithBonus) : 0,
      marginWithoutBonus: this.marginWithoutBonus
        ? Number(this.marginWithoutBonus)
        : 0,
    };
    console.log(this.simulationUser);

    this.simulationservice.addSimulation(this.simulationUser).subscribe();
  }

  //
  //
}
