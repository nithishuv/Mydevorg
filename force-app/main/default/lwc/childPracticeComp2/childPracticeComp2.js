import { LightningElement,api,wire } from 'lwc';
import getAccounts from '@salesforce/apex/searchText.getAccounts';
import LMSPROJECT from '@salesforce/messageChannel/lms_Practice__c';
import {publish,MessageContext} from 'lightning/messageService';
const columns = [
    {label: 'ID' , fieldName:'Id'},
    {label:'Name' , fieldName: 'Name'},
    {label:'Actions' , fieldName: 'Actions' , type: 'button', typeAttributes:{
        label: 'View Contact', value: 'view_contacts'
    }}
]

export default class ChildPracticeComp2 extends LightningElement {
    @api childSearchText;
    columnsList = columns;
    @wire(getAccounts,{text: '$childSearchText' }) accRecords;

    @wire(MessageContext) newContext;

    currId;
    currName;
    handleRowAction(event){
        if(event.detail.action.value == 'view_contacts'){
            this.currId = event.detail.row.Id;
            this.currName = event.detail.row.Name;
        }

        const message = {
                accId : event.detail.row.Id,
                accName : event.detail.row.Name
            }
        publish(this.newContext,LMSPROJECT,message);
            
    
       

    }
}