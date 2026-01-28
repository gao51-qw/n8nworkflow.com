# WhatsApp fact-checking bot with Perplexity AI and Twilio

> ## ✅💬Build Your Own WhatsApp Fact-Checking Bot with AI

Tired of misinformation spreading on WhatsApp? 🤨 This workflow transforms your n8n instance into a powerful, automated fact-checking bot\! Send any news, claim, or question to a designated WhatsApp number, and this bot will use AI to research it, provide a verdict, and send back a summary with direct source links.

Fight fake news with the power of automation and AI\! 🚀

### How it works ⚙️

This workflow uses a simple but powerful three-step process:

1.  **📬 WhatsApp Gateway (Webhook node):** This is the front door. The workflow starts when the **Webhook node** receives an incoming message from a user via a Twilio WhatsApp number.
2.  **🕵️ The Digital Detective (Perplexity node):** The user's message is sent to the **Perplexity node**. Here, a powerful AI model, instructed by a custom system prompt, analyzes the claim, scours the web for reliable information, and generates a verdict (e.g., `✅ Likely True`, `❌ Likely False`).
3.  **📲 WhatsApp Reply (Twilio node):** The final, formatted response, complete with the verdict, a simple summary, and source citations, is sent back to the original user via the **Twilio node**.

### Setup Guide 🛠️

Follow these steps carefully to get your fact-checking bot up and running.

#### Prerequisites

  * A [Twilio Account](https://www.twilio.com/try-twilio) with an active phone number or access to the WhatsApp Sandbox.
  * A [Perplexity AI Account](https://www.perplexity.ai/) to get an API key.

#### 1\. Configure Credentials

You'll need to add API keys for both Perplexity and Twilio to your n8n instance.

  * **Perplexity AI:**
    1.  Go to your Perplexity AI [API Settings](https://www.perplexity.ai/settings/api).
    2.  Generate and copy your API Key.
    3.  In n8n, go to **Credentials** \& **New**, search for "Perplexity," and add your key.
  * **Twilio:**
    1.  Go to your [Twilio Console Dashboard](https://console.twilio.com/).
    2.  Find and copy your `Account SID` and `Auth Token`.
    3.  In n8n, go to **Credentials** \& **New**, search for "Twilio," and add your credentials.

#### 2\. Set Up the Webhook and Tunnel

To allow Twilio's cloud service to communicate with your n8n instance, you need a public URL. The n8n tunnel is perfect for this.

1.  **Start the n8n Tunnel:** If you are running n8n locally, you'll need to expose it to the web. Open your terminal and run:
    ```bash
    n8n start --tunnel
    ```
2.  **Copy Your Webhook URL:**
      * Once the tunnel is active, open your n8n workflow.
      * In the **Receive Whatsapp Messages** (Webhook) node, you will see two URLs: Test and Production.
      * Copy the **Test/Production URL**. This is the public URL that Twilio will use.

#### 3\. Configure Your Twilio WhatsApp Sandbox

1.  Go to the [Twilio Console](https://console.twilio.com/) and navigate to **Messaging** \& **Try it out** \& **Send a WhatsApp message**.
2.  Select the **Sandbox Settings** tab.
3.  In the section **"WHEN A MESSAGE COMES IN,"** paste your n8n **Production Webhook URL**.
4.  Make sure the method is set to `HTTP POST`.
5.  Click **Save**.

### How to Use Your Bot 🚀

1.  **Activate the Sandbox:** To start, you (and any other users) must send a WhatsApp message with the join code (e.g., `join given-word`) to your Twilio Sandbox number. Twilio provides this phrase on the same Sandbox page.
2.  **Fact-Check Away\!** Once joined, simply send any claim or question to the Twilio number. For example: `Did Elon Musk discover a new planet?`
3.  Within moments, the workflow will trigger, and you'll receive a formatted reply with the verdict and sources right in your chat\!

### Further Reading & Resources 🔗

  * [n8n Tunnel Documentation](https://docs.n8n.io/hosting/installation/npm/#n8n-with-tunnel)
  * [Twilio for WhatsApp Quickstart](https://www.twilio.com/docs/whatsapp/quickstart/node)
  * [Perplexity AI API Documentation](https://docs.perplexity.ai/docs)

## 📊 Basic Information

- **Workflow ID:** 6842
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 697
- **Downloads:** 69
- **Created:** 2025/8/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6842)

## 👤 Author

- **Name:** Harsh Maniya
- **Username:** @harshmaniya1

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **webhook** 
- **perplexity** 
- **twilio** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
