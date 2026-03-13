import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import Account_Object from '@salesforce/schema/Account'
import Name_Field from '@salesforce/schema/Account.Name'
import Phone_Field from '@salesforce/schema/Account.Phone'
import Rating_Field from '@salesforce/schema/Account.Rating'
import Industry_Field from '@salesforce/schema/Account.Industry'
export default class CreateRecord extends LightningElement {

    field = [Account_Object,Name_Field,Phone_Field,Rating_Field,Industry_Field]
    handleSuccess(){
        const eventControl = new ShowToastEvent({
            title: 'Successfully Created!',
            message: 'Account Created!',
            variant: 'success'
        });
        this.dispatchEvent(eventControl);
    }
    }