import { LightningElement, wire } from 'lwc';
import LMSPROJECT from '@salesforce/messageChannel/lms_Practice__c';
import { subscribe, MessageContext } from 'lightning/messageService';
import getAccountsContacts from '@salesforce/apex/searchText.getacccon';
export default class AccConPracComp extends LightningElement {
    accountId;
    accountName;
    title;
    contacts = [];
    hasContacts;
    isAccountSelected = false;

    @wire(MessageContext) newContext;
    connectedCallback() {
        //code
        this.subscribeMessage();
    }

    subscribeMessage() {
        subscribe(this.newContext, LMSPROJECT, (message) => {
            this.accountId = message.accId;
            this.accountName = message.accName;
            this.title =this.accountName + "'s Contacts";
            this.getContacts();

        })
    }

    async getContacts() {
        this.contacts = await getAccountsContacts({ accId: this.accountId });

        this.hasContacts = this.contacts.length > 0 ? true : false;
        this.isAccountSelected = true;

    }

}