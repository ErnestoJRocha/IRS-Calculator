import { Component, OnInit } from '@angular/core';

// Services
import { ColaboradorService } from '../../services/colaborador.service';

// Interfaces
import { IRS_Area } from '../../_models/IRS_Area';
import { IRS_Marital_status } from '../../_models/IRS_Marital_status';
import { Sybase_Colaborador_Nivel } from 'src/app/_models/Sybase_Colaborador_Nivel';

// Utils
import nameSplitUpper from '../../_utils/nameSplitUpper';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {
  colaboradores: Sybase_Colaborador_Nivel[];

  areas: IRS_Area[];
  maritalStates: IRS_Marital_status[];
  dependents;

  NameSplitUpper = nameSplitUpper;

  constructor(private colaboradorService: ColaboradorService) {}

  ngOnInit(): void {
    // api fake data
    this.areas = [
      {
        id: 1,
        name: 'Professional Services',
      },
      {
        id: 2,
        name: 'Sales',
      },
      {
        id: 3,
        name: 'Marketing',
      },
      {
        id: 4,
        name: 'Recursos Humanos',
      },
      {
        id: 5,
        name: 'Office Operations',
      },
    ];

    this.dependents = [
      {
        id: 1,
        number: '0',
      },
      {
        id: 2,
        number: '1',
      },
      {
        id: 3,
        number: '2',
      },
      {
        id: 4,
        number: '3',
      },
      {
        id: 5,
        number: '4',
      },
      {
        id: 6,
        number: '5+',
      },
    ];

    this.maritalStates = [
      {
        id: 1,
        status: 'Não Casado',
      },
      {
        id: 2,
        status: 'Casado Unico Titular',
      },
      {
        id: 3,
        status: 'Casado Dois Titulares',
      },
      {
        id: 4,
        status: 'Não Casado - Deficiente',
      },
      {
        id: 5,
        status: 'Casado Unico Titular - Deficiente',
      },
      {
        id: 6,
        status: 'Casado Dois Titulares - Deficiente',
      },
    ];

    // END api fake data

    // API Data
    this.colaboradorService.getColaboradores().subscribe((users) => {
      this.colaboradores = users;
      console.log('getIrsUsers');
      console.log(this.colaboradores);
    });
  }
}
