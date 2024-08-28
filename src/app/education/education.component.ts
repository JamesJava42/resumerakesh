import { Component, OnInit } from '@angular/core';
import { ResumeDataService } from '../resume-data.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent implements OnInit {
  education: any[]= [];

  constructor(private resumeDataService: ResumeDataService) {}

  ngOnInit(): void {
    this.education = this.resumeDataService.getEducation();
  }
}