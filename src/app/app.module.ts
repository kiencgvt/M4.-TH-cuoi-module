import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookAddComponent } from './components/book/book-add/book-add.component';
import { BookListComponent } from './components/book/book-list/book-list.component';
import { BookEditComponent } from './components/book/book-edit/book-edit.component';
import {HttpClientModule} from "@angular/common/http";
import {BookDetailComponent} from "./components/book/book-detail/book-detail.component";
import {ReactiveFormsModule} from "@angular/forms";
import { BookDeleteComponent } from './components/book/book-delete/book-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    BookAddComponent,
    BookListComponent,
    BookEditComponent,
    BookDetailComponent,
    BookDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
