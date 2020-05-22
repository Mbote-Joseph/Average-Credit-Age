import { Component } from '@angular/core';
import { AverageCreditAge } from './AverageCreditAge.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Average-Credit-Age';
  CardType=['Master Card', 'Visa Card','Ammex', 'Debit Card','Credit Card'];
  CardLimit=[10000,20000,30000,40000,50000,60000,70000,80000,90000,100000,200000,300000]

  model=new AverageCreditAge(this.CardType[0],"Joseph Mbote","Today",this.CardLimit[0]);
}
