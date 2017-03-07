import { Component, OnInit } from '@angular/core';
import { AccountService } from './login/account.service'
import {Delegate} from './login/delegate'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AccountService]
})

export class AppComponent implements OnInit {
  delegates:any[]
  dt:any
  load:Boolean=false
  constructor(private account: AccountService) { }

  ngOnInit() {
    this.getall("")
  }
  getall(s) {
    this.load=true
    this.account.getDelegates(s).then((resp) => {
       this.load=false
      // for(let i=0;i< resp.length;i++){
      //   this.dt={}
      //   this.dt.fstname=resp[i].fstname
      //   this.dt.lstname=resp[i].lstname
      //   this.dt.username=resp[i].username
      //   this.dt.phone=resp[i].phone
      //   console.log(this.dt)
      //   this.delegates.push(this.dt)
      // }
      this.delegates=resp
     //   console.log(this.delegates[0])
    }, (error) => {
       this.load=false
      console.log(error)
    })
  }
  title = 'app works!';
  columns = [{
    name: 'fstname'
  }, {
    name: 'lstname'
  }, {
    name: 'username'
  }, {
    name: 'phone'
  }];


  tiles = [
    { fstname: 'One', lstname: 3, username: 1, phone: 'lightblue' },
    { fstname: 'Two', lstname: 1, username: 2, phone: 'lightgreen' },
    { fstname: 'Three', lstname: 1, username: 1, phone: 'lightpink' },
    { fstname: 'Four', lstname: 2, username: 1, phone: '#DDBDF1' },
  ];
}
