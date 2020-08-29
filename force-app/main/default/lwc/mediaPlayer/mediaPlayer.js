import { LightningElement, api} from 'lwc';

export default class MediaPlayer extends LightningElement {
    @api isPlaying = false;

    handleClick(event){
        //event.target.value
        this.isPlaying = this.isPlaying ? false: true;
    }

}