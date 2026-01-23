# Automate outbound voice calls from Go High Level opportunities with Vapi

> This workflow triggers when a **new opportunity** is created in **Go High Level (GHL)**, fetches the associated contact details, and initiates an **outbound call** using **Vapi**. The call is made by a Vapi assistant configured with the appropriate credentials.

---

## 🧾 Requirements

### Go High Level (GHL)
- A [**Go High Level**](https://www.gohighlevel.com/78476a2?fp_ref=1node) account
- GHL **developer private app** and **credentials** enabled in n8n
- **Webhook URL** from n8n added to your GHL private app

### Vapi
- A [**Vapi**](https://vapi.ai/?aff=onenode) account with credit
- A connected **phone number** to make calls
- An **assistant** created and ready to make calls
- Your **Vapi API key**

### 🔗 Useful Links
- [GHL Docs](https://help.gohighlevel.com/)
- [Vapi Docs](https://docs.vapi.ai/)
- [n8n GHL Credentials Setup](https://docs.n8n.io/integrations/builtin/credentials/highlevel/)

---

## 🔄 Workflow Breakdown

### 1. **Trigger: GHL Opportunity Created**
- Triggered by a **Webhook (POST)** from Go High Level when a new opportunity is created.
- Webhook URL must be enabled in your GHL private app.

### 2. **Get a GHL Contact**
- Retrieves contact details from GHL CRM using the contact ID from the opportunity.
- Includes information such as phone number, name, and custom fields.

### 3. **Wait 5 Minutes**
- Introduces a short delay before making the call to avoid immediate outreach.
- Helps ensure data is synced and gives the system time for any follow-up automation.

### 4. **Set Vapi Fields (Manual Step)**
- Set the required fields for the Vapi API call:
  - `vapiPhoneNumberId` – the number id making the call
  - `vapiAssistantId` – the assistant who will handle the call
  - `vapiApi` – your secure Vapi API key

### 5. **Start Outbound Vapi Call**
- Sends a **POST** request to `https://api.vapi.ai/call`
- Payload includes:
  - Contact’s phone number
  - Selected Vapi assistant
  - Vapi phone number id to start the call

---

## ✅ Summary

This n8n automation connects your CRM ([Go High Level](https://www.gohighlevel.com/78476a2?fp_ref=1node)) with voice automation ([Vapi](https://vapi.ai/?aff=onenode)) to **immediately respond to new opportunities**. Once a lead is created, they will receive a **personalized voice call** from a Vapi AI assistant.

---

## 🙋‍♂️ Need Help?

Feel free to contact us at [**1 Node**](https://1node.ai)  
Get instant access to a library of [**free resources**](https://1node.ai/resources) we created.


## 📊 Basic Information

- **Workflow ID:** 6088
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 1442
- **Downloads:** 144
- **Created:** 2025/7/17
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6088)

## 👤 Author

- **Name:** Aitor | 1Node
- **Username:** @aitoralonso

## 🏷️ Categories

- Lead Nurturing
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×2)
- **httpRequest** 
- **set** 
- **webhook** 
- **highLevel** 
- **wait** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
