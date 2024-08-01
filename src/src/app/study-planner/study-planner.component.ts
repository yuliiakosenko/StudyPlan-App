import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-study-planner',
  templateUrl: './study-planner.component.html',
  styleUrls: ['./study-planner.component.scss']
})
export class StudyPlannerComponent {
  studyForm: FormGroup;
  studySchedule: string[] = [];
  daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  constructor(private fb: FormBuilder) {
    const dayControls = this.daysOfWeek.reduce((acc: { [key: string]: FormControl }, day: string) => {
      acc['startTime_' + day] = new FormControl(''); // Control for start time
      acc['endTime_' + day] = new FormControl('');   // Control for end time
      return acc;
    }, {}); // Initialize the accumulator as an empty object
  
    this.studyForm = this.fb.group({
      topic: ['', Validators.required],
      duration: ['', Validators.required],
      startDate: ['', Validators.required],
      background: ['', Validators.required],
      ...dayControls // Spread the day controls into the form group
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
    const topic = this.studyForm.value.topic;
    const duration = this.studyForm.value.duration;
    const startDate = this.studyForm.value.startDate;
    const background = this.studyForm.value.background;
  
    this.studySchedule = [];
  
    this.daysOfWeek.forEach(day => {
      const startTime = this.studyForm.value['startTime_' + day];
      const endTime = this.studyForm.value['endTime_' + day];
      if (startTime && endTime) {
        const scheduleItem = `Study ${topic} for ${duration} starting from ${startDate} on ${day} from ${startTime} to ${endTime}`;
        this.studySchedule.push(scheduleItem);
      }
    });
  }
}

