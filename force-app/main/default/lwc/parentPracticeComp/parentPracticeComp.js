import { LightningElement } from 'lwc';
export default class ParentPracticeComp extends LightningElement {
    parentSearchText;
    handleEvent(event){
        this.parentSearchText = event.detail;
    }
}