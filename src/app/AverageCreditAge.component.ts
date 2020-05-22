
import {    Component } from '@angular/core';
export class AverageCreditAge{

    constructor(
        public CardType: string,
        public CreditCardName: string,
        public DateIssued: string,
        public CardLimit: Int32List,
    )
    {

    }
}