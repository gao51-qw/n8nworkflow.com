# Personalized hotel reward emails for high-spenders with Salesforce, Gemini AI & Brevo

> This n8n workflow automatically detects high‑spending hotel guests after checkout and emails them a personalized, one‑time reward offer.

---

### **🔧 What it does**
- Watches Salesforce `Guest__c` custom object for checkout updates.
- Pulls guest spend data on optional paid amenities:
  - Room Service
  - Minibar
  - Laundry
  - Late Checkout
  - Extra Bed
  - Airport Transfer
- Calculates total spend to identify VIP guests (≥ **$50**).
- Uses AI to:
  - Spot unused services.
  - Randomly pick one unused service.
  - Generate a realistic, short promo like:  
    _"Free late checkout on your next stay"_
- Parses AI output into JSON.
- Sends a polished HTML email to the guest with their personalized offer.

---

### **📦 Key nodes**
- `Salesforce Trigger` → monitors new checkouts.
- `Salesforce` → fetches detailed spend data.
- `Function` → sums up total amenity spend.
- `IF` → filters for VIP guests.
- `LangChain LLM` + `Google Vertex AI` → drafts the offer text.
- `Structured Output Parser` → cleans AI output.
- `Brevo` → delivers branded email.

---

### **📊 Example output**
&gt; _Subject:_ `John, We Have Something Special for Your Next Stay`  
&gt; _Offer in email:_ `Enjoy a complimentary minibar selection on your next stay.`

---

### **✨ Why it matters**
Rewarding guests who already spend boosts loyalty and repeat bookings — without generic discounts. The offer feels personal, relevant, and exclusive.


## 📊 Basic Information

- **Workflow ID:** 5936
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 1250
- **Downloads:** 125
- **Created:** 2025/7/13
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5936)

## 👤 Author

- **Name:** iamvaar
- **Username:** @iamvaar

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **salesforceTrigger** 
- **salesforce** 
- **code** 
- **if** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleVertex** 
- **sendInBlue** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
