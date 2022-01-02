import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EmplyeesInfoComponent } from './emplyees-info/emplyees-info.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';




import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './dialog/dialog.component';
import { DepartmentsInfoComponent } from './departments-info/departments-info.component';
import {MatTabsModule} from '@angular/material/tabs';
import { YesNoPipe } from './yes-no.pipe';
import { ViewDepNamePipe } from './view-dep-name.pipe';
import { ProjectsInfoComponent } from './projects-info/projects-info.component';
import { LoginFormComponent } from './login-form/login-form.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EmplyeesInfoComponent,
    FormComponent,
    DialogComponent,
    DepartmentsInfoComponent,
    YesNoPipe,
    ViewDepNamePipe,
    ProjectsInfoComponent,
    LoginFormComponent,
  ],
  entryComponents:[DialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatRippleModule,
    MatExpansionModule,
    MatMenuModule,
    MatTabsModule,
    MatTableModule,
    MatListModule,
    MatPaginatorModule
  ],
  providers: [
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
