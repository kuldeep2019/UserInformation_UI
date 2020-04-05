import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { Http } from '@angular/http';
import { saveAs } from 'file-saver';
import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'app-google-user-info-form',
  templateUrl: './google-user-info-form.component.html',
  styleUrls: ['./google-user-info-form.component.css']
})
export class GoogleUserInfoFormComponent implements OnInit {
  country: { value: string; }[];

  constructor(private http: Http,private fb: FormBuilder, private router: Router,private httpClient: HttpClient,private route: ActivatedRoute) { }
  form: FormGroup;
  fullName;
  email;
  photo;
  file;
  filename;
  fd;
  urlPort = 'https://localhost:3000'
  fileDetail: any = {};
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
   
    this.filename = 'sample.pdf'
    var data = {
      fileName: this.filename
    }
    this.httpClient.post(this.urlPort + "/api/fileOperations/download",data, { responseType: "blob"})
      .catch((err) => {
        return Observable.throw(err)
      })
      .subscribe(res => {
        saveAs(res, this.filename)
      })
  }
  //submit Form


  formSubmit(data) {
    // this.httpClient.post(this.urlPort + "/api/googleUserInfo", data)
    // .map(
    //   (response) => response
    // )
    // .catch((err) => {
    //  console.log(err)
    // })
 
  }
  //upload AadharCard
  uploadedFile(event){
    
    var file = event.target.files[0];
    console.log("In getFile",file);
    
    // let eventObj: MSInputMethodContext = <MSInputMethodContext>event;
    // let target: HTMLInputElement = <HTMLInputElement>eventObj.target;
    // let files: FileList = target.files;
    // this.file = files[0];
    // this.file = target.files[0]
    // console.log("this.file.name",this.file.name)
    // this.fileDetail['originalname'] = this.file.name;
    // this.fileDetail['size'] = this.file.size;
    // this.fileDetail['fileType'] = this.file.type;
    // this.fileDetail['type'] = "document"; 
    var fd = new FormData();
    // this.fd.append('fileName',this.file.name);
    // this.fd.append('upfile', this.file);
    // this.fd.append('fileType', this.file.type);
    // this.fd.append('lastModified', (new Date(this.file.lastModified)).toString());
    fd.append('file', file, file['name']);
    this.http.post(this.urlPort + "/api/fileOperations/upload",fd)
      .catch((err) => {
        return Observable.throw(err)
      })
      .subscribe(res=> {
        console.log("file uploaded")
      })
   
  }

}
