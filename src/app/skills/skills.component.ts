import { Component } from '@angular/core';
import { ResumeDataService } from '../resume-data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills: string[];

  constructor(private resumeData: ResumeDataService) {
    this.skills = this.resumeData.getSkills();
  }

}
