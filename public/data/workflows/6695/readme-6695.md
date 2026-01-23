# Trigger outbound Vapi AI voice calls from new Jotform submissions

> This workflow connects JotForm submissions to **[Vapi AI](https://vapi.ai/?aff=onenode)**, triggering a personalized outbound call via an AI voice assistant immediately after a user submits your form.

## Requirements

### JotForm
- A **[JotForm account](https://www.jotform.com/?partner=https://1node.ai)**
- **JotForm API credentials** enabled in n8n
- A **published JotForm form** with a phone number field

### Vapi
- A **[Vapi account](https://vapi.ai/?aff=onenode)** with credit
- A connected **phone number** for making calls
- An **assistant** created and ready for outbound calls
- Your **Vapi API key**

---

## Workflow Steps

### 1. JotForm Trigger
- Starts the workflow when a new form submission is received.

### 2. Information Extractor
- **Formats the phone number** with a `+`, country code, and full number (e.g., `+391234567890`) for compatibility with Vapi.

### 4. Set Fields for Vapi
- Configure these fields:
    - `phone_number_id`: ID of the Vapi number used for the call
    - `assistant_id`: ID of the Vapi assistant
    - `api_key`: Your Vapi API key

### 5. Start Outbound Vapi Call
- Sends a POST request to `https://api.vapi.ai/call` with:
    - The formatted phone number
    - All required Vapi fields
    - Any additional info mapped from the form, for personalization

---

## Customization

- **Add more form fields:** Include extra data (such as name, appointment time) and add to the Vapi payload.
- **Conditional logic:** Use n8n filter nodes to control if/when calls are made.
- **Dynamic assistant selection:** Route submissions to different assistants or numbers based on user responses.

---

## Notes

- Ensure phone numbers are formatted correctly in the extractor node to prevent call errors.
- Any field from your form can be passed in the API payload and used in the assistant's script.

---

## Need Help?

For additional resources or help, visit **[1 Node](https://1node.ai)**.


## 📊 Basic Information

- **Workflow ID:** 6695
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 973
- **Downloads:** 97
- **Created:** 2025/7/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6695)

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
- **jotFormTrigger** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
