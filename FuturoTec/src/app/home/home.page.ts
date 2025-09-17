import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CoursesSectionComponent } from '../components/courses-section/courses-section.component'; 
import { RouterModule } from '@angular/router'; 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CoursesSectionComponent,
    RouterModule
  ],
})
export class HomePage {
  constructor() {}
}