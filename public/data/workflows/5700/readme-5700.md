# Automatically reply to cold emails with GPT-4 & Instantly.ai

> # AI-Powered Workflow for Auto-Responding to Positive Cold Email Replies

This workflow is designed for **agencies**, **freelancers**, and **sales teams** who want to turn **positive cold email replies into booked meetings automatically**—without hiring VAs or spending hours on manual responses.

---

## ❓ The Problem
Most teams waste time **replying manually** or **pay for virtual assistants**, leading to **delays and missed opportunities**.  
This template eliminates that bottleneck.

---

## ✅ What the Workflow Does
- Detects **positive replies** from **Instantly.ai campaigns**
- Uses **AI to analyze intent** and craft **natural, human-like responses**
- Adds **personalization** to keep replies authentic
- Includes **Calendly links, product docs, or FAQs** based on the lead’s intent
- Sends **responses instantly**—so you **never miss a hot lead again**

**No robotic AI text.** Just **smooth, human-style emails** that get booked calls faster.

---

## 👥 Who is This For?
- **Agencies** running Instantly.ai or similar outbound tools
- **Founders** handling their own cold email outreach
- **Sales teams** looking to automate follow-up and booking
- Anyone who gets **5–20 positive replies a week** and wants to **2x–4x conversions**

---

## ✅ Requirements
- **n8n** (Cloud or self-hosted)
- **Instantly.ai account** with API access
- **OpenAI API key** (stored securely in n8n credentials)
- *(Optional)* Calendly or booking link, Notion or Google Docs for resources

---

## ⚙️ How to Set Up
1. Import the **workflow** into n8n
2. Add your **Instantly.ai API credentials** and **OpenAI key** using n8n’s credential manager
3. Customize the **AI prompt** for your tone, CTA, and offer
4. Insert your **Calendly or booking link** in the response template
5. Test with **one positive reply** to confirm filtering and response quality
6. Activate the workflow to **auto-reply in real time**

---

## 🔧 How to Customize
- Adjust the **filtering logic** for different keywords or intent signals
- Add **branching** for multiple booking links (e.g., based on region or service type)
- Push **responses to a CRM** for tracking
- Include extra resources like **case studies or pricing docs**


## 📊 Basic Information

- **Workflow ID:** 5700
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 1342
- **Downloads:** 134
- **Created:** 2025/7/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5700)

## 👤 Author

- **Name:** Shahrukh
- **Username:** @shahrukhma

## 🏷️ Categories

- Lead Nurturing
- Multimodal AI

## 🔗 Nodes Used

- **webhook** 
- **set** 
- **httpRequest** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **code** (×2)
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
