# Compare AI models with Nvidia API: Qwen, DeepSeek, Seed-OSS & Nemotron

> # Compare AI Models with Nvidia API: Qwen, DeepSeek, Seed-OSS & Nemotron

## Overview
- Queries four AI models simultaneously via Nvidia's API in 2-3 seconds—4x faster than sequential processing. Perfect for ensemble intelligence, model comparison, or redundancy.


## How It Works
- Webhook Trigger receives queries
- AI Router distributes to four parallel branches: Qwen2, SyncGenInstruct, DeepSeek-v3.1, and Nvidia Nemotron
- Merge Node aggregates responses (continues with partial results on timeout)
- Format Response structures output
- Webhook Response returns JSON with all model outputs

## Prerequisites

- Nvidia API key from [build.nvidia.com](https://build.nvidia.com) (free tier available)
- n8n v1.0.0+ with HTTP access
- Model access in Nvidia dashboard

## Setup

1. Import workflow JSON
2. Configure HTTP nodes: Authentication → Header Auth → `Authorization: Bearer YOUR_API_KEY`
3. Activate workflow and test

## Customization

Adjust temperature/max_tokens in HTTP nodes, add/remove models by duplicating nodes, change primary response selection in Format node, or add Redis caching for frequent queries.

## Use Cases

Multi-model chatbots, A/B testing, code review, research assistance, and production systems with AI fallback.


## 📊 Basic Information

- **Workflow ID:** 9283
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 162
- **Downloads:** 16
- **Created:** 2025/10/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9283)

## 👤 Author

- **Name:** Cheng Siong Chin
- **Username:** @cschin

## 🏷️ Categories

- Engineering
- AI Chatbot

## 🔗 Nodes Used

- **webhook** 
- **stickyNote** (×2)
- **set** 
- **respondToWebhook** 
- **merge** 
- **switch** 
- **httpRequest** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
