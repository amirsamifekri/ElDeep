import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HelpingWaysComponent } from '../../components/helping-ways/helping-ways.component';
import { StoryComponent } from '../../components/story/story.component';
import { CertificationsComponent } from '../../components/certifications/certifications.component';
import { ProComponent } from '../../components/pro/pro.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { AboutMeComponent } from '../../components/about-me/about-me.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-blank-layout',
  standalone: true,
  imports: [
    HeaderComponent,
    HelpingWaysComponent,
    StoryComponent,
    CertificationsComponent,
    ProComponent,
    TestimonialsComponent,
    AboutMeComponent,
    FooterComponent,
  ],
  templateUrl: './blank-layout.component.html',
  styleUrl: './blank-layout.component.scss',
})
export class BlankLayoutComponent {}
