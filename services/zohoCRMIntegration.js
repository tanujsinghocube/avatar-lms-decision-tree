// Zoho CRM Integration Service

const axios = require('axios');

class ZohoCRMIntegration {
    constructor(authToken) {
        this.authToken = authToken;
        this.baseUrl = 'https://www.zohoapis.com/crm/v2';
    }

    async syncContacts() {
        try {
            const response = await axios.get(`${this.baseUrl}/contacts`, {
                headers: { 'Authorization': `Zoho-oauthtoken ${this.authToken}` }
            });
            // Process contacts data
            console.log('Contacts synced:', response.data);
        } catch (error) {
            console.error('Error syncing contacts:', error.message);
        }
    }

    async syncLeads() {
        try {
            const response = await axios.get(`${this.baseUrl}/leads`, {
                headers: { 'Authorization': `Zoho-oauthtoken ${this.authToken}` }
            });
            // Process leads data
            console.log('Leads synced:', response.data);
        } catch (error) {
            console.error('Error syncing leads:', error.message);
        }
    }

    async syncCustomers() {
        try {
            const response = await axios.get(`${this.baseUrl}/customers`, {
                headers: { 'Authorization': `Zoho-oauthtoken ${this.authToken}` }
            });
            // Process customer data
            console.log('Customers synced:', response.data);
        } catch (error) {
            console.error('Error syncing customers:', error.message);
        }
    }
}

module.exports = ZohoCRMIntegration;