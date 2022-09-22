import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { PersonajesService } from '../services/personajes.service';
import { Personaje } from '../personaje';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss'],
})
export class PersonajesComponent implements OnInit {
  personajes?: Personaje[];
  carga = true;
  mostrarError = false;
  constructor(private personajesService: PersonajesService) {}

  ngOnInit(): void {
    if (this.personajesService.searchName === '') {
      this.retrieveCharacters();
    } else {
      console.log('entro');
      this.searchCharacters(this.personajesService.searchName);
    }
  }

  retrieveCharacters(): void {
    this.personajesService.getAll(this.generateRandomArray()).subscribe({
      next: (data) => {
        this.carga = true;
        this.personajes = data;
        //console.log(this.personajes);
      },
      error: (e) => {
        console.log('error', e);
      },
      complete: () => {
        console.log('complete');
        this.carga = false;
      },
    });
  }

  searchCharacters(name: string) {
    this.personajesService.search(name).subscribe({
      next: (data) => {
        this.carga = true;
        this.personajes = data.results;
      },
      error: (e) => {
        console.log('ERROR');
        this.carga = false;
        this.mostrarError = true;
      },
      complete: () => {
        this.carga = false;
      },
    });
  }

  generateRandomArray(): number[] {
    let arrayNumber = [];
    for (let i = 0; i < 50; i++) {
      arrayNumber.push(Math.floor(Math.random() * 826) + 1);
    }

    return arrayNumber;
  }
}
