import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HighSchoolListComponent } from './high-schools/high-school-list/high-school-list.component';
import { HighSchoolDetailComponent } from './high-schools/high-school-details/high-school-details.component';

const routes: Routes = [

  { path: '', component: HighSchoolListComponent },
  { path: 'details', component: HighSchoolDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
