import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books?: Book[];
  currentBook: Book = {};
  currentIndex = -1;
  title: string = '';

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.retrieveBooks();
  }

  retrieveBooks(): void {
    this.bookService.getAll().subscribe({
      next: (data) => {
        this.books = data;
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

  refreshList(): void {
    this.retrieveBooks();
    this.currentBook = {};
    this.currentIndex = -1;
  }

  setActiveBook(book: Book, index: number): void {
    this.currentBook = book;
    this.currentIndex = index;
  }

  removeAllBooks(): void {
   const postsIdsBook = this.books?.map((post)=> post.id);
   postsIdsBook?.forEach((id)=> this.removeBook(id));
  }

  removeBook(id: string) {
    this.bookService.delete(id);
  }

  searchTitle(): void {
    this.currentBook = {};
    this.currentIndex = -1;

    this.bookService.findByTitle(this.title).subscribe({
      next: (data) => {
        this.books = data;
      },
      error: (e) => {
        console.log(e);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }
}