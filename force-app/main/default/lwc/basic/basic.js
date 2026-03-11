import { LightningElement } from 'lwc';

export default class Basic extends LightningElement {
    data = 'Hello welcome to LWC Learnig - type something in textbox to change the given value.'
    // display = ''
    changeHandler(event){
        this.data = event.target.value;
    }

    // handleClick(event){
    //     this.display = this.data;
    // }
}