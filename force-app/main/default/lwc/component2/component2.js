import { LightningElement } from 'lwc';

export default class Component2 extends LightningElement {
    playing = false;
    handleClick(event){
        this.playing = this.playing ? false : true;
    }
}