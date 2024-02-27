import { Component, OnInit, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {

  quantidade:number = 0;

  generos:string[] = ['PSX', 'Horror', 'Action', 'Aventure'];
  rating:string = '161%';
  
  constructor() { }

  add(){
    this.quantidade += 1;
  }
  remove(){
    this.quantidade -= 1;
  }

  ngOnInit(): void {
    console.log('Executando ao criar o Componente');
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log('Executando ao alterar o Componente');
    
  }
}
