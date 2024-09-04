import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CollegeService } from './college.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'college-module';
  collegeDetails: any[] = [];
  collegeToUpdate: any = {
    id: null,
    name: '',
    location: '',
    email: '',
    establishedYear: '',
    department: ''
  };

  constructor(private collegeService: CollegeService) {
    this.getCollegeDetails();
  }

  register(registerForm: NgForm) {
    this.collegeService.registerCollege(registerForm.value).subscribe(
      (resp: any) => {
        console.log(resp);
        registerForm.reset();
        this.getCollegeDetails();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  getCollegeDetails() {
    this.collegeService.getColleges().subscribe(
      (resp: any) => {
        console.log(resp);
        this.collegeDetails = resp;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  deleteCollege(college: any) {
    this.collegeService.deleteCollege(college.id).subscribe(
      (resp: any) => {
        console.log(resp);
        this.getCollegeDetails();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  edit(college: any) {
    this.collegeToUpdate = { ...college };
  }

  updateCollege() {
    this.collegeService.updateCollege(this.collegeToUpdate).subscribe(
      (resp: any) => {
        console.log(resp);
        this.getCollegeDetails();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}