import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})

export class ServiceComponent implements OnInit {

  userList:any;
  constructor(private Myvar: ApiServiceService) {
    this.userList=[];
   }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    this.Myvar.getData().subscribe((result) => {
      this.userList= result;
    })
  }

  }


