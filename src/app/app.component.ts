import { Component, OnInit } from '@angular/core';
import { POKEMON_LIST } from './shared/constant/pokemon.list';
import { Pokemon } from './shared/models/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {}

  pokemons: Pokemon[] = POKEMON_LIST;
  pokemonSelect: Pokemon | undefined;

  selectPokemon(id: string): void {
    this.pokemonSelect = this.pokemons.find((pokemon) => pokemon.id === +id);
  }
}
