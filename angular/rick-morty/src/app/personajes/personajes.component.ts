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
    this.personajesService.getAll().subscribe({
      next: (data) => {
        this.personajes = data.results;
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

}
