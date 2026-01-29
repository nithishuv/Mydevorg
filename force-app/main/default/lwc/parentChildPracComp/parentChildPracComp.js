import { LightningElement } from 'lwc';
export default class ParentChildPracComp extends LightningElement {
    parentvar;
    parentvar2;
    handleClick(){
        this.parentvar = 'Data from Parent component';
    }

    handleEvent(event){
        this.parentvar2 = event.detail.name;
    }
}