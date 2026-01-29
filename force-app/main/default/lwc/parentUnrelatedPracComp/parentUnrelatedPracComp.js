import { LightningElement,wire } from 'lwc';
import SAMPLELMSPRACTICE from '@salesforce/messageChannel/lmsPractice__c';
import {subscribe,MessageContext} from 'lightning/messageService';
export default class ParentUnrelatedPracComp extends LightningElement {
    getdata;
    @wire(MessageContext)
    newContext;

    connectedCallback() {
        this.subscribeMethod();
    }

    subscribeMethod(){
        subscribe(this.newContext,SAMPLELMSPRACTICE,message=>{
            this.getdata = message.sendMsg;
        });
    }
}