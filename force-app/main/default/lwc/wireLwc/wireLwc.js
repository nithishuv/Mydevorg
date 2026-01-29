import { LightningElement,wire } from 'lwc';
import callwiredlwc from '@salesforce/apex/wireLwc.wireLwcMethod';
const columns = [
    {label:'Name',fieldName:'Name'},
    {label:'Phone',fieldName:'Phone'},
    {label:'Rating',fieldName:'Rating'}
];
export default class WireLwc extends LightningElement {
    getdata;
    columnsList = columns;
    
    @wire(callwiredlwc)
    wiredData({error,data}){
        if(data){
            this.getdata= data;
            this.error=undefined;
            console.log('Data',data);
        }
        else if(error){
            this.error=error;
            this.getdata=undefined;
        }
    }
}