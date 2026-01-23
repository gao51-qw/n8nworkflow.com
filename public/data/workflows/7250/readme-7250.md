# Real estate chatbot with AI property matching and automated calendar scheduling

> # Description
A comprehensive real estate chatbot automation system that handles customer inquiries, property searches, and appointment scheduling through intelligent conversation flows and email processing.

## How it works?
This template creates an end-to-end real estate automation system that handles customer inquiries from initial contact through appointment booking.

### 1. Customer Entry Point
- Webhook receives customer messages from chat interface
- Link detection checks if customer shared property URLs
- Smart routing - if property link found, fetch details immediately; otherwise proceed to chat

### 2. AI Content Processing
- Content filter (PRIORITY) - blocks non-real estate queries upfront
- Information extraction - scans messages for personal details and property requirements
- Human handoff detection - identifies requests for live agent assistance

### 3. Data Collection Phase
- Sequential gathering: Personal info (name → phone → email) then property needs
- Smart validation - phone format, email structure, budget parsing
- No redundancy - never asks for information already provided
- PostgreSQL storage - saves customer data and conversation memory

### 4. Property Search & Matching
- Database query filters properties by type, location, budget, availability
- Image enhancement - fetches property photos from media storage
- Results ranking - returns top 5 matches sorted by price

### 5. AI Response Generation
- GPT-4 formatting creates engaging, professional property listings
- Visual enhancement - includes property images and key details
- Personalized tone - acknowledges customer preferences

### 6. Appointment Automation
- Gmail monitoring - checks for appointment confirmations every hour
- Calendar integration - creates, updates, deletes appointments automatically
- Smart scheduling - checks availability, suggests alternatives for conflicts
- Email responses - sends confirmations and follow-ups

### Intelligence Features
##### Context Awareness
- Remembers conversation history across sessions
Builds complete customer profile progressively
Maintains property preferences throughout interaction
##### Smart Extraction
- Recognizes property types: HDB, Condo, Apartment
- Parses locations and MRT preferences automatically
Handles various budget formats (SGD 2,500, $2500, etc.)
Identifies timeline requirements and citizenship status

### Professional Handoffs
- Detects human agent requests with keyword matching
- Collects complete customer context before transfer
- Sends structured handoff emails with all requirements
- Ensures smooth transition to live agents

### Technical Components
##### AI Models
- OpenAI GPT-4 - Main conversation handling and response formatting
- GPT-4 Mini - Appointment processing and email management
- LangChain Memory - Conversation context retention

### Database Integration
- PostgreSQL - Customer data, property listings, conversation history
- Property search with multi-criteria filtering
Media storage integration for property images

### Communication Channels
- Webhook API - Primary chat interface
- Gmail integration - Appointment confirmations and notifications
- Google Calendar - Automated scheduling and availability checking

### Setup Requirements
- Configure database - PostgreSQL with property and customer tables
- Set up integrations - Gmail, Google Calendar, OpenAI API
- Customize prompts - Adjust AI responses for your brand
- Test workflow - Verify end-to-end functionality
- Monitor performance - Track conversation success rates
- The system is designed to handle the complete customer journey from initial inquiry to scheduled property viewing, with intelligent automation reducing manual work while maintaining high service quality.

## 📊 Basic Information

- **Workflow ID:** 7250
- **Complexity:** advanced
- **Node Count:** 33
- **Views:** 2342
- **Downloads:** 234
- **Created:** 2025/8/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7250)

## 👤 Author

- **Name:** Genzi
- **Username:** @genzi12

## 🏷️ Categories

- Lead Nurturing
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** (×3)
- **@n8n/n8n-nodes-langchain.memoryPostgresChat** 
- **code** (×4)
- **postgres** (×4)
- **if** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **set** 
- **respondToWebhook** 
- **webhook** 
- **@n8n/n8n-nodes-langchain.toolSerpApi** 
- **googleCalendarTool** (×5)
- **gmailTool** (×3)
- **gmailTrigger** 
- **merge** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 33 nodes with 28 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
