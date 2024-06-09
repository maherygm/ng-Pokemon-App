import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { POKEMON_LIST } from './shared/constant/pokemon.list';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const pokemons = POKEMON_LIST;
    return { pokemons };
  }
}
