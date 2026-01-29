import { LightningElement,api } from 'lwc';

export default class ChildToParentComp extends LightningElement {
    @api childvar;

    handleClick(){
        const customEvent = new CustomEvent('myfirstcusteve',{
            detail: {
                name: 'Data from child'
            }
        })
        this.dispatchEvent(customEvent);
    }

}