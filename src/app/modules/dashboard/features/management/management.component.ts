import { Component, OnInit } from '@angular/core';
import { PokemonServicesService } from '../../../../services/pokemonServices/pokemon-services.service';
import { Pokemon } from '../../../../shared/models/pokemon';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrl: './management.component.scss',
})
export class ManagementComponent implements OnInit {
  constructor(private pokemonService: PokemonServicesService) {}

  listPokemons: Pokemon[] | undefined;

  pokemonSelect: Pokemon | undefined;

  open: boolean = false;

  name: string | undefined = '';
  cp: number = 0;

  ngOnInit(): void {
    this.getPokemon();
  }
  //recupere la liste de pokemon avec le services
  getPokemon(): void {
    this.pokemonService.getPokemon().subscribe(
      (res) => (this.listPokemons = res),
      (err) => console.log(err)
    );
  }

  //selectionne le  pokemon en fonction de son id
  selectPokemon(pokemonId: string): void {
    this.pokemonService.getPokemonById(+pokemonId).subscribe(
      (res) => (this.pokemonSelect = res),
      (err) => console.log(err)
    );
  }

  //ajout d'un nouveau pokemon
  addPokemon(pokemon: Pokemon): void {
    this.pokemonService
      .addPokemon(pokemon)
      .subscribe((res) => this.listPokemons?.push(pokemon));
  }

  handleClose(val: boolean) {
    this.open = val;
  }
  
  handleOpen(): void {
    this.open = true;
  }

  createNewPokemon(): void {
    if (this.cp && this.name && this.listPokemons) {
      const newPokemon: Pokemon = {
        id: this.listPokemons?.length,
        cp: +this.cp,
        name: this.name,
        created: new Date(),
        hp: 10,
        picture: 'aucun',
        types: ['feux'],
      };
      this.addPokemon(newPokemon);
      this.handleClose(false);
    }
  }
}
