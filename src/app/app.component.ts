import { Component, OnInit } from '@angular/core';
import { HighSchoolService } from './core/high-school.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  highSchools: any[] = [];
  loading: boolean = true;
  selectedSchoolDbn!: string;

  constructor(private highSchoolsService: HighSchoolService) {}

  ngOnInit(): void {
    this.fetchHighSchools();
  }

  fetchHighSchools(): void {
    this.highSchoolsService.getHighSchools().subscribe({
      next: (data: any[]) => {
        this.highSchools = data;
        this.loading = false;
      },
      error: (error: any) => {
        console.error('Error fetching high schools:', error);
        this.loading = false;
      },
    });
  }

 

  handleSchoolSelected(dbn: any): void {
    this.selectedSchoolDbn = dbn; // Set the DBN of the selected school
  }


}
