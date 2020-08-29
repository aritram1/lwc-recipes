import { LightningElement, api} from 'lwc';

export default class MediaPlayer extends LightningElement {
    @api isplaying = false;

    handleClick(event){
        //event.target.value
        this.isplaying = this.isplaying ? false: true;
        let informParent = new CustomEvent('informparent', {
            detail : this.isplaying
        });
        this.dispatchEvent(informParent);
    }

}