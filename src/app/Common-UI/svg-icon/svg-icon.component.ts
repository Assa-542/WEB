import { Component, Input } from '@angular/core';

@Component({
  selector: 'svg[icon]',
  imports: [
  ],
  standalone: true,
  template: '<svg:use [attr.href]="href"></svg:use>',
  styles: ['']
})
export class SvgIconComponent {
@Input() icon = ''


get href () {
  return `/Assets/svg/${this.icon}.svg#${this.icon}`;
  }
}