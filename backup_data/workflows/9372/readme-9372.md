# Transform meeting transcripts into AI-generated presentations with Google Slides & Flux

> Transform meeting transcripts into fully customized, AI-powered presentations automatically. This comprehensive 5-workflow automation system analyzes client conversations and generates professional slide decks complete with personalized content and AI-generated illustrations.

## 🎯 What This Automation Does

This end-to-end solution takes a meeting transcript (Google Docs) and client information as input, then automatically:
- Creates a presentation from your custom template
- Generates a strategic presentation plan tailored to the client's needs
- Creates custom illustrations using AI image generation
- Populates slides with personalized text content
- Inserts generated images into the appropriate slides
- Delivers a client-ready presentation

Perfect for sales teams, consultants, agencies, and anyone who needs to create customized presentations at scale.

## 🔧 How It Works

The automation is split into 5 interconnected workflows:

**Workflow 1: Clone Presentation & Database Setup**
- Form trigger captures client name, transcript URL, and submission time
- Clones your presentation template via Google Slides API
- Saves presentation details to Google Sheets for tracking

**Workflow 2: AI Presentation Plan Generation**
- Analyzes meeting transcript to understand client pain points
- Generates comprehensive presentation structure and content strategy
- Saves plan to Google Docs for review and tracking
- Uses company profile (customizable) to match solutions to client needs

**Workflow 3: AI Illustration Generation**
- AI agent creates image prompts based on presentation plan
- Generates illustrations using Flux model via OpenRouter (nanobanana)
- Uploads images to Google Drive for slide insertion
- Tracks all generated assets in database

**Workflow 4: Text Content Population**
- AI agent generates final presentation text from the plan
- Replaces template placeholders with personalized content
- Uses Object IDs to target specific text elements in slides
- Updates slides using native n8n Google Slides node

**Workflow 5: Image Insertion**
- Retrieves image Object IDs from presentation structure
- Downloads illustrations from Google Drive
- Converts images for ImgBB hosting (resolves Google Drive URL limitations)
- Updates slide images via Google Slides API

## 📋 Prerequisites

**Required Accounts & API Keys:**
- Google Workspace (Drive, Slides, Docs)
- OpenAI API (for AI agents)
- OpenRouter API (for Flux image generation)
- ImgBB API (free tier available)
- Gemini API (optional, for additional AI tasks)

**Setup Requirements:**
- Google Sheets database (template provided in article and inside the workflow)
- Google Slides presentation template with standard Object IDs
- Meeting transcript in Google Docs format

## 🎨 Customization Options

This automation is designed to be flexible:
- **Template Flexibility**: Use any slide template structure
- **Company Profile**: Customize the business context for your use case
- **AI Models**: Swap OpenAI/Gemini agents for your preferred LLM
- **Image Generation**: Replace Flux with DALL-E, Midjourney API, or other models
- **Slide Logic**: Extend to dynamically select slides based on content needs

## 💡 Key Technical Insights

- **Structured Output Handling**: Uses JavaScript for reliable JSON parsing when AI output structure is complex
- **Object ID System**: Template placeholders use unique IDs for precise element targeting
- **Image Hosting Workaround**: ImgBB resolves Google Drive direct URL limitations in API calls
- **HTTP Request Nodes**: Used for API operations not covered by native n8n nodes (copying presentations, image updates)

## 🔗 Full Documentation

For a detailed breakdown of each workflow, configuration steps, and best practices, read the complete guide on this [Medium article](https://medium.com/@jmjomba/automating-google-slides-creation-text-images-in-n8n-a-complete-guide-e3454a2d660f)

## 🚀 Use Cases

- **Sales Teams**: Auto-generate pitch decks from discovery calls
- **Consulting Firms**: Create client proposals from needs assessments
- **Marketing Agencies**: Build campaign presentations from strategy sessions
- **Product Teams**: Transform user research into stakeholder presentations
- **Training & Education**: Convert session notes into learning materials

## ⚠️ Important Notes

- Template must use consistent Object IDs for automation to work
- Google Drive images require ImgBB hosting for reliable URL access
- AI agent output structure is complex; JavaScript parsing recommended
- Rate limits apply for API services (especially image generation)

## 📦 Resources & Templates

### API Services (Get Your Keys Here)
- **[OpenRouter](https://openrouter.ai/)** - For Flux (nanobanana) AI image generation
- **[ImgBB API](https://api.imgbb.com/)** - Free image hosting service
- **[OpenAI API](https://platform.openai.com/api-keys)** - For AI agents and text generation
- **[Google Cloud Console](https://console.cloud.google.com/)** - Enable Google Slides, Drive, and Docs APIs
- **[Google AI Studio](https://aistudio.google.com/app/apikey)** - For Gemini API key

### Templates & Examples
- **[Meeting Transcript Sample](https://docs.google.com/document/d/14-jV8CYie47u3kbWpEYcYIBW4TClB7lIy5GkSv7dPeI/edit?tab=t.0#heading=h.vjsbagw50nxg)** - Example transcript structure
- **[Google Sheets Database Template](https://docs.google.com/spreadsheets/d/1Jacq1P_z9XSAR7YNz0SiaMqwZ0oQ4qy-vbAiP5FcHNs/edit?usp=sharing)** - Copy this to track your presentations
- **[Presentation Template](https://docs.google.com/presentation/d/1B5KbL9qPKzFgQZFwHqs43RDQITNwCKlZu_lHVQWQSJs/edit?usp=sharing)** - Base slide deck with Object IDs

**💡 Tip:** Make copies of all templates before using them in your workflows!

---

**Have questions or improvements?** Connect with me:
- X (Twitter): [@juppfy](https://x.com/juppfy)
- Email: joseph@uppfy.com 

P.S: I'd love to hear how you adapt this for your workflow!

## 📊 Basic Information

- **Workflow ID:** 9372
- **Complexity:** advanced
- **Node Count:** 107
- **Views:** 765
- **Downloads:** 76
- **Created:** 2025/10/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9372)

## 👤 Author

- **Name:** Joseph
- **Username:** @mjomba

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **formTrigger** 
- **httpRequest** (×19)
- **googleSheets** (×20)
- **stickyNote** (×11)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×3)
- **googleDocs** (×6)
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **convertToFile** (×6)
- **set** (×6)
- **googleDrive** (×12)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×3)
- **merge** (×2)
- **googleSlides** (×3)
- **code** 
- **extractFromFile** (×6)
- **wait** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 107 nodes with 96 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
