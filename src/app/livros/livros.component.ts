import { Component, OnInit } from '@angular/core';
import { caracLivros } from '../models/livros';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.css']
})
export class LivrosComponent implements OnInit {
 livros : caracLivros [] = []
 
 constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      {
        next: livros => this.livros = livros
      }
    )
  }







}
