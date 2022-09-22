import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../services/personajes.service';
import { Personaje } from '../personaje';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {
  personajes?: Personaje[];
  constructor(private personajesService: PersonajesService) { }

  ngOnInit(): void {
    this.retrieveCharacters();
  }

  retrieveCharacters(): void {
    this.personajesService.getAll(this.generateRandomArray()).subscribe({
      next: (data) => {
        this.personajes = data;
        console.log(this.personajes);
      },
      error: (e) => {
        console.log('error',e);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

  generateRandomArray(): number[] {
    let arrayNumber = [];
    for(let i=0; i<20; i++) {
      arrayNumber.push(Math.floor(Math.random() * 826) + 1)
    }

    return arrayNumber;
  }

}
