import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-facebook-user-info-form',
  templateUrl: './facebook-user-info-form.component.html',
  styleUrls: ['./facebook-user-info-form.component.css']
})
export class FacebookUserInfoFormComponent implements OnInit {
  surName: any;
  firstName: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.surName = params['surName'];
      this.firstName = params['firstName'];
      console.log("params: ",this.surName,this.firstName)
  });
  }

}
