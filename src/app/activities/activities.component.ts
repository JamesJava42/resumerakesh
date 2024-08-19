import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ResumeDataService } from '../resume-data.service';

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.css'
})
export class ActivitiesComponent implements OnInit {
  activities: any[] = [];
  constructor (private resumeDataService: ResumeDataService){}
  ngOnInit(): void {
          this.activities = this.resumeDataService.getActivities();
    
  }

}
