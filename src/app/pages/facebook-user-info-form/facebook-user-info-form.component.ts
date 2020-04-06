
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'app-facebook-user-info-form',
  templateUrl: './facebook-user-info-form.component.html',
  styleUrls: ['./facebook-user-info-form.component.css']
})
export class FacebookUserInfoFormComponent implements OnInit {
  surName: any;
  firstName: any;
  form: FormGroup;
  fullName;
  email;
  photo;
  file;
  country: { value: string; }[];
  fileName;
  fd;
  urlPort = 'https://localhost:3000';
  fileDetail: any = {};
  constructor(private http: Http, private fb: FormBuilder, private router: Router, private httpClient: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.surName = params['surName'];
      this.firstName = params['firstName'];
      console.log("params: ",this.surName,this.firstName)
      this.fullName = this.firstName + ' ' + this.surName
      localStorage.setItem('fullName',this.fullName);
  });
// for dropdown value
this.country = [{
  value: "India"
}, {
  value: "Russia"
}, {
  value: "China"
}, {
  value: "Japan"
}]
// for form submission
this.form = this.fb.group({
  fullName: [null, Validators.compose([Validators.required, Validators.pattern("[A-Za-z0-9 ]{1,20}")])],
  email: [null, Validators.compose([Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")])],
  mobileNo: [null, Validators.compose([Validators.required, Validators.pattern("[0,9]{10}")])],
  nationality: [null, Validators.compose([Validators.required])],
})
  }
  //submit Form
  formSubmit(data) {
    if(this.file != undefined && this.file != ''&& this.file != null){
      var fd = new FormData();
      fd.append('file', this.file, this.file['name']);
      this.http.post(this.urlPort + "/api/fileOperations/upload", fd)
        .catch((err) => {
          return Observable.throw(err)
        })
        .subscribe(uploadRes => {
          console.log("uploadRes",uploadRes)
          data.fileName = this.fileName;
          data.filePath = "/aadharFiles/"+this.fileName;
          data.imagePath = this.photo;
          this.httpClient.post(this.urlPort + "/api/facebookUserInfo/facebookUserInfo", data)
          .map(
            (response) => response
          )
          .catch((err) => {
            return Observable.throw(err)
          })
          .subscribe(response => {
            console.log("res",response)
            this.router.navigate(["/pages/pages/facebook-UserDetails"])
          });
        })
      
  
    }
    
  }
  //upload AadharCard
  uploadedFile(event) {
    this.file = event.target.files[0];
    this.fileName = event.target.files[0].name
    console.log("In getFile", this.file,this.fileName );
   

  }

}


 




