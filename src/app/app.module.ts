import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';
//import { NgChartsModule } from 'ng2-charts';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card'; 
import {MatSelectModule} from "@angular/material/select"
import {MatGridListModule, MatGridTile} from "@angular/material/grid-list";
import { SettingComponent } from './setting/setting.component'
import {MatStepperModule} from '@angular/material/stepper';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ShockComponent } from './shock/shock.component';
import { CompComponent } from './comp/comp.component';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MicroComponent } from './micro/micro.component';
import { PrepareComponent } from './prepare/prepare.component';
import { ResultComponent } from './result/result.component';
import {MatTabsModule} from '@angular/material/tabs';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import {MatButtonModule} from '@angular/material/button'; 
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [
    AppComponent,
    ErrorDialogComponent,
    SettingComponent,
    ShockComponent,
    CompComponent,
    MicroComponent,
    PrepareComponent,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCardModule,
    PlotlyModule,
    MatIconModule,
    MatSelectModule,
    MatStepperModule,
    CommonModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatTableModule,
    //NgChartsModule,
    MatGridListModule,
    MatProgressBarModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTabsModule,
    MatButtonModule,
    NgxMatTimepickerModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  exports: [
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
