import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudyPlannerComponent } from './study-planner/study-planner.component';

const routes: Routes = [
  { path: 'study-planner', component: StudyPlannerComponent },
  // Other routes if any
  { path: '', redirectTo: '/study-planner', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/study-planner' } // Handle any other route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

