import { Component } from '@angular/core';
import{HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.component.html',
  styleUrls: ['./greetings.component.css']
})
export class GreetingsComponent {
  private apiUrl = 'http://localhost:8080/hello'
// @ts-ignore
  constructor(private http:HttpClient) {
}
  getGreet(){
    return this.http.get(this.apiUrl);
  }
}
