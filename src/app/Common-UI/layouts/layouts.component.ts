import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { ProfileService } from '../../data/services/profile.service';

@Component({
  selector: 'app-layouts',
  imports: [
    RouterOutlet,
    SidebarComponent
],
  standalone: true,
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.scss'
})
export class LayoutsComponent {

}
