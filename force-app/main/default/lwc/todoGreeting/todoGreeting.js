import { LightningElement , api} from 'lwc';

export default class TodoGreeting extends LightningElement {
    @api greeting;
    
    constructor(){
        super();
        if(this.greeting) this.greeting = 'Good evening , Aritra !';
    }
}