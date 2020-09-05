import { LightningElement, track } from 'lwc';

export default class TodoApp extends LightningElement {
    @track greeting = {};
    @track weather = {};
    @track dateRange = {};
    @track activities = {};
    @track newNote = {};
    showCreateNoteComponent = false;
    constructor(){
        super();
        this.handleGreeting();
        // this.handleWeather();
        // this.handleDateRange();
        // this.handleActivities();
    }

    // Method gets invoked when child component sends the event that a note needs to be created
    handleCreateNote(event){
        console.log('Inside handleNewNote');
        let detail = event.detail;
        console.log(`The detail received is -> ${JSON.stringify(detail)}`);
        if(detail) this.showCreateNoteComponent = true;
    }

    handleGreeting(){
        console.log('Inside handleGreeting');
        this.greeting = this.generateGreeting();
    }
    generateGreeting(){
        console.log('Inside generateGreeting');
    }

    handleWeather(){
        console.log('Inside handleWeather');
        this.weather = this.generateWeather();
    }
    generateWeather(){
        console.log('Inside generateWeather');
    }

    handleDateRange(){
        console.log('Inside handleDateRange');
        this.dateRange = this.generateDateRange();
    }
    generateDateRange(){
        console.log('Inside generateDateRange');
    }

    handleActivities(){
        console.log('Inside handleActivities');
        this.activities = this.generateActivities();
    }
    generateActivities(){
        
    }
    
}