import { Component,OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  title:string = 'Hello Angular World';
  greet:string = '';

  private apiUrl = 'http://127.0.0.1:8080/hello/'
  constructor(private http:HttpClient) {
  }
  ngOnInit():void {

  }


  get():Observable<string>{
    return this.http.get<string>(this.apiUrl);
  }
  getGreeting(){
    this.get().subscribe((greet)=>this.greet=greet)
    console.log(this.greet);
  }
}
