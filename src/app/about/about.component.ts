import { Component, OnInit } from '@angular/core';
import { ResumeDataService } from '../resume-data.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  aboutText: string="";

  constructor(private resumeDataService: ResumeDataService) {}

  ngOnInit(): void {
    this.aboutText = this.resumeDataService.getAbout();
  }
}