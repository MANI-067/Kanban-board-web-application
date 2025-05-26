import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
// import { ProjectComponent } from './project/project.component';
import { FormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatDialogModule} from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatBadgeModule} from '@angular/material/badge';
import { HomeComponent } from './home/home.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { NgxUiLoaderHttpModule } from 'ngx-ui-loader';
import { HeaderComponent } from './header/header.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProjectComponent } from './project/project.component';
import { ConfirmmessageComponent } from './confirmmessage/confirmmessage.component';
import { TaskComponent } from './task/task.component';
import { BoardViewComponent } from './board-view/board-view.component';
import { KanbanModel, KanbanModule } from '@syncfusion/ej2-angular-kanban';
import { EditTaskComponent } from './edit-task/edit-task.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    PagenotfoundComponent,
    ProjectComponent,
    ConfirmmessageComponent,
    TaskComponent,
    BoardViewComponent,
    EditTaskComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatChipsModule,
    DragDropModule,
    MatDialogModule,
    MatTooltipModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatMenuModule,
    MatSelectModule,
    MatExpansionModule,
    MatGridListModule,
    MatBadgeModule,
    NgxUiLoaderModule,
    KanbanModule,
    NgxUiLoaderHttpModule.forRoot(
      {
        showForeground: true
      }
    )
   ],
  providers: [], //CanDeactivatedTeam
  bootstrap: [AppComponent]
})
export class AppModule { }
