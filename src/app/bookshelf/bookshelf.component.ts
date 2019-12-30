import { Component, OnInit } from '@angular/core';
import books from "../../assets/books"

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css']
})
export class BookshelfComponent implements OnInit {

  constructor() { }
  bookdata = books;
  ngOnInit() {
  }

}
