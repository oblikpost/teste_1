import { Component, AfterViewInit } from '@angular/core';
import { NavController, IonicModule } from '@ionic/angular'; // 1. Importar IonicModule
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common'; // 2. Importar CommonModule (Boa prática)

@Component({
  selector: 'app-courses-section',
  templateUrl: './courses-section.component.html',
  styleUrls: ['./courses-section.component.scss'],
  standalone: true, // 3. Adicionar Standalone
  imports: [
    IonicModule,  // 4. Adicionar os imports necessários
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Você já tinha isso, mantenha
})
export class CoursesSectionComponent implements AfterViewInit {
  constructor(private navCtrl: NavController) {}

  ngAfterViewInit() {
    const sliderWrapper = document.getElementById('slider-wrapper')!;
    const arrowLeft = document.getElementById('arrow-left')!;
    const arrowRight = document.getElementById('arrow-right')!;
    const courseCards = document.querySelectorAll('.course-card');

    // Se qualquer um desses elementos não for encontrado, pare a execução para evitar erros
    if (!sliderWrapper || !arrowLeft || !arrowRight || courseCards.length === 0) {
      console.warn('Elementos do slider de cursos não encontrados no AfterViewInit.');
      return;
    }

    const scrollSlider = (direction: number) => {
      const card = document.querySelector('.course-card') as HTMLElement;
      if (!card) return;

      const cardWidth = card.offsetWidth || 250;
      const gap = 16;
      const scrollAmount = (cardWidth + gap) * direction;

      sliderWrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });

      setTimeout(() => {
        const maxScrollLeft =
          sliderWrapper.scrollWidth - sliderWrapper.clientWidth;

        if (sliderWrapper.scrollLeft >= maxScrollLeft - 5 && direction > 0) {
          sliderWrapper.scrollTo({ left: 0, behavior: 'smooth' });
        }
        if (sliderWrapper.scrollLeft <= 0 && direction < 0) {
          sliderWrapper.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });
        }
      }, 400);
    };

    arrowLeft.addEventListener('click', () => scrollSlider(-1));
    arrowRight.addEventListener('click', () => scrollSlider(1));

    courseCards.forEach((card) => {
      card.addEventListener('click', () => {
        const url = card.getAttribute('data-url');
        if (url) {
          this.navCtrl.navigateForward(url);
        }
      });
    });
  }
}