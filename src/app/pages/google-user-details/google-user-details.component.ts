import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'app-google-user-details',
  templateUrl: './google-user-details.component.html',
  styleUrls: ['./google-user-details.component.css']
})
export class GoogleUserDetailsComponent implements OnInit {
  urlPort = 'https://localhost:3000';
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {


    //Get User Details
    this.httpClient.get(this.urlPort + "/api/getUserDetails")
    .map(
      (response) => response
    )
    .catch((err) => {
      return Observable.throw(err)
    })
  }

}
