import { Component, Input } from '@angular/core';
import { Pokemon } from '../../../../shared/models/pokemon';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrl: './card-pokemon.component.scss',
})
export class CardPokemonComponent {
  @Input('pokemon') pokemon: Pokemon | undefined;
}
