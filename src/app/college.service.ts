import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CollegeService {
  private API = "http://localhost:8080/collegeservice";

  constructor(private http: HttpClient) { }

  public registerCollege(collegeData: any) {
    return this.http.post(this.API, collegeData);
  }

  public getColleges() {
    return this.http.get(this.API);
  }

  public deleteCollege(collegeId: any) {
    return this.http.delete('${this.API}/${collegeId}');
  }

  public updateCollege(college: any) {
    return this.http.put('${this.API}/${college.id}', college);
  }
}