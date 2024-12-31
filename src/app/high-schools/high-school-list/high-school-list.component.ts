import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HighSchool } from 'src/app/state/high-schools.models';
  import { HighSchoolService } from '../../core/high-school.service';
  
  @Component({
    selector: 'app-high-school-list',
    templateUrl: './high-school-list.component.html',
    styleUrls: ['./high-school-list.component.css'],
  })
  export class HighSchoolListComponent implements OnInit {
    highSchools: HighSchool[] = [];
    loading: boolean = true;
  
    @Output() schoolSelected = new EventEmitter<HighSchool>();// Emits the DBN of the selected school
  
    constructor(private highSchoolService: HighSchoolService) {}
  
    ngOnInit(): void {
      this.fetchHighSchools();
    }
  
    fetchHighSchools(): void {
      this.highSchoolService.getHighSchools().subscribe({
        next: (schools: any[]) => {
          this.highSchools = schools;
          this.loading = false;
        },
        error: (error: any) => {
          console.error('Error fetching high schools:', error);
          this.loading = false;
        },
      });
    }
  
    selectSchool(school: HighSchool): void {
      this.schoolSelected.emit(school); // Make sure this emits a string
    }
  }
  


