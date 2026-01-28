# Generate professional emails with custom tones using OpenAI GPT

> ![5min Logo](https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=175,q=95/d9573nnb9LioR05g/logo_tr-Yleq6B4J5WtDk64q.png)

## AI Email Generator with Tone Selection
**Made by [Biznova](https://www.biznova.tech/en)**
 **on [Tiktok](https://www.tiktok.com/@biznova_tech)**



### 📧 What This Does
This workflow creates a professional email generator that allows users to:
- Choose from multiple tones (Professional, Friendly, Formal, Casual)
- Input recipient details, subject, and context
- Generate a complete, well-formatted email using AI

### 👥 Who's It For
- Business professionals who need to write emails quickly
- Customer support teams responding to inquiries
- Sales teams crafting outreach messages
- Anyone who wants help writing professional emails

### 🎯 How It Works
1. User fills out a form with email details and selects a tone
2. The workflow processes the input and creates an AI prompt
3. OpenAI generates a complete email based on the tone
4. The formatted email is displayed for the user to copy

### ⚙️ Setup Requirements
- OpenAI API key (get one at https://platform.openai.com)
- n8n instance (cloud or self-hosted)

### 🚀 How to Use
1. Set up your OpenAI credentials in the "OpenAI Chat Model" node
2. Activate the workflow
3. Share the form URL with users
4. Users fill out the form and receive a generated email instantly



### 🔧 Setup Steps

**1. OpenAI API Key**
   - Go to https://platform.openai.com/api-keys
   - Create a new API key
   - Add it to the "OpenAI Chat Model" node credentials

**2. Customize Tones (Optional)**
   - Edit the "Build AI Prompt" node
   - Modify the tone instructions to match your needs
   - Add new tones to the form dropdown

**3. Adjust AI Settings (Optional)**
   - In "OpenAI Chat Model" node:
   - Change model (gpt-4 for better quality)
   - Adjust temperature (0.5-0.9)
   - Modify max tokens for longer/shorter emails

**4. Test the Workflow**
   - Click "Test workflow" button
   - Fill out the form
   - Check the generated email

**5. Share the Form**
   - Activate the workflow
   - Copy the form URL
   - Share with your team or customers


## 📊 Basic Information

- **Workflow ID:** 9225
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 196
- **Downloads:** 19
- **Created:** 2025/10/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9225)

## 👤 Author

- **Name:** Biznova
- **Username:** @biznova

## 🏷️ Categories

- Content Creation

## 🔗 Nodes Used

- **formTrigger** 
- **set** (×2)
- **code** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.agent** 
- **form** 
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
