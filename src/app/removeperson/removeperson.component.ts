import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-removeperson',
  templateUrl: './removeperson.component.html',
  styleUrls: ['./removeperson.component.css']
})
export class RemovepersonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  deleteData(destURI: string, headers: any=null){
    return this.deleteData(
      destURI,headers
    ).catch(

    );
    
  }
}
