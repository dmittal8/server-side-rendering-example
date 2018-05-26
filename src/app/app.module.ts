import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './homeComponent/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { MaterialTableComponent } from './material-table/material-table.component';
import { MaterialNavComponent } from './material-nav/material-nav.component';
import { HttpClientModule } from '@angular/common/http';


const routes:Routes =[
  {path:'',component:HomeComponent,pathMatch:'full'},
  {path:'first-page',component:MaterialTableComponent,pathMatch:'full'},
  {path:'second-page',component:MaterialTableComponent,pathMatch:'full'},
  {path:'third-page',component:MaterialTableComponent,pathMatch:'full'},
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MaterialTableComponent,
    MaterialNavComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
