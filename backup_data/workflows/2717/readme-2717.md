# AI chatbot for website with conditional execution for cost efficiency

> # AI Chatbot with Conditional Execution for Cost Efficiency  

## Description  

This **n8n workflow** implements an **AI-powered chatbot** that **only runs when a chat is initiated on a website**. By introducing a conditional step, the workflow ensures that **AI tokens are not consumed unnecessarily**, making it a cost-efficient and resource-optimized solution.  

The chatbot, named **Sophia**, serves as an **interactive assistant for SyncBricks**. It helps users with **guest posting services, YouTube review videos, IT consultancy, and online courses** while collecting user details step by step. The chatbot ensures that inquiries are properly logged and confirmed before proceeding to AI-driven responses.  

This template is ideal for **businesses, service providers, and content creators** who want to **optimize AI token usage** while delivering **personalized, interactive engagement** with their users.  

## Features  

1. **Conditional Execution** – The AI chatbot **only activates when a chat is initiated**, avoiding unnecessary API calls.  
2. **AI-Powered Conversations** – Uses **Google Gemini AI** to generate human-like responses.  
3. **Step-by-Step Data Collection** – Ensures **structured user input**, requesting **name, email, and request type** sequentially.  
4. **Memory Buffer for Context Awareness** – Maintains conversation context using a **window buffer memory** system.  
5. **Multiple Service Offerings** – Supports inquiries related to:  
   - **Guest Posting Services**  
   - **YouTube Review Videos**  
   - **Online Courses on Udemy**  
   - **IT Consultancy Services**  
6. **Automated Confirmation Messages** – After collecting user details, sends a **confirmation message** summarizing the request.  

## How It Works  

1. **Chat Message Trigger**  
   - The workflow starts **only when a chat message is received** from the website.  
   - This ensures **no AI token is consumed unless a user initiates a chat**.  

2. **Condition Check: Is Chat Input Provided?**  
   - The workflow checks if **chat input is non-empty**.  
   - If the chat input is empty, **the workflow stops**, ensuring **no unnecessary API usage**.  
   - If a message is detected, **the chatbot continues** processing.  

3. **AI-Powered Chat Response**  
   - The chatbot, **Sophia**, generates **personalized responses** using **Google Gemini AI**.  
   - AI ensures **structured conversation flow** by collecting:  
     - **User’s Full Name**  
     - **Email ID**  
     - **Request Type**  

4. **Memory Buffer for Context Retention**  
   - A **Window Buffer Memory** system **stores chat history** and **retrieves previous responses** to ensure **context-aware conversations**.  

5. **Response Optimization**  
   - **Checks memory** to avoid **asking the same question twice**.  
   - If details are already provided, **Sophia moves directly to processing the request**.  

6. **Confirmation & User Engagement**  
   - After collecting the required details, Sophia **summarizes the request** as follows:  
     - *"Got it [Name], your request is [Request Type]. I will be sending the details to your email ID: [Email]. Hold on while I send confirmation."*  

7. **Final Confirmation Message**  
   - Ensures the **user receives a proper acknowledgment** of their inquiry.  

## Prerequisites  

Before using this workflow, make sure you have:  

1. **n8n Instance** (Cloud or Self-Hosted)  
2. **Google Gemini API Key** (For AI-generated responses)  
3. **Webhook Integration** (To trigger the chatbot from your website)  

## Use Cases  

1. **Businesses & Enterprises** – AI-powered lead qualification for services.  
2. **Bloggers & Content Creators** – Automated **guest post** inquiry handling.  
3. **YouTube Influencers & Educators** – AI chatbot to promote courses and review services.  
4. **Marketing Agencies** – Lead generation chatbot **without excessive AI token consumption**.  
5. **E-Commerce & Consulting Services** – AI-driven **personalized customer engagement**.  

## Nodes Used in This Workflow  

1. **Chat Trigger (Webhook)** – Initiates only when a user sends a chat message.  
2. **Conditional Check (If Node)** – Ensures AI is **only used when a chat is initiated**.  
3. **AI Agent (Google Gemini AI)** – Generates **intelligent chatbot responses**.  
4. **Memory Buffer (Context Retention)** – Stores user inputs for **context-aware conversations**.  

## Important
### [Start with n8n](https://www.udemy.com/course/mastering-n8n-ai-agents-api-automation-webhooks-no-code/?referralCode=0309FD70BE2D72630C09)  

### [Learn n8n with Amjid ](https://www.udemy.com/course/mastering-n8n-ai-agents-api-automation-webhooks-no-code/?referralCode=0309FD70BE2D72630C09)  
### [Get n8n Book](https://lms.syncbricks.com/books/n8n/) 

### [What is Proxmox](https://www.udemy.com/course/proxmox-virtualization-environment-complete-training/?referralCode=8E7EAFD11C2389F89C11)

## Creator Information  

**Developed by:** Amjid Ali  
**Website:** [SyncBricks](https://syncbricks.com)  
**Email:** [amjid@amjidali.com](mailto:amjid@amjidali.com)  
**LinkedIn:** [Amjid Ali](https://linkedin.com/in/amjidali)  
**YouTube:** [SyncBricks](https://youtube.com/@syncbricks)  

## Support & Contributions  

If you find this workflow helpful, consider **supporting my work**:  

[Donate via PayPal](http://paypal.me/pmptraining)  

For **full courses on n8n**, visit:  

[Course by Amjid](https://www.udemy.com/course/mastering-n8n-ai-agents-api-automation-webhooks-no-code/?referralCode=0309FD70BE2D72630C09)  

## Final Thoughts  

This **n8n workflow** ensures **optimal AI token usage** while **engaging users with an intelligent chatbot**. By integrating **conditional execution**, it **prevents unnecessary API calls**, making it **cost-effective and efficient** for businesses looking to automate chat-based customer interactions.  

Let me know if you need **any modifications**!

## 📊 Basic Information

- **Workflow ID:** 2717
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 1182
- **Downloads:** 118
- **Created:** 2025/1/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2717)

## 👤 Author

- **Name:** Amjid Ali
- **Username:** @amjid

## 🏷️ Categories

- AI
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **@n8n/n8n-nodes-langchain.agent** 
- **if** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
