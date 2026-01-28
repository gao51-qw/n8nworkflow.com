# Automate NGO aid request management with Telegram, GPT-4, and Google Sheets

> # NGO TPM Request Management System

## Benefits

**For Beneficiaries:**
- **24/7 Accessibility** - Submit requests anytime via familiar Telegram interface
- **Language Flexibility** - Communicate in Arabic through text or voice messages
- **Instant Acknowledgment** - Receive immediate confirmation that requests are logged
- **No Technical Barriers** - Works on basic smartphones without special apps

**For TPM Teams:**
- **Centralized Tracking** - All requests automatically logged with timestamps and user details
- **Smart Prioritization** - AI categorizes issues by urgency and type for efficient response
- **Action Guidance** - Specific recommended actions generated for each request type
- **Performance Analytics** - Track response patterns and common issues over time

**For NGO Operations:**
- **Cost Reduction** - Automated intake reduces manual processing overhead
- **Data Quality** - Standardized categorization ensures consistent reporting
- **Audit Trail** - Complete record of all beneficiary interactions for compliance
- **Scalability** - Handle high volumes without proportional staff increases

## How it Works

1. **Multi-Input Reception** - Accepts both text messages and voice recordings via Telegram
2. **Voice Transcription** - Uses OpenAI Whisper to convert Arabic voice messages to text
3. **AI Categorization** - GPT-4 analyzes requests and categorizes issues (aid distribution, logistics, etc.)
4. **Action Planning** - AI generates specific recommended actions for TPM team in Arabic
5. **Data Logging** - Records all requests, categories, and actions in Google Sheets with user details
6. **Confirmation Feedback** - Sends acknowledgment message back to users via Telegram

## Set up Steps

**Setup Time: ~20 minutes**

1. **Create Telegram Bot** - Get bot token from @BotFather and configure webhook
2. **Configure APIs** - Set up OpenAI (transcription + chat) and Google Sheets credentials
3. **Customize AI Prompts** - Adjust system messages for your NGO's specific operations
4. **Set Up Spreadsheet** - Link Google Sheets for request tracking and reporting
5. **Test Workflows** - Verify both text and voice message processing paths

*Detailed Arabic language configuration and TPM-specific categorization examples are included as sticky notes within the workflow.*

---

**What You'll Need:**
- Telegram Bot Token (free from @BotFather)
- OpenAI API key (Whisper + GPT-4)
- Google Sheets API credentials
- Google Spreadsheet for logging requests
- Sample Arabic text/voice messages for testing

**Key Features:**
- Dual input support (text + voice messages)
- Arabic language processing and responses
- Structured data extraction (category + recommended action)
- Complete audit trail with user information
- Real-time confirmation messaging
- TPM team-specific workflow optimization

## 📊 Basic Information

- **Workflow ID:** 7898
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 80
- **Downloads:** 8
- **Created:** 2025/8/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7898)

## 👤 Author

- **Name:** Abdulrahman Alhalabi
- **Username:** @alhalabi

## 🏷️ Categories

- Ticket Management
- AI Chatbot

## 🔗 Nodes Used

- **telegramTrigger** 
- **switch** (×2)
- **telegram** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **set** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **googleSheets** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
