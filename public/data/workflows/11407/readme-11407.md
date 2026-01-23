# Book club manager & recommendation engine with Mistral AI and Gemini Vision

> ## 📚 The Literary Curator: AI Book Club Manager & Recommendation Engine
Transform your n8n instance into a sophisticated, automated backend for a book club. This "Literary Curator" workflow acts as an all-in-one administrator, archivist, and reading guide. It intelligently analyzes your club's collective reading history to generate personalized recommendations, onboard new members, and manage all your club's data via email, chat, and web forms.

## ✨ Key Features
Automated Recommendation Engine: A weekly scheduled agent (using Mistral AI) analyzes the club's "Book Archive" to generate 10 fresh, non-duplicate book recommendations with witty, personalized "Why This Read" justifications.

Visual Bookshelf Scanning: Uses Google Gemini Vision to analyze photos of physical bookshelves or Goodreads screenshots and automatically populate the database.

The "Literary Oracle" Chatbot: A conversational AI agent that has full context of the club's history. It can answer questions, add books to the archive, or manage members via chat.

Full Member Management: Automated onboarding flows for new members, including welcome emails and database entry.

Multi-Channel Interaction: Users can interact via Webhooks (API), n8n Forms, or Chat.

Weekly Newsletters: Automatically compiles the AI's "Vibe Check" summary and top 10 recommendations into a beautifully formatted HTML email sent via Gmail.

## 🤖 AI Models Used
Mistral Cloud (Large/Medium): Powers the core reasoning, recommendation logic, and the chat Oracle.

Google Gemini (PaLM/Flash): Used for vision analysis (scanning bookshelf photos) and generating discussion prompts.

## 🛠️ Setup Guide
Prerequisites:

	n8n version with LangChain support.

	Mistral Cloud API Key

	Google Gemini API Key

	Gmail OAuth2 Credentials

## 🚀 How to Use
#### Automated Schedule
By default, the workflow runs every Friday at 7:00 PM. It checks the archive, generates a new weekly summary and recommendation list, saves it to the database, and emails all members.

#### User Forms
The workflow includes built-in n8n Forms for user interaction:

#### Feedback Form
For members to rate books or request specific genres.

Idea Board: For submitting general reading ideas.

#### Upload Form 
Accepts images of bookshelves or Goodreads exports to bulk-import reading history.


### API / App Backend
This workflow exposes several POST webhooks (e.g., /api/ai/chat, /api/archive/add), allowing you to build a custom frontend (React, Glide, etc.) on top of this n8n workflow.

## 📊 Basic Information

- **Workflow ID:** 11407
- **Complexity:** advanced
- **Node Count:** 170
- **Views:** 20
- **Downloads:** 2
- **Created:** 2025/12/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11407)

## 👤 Author

- **Name:** Jordan Hoyle
- **Username:** @jordanhoyle

## 🏷️ Categories

- Market Research
- AI Chatbot

## 🔗 Nodes Used

- **scheduleTrigger** 
- **set** (×22)
- **@n8n/n8n-nodes-langchain.agent** (×4)
- **@n8n/n8n-nodes-langchain.googleGemini** (×2)
- **@n8n/n8n-nodes-langchain.lmChatMistralCloud** (×4)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×3)
- **splitOut** (×5)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** (×2)
- **@n8n/n8n-nodes-langchain.toolThink** 
- **dataTable** (×45)
- **dataTableTool** (×11)
- **if** (×4)
- **formTrigger** (×5)
- **switch** (×4)
- **webhook** (×16)
- **respondToWebhook** (×7)
- **code** (×2)
- **splitInBatches** (×6)
- **extractFromFile** (×2)
- **filter** 
- **gmail** (×2)
- **httpRequestTool** 
- **merge** 
- **aggregate** 
- **convertToFile** (×2)
- **httpRequest** 
- **stickyNote** (×15)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 170 nodes with 137 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
