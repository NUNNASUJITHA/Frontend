import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  selectedFile!: File;
  resMessage: any="";
  imageName: any;
  name:string="";
  dob:string="";
  qual:string="";
  height:string="";
  caste:string="";
  phoneno:string="";


  constructor(private http:HttpClient){}
  ngOnInit(){
    this.selectedFile={} as any;
  }

  //Gets called when the user selects an image
  public onFileChanged(event:any) {
    this.selectedFile = event.target.files[0];
  }


  prdSubmitt(){
    
    const uploadImageData = new FormData();

    uploadImageData.append('dietFile', this.selectedFile, this.selectedFile.name);
    uploadImageData.append("name",this.name);
    uploadImageData.append("dob",this.dob);
    uploadImageData.append("qual",this. qual);
    uploadImageData.append("height",this.height);
    uploadImageData.append("caste",this.caste);
    uploadImageData.append("phoneno",this. phoneno);
    
    

    let res =this.http.post("http://localhost:2010/perfectday/add",uploadImageData,
    {responseType:'text' as 'json'});
    res.subscribe(
      data=>{
        this.resMessage = data;
        console.log(data);
        this.name="";
        this.dob="";
        this.qual="";
        this.height="";
        this.caste="";
        this.phoneno="";
        
      }
    );

  }

}