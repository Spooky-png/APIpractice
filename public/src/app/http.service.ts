import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getPokemon();
    this.abilityCheck();
  }
  getPokemon(){
    let zapdos = this._http.get('https://pokeapi.co/api/v2/pokemon/145/');
    zapdos.subscribe(data => console.log(`${data.name}'s abilities are ${data.abilities[0].ability.name} and ${data.abilities[1].ability.name}.`))
  }
  abilityCheck(){
    let check = this._http.get('https://pokeapi.co/api/v2/ability/46/');
    check.subscribe(data => console.log(`${data.pokemon.length} Pokemon have the ability Pressure.`))
    let check2 = this._http.get('https://pokeapi.co/api/v2/ability/9/');
    check2.subscribe(data2 => console.log(`${data2.pokemon.length} Pokemon have the ability Static.`))
    // coincidentally happen to both be 28
  }
}