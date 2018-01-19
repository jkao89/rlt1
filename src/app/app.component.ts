import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  message = "";

  constructor(private http: Http) {}

  ngOnInit() {
     this.http.get('http://localhost:3000/api')
      .map((response: Response) => response.json())
        .subscribe(
          (data: any) => {
            console.log(data);
            this.message = data.message;
          }
        );
  }

}
