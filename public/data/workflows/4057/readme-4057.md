# Auto-respond to Gmail enquiries using GPT-4o, Dumpling AI & LangChain agent

> 

### Who is this for?

This workflow is perfect for customer support teams, sales departments, or solopreneurs who receive frequent email enquiries and want to automate the initial response process using AI. If you spend too much time answering similar questions, this system helps respond faster and more intelligently—without writing a single line of code.

---

### What problem is this workflow solving?

Manually responding to repeated customer enquiries slows productivity and increases delay. This workflow classifies if an incoming email is a real enquiry, analyzes the content with a LangChain-powered agent, fetches helpful context using Dumpling AI, and sends a personalized reply using Gmail—all within minutes.

---

### What this workflow does

1. **Listens for new incoming Gmail messages** using the Gmail Trigger node.  
2. **Classifies whether the email is an enquiry** using a GPT-4o classification prompt.  
3. **Uses a Filter node** to continue only if the email was classified as an enquiry.  
4. **Passes the email content to a LangChain Agent**, enhanced with memory, AI tools, and Dumpling AI to search for relevant information.  
5. **The agent constructs a smart, relevant response**, then sends it to the original sender via Gmail.

---

### Setup

1. **Connect Gmail**  
   - Use the Gmail Trigger node to connect to the Gmail account that receives enquiries.  
   - Make sure Gmail OAuth2 credentials are authenticated.

2. **Configure Dumpling AI Agent**  
   - Sign up at [Dumpling AI](https://www.dumplingai.com/).  
   - Create an agent trained to search your help docs, site content, or FAQs.  
   - Copy your Dumpling agent ID and API key.  
   - Paste it in the `Dumpling AI Agent – Search for Relevant Info` HTTP Request node.

3. **Set Up LangChain Agent**  
   - No extra setup needed beyond connecting OpenAI credentials.  
   - GPT-4o is used for classification and reply generation.

4. **Enable Gmail Reply Node**  
   - The final `Send Email Response via Gmail` node will send the AI-generated reply back to the same thread.

---

### How to customize this workflow to your needs

- Change the classification prompt to include other email types like “support”, “complaint”, or “sales”.  
- Add additional logic if you want to CC someone or forward certain types of enquiries.  
- Add a Notion or Google Sheets node to log the conversation for analytics.  
- Replace Gmail with Outlook or another email provider by switching the nodes.  
- Improve context by adding more AI tools like database queries or preloaded FAQs.


## 📊 Basic Information

- **Workflow ID:** 4057
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 10310
- **Downloads:** 1031
- **Created:** 2025/5/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4057)

## 👤 Author

- **Name:** Yang
- **Username:** @yang

## 🏷️ Categories

- Ticket Management
- AI RAG

## 🔗 Nodes Used

- **gmailTrigger** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **filter** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.toolHttpRequest** 
- **gmailTool** 
- **@n8n/n8n-nodes-langchain.agent** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
