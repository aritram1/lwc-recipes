import { LightningElement } from 'lwc';

export default class Component1 extends LightningElement {
    widthStyle;
    percentValue;
    value=10; 
    preDefinedValues = [25, 50, 75, 100];  
    get predefinedOptions(){
        let options = [];
        for(let v of this.preDefinedValues){
            options.push({
                label: v + '%',
                value : v
            });
        }
        return options;
    }
    
    handleChange(event){
        //alert(event.target.value);
        this.percentValue = parseInt(event.target.value.trim());
        this.widthStyle = `width: ${this.percentValue}%;`;
    }
}