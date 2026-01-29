import { LightningElement } from 'lwc';
import Account_obj from '@salesforce/schema/Account';
import NAME_field from '@salesforce/schema/Account.Name'; 
import Phone_field from '@salesforce/schema/Account.Phone';
import Rating_NAME from '@salesforce/schema/Account.Rating';
import Industry_field from '@salesforce/schema/Account.Industry';
import {NavigationMixin} from 'lightning/navigation';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class RecordForm extends NavigationMixin(LightningElement) {
    obj_Account=Account_obj;
    fields=[NAME_field,Phone_field,Rating_NAME,Industry_field];
    handleSuccess(event){
        const showtoasteve = new ShowToastEvent({
            variant:'Success',
            title:'Record Created',
            message:'Account Created Successfully'
            
        })
        this.dispatchEvent(showtoasteve);

        const recid = event.detail.id;
        console.log('recid',recid);
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:recid,
                objectApiName: 'Account',
                actionName:'view'  
            }
        });  
    }
}