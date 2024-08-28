import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ResumeDataService } from '../resume-data.service';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css'
})
export class CertificationsComponent implements OnInit{
  certifications: any[] = [];
constructor(private resumeDataService: ResumeDataService){}
  ngOnInit(): void {
      this.certifications = this.resumeDataService.getCertifications();
  }

}
