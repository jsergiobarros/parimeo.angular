import {Component} from '@angular/core';
import {HttpClient,} from "@angular/common/http";
import {Greetings} from "./Greetings";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Hello Angular World';
  inputValue: string = '';

  private Url = 'http://localhost:8080'
    posts:any;
    greet:any;
    constructor(private http:HttpClient) {
      }
    getPosts(){
        this.posts=this.http.get(this.Url+"/hello",{responseType: 'text'})
        this.posts.subscribe((data:string)=>this.greet= data)
      }
    clearInput(message:string) {
      console.log(message)
      this.inputValue = '';
      this.http.post(this.Url+"/hello", message).subscribe(response => {
        console.log(response);
      })
      }

  }
