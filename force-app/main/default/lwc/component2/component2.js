import { LightningElement } from 'lwc';

export default class Component2 extends LightningElement {
    isPlaying = false;
    handleClick(event){
        this.isPlaying = this.isPlaying ? false : true;
    }
    informParentEvent(event){
        console.log(`Received from Child : ${event.detail}`);
        this.isPlaying = event.detail;
    }
}