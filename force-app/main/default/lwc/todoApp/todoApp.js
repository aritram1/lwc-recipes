import { LightningElement, track } from 'lwc';

export default class TodoApp extends LightningElement {
    @track todoObj = {
        greeting : {},
        weather: {},
        dateRange: {},
        activities: {}
    }
    newNote = {};
    constructor(){
        super();
        handleGreeting();
        handleWeather();
        handleDateRange();
        handleActivities();
    }
    handleNewNote(){
        console.log('Inside handleNewNote');
        this.newNote = this.generateNewNote();
    }
    handleCreateNewNote(){
        console.log('Inside createNode');
        this.newNote = {
            message: 'New note created'
        } 
    }

    handleGreeting(){
        console.log('Inside handleGreeting');
        this.todoObj.greeting = this.generateGreeting();
    }
    generateGreeting(){
        console.log('Inside generateGreeting');
    }

    handleWeather(){
        console.log('Inside handleWeather');
        this.todoObj.weather = this.generateWeather();
    }
    generateWeather(){
        console.log('Inside generateWeather');
    }

    handleDateRange(){
        console.log('Inside handleDateRange');
        this.todoObj.dateRange = this.generateDateRange();
    }
    generateDateRange(){
        console.log('Inside generateDateRange');
    }

    handleActivities(){
        console.log('Inside handleActivities');
        this.todoObj.activities = this.generateActivities();
    }
    generateActivities(){

    }
    
}