import { Component, OnInit } from '@angular/core';
import {BookService} from "../../../services/book.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: any[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getAllBook();
  }

  getAllBook() {
    this.bookService.getAll().subscribe(res => {
      console.log(res);
      this.books = res;
    })
  }

}
