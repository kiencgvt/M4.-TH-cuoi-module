import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {BookService} from "../../../services/book.service";

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  id: any;
  book: any;

  formEdit: FormGroup | undefined;

  constructor(private fb: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private bookService: BookService,
              private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.bookService.getBookDetail(this.id).subscribe( res => {
      this.formEdit = this.fb.group({
        id: [res.id],
        title: [res.title],
        author: [res.author],
        description: [res.description],
      })
    })
  }

  submit() {
    let data = this.formEdit?.value;
    this.bookService.editBook(data, this.id).subscribe( res => {
      this.router.navigate(['books']).then();
    })
  }
}
