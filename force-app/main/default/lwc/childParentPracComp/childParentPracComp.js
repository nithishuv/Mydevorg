import { LightningElement,api } from 'lwc';
export default class ChildParentPracComp extends LightningElement {
    @api childvar;

    handleClick(){
        const customEvent = new CustomEvent('cuseve',{
            detail: {
                name:'Data from Child compoent'
            }
        })
        this.dispatchEvent(customEvent);
    }
}