import { Component, OnInit } from '@angular/core';
import { BookStoreServiceService } from '../../Service/book-store-service.service'
import { BookDetails } from 'src/app/Models/BookDetails';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books : BookDetails[];
  errorMessage = '';
  
  constructor(private bsService : BookStoreServiceService) { }

  ngOnInit(): void {

    console.log("in book-list");
    this.bsService.getAllBooks().subscribe({
      next: books => {
        this.books = books;
        
      },
      error: err => this.errorMessage = err
    });
  }

}
