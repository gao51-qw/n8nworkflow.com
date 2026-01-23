# Automated outbound calls: connect Ultravox AI agents to phone calls with Twilio

> This workflow transforms n8n into a **call automation system**, where AI agents can talk directly with people over the phone using **Twilio**.

This workflow integrates **Ultravox AI voice agents** with Twilio’s telephony service to fully automate outbound phone calls.

Ultravox generates the AI conversation and audio, while Twilio handles the PSTN connection to the actual phone network, with the two services connected in real-time via a media stream.

---

### Key Advantages

* **AI-Powered Conversations** – Leverage Ultravox agents to handle natural, real-time dialogues with customers.
* **Seamless Telephony Integration** – Twilio ensures reliable phone call delivery worldwide.
* **Flexible Setup** – You can easily change the target phone number, agent, or Twilio line directly in the workflow.
* **Scalable Outreach** – Automates outbound calls for customer support, sales, or appointment reminders.
* **Step-by-Step Guidance** – The workflow includes clear instructions for:

  * Buying and configuring a Twilio number
  * Creating an Ultravox agent
  * Executing the final call

---


### How it Works

1.  **Manual Trigger:** The workflow is started manually by a user within n8n.
2.  **Set Parameters:** The "Set Params" node defines the crucial variables for the call: the Ultravox `agent_id`, the Twilio phone number to call from (`twilio_number`), and the destination `phone_number` to call.
3.  **Initiate Ultravox Session:** The "Create Ultravox Call" node sends an HTTP POST request to the Ultravox API. It specifies the agent to use and, crucially, informs Ultravox that the call will be handled by Twilio (`medium: { twilio: {} }`). Ultravox responds with a unique `joinUrl` (a WebSocket stream URL).
4.  **Place the Twilio Call:** The "Twilio Call" node uses the details from the previous steps. It instructs Twilio to make a call from the specified `twilio_number` to the target `phone_number`. The key instruction (`twiml`) tells Twilio to connect the call to the `joinUrl` provided by Ultravox, effectively streaming the audio between the participant and the AI agent.

---

### Set Up Steps

1.  **Twilio Configuration:**
    *   Log into your Twilio Console.
    *   Buy a phone number under the "Phone Numbers" section.
    *   Obtain your "Account SID" and "Auth Token" from the dashboard.
    *   In the "Twilio Call" node credentials, add your Twilio Account SID and Auth Token.
    *   In the "Set Params" node, set the `twilio_number` value to your newly purchased Twilio number (e.g., `+1xxxxxxx`).

2.  **Ultravox Configuration:**
    *   Log into your Ultravox App.
    *   Create a new AI Agent by configuring its voice, tools, and system prompt.
    *   Copy the ID of your newly created agent.
    *   In the "Set Params" node, set the `agent_id` value to your Ultravox agent's ID.

3.  **Execute the Call:**
    *   In the "Set Params" node, set the `phone_number` value to the destination number you wish to call (e.g., `+1xxxxxxxx`).
    *   Execute the workflow manually from the n8n editor. The AI agent will call the specified number through Twilio.

---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/). 

## 📊 Basic Information

- **Workflow ID:** 7958
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 2164
- **Downloads:** 216
- **Created:** 2025/8/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7958)

## 👤 Author

- **Name:** Davide
- **Username:** @n3witalia

## 🏷️ Categories

- AI Chatbot
- Multimodal AI

## 🔗 Nodes Used

- **httpRequest** 
- **manualTrigger** 
- **twilio** 
- **set** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
