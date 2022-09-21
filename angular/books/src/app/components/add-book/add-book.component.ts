import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
})
export class AddBookComponent implements OnInit {
  book: Book = {
    title: '',
    description: '',
    published: false,
  };
  submitted = false;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {}

  saveBook(): void {
    const data = {
      title: this.book.title,
      description: this.book.description,
    };

    this.bookService.create(data).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      }
    );
  }

  newBook(): void {
    this.submitted = false;
    this.book = {
      title: '',
      description: '',
      published: false
    }
  }
}
