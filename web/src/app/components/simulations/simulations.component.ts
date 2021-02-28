import { Component, OnInit } from '@angular/core';

// Services
import { SimulationService } from '../../services/simulation.service';

// Interfaces
import { IRS_Simulation } from 'src/app/_models/IRS_Simulation';

// Utils
import nameSplitUpper from '../../_utils/nameSplitUpper';

@Component({
  selector: 'app-simulations',
  template: `
    <div class="jumbotron text-center">
      <h1>Simulações</h1>
      <div class="container">
        <table class="table" *ngFor="let simulation of irsSimulations">
          <tr class="table-primary">
            <td>{{ simulation.id }}</td>
            <td>
              <button
                type="button"
                (click)="this.deleteSimulation(simulation.id)"
              >
                <img
                  width="30px"
                  src="{{
                    'https://ipc.digital/wp-content/uploads/2016/07/icon-user-default.png'
                  }}"
                  class="rounded"
                  alt="img"
                />
              </button>
              <!-- Add image
            this.simulationes[user.simulationid - 1].avatar_Url
                ? this.simulationes[user.simulationid - 1].avatar_Url
                :  -->
            </td>
            <td>Name: {{ simulation.name }}</td>
            <td>Position: {{ simulation.position }}</td>
            <td></td>
            <td></td>
          </tr>
          <tr class="table-info">
            <td></td>
            <td>Month</td>
            <td>Month</td>
            <td>Year</td>
            <td>Year</td>
            <td>Total</td>
          </tr>
          <tr class="table-info">
            <td></td>
            <td>Gross</td>
            <td>Net</td>
            <td>Gross</td>
            <td>Net</td>
            <td></td>
          </tr>
          <tr>
            <td class="table-info">Base Salary</td>
            <td>{{ simulation.baseSalaryMonthGross | number }}</td>
            <td>{{ simulation.baseSalaryMonthNet | number }}</td>
            <td>{{ simulation.baseSalaryYearGross | number }}</td>
            <td>{{ simulation.baseSalaryYearNet | number }}</td>
            <td>{{ simulation.baseSalaryYearTotal | number }}</td>
          </tr>
          <tr>
            <td class="table-info">IHT</td>
            <td>{{ simulation.ihtMonthGross | number }}</td>
            <td>{{ simulation.ihtMonthNet | number }}</td>
            <td>{{ simulation.ihtYearGross | number }}</td>
            <td>{{ simulation.ihtYearNet | number }}</td>
            <td>{{ simulation.ihtTotal | number }}</td>
          </tr>
          <tr>
            <td class="table-info">SubsRefeicao</td>
            <td>{{ simulation.subsRefeicaoMonthGross | number }}</td>
            <td>{{ simulation.subsRefeicaoMonthNet | number }}</td>
            <td>{{ simulation.subsRefeicaoYearGross | number }}</td>
            <td>{{ simulation.subsRefeicaoYearNet | number }}</td>
            <td>{{ simulation.subsRefeicaoTotal | number }}</td>
          </tr>
          <tr>
            <td class="table-info">Justified Expenses</td>
            <td>{{ simulation.justifiedExpensesMonthGross | number }}</td>
            <td>{{ simulation.justifiedExpensesMonthNet | number }}</td>
            <td>{{ simulation.justifiedExpensesYearGross | number }}</td>
            <td>{{ simulation.justifiedExpensesYearNet | number }}</td>
            <td>{{ simulation.justifiedExpensesTotal | number }}</td>
          </tr>
          <tr>
            <td class="table-info">Car</td>
            <td>{{ simulation.carMonthGross | number }}</td>
            <td>{{ simulation.carMonthNet | number }}</td>
            <td>{{ simulation.carYearGross | number }}</td>
            <td>{{ simulation.carYearNet | number }}</td>
            <td>{{ simulation.carTotal | number }}</td>
          </tr>
          <tr>
            <td class="table-info">Total</td>
            <td>{{ simulation.totalMonthGross | number }}</td>
            <td>{{ simulation.totalMonthNet | number }}</td>
            <td>{{ simulation.totalYearGross | number }}</td>
            <td>{{ simulation.totalYearNet | number }}</td>
            <td>{{ simulation.totalTotal | number }}</td>
          </tr>
        </table>
      </div>
    </div>
  `,
  styles: [],
})
export class SimulationsComponent implements OnInit {
  irsSimulations: IRS_Simulation[];
  cols: any[];

  NameSplitUpper = nameSplitUpper;

  constructor(private simulationservice: SimulationService) {}

  ngOnInit(): void {
    // API Data
    this.simulationservice.getSimulations().subscribe((simulations) => {
      this.irsSimulations = simulations;
      console.log('irsSimulations');
      console.log(this.irsSimulations);
    });
  }
  deleteSimulation(id) {
    this.simulationservice.deleteSimulation(id).subscribe();
  }
}
