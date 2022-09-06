import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})

export class ServiceComponent implements OnInit {

  userList:any;
  constructor(private httpClient: HttpClient) {
    this.userList=[];
   }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
      this.httpClient.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any) => {
        this.userList=result;
      })
  }

}
