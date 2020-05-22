import { Component } from '@angular/core';
import { FormControl } from '@angular/forms'
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    
})
export class AverageCreditAge{
    title = 'Average Credit Age'

    constructor(
        // public CardType: enum,
        
        
        public CreditCardName: string,
        public DateIssued: string,
        public CardLimit: number,
    )
    {

    }
}