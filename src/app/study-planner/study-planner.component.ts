import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-study-planner',
  templateUrl: './study-planner.component.html',
  styleUrls: ['./study-planner.component.scss']
})
export class StudyPlannerComponent {
  studyForm: FormGroup;
  studySchedule: string[] = [];

  constructor(private fb: FormBuilder) {
    this.studyForm = this.fb.group({
      topic: ['', Validators.required],
      duration: ['', Validators.required],
      background: ['', Validators.required],
      startDate: ['', Validators.required],
      studyDays: [[]],
      studyFrames: [[]]
    });
  }

  onSubmit(): void {
    if (this.studyForm.valid) {
      this.generateStudySchedule();
    } else {
      console.error('Form is invalid. Please fill all required fields.');
    }
  }

  generateStudySchedule(): void {
    // Implement your logic here to generate the study schedule
    // Example logic to generate a detailed schedule
    const topic = this.studyForm.value.topic;
    const duration = this.studyForm.value.duration;
    const background = this.studyForm.value.background;
    const startDate = this.studyForm.value.startDate;
    const studyDays = this.studyForm.value.studyDays;
    const studyFrames = this.studyForm.value.studyFrames;

    // Example: Generate a simple schedule for demonstration
    this.studySchedule = [];
    studyDays.forEach((day: any) => {
      studyFrames.forEach((time: any) => {
        const scheduleItem = `Study ${topic} for ${duration} starting from ${startDate} on ${day} at ${time}`;
        this.studySchedule.push(scheduleItem);
      });
    });
  }
}
