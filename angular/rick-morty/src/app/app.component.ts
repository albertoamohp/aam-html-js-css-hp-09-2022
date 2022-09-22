import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PersonajesService } from './services/personajes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rick-morty';
  searchText = '';

  constructor(
    private personajesService: PersonajesService,
    private router: Router
  ) {}

  search(name: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.personajesService.searchName = name;
      this.router.navigate(['characters']);
    });
  }
}
