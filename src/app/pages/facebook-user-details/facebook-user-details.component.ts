import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { saveAs } from 'file-saver';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-facebook-user-details',
  templateUrl: './facebook-user-details.component.html',
  styleUrls: ['./facebook-user-details.component.css']
})
export class FacebookUserDetailsComponent implements OnInit {

  urlPort = 'https://localhost:3000';
  constructor(private httpClient: HttpClient,private fb: FormBuilder) { }
  form: FormGroup;
  filename;
  country;
  fullName;
  userName;
  image;
  ngOnInit() {

    this.userName = localStorage.getItem('fullName')
    console.log("this.userName",this.userName)
    //dropdown
    this.country = [{
      value: "India"
    }, {
      value: "Russia"
    }, {
      value: "China"
    }, {
      value: "Japan"
    }]

    // form submit
    this.form = this.fb.group({
      fullName: [null, Validators.compose([Validators.required, Validators.pattern("[A-Za-z0-9 ]{1,20}")])],
      email: [null, Validators.compose([Validators.required])],
      mobileNo: [null, Validators.compose([Validators.required, Validators.pattern("[0,9]{10}")])],
      nationality: [null, Validators.compose([Validators.required])],
    })
    //Get User Details
    var getUser = {
      userName: this.userName
    }
    this.httpClient.post(this.urlPort + "/api/getfacebookUserInfo/getfacebookUserInfo",getUser)
    .map(
      (response) => response
    )
    .catch((err) => {
      return Observable.throw(err)
    })
    .subscribe(response => {
      console.log("res of total",response[0])
      this.form.controls['fullName'].setValue(response[0].fullName);
      this.form.controls['email'].setValue(response[0].email);
      this.form.controls['mobileNo'].setValue(response[0].mobileNo);
      this.form.controls['nationality'].setValue(response[0].nationality);
      this.filename = response[0].fileName;
      this.fullName = response[0].fullName;
      this.image = response[0].imagePath
      
    });
  }

  //download
  downloadFile(){
    var data = {
      fileName: this.filename
    }
    this.httpClient.post(this.urlPort + "/api/fileOperations/download", data, { responseType: "blob" })
      .catch((err) => {
        return Observable.throw(err)
      })
      .subscribe(res => {
        saveAs(res, this.filename)
      })
  }

}
