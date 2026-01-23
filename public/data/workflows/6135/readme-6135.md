# AI-powered reservation reminder calls for restaurant with Twilio & Grok-4

> 🤖📞 This workflow automates the process of calling customers to **remind them of their booking reservations** using AI-generated messages and a **Twilio** phone number. It can easily be adapted for other venues.


---

###  **Key Benefits**

* **Time-Saving Automation**: Eliminates the need for manual calls by staff, saving hours per week.
* **Human-like AI Messages**: Uses a custom language model to generate polite, natural phone messages tailored to each customer.
* **Multi-Channel Integration**:

  * Google Sheets for reservation tracking.
  * Twilio for automated calling.
  * OpenRouter (or other LLMs) for generating speech content.
* **Error Reduction**: Ensures all customers receive reminders exactly on the reservation day, minimizing no-shows.
* **Scalable**: Easily adapts to growing reservation lists and more complex message logic.
* **Suitable** for restaurants, hairdressers, offices and any other business

---  

### **How It Works**  
1. **Trigger**:  
   - The workflow can be triggered **manually** (via *"When clicking ‘Execute workflow’*) or **automatically** at 11 AM daily (via *Schedule Trigger*).  
2. **Data Fetch**:  
   - Retrieves today’s reservations from a **Google Sheet**, filtering rows where `DATE = today` and `CALLED` is empty.  
3. **AI-Generated Call Script**:  
   - For each reservation, the *Secretary Agent* (powered by **OpenRouter’s Grok-4**) generates a **phone script** using the guest’s name, time, and party size.  
4. **Twilio Call**:  
   - The script is sent to **Twilio**, which calls the guest’s phone number (from the sheet) and reads the message aloud using text-to-speech.  
5. **Update & Loop**:  
   - Marks the reservation as called (`CALLED = "x"`) in the sheet and waits **2 minutes** between calls to avoid rate limits.  

---  

### **Set Up Steps**  
1. **Twilio Configuration**:  
   - Sign up for Twilio, buy a phone number, and:  
     - Enable **text-to-speech** (set language to Italian).  
     - Configure **geo permissions** for the target country.  
     - Add credentials to the *Twilio node* (sender number in `From` field).  
2. **Google Sheets Setup**:  
   - Clone the Google Sheet template and ensure:  
     - Phone numbers include the **international prefix (without "+")**.  
     - Columns: `DATE`, `TIME`, `NAME`, `N. PEOPLE`, `PHONE`, `CALLED`.  
3. **OpenRouter API**:  
   - Connect the *OpenRouter Chat Model* node to your account (using Grok-4 or another model).  
4. **Deploy**:  
   - Activate the workflow and test with manual execution.  

**Note**: The workflow is currently **inactive** (`active: false`). Enable it after setup.  

----
### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/). 



## 📊 Basic Information

- **Workflow ID:** 6135
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 1673
- **Downloads:** 167
- **Created:** 2025/7/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6135)

## 👤 Author

- **Name:** Davide
- **Username:** @n3witalia

## 🏷️ Categories

- Support Chatbot
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **scheduleTrigger** 
- **stickyNote** (×3)
- **@n8n/n8n-nodes-langchain.agent** 
- **splitInBatches** 
- **wait** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **googleSheets** (×2)
- **twilio** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
