# Automate personalized cold email sequences with GPT-4, Mailgun and Supabase

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

# AI-Powered Cold Email Sequence Workflow for n8n

Unlock advanced cold email automation and boost your outbound results with this robust n8n workflow, engineered for scale, personalization, and flexibility. Harness AI-driven email content, dynamic lead handling, and intelligent scheduling—without writing code.

## What’s Inside
![Capture d'écran 20250725 023511.png](fileId:1861)

### Intelligent Multi-Step Email Outreach

Automate **3-step cold email sequences** for every prospect—all fully personalized and contextually adapted through AI research and copy generation. Each contact receives tailored, timely emails designed to maximize engagement and reply rates.

### Automated Personalization at Scale

For every new lead, the workflow:
- **Researches company and role context** using AI
- **Identifies key pain points** and crafts custom hooks
- **Builds multi-language, well-formatted HTML emails** with a consistent, brand-aligned tone

This produces authentic, individualized communication—far more effective than generic mail merges.

### Advanced Scheduling & Delivery Logic

- **Smart scheduling**: Sends distributed across optimal days/hours (configurable for your market)
- **Throttled delivery**: Drip batching and dynamic waits to preserve deliverability
- **Automated follow-ups**: Gentle, contextual nudges at precise intervals if there’s no reply

### Lead Management & Expansion

- **Seamless database integration**: Email history, logic, and lead data fully synchronized with your backend (Supabase support included)
- **Integrated lead generation**: Suite includes a companion workflow for sourcing, deduplicating, and enriching leads using Apollo, GPT-4, and AI—feeds directly into your campaign pipeline

### Built for Reliability and Scale

- Resilient against errors and duplicate sends
- **Multi-sender rotation** for reputation management
- Easily customizable scheduling, content, languages, and batch size
- Tracks all critical data fields, like send history and reply status

## Use Cases

- **B2B Sales Development**
- **Automated Candidate Outreach (Recruitment)**
- **Newsletter or Event Drip Campaigns**
- **Startup Go-to-Market Sequences**
- **Agency Lead Generation**

## Template Highlights

- **AI-Powered Personalization**: Cold emails crafted by GPT-4 and prompt engineering
- **Omnichannel Scheduling**: Dynamic batching, throttling, sender rotation
- **Works Out-of-the-Box**: Connects to Mailgun, OpenAI, Supabase—simply insert credentials and leads
- **Companion Lead Gen Workflow**: Includes Apollo–AI–database pipeline for continuous sourcing that you can acces **for free** in my profile.
- **Flexible & Modular**: Adapt language, schedule, templates, or trigger events as your strategy evolves

## Best Practice Features

- No PII or sensitive data embedded—safe for corporate teams
- Modular zones for sequence creation, delivery, and tracking—clarity and easy expansion
- Clearly-named nodes and logical flows, following n8n community standards
- Robust error handling for high deliverability and low maintenance

**Experience end-to-end intelligent email automation—powered by n8n, trusted integrations, and state-of-the-art AI. Both the cold outreach workflow and the lead generation template are included. Discover, engage, and convert—at scale.**


## 📊 Basic Information

- **Workflow ID:** 6402
- **Complexity:** advanced
- **Node Count:** 100
- **Views:** 206
- **Downloads:** 20
- **Created:** 2025/7/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6402)

## 👤 Author

- **Name:** Paul
- **Username:** @diagopl

## 🏷️ Categories

- Lead Nurturing
- Multimodal AI

## 🔗 Nodes Used

- **limit** (×5)
- **merge** 
- **code** (×6)
- **switch** (×4)
- **splitInBatches** (×6)
- **wait** (×6)
- **scheduleTrigger** (×4)
- **if** (×4)
- **mailgun** (×6)
- **@n8n/n8n-nodes-langchain.openAi** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **stickyNote** (×16)
- **noOp** (×5)
- **supabase** (×12)
- **@n8n/n8n-nodes-langchain.outputParserStructured** (×2)
- **sort** (×4)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **set** (×4)
- **filter** 
- **telegram** (×2)
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **postgres** 
- **compareDatasets** 
- **telegramTrigger** 
- **@apify/n8n-nodes-apify.apify** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 100 nodes with 71 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
