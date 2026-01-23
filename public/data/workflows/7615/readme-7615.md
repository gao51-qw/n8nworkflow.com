# Qualify and Enrich Leads with Octave's Contextual Insights and Slack Alerts

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

# Qualify and enrich inbound leads with contextual insights and Slack alerts

## Who is this for?
Sales teams, account executives, and RevOps professionals who need more than just basic lead scoring. Built for teams that want deep contextual insights about qualified prospects to enable truly relevant conversations from the first touchpoint.

## What problem does this solve?
Most qualification stops at "good fit" or "bad fit" - but that leaves sales teams flying blind when it comes to actually engaging the prospect. You know they're qualified, but what are their specific pain points? What value propositions resonate? Which reference customers should you mention? This workflow uses Octave's context engine to not only qualify leads but enrich them with actionable insights that turn cold outreach into warm, contextualized conversations.

## What this workflow does

**Inbound Lead Processing:**
- Receives lead information via webhook (firstName, companyName, companyDomain, profileURL, jobTitle)
- Processes leads from website forms, demo requests, content downloads, or trial signups
- Validates and structures lead data for intelligent qualification and enrichment

**Contextualized Lead Qualification:**
- Leverages Octave's context engine to score leads against your specific ICP
- Analyzes company fit, role relevance, and timing indicators
- Generates qualification scores (1-10) with detailed rationale
- Filters out low-scoring leads (configurable threshold - default &gt;5)

**Deep Lead Enrichment:**
- Uses Octave's enrichment engine to generate contextual insights about qualified leads
- Identifies primary responsibilities, pain points, and relevant value propositions
- Suggests appropriate reference customers and use cases to mention
- Provides sales teams with conversation starters grounded in your business context

**Enhanced Sales Alerts:**
- Sends enriched Slack alerts with qualification score plus actionable insights
- Includes suggested talking points, pain points, and reference customers
- Enables sales teams to have contextualized conversations from first contact

## Setup

**Required Credentials:**
- Octave API key and workspace access
- Slack OAuth credentials with channel access
- Access to your lead source system (website forms, CRM, etc.)

**Step-by-Step Configuration:**

1. **Set up Octave Qualification Agent:**
   - Add your Octave API credentials in n8n
   - Replace `your-octave-qualification-agent-id` with your actual qualification agent ID
   - Configure your qualification agent with your ICP criteria and business context

2. **Set up Octave Enrichment Agent:**
   - Replace `your-octave-enrichment-agent-id` with your actual enrichment agent ID
   - Configure enrichment outputs based on the insights most valuable to your sales process
   - Test enrichment quality with sample leads from your target market

3. **Configure Slack Integration:**
   - Add your Slack OAuth credentials to n8n
   - Replace `your-slack-channel-id` with the channel for enriched lead alerts
   - Customize the Slack message template with the enrichment fields most useful for your sales team

4. **Set up Lead Source:**
   - Replace `your-webhook-path-here` with a unique, secure path
   - Configure your website forms, CRM, or lead source to send data to the webhook
   - Ensure consistent data formatting across lead sources

5. **Customize Qualification Filter:**
   - Adjust the Filter node threshold (default: score &gt; 5)
   - Modify based on your lead volume and qualification standards
   - Test with sample leads to calibrate scoring

**Required Webhook Payload Format:**
```json
{
  "body": {
    "firstName": "Sarah",
    "lastName": "Johnson",
    "companyName": "ScaleUp Technologies",
    "companyDomain": "scaleuptech.com",
    "profileURL": "https://linkedin.com/in/sarahjohnson",
    "jobTitle": "VP of Engineering"
  }
}
```

## How to customize

**Qualification Criteria:** Customize scoring in your Octave qualification agent:
- **Product Level:** Define "good fit" and "bad fit" questions that determine if someone needs your core offering
- **Persona Level:** Set criteria for specific buyer personas and their unique qualification factors
- **Segment Level:** Configure qualification logic for different market segments or use cases
- **Multi-Level Qualification:** Qualify against Product + Persona, Product + Segment, or all three levels combined

**Enrichment Insights:** Configure your Octave enrichment agent to surface the most valuable insights:
- **Primary Responsibilities:** What this person actually does day-to-day
- **Pain Points:** Specific challenges they face that your solution addresses
- **Value Propositions:** Which benefits resonate most with their role and situation
- **Reference Customers:** Similar companies/roles that have succeeded with your solution
- **Conversation Starters:** Contextual talking points for outreach

**Slack Alert Format:** Customize the enrichment data included in alerts:
- Add or remove enrichment fields based on sales team preferences
- Modify message formatting for better readability
- Include additional webhook data if needed

**Scoring Threshold:** Adjust the Filter node to match your qualification standards

**Integration Channels:** Replace Slack with email, CRM updates, or other notification systems

## Use Cases
- High-value enterprise lead qualification and research automation
- Demo request enrichment for contextual sales conversations
- Event lead processing with immediate actionable insights
- Website visitor qualification and conversation preparation
- Trial signup enrichment for targeted sales outreach
- Content download lead scoring with context-aware follow-up preparation

## 📊 Basic Information

- **Workflow ID:** 7615
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 67
- **Downloads:** 6
- **Created:** 2025/8/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7615)

## 👤 Author

- **Name:** Nalin
- **Username:** @nalinkrishnan

## 🏷️ Categories

- AI Summarization
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×6)
- **webhook** 
- **n8n-nodes-octavehq.octave** (×2)
- **filter** 
- **slack** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
