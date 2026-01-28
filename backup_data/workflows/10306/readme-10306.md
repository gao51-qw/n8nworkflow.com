# Detect stock price anomalies & send news alerts with Marketstack, HackerNews & DeepL

> ## Price Anomaly Detection & News Alert (Marketstack + HN + DeepL + Slack)

## Overview
This workflow monitors a stock’s closing price via **Marketstack**. It computes a **20-day moving average** and **standard deviation (±2σ)**. If the latest close is outside ±2σ, it flags an **anomaly**, fetches **related headlines from Hacker News**, **translates** them to Japanese with **DeepL**, and **posts both original and translated text to Slack**. When no anomaly is detected, it sends a concise “normal” report.

## How it works
1) Daily trigger at 09:00 JST  
2) Marketstack: fetch EOD data  
3) Code: compute mean/σ and classify (normal/high/low)  
4) IF: anomaly? → yes = news path / no = normal report  
5) Hacker News: search related items  
6) DeepL: translate EN → JA  
7) Slack: send bilingual notification

## Requirements
- Marketstack API key
- DeepL API key
- Slack OAuth2 (bot token / channel permission)

## Notes
- Edit the ticker in **Get Stock Data**.
- Adjust **N** (days) and **k** (sigma multiplier) in **Calculate Deviation**.
- Keep credentials out of HTTP nodes (use n8n Credentials).


## 📊 Basic Information

- **Workflow ID:** 10306
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 437
- **Downloads:** 43
- **Created:** 2025/10/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10306)

## 👤 Author

- **Name:** noda
- **Username:** @shusaku

## 🏷️ Categories

- Crypto Trading
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **marketstack** 
- **code** (×3)
- **if** 
- **hackerNews** 
- **deepL** 
- **slack** (×2)
- **merge** 
- **stickyNote** (×14)
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
