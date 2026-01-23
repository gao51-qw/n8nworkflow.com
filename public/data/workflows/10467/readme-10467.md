# Build a cost estimation chatbot with Mistral AI, OCR & Supabase

> # AI Cost Estimation Chatbot (Conversational Dual-Agent + OCR Workflow)

## Overview
This workflow introduces a **conversational AI Cost Estimation Chatbot** with built-in **OCR document analysis** and **interactive form guidance**.  
It helps users and teams handle **pricing, measurement, and product configuration** for multiple categories such as **fabrics** and **tiles** — whether data comes from an uploaded invoice, a stored RFQ, or live user input.

The system blends **Mistral AI’s reasoning** with **n8n’s native tools** — **OCR Extract**, **Calculator**, **Supabase**, and **Gmail** — to deliver clear, step-by-step cost calculations.  
It automatically retrieves or parses OCR data, confirms details conversationally, performs unit conversions, and returns accurate estimates in real time.  
Escalation and recordkeeping are handled via Gmail and Supabase.

---

## Chatbot Flow

**Trigger:** Chat message (from n8n Chat UI) or Webhook (from a live site).  
**Model:** Mistral Cloud Chat Model (`mistral-medium-latest`)  
**Memory:** Simple Memory (Buffer Window, 15-message history)  

**Tools:**
- **OCR Extract:** Reads and converts invoices, receipts, and RFQs into structured data.  
- **Supabase:** Stores and retrieves OCR data for re-use in future calculations.  
- **Calculator:** Performs all material, area, and cost computations.  
- **Gmail:** Escalates customer queries or sends quote summaries.  
- **Agent:** `ai agent cost estimate`  

**Workflow Behavior:**
- Retrieves or parses OCR data, confirms and completes missing details interactively.  
- Guides users step-by-step through product setup (Fabric or Tile).  
- Calculates costs transparently using MATERIAL_COSTS and PROCESSING_COSTS.  
- Handles GSM ↔ sqm, area, and weight conversions automatically.  
- Escalates support or order confirmations via Gmail when requested.

---

## Integrations Used

| Service | Purpose |
|----------|----------|
| ** Chat** | User-facing chatbot interface |
| **OCR Extract** | Processes uploaded documents or receipts |
| **Supabase** | Stores and retrieves OCR / quote data |
| **Mistral AI** | Chat model and reasoning engine |
| **Calculator** | Handles all numeric and cost calculations |
| **Gmail** | Sends escalations or quote summaries |

---

## Agent System Prompt Summary

&gt; “You are an AI cost estimation assistant for a brand.  
&gt; Retrieve or parse OCR data from Supabase, confirm details with the user, and calculate costs transparently.  
&gt; Use the Calculator for all numeric logic based on MATERIAL_COSTS and PROCESSING_COSTS.  
&gt; Handle GSM-to-sqm and other conversions automatically.  
&gt; If support or follow-up is needed, send a message through Gmail.  
&gt; Always guide the user conversationally, confirm assumptions, and explain every step clearly.”

---

## Key Features

  input:  Chat Interface  
 Conversational guidance even when OCR data doesnt exist  
 OCR + Supabase integration for document reuse  
 Interactive cost estimator for fabrics and tiles  
Transparent calculations and unit conversions  
 Gmail integration for escalation or order confirmation  
 Modular design for scaling to other product types  

---

## Summary
A powerful **AI + OCR conversational cost estimation assistant** that retrieves or parses order data, guides users through setup, and calculates costs transparently.  
It combines **intelligence (Mistral)**, **precision (Calculator)**, and **automation (OCR + Supabase + Gmail)** to create a complete, human-like quotation system — perfect for **brands, manufacturers, and B2B platforms**.

---
 We can help you set it up for free — from connecting credentials to deploying it live.

Contact: [shilpa.raju@digitalbiz.tech](mailto:shilpa.raju@digitalbiz.tech)  
Website: [https://www.digitalbiz.tech](https://www.digitalbiz.tech)  
LinkedIn: [https://www.linkedin.com/company/digital-biz-tech/](https://www.linkedin.com/company/digital-biz-tech/)  
You can also DM us on LinkedIn for any help.

## 📊 Basic Information

- **Workflow ID:** 10467
- **Complexity:** advanced
- **Node Count:** 28
- **Views:** 100
- **Downloads:** 10
- **Created:** 2025/11/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10467)

## 👤 Author

- **Name:** DIGITAL BIZ TECH
- **Username:** @dbt

## 🏷️ Categories

- Lead Nurturing
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatMistralCloud** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.toolCalculator** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **gmailTool** 
- **stickyNote** (×12)
- **@n8n/n8n-nodes-langchain.agent** 
- **splitOut** 
- **merge** 
- **if** 
- **code** 
- **httpRequest** (×4)
- **supabase** 
- **supabaseTool** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 28 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
