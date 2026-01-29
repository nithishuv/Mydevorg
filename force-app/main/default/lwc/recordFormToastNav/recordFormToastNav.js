import { LightningElement } from 'lwc';
import OBJ_account from '@salesforce/schema/Account';
import Name_field from '@salesforce/schema/Account.Name'; 
import Rating_field from '@salesforce/schema/Account.Rating';  
import Phone_field from '@salesforce/schema/Account.Phone';  
import {NavigationMixin} from 'lightning/navigation';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';  
export default class RecordFormToastNav extends NavigationMixin(LightningElement) {
    account_obj = OBJ_account;
    acc_fields = [Name_field,Rating_field,Phone_field];

    successHandler(event){
        const recid = event.detail.id;
        console.log('recid',recid);
        const showtoasteve = new ShowToastEvent({
            variant: 'Success',
            title: 'Record Created',
            message: 'Account record created successfully'
        })
        this.dispatchEvent(showtoasteve);

        
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:recid,
                objectApiName:'Account',
                actionName:'view'
            }
        })

    }
}