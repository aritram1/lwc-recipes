import { LightningElement, api } from 'lwc';

export default class Childcounterlwc extends LightningElement {
    @api counter = 0;

    connectedCallback(){
        this.counter = 50;
    }
}