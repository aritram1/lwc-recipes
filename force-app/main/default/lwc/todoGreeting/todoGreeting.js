import { LightningElement , track} from 'lwc';

export default class TodoGreeting extends LightningElement {
    @track greeting = {
        time: 'time',
        name: 'name'
    };
    name = 'Aritra';
    
    connectedCallback(){
        let hour = new Date().getHours();
        let time = 'Time';
        if(hour >= 5 && hour < 12) time = 'Morning';        //Morning 5am to 12pm
        else if(hour >= 12 && hour <16) time = 'Afternoon'; //Afternoon 12pm-4pm
        else if(hour >= 16 && hour <20) time = 'Evening';   //Evening 4pm to 8pm
        else time = 'Night'

        this.greeting = {
            time: time,
            name: this.name
        }
    }

    handleClick(event){
        console.log('From child');
        this.dispatchEvent(new CustomEvent('createnote', {
            detail : this.greeting
        }))

    }
}