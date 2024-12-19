import { Component } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  imports: [],
  template: '<svg:use [attr,href]="href"></svg:use>',
  styles: ['']
})
export class SvgIconComponent {
@Input() icon = ''


get href () {
  return '/Assets/svg/$(this.icon).svg'
  }
}