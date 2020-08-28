import { LightningElement } from 'lwc';

export default class Component1 extends LightningElement {
    widthStyle = 'width: 100%';
    percentValue = 100;
    DELAY = 500;
    delayTimeout;
    error;
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
        console.log('Before timeout');

        //First way of delaying

        // var ev = Object.assign({},event);
        // window.clearTimeout(this.delayTimeout);
        // this.delayTimeout = setTimeout(()=>{
        //     this.process(ev);
        //     console.log('after timeout');
        // }, DELAY);

        // Second way of delaying
        new Promise((resolve, reject)=>{
            try{
                let ev = Object.assign({},event);
                let error = this.process(ev); 
                if(error) reject(error);
                else resolve('success');
            }
            catch(e){
                throw `${e} is caught but thrown again from within Promise`;
            }
        })
        .then(data=>{
            console.log(`${data} is received`);
        })
        .catch(error=>{
            this.error = `${error} and finally caught as promise catch :)`;
        });
    }

    process(event){
        try{
            // let pValue = parseInt(event.target.value.trim());
            // this.percentValue = pValue >= 0 && pValue < 100 ? pValue : 100;
            this.percentValue = parseInt(event.target.value.trim());
            this.widthStyle = `width: ${this.percentValue}%;`;
            console.log('this.widthStyle->' + this.widthStyle);
            if(this.percentValue == 50) throw 'v=50 '; 
        }
        catch(error){
            throw error + 'and also error from processEventError';
        }
    }
}