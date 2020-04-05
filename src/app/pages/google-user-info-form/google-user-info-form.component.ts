import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-google-user-info-form',
  templateUrl: './google-user-info-form.component.html',
  styleUrls: ['./google-user-info-form.component.css']
})
export class GoogleUserInfoFormComponent implements OnInit {
  country: { value: string; }[];

  constructor(private fb: FormBuilder, private router: Router,private route: ActivatedRoute) { }
  form: FormGroup;
  fullName;
  email;
  photo;
  ngOnInit() {
    this.country = [{
      value:"India"
    },{
      value:"Russia"
    },{
      value:"China"
    },{
      value:"Japan"
    }]
    this.form = this.fb.group({
      fullName: [null, Validators.compose([Validators.required, Validators.pattern("[A-Za-z0-9-s]{1,20}")])],
      email: [null, Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")])],
      mobileNo : [null, Validators.compose([Validators.required, Validators.pattern("0,11")])],
      nationality : [null, Validators.compose([Validators.required, Validators.pattern("")])],
    })
    this.route.queryParams.subscribe(params => {
      this.fullName = params['fullName'];
      this.email = params['email'];
      this.photo = params['photo'];
      console.log("params: ",this.fullName,this.email,this.photo)
    });
   
  }

  uploadedFile(event){
    console.log("event: ",event)
  }

  formSubmit(data) {

 
  }
  

}
