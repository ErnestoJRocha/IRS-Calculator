import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// + Angular
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Routing
import { AppRoutingModule } from './app-routing.module';

// HttpClientModule
import { HttpClientModule } from '@angular/common/http';

// Services
import { NivelService } from './services/nivel.service';
import { AreaService } from './services/area.service';
import { MaritalStatusService } from './services/maritalStatus.service';
import { ColaboradorService } from './services/colaborador.service';
import { IrsUserService } from './services/irsUser.service';
import { SimulationService } from './services/simulation.service';
import { FileUploadService } from './services/fileUpload.service';
import { IrsCalcService } from './services/irsCalc.service';

// Components
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { HomeComponent } from './components/home/home.component';
import { TeamComponent } from './components/team/team.component';
import { SimulatorComponent } from './components/simulator/simulator.component';
import { SimulationsComponent } from './components/simulations/simulations.component';
import { AdminComponent } from './components/admin/admin.component';
import { HelloComponent } from './components/hello/hello.component';

// Other Components
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';

// Primeng Components
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { AccordionModule } from 'primeng/accordion';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    SimulatorComponent,
    AdminComponent,
    HomeComponent,
    TeamComponent,
    NavComponent,
    LoginComponent,
    SimulationsComponent,
    HelloComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    DropdownModule,
    TableModule,
    FileUploadModule,
    AccordionModule,
  ],
  providers: [
    IrsUserService,
    NivelService,
    AreaService,
    MaritalStatusService,
    SimulationService,
    ColaboradorService,
    IrsCalcService,
    FileUploadService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
