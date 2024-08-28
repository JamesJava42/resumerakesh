import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ResumeDataService } from '../resume-data.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {

  projects : any[] = [];
  constructor(private resumeDataService: ResumeDataService){}
  ngOnInit(): void {
    this.projects = this.resumeDataService.getProjects();
  }
  highlightKeywords(text: string): string {
    const keywords = ['Designed', 'authentication', 'authorization', 'Developed', 'RESTful APIs', 'MySQL', 'Spring Security', 'OAuth2', 'AngularJS', 'Docker', 'Kubernetes'];
    const regex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'gi');
    return text.replace(regex, '<span class="bold">$1</span>');
  }

}
