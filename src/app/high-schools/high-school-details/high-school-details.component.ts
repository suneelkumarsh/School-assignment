import { Component, Input, OnInit } from '@angular/core';
import { HighSchoolService } from '../../core/high-school.service';
import { SatScore } from '../../state/high-schools.models';

@Component({
  selector: 'app-high-school-detail',
  templateUrl: './high-school-details.component.html',
  styleUrls: ['./high-school-details.component.css'],
})
export class HighSchoolDetailComponent implements OnInit {
  @Input() schoolDbn!: string; // DBN of the selected school
  satScore: SatScore | null = null;
  loading: boolean = true;

  constructor(private highSchoolService: HighSchoolService) {}

  ngOnInit(): void {
    if (this.schoolDbn) {
      this.fetchSatScore();
    }
  }

  fetchSatScore(): void {
    this.highSchoolService.getSatScore(this.schoolDbn).subscribe({
      next: (score: any) => {
        this.satScore = score;
        this.loading = false;
      },
      error: (error: any) => {
        console.error('Error fetching SAT scores:', error);
        this.loading = false;
      },
    });
  }
}
