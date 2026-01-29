import { LightningElement } from 'lwc';
export default class ChildPracticeComp1 extends LightningElement {
    searchText;
    handleChange(event){
        this.searchText = event.target.value;
    }
    handleClick(event){
        const cusevent = new CustomEvent('custeve',{ 
                detail: this.searchText
            });
            this.dispatchEvent(cusevent);
    }
}