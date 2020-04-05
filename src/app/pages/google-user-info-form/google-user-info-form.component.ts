import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-google-user-info-form',
  templateUrl: './google-user-info-form.component.html',
  styleUrls: ['./google-user-info-form.component.css']
})
export class GoogleUserInfoFormComponent implements OnInit {
  fullName;
  email;
  photo;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.fullName = params['fullName'];
      this.email = params['email'];
      this.photo = params['photo'];
      console.log("params: ",this.fullName,this.email,this.photo)
  });
  }

}
