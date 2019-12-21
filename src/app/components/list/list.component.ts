import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


 

  lista:Array<Persona> = [
    {Name: "Juan", LastName: "Perez", Edad: 22,Biography: "Biografia 1", Telefonos: ["111111", "123456"]},
    {Name: "Carlos", LastName: "Rodriguez", Edad: 43,Biography: "Biografia 2", Telefonos: ["222222", "123456"]},
  ];


  constructor() { }

  ngOnInit() {
  }

}

export interface Persona{
  Name:String;
  LastName:String;
  Edad: number;
  Biography: String;
  Telefonos: Array<String> 
}
