import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {BookService} from "../../../services/book.service";
import {IBook} from "../ibook";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  id: any;
  book: any;

  constructor(private activatedRoute: ActivatedRoute,
              private bookService: BookService) { }

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

}
