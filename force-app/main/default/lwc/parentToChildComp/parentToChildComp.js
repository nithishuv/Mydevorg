import { LightningElement } from 'lwc';

export default class ParentToChildComp extends LightningElement {
    parentvar;
    parentvar1;
    handleClick(){
        this.parentvar = 'Data from parent';
    }
    handleEvent(event){
        this.parentvar1 = event.detail.name;
    }

}