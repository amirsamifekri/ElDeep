import { Component, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent implements OnInit {
  ngOnInit(): void {}

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay: true,

    navSpeed: 700,
    autoplaySpeed: 500,

    // navText: ['<', '>'],
    // responsive: {
    //   0: {
    //     items: 1,
    //   },
    //   400: {
    //     items: 2,
    //   },
    //   740: {
    //     items: 3,
    //   },
    //   940: {
    //     items: 4,
    //   },
    // },
    // nav: true,
  };
}
