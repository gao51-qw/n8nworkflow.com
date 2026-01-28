# Automate meeting summaries from Fireflies transcripts with Gemini & Gmail

> 🤝🖊️🤖 This workflow automates the process of **retrieving meeting transcripts** from [**Fireflies.ai**](https://app.fireflies.ai/login?referralCode=01K0V2Z1QHY76ZGY9450251C99), extracting and summarizing relevant content using **Google Gemini**, and sending or drafting well-formatted summaries and emails via **Gmail**.

Fireflies is an AI-powered meeting assistant that automatically records, transcribes, and summarizes meetings. It integrates with popular video conferencing tools like **Zoom, Google Meet, and Microsoft Team**s, helping teams capture key insights and action items without manual note-taking.


This workflow automates meeting recap generation, from email detection to AI-powered summarization and delivery.

---

###  **Key Benefits**

* **💡 Automated Insight Extraction**: Uses AI (OpenAI & Gemini) to extract and summarize key insights from meetings automatically.
* **📩 Instant Client Communication**: Generates ready-to-send meeting summaries and drafts without human intervention.
* **📥 Email Monitoring**: Listens to Gmail for specific meeting recap messages and reacts accordingly.
* **🔗 Seamless Fireflies Integration**: Dynamically pulls transcript data
* **🧠 Dual AI Models**: Combines the strengths of OpenAI and Gemini for rich, contextual summaries in multiple formats.
* **🛠 Modular Design**: Easily customizable and extensible for adding more destinations (e.g., Slack, Notion, CRM).
* **🧑‍💼 Ideal for Teams & Consultants**: Great for sales teams, project managers, or consultants who handle multiple client meetings daily.
---

### **How It Works**  
1. **Trigger**:  
   - The workflow starts with a **Gmail Trigger** node that monitors incoming emails with the subject "Your meeting recap". It checks for new emails every hour.  
   - Alternatively, it can be manually triggered using the **"When clicking ‘Execute workflow’"** node for testing.  
   -  Alternatively, via **Webhook**.  

2. **Email Processing**:  
   - The **"Get a message"** node fetches the full email content.  
   - The **"Set Meeting link"** node extracts the meeting link from the email.  
   - The **"Information Extractor"** (powered by OpenAI) processes the email text to identify the meeting URL.  

3. **Transcript Retrieval**:  
   - A **Code node** parses the meeting ID from the URL.  
   - The **"Get a transcript"** node (Fireflies.ai integration) fetches the full meeting transcript using the extracted meeting ID.  

4. **Transcript Processing**:  
   - The **"Set sentences"** and **"Set summary"** nodes extract structured data (sentences, short summary, overview) from the transcript.  
   - The **"Full transcript"** node combines all transcript segments into a readable format.  

5. **AI Summarization & Email Generation**:  
   - **Google Gemini models** analyze and summarize the transcript in Italian (**"Expert Meeting transcripts"**) and generate a client-friendly recap (**"Meeting summary expert"**).  
   - The **"Email writer"** node combines summaries into a cohesive email draft.  
   - The **Markdown to HTML** nodes format the content for email readability.  

6. **Output**:  
   - A **"Draft email to client"** node prepares the final recap.  
   - Two Gmail nodes (**"Send Full meeting summary"** and **"Send a message1"**) dispatch the summaries to the specified recipient.  

---  

### **Set Up Steps**  
1. **Configure Credentials**:  
   - Ensure the following credentials are set up in n8n:  
     - **Fireflies.ai API** (for transcript retrieval).  
     - **Gmail OAuth2** (for email triggering/sending).  
     - **OpenAI API** (for initial text extraction).  
     - **Google Gemini (PaLM)** (for summarization).  

2. **Adjust Nodes**:  
   - Update the **"Gmail Trigger"** node with the correct email filter (`subject:Your meeting recap`).  
   - Replace `YOUR_EMAIL` in the **Gmail Send nodes** with the recipient’s address.  
   - Verify the **Code nodes** (e.g., meeting ID extraction) match your URL structure.  

3. **Deploy**:  
   - Activate the workflow.  
   - Test using the **Manual Trigger** or wait for the Gmail trigger to execute automatically.  

4. **Optional Customization**:  
   - Modify the **Google Gemini prompts** for different summary styles.  
   - Adjust the **email templates** in the final Gmail nodes.  
----
### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/). 


## 📊 Basic Information

- **Workflow ID:** 6587
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 1546
- **Downloads:** 154
- **Created:** 2025/7/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6587)

## 👤 Author

- **Name:** Davide
- **Username:** @n3witalia

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **webhook** 
- **@firefliesai/n8n-nodes-fireflies.fireflies** 
- **manualTrigger** 
- **gmailTrigger** 
- **gmail** (×4)
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **code** (×2)
- **set** (×4)
- **merge** 
- **aggregate** 
- **markdown** (×3)
- **@n8n/n8n-nodes-langchain.googleGemini** (×3)
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 21 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
