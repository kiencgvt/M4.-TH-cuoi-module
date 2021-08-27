import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../../../services/book.service";

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {

  id: any;
  book: any;

  constructor(private activatedRoute: ActivatedRoute,
              private bookService: BookService,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getBook(this.id);
  }

  getBook(id: any) {
    this.bookService.getBookDetail(id).subscribe(res => {
      console.log(res);
      this.book = res;
    })
  }

  delete() {
    if (confirm('Are you sure?')) {
      this.bookService.deleteBook(this.id).subscribe( res => {
        console.log(res);
        this.router.navigate(['books']).then();
      })
    }
  }
}
