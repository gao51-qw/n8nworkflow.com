# AI-powered stock analysis with AI scoring and Gmail report delivery

> # Workflow Description and Setup Guide

This workflow provides comprehensive AI-driven stock analysis, generating detailed deep reports by leveraging advanced vector-based data retrieval and API integrations for precise financial analytics using Danelfin scoring and strategy.

---

## Overview

This workflow automates stock analysis utilizing:

* **AI-driven scoring and sector insights** (Danelfin configuration)
* **Vector-based data retrieval** (Supabase)
* **Deep analytical reports**

---

## Key Components and API Integrations

### 1. Danelfin AI Stock Analysis API

Provides advanced stock scores, rankings, and sector insights.

* **Endpoints:**

  * `/ranking`: Stock rankings and scores
  * `/sectors`: Sector information
  * `/industries`: Industry details

### 2. Supabase Vector Store

Vector embedding storage and quick data retrieval.

---

## Workflow Steps

### Initialization

1. **Chat Trigger**: Activates when a message requesting stock analysis is received.

### Stock Analysis and Deep Reporting

2. **Main AI Agent**: Processes the query, retrieves relevant data from Danelfin, and generates deep analytical reports.

3. **Supabase Vector Store**: Facilitates efficient data retrieval using embeddings.

### Reporting

4. **Markdown Conversion**: Transforms analysis into a readable HTML format.

5. **Email Reporting**: Sends detailed reports via Gmail.

---

## Setup Instructions

### Prerequisites

* Obtain API Keys for Supabase and Danelfin.

### Configuration Steps

1. **Set API Keys**:

   * Supabase API credentials for vector storage.
   * Danelfin API credentials for stock analysis.

2. **Gmail API Credentials**:

   * Configure Gmail node for sending reports.

### Running the Workflow

* Triggered automatically by chat messages requesting analysis.
* Reports sent directly via email.

---

This setup ensures precise, AI-driven stock analysis delivered clearly through automated deep reporting.


## 📊 Basic Information

- **Workflow ID:** 6823
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 936
- **Downloads:** 93
- **Created:** 2025/8/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6823)

## 👤 Author

- **Name:** Paul
- **Username:** @diagopl

## 🏷️ Categories

- Crypto Trading
- AI RAG

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.toolThink** 
- **@n8n/n8n-nodes-langchain.vectorStoreSupabase** (×2)
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.rerankerCohere** 
- **@n8n/n8n-nodes-langchain.agent** 
- **httpRequestTool** (×3)
- **stickyNote** (×7)
- **gmail** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.memoryPostgresChat** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **markdown** 
- **@n8n/n8n-nodes-langchain.documentDefaultDataLoader** 
- **@n8n/n8n-nodes-langchain.textSplitterRecursiveCharacterTextSplitter** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
