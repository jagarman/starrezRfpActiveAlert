import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import ACTIVE_RFP_FIELD from '@salesforce/schema/Account.Active_RFP__c';

export default class ActiveRfpAlert extends LightningElement {
    @api recordId;
    showAlert = false;

    @wire(getRecord, { recordId: '$recordId', fields: [ACTIVE_RFP_FIELD] })
    account({ error, data }) {
        if (data) {
            this.showAlert = data.fields.Active_RFP__c.value;
        } else if (error) {
            console.error('Error fetching Account data', error);
        }
    }

    closeAlert() {
        this.showAlert = false;
    }
}
