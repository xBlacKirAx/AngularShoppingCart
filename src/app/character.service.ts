import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

export class Character {
  id: number;
  name: string;
}

@Injectable()
export class CharacterService {
  constructor(private http: HttpClient) {}

  getCharacters(storyId: number) {
    return this.http
      .get('./api/characters.json')
      //.get('./product')
      //.get('http://localhost:3000/product')
      .pipe(map(charactersData => charactersData['data']));
  }
}
