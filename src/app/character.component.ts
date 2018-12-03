import { Component, Input } from '@angular/core';
import { Character } from './character.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'story-character',
  template: '<h3 *ngIf="character">You selected {{character.name}}</h3>'
})
export class CharacterComponent {
  @Input() character: Character;
}
