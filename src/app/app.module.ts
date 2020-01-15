import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputScoresComponent } from './input-scores/input-scores.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { MatDividerModule } from '@angular/material/divider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { UpdateService } from './update.service'

@NgModule({
  declarations: [
    AppComponent,
    InputScoresComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDividerModule,
    MatProgressSpinnerModule
  ],
  providers: [UpdateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
