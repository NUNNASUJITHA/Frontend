import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  allperfectday:any

  constructor(private http:HttpClient){}

  ngOnInit(){
    let res = this.http.get("http://localhost:2010/perfectday/all");
    res.subscribe(
      data=>this.allperfectday=data
    );

  }

  delteUser(id:string){
console.log(id);
let res = this.http.get("http://localhost:2010/perfectday/delete?id="+id);
    res.subscribe(
      data=>this.allperfectday=data
    );
  }

}