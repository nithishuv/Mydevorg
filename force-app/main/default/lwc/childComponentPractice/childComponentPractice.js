import { LightningElement,api } from 'lwc';

export default class ChildComponentPractice extends LightningElement {
    // @api var2;
    handleClick(){
        const customeve = new CustomEvent('myfirstcuseve',{
            detail: {name: 'Hello from child'}
        })
        this.dispatchEvent(customeve);
    }
}