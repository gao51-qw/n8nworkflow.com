This workflow automates **customer email support** by combining Gmail, AI classification, and a knowledge base to provide instant, accurate, and friendly responses. It’s designed for businesses that want to improve customer satisfaction while reducing manual workload.

---

## 🚀 How it Works

1. **Gmail Trigger**  
   The workflow listens for new incoming Gmail messages.

2. **Text Classification**  
   Each email is classified using AI as either *Customer Support* or *Other*.  
   - If it’s *Other*, the workflow stops.  
   - If it’s *Customer Support*, the email continues to the AI agent.

3. **AI Agent with Knowledge Base**  
   The AI agent:  
   - Reads the customer’s message.  
   - Searches the **Pinecone Knowledge Base** for FAQs and policies.  
   - Generates a helpful, polite, and detailed reply using an **OpenRouter model**.  
   - Signs off as *Mrs. Helpful from Tech Haven Solutions*.

4. **Reply to Gmail**  
   The drafted email is automatically sent back to the customer.  

---

## 💡 Value

- ✅ **Save Time** – No more manual triaging and drafting of replies.  
- ✅ **Consistency** – Every answer is based on your own FAQ/policies.  
- ✅ **Customer Satisfaction** – Fast, friendly, and accurate responses 24/7.  
- ✅ **Scalable** – Handle higher email volume without scaling headcount.  

---

## 🔑 Credentials Needed

To use this workflow, connect the following accounts:

- **Gmail OAuth2** → for receiving and sending emails.  
- **OpenRouter API** → for text classification and AI-generated replies.  
- **OpenAI API** → for embeddings (to connect FAQs with AI).  
- **Pinecone API** → for storing and retrieving knowledge base content.  

---

## 🛠 Example Use Case

A customer writes:  

&gt; *“Hi, I placed an order last week but haven’t received a shipping confirmation yet. Can you check the status?”*  

The workflow will:  
1. Detect it’s a support-related email.  
2. Retrieve order policy information from the knowledge base.  
3. Generate a friendly response explaining order tracking steps.  
4. Automatically reply to the customer in Gmail.  

---

## ⚡️ Setup Instructions

1. Import this workflow into your n8n instance.  
2. Connect your Gmail, OpenRouter, OpenAI, and Pinecone credentials.  
3. Populate your Pinecone knowledge base with FAQs and policies.  
4. Activate the workflow.  

From now on, all support-related emails will be automatically answered by your **AI-powered support agent**.

---