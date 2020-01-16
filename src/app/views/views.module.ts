import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { CalendarModule,  } from 'angular-calendar';
import { FooterComponent } from '../main-layout/footer/footer.component';
import { BasicTableComponent } from './tables/basic-table/basic-table.component';
import { ModalsComponent } from './modals/modals.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EmployeesComponent } from './employees/employees.component';
import { Demo1Component } from './demo1/demo1.component';
import { Nhom3Component } from './Nhom3/nhom3.component';
import { TextEditorComponent } from './texteditor/texteditor.component';
import { PagecontentComponent } from './pagecontent/pagecontent.component';
import { DetailspostComponent } from './detailspost/detailspost.component';
import { EmployeeService } from '../services/employee.service';
import { FaceRegconizeService } from '../services/faceregconize.service';
import { LoginService } from '../services/login.service';
import { ContentService } from '../services/content.service';
import { FaceRegconizeComponent } from './faceregconize/faceregconize.component';
import { Map1Component } from './maps/map1/map1.component';
import { StatsCardComponent } from './dashboards/common/stats-card/stats-card.component';
import { StatsCard2Component } from './dashboards/common/stats-card2/stats-card2.component';
import { Dashboard1Component } from './dashboards/dashboard1/dashboard1.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';

import { Profile1Component } from './profile/profile1/profile1.component';
import { HelpComponent } from './help/help.component';
import {TranslateModule} from '@ngx-translate/core';
import { SharedModule } from '../shared/shared.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular'; 
import { ThemeModule } from './theme/theme.module'; 
import { ChartsModule, WavesModule } from 'angular-bootstrap-md';

@NgModule({
  imports: [
    ChartsModule,
    WavesModule,
    CKEditorModule,
    TranslateModule,
    CommonModule,
    ThemeModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,    
    SharedModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: ''
    }),
    CalendarModule.forRoot()
  ],
  declarations: [
    StatsCard2Component,
    Nhom3Component,
    Demo1Component,
    LoginComponent,
    RegisterComponent,
    EmployeesComponent,
    TextEditorComponent,
    PagecontentComponent,
    DetailspostComponent,
    FooterComponent,
    BasicTableComponent,
    ModalsComponent,
    Map1Component,
    StatsCardComponent,
    Dashboard1Component,
    Profile1Component,
    HelpComponent,
    FaceRegconizeComponent,
    NotFoundComponent
  ],
  exports: [
    StatsCard2Component,
    Nhom3Component,
    Demo1Component,
    EmployeesComponent,
    TextEditorComponent,
    PagecontentComponent,
    DetailspostComponent,
    FooterComponent,
    BasicTableComponent,
    ModalsComponent,
    Map1Component,
    StatsCardComponent,  
    Dashboard1Component,
    FaceRegconizeComponent,
    NotFoundComponent
  ],
  providers: [EmployeeService, LoginService, ContentService, FaceRegconizeService],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ViewsModule { }
