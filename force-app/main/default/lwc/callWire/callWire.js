import { LightningElement,wire } from 'lwc';
import CalledWire from '@salesforce/apex/callWire.callWireMethod';
const Columns = [
{ label: 'Name', fieldName: 'Name' },
{ label: 'Phone', fieldName: 'Phone' },
{ label: 'Rating', fieldName: 'Rating' }
];

export default class CallWire extends LightningElement {
    
    columns = Columns;
    getdata;
    @wire(CalledWire)
    wiredData({error,data}){
        if(data){
            this.getdata = data;
            this.error = undefined;
            console.log('Data',data);
            console.log('Error',error);
        }
        else if(error){
            this.error = error;
            this.getdata = undefined;
        }
    }
}