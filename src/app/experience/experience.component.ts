import { Component } from '@angular/core';
import { ResumeDataService } from '../resume-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  experiences: any[];

  constructor(private resumeData: ResumeDataService) {
    this.experiences = this.resumeData.getExperience();
  }
}
