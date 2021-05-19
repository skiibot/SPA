import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {Routes, RouterModule} from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { AppComponent } from './app.component';
import {CreatePostComponent} from './components/create-post-dialog/create-post.component'; 
import {HomeComponent} from './pages/home/home.component';
import {DisplayPostComponent} from './components/display-post/display-post.component'; 

const routes: Routes = [
  {path: 'home', component:AppComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '*', redirectTo:'/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    CreatePostComponent,
    HomeComponent,
    DisplayPostComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
    //RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
