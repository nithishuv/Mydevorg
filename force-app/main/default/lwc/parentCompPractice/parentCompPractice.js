import { LightningElement } from 'lwc';

export default class ParentCompPractice extends LightningElement {
    // parentVar ;
    parentvar1;
    // handleClick(){
    //     this.parentVar = 'Hello from parent';
    // }

    ParentHandler(event){
        this.parentvar1 = event.detail.name;
    }
    
}