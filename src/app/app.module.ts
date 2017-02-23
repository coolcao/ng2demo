import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppComponent }  from './app.component';  //非常奇怪，爲什麼這裏解析成js,而下面這個不能正確解析，必須加.js後綴呢？
import {ContactListComponent} from '../contacts/contact.list.js';
import {ContactDetailComponent} from '../contacts/contact.detail.js';

@NgModule({
  imports:      [ BrowserModule ,FormsModule, ReactiveFormsModule],
  declarations: [ AppComponent ,ContactListComponent,ContactDetailComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
