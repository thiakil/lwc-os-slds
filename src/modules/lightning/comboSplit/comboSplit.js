import { LightningElement } from 'lwc';

export default class ComboSplit extends LightningElement {
    open = false;

    get cssClass() {
        return (
            'slds-combobox slds-dropdown-trigger slds-dropdown-trigger_click ' +
            (this.open ? 'slds-is-open' : '')
        );
    }

    toggleOpen() {
        this.open = !this.open;
    }
}
