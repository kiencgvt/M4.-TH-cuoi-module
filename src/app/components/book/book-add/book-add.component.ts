import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {BookService} from "../../../services/book.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  formAdd: FormGroup | undefined;

  constructor(private fb: FormBuilder,
              private bookService: BookService,
              private router: Router) { }

  ngOnInit(): void {
    this.formAdd = this.fb.group({
      id: [''],
      title: [''],
      author: [''],
      description: [''],
    })
  }

  submit() {
    let data = this.formAdd?.value
    this.bookService.addBook(data).subscribe(res => {
      this.router.navigate(['books']).then();
    })
  }
}
