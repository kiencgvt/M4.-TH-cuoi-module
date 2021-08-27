import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookListComponent} from "./components/book/book-list/book-list.component";
import {BookAddComponent} from "./components/book/book-add/book-add.component";
import {BookEditComponent} from "./components/book/book-edit/book-edit.component";
import {BookDetailComponent} from "./components/book/book-detail/book-detail.component";
import {BookDeleteComponent} from "./components/book/book-delete/book-delete.component";

const routes: Routes = [
  {
    path: 'books',
    children: [
      {
        path: '',
        component: BookListComponent
      },
      {
        path: 'add',
        component: BookAddComponent
      },
      {
        path: ':id/edit',
        component: BookEditComponent
      },
      {
        path: ':id',
        component: BookDetailComponent
      },
      {
        path:':id/delete',
        component: BookDeleteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
