# Automated n8n workflow audit & export tool (JSON + Excel)

> ## Automated n8n Workflow Audit & Export Tool (JSON + Excel)

**Stop Auditing Workflows Manually — Automate Your n8n Reports.**
This workflow delivers complete visibility across every automation in your n8n instance — instantly, reliably, and without opening the editor.

---

## Purpose of This Workflow

As your automation stack grows, keeping track of workflows becomes time-consuming.
This tool collects key workflow details, applies filters you choose, and returns structured output in **clean JSON** or a **fully formatted Excel report**.
It empowers teams to make decisions faster, maintain governance, and document their automation landscape with zero manual effort.

---

## ✅ What This Workflow Helps You Do

* Get a **complete overview of every workflow** in your n8n instance
* Quickly identify **active vs inactive** workflows
* Understand configuration and structure **at a glance**
* Export workflow details for **audits, documentation, handovers, or reports**
* Reuse the data in **dashboards, admin panels, or integrations**

---

## What’s Included in Each Report

This workflow goes beyond simple lists.
It analyzes each workflow and provides detailed metrics such as:

* **Export all worklfow report in Excel to filter according to your need**
* **Workflow Name & ID**
* **Status (active / inactive)**
* **Created and Updated Timestamps**
* **Total Number of Nodes**
* **Node Type Breakdown**, including:

  * Number of **HTTP Request nodes**
  * Number of **AWS S3 nodes**
  * Custom / Other node types detected
  * Any specialized integrations used

This helps teams understand **not just what exists — but how each workflow is built.**

---

## Why It’s Useful

Auditing workflows manually becomes painful as your system scales:

* Opening each workflow
* Checking settings
* Reviewing nodes
* Counting integrations
* Copying notes


This workflow eliminates that entire process.
It gives you a clear, automated snapshot of what’s running, how it’s structured, and where each workflow is used — **without logging into the editor** or performing any manual checks.

---

## How to Use It

Send a request to the Webhook endpoint and define your filters:

* `status = all | active | inactive`
* `output = json | excel`

The workflow returns a fully processed, filtered report — formatted for your needs.

---

## Configuration Requirements

To run successfully, you will need:

* Valid **n8n API credentials**
* A **public URL** for generating shareable workflow links
* An accessible **Webhook URL** from your environment

---

## Output Options

### JSON

* Ideal for dashboards, admin tools, APIs, or data processing
* Easy to integrate into DevOps or monitoring systems

### Excel

* Perfect for audits, compliance, documentation, or internal reviewing
* Clean table format ready for stakeholders, clients, or teams

---

## Additional Notes

* **Default limit:** 25 workflows per request
* Fully automated — no manual steps after setup
* Ideal for teams managing many workflows or performing periodic audits
* Works great for onboarding, internal reviews, or automation audits

## Excel example image
![n8n_report.png](fileId:3457)

## 📊 Basic Information

- **Workflow ID:** 10852
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 44
- **Downloads:** 4
- **Created:** 2025/11/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10852)

## 👤 Author

- **Name:** V3 Code Studio
- **Username:** @v3codestudio

## 🏷️ Categories

- DevOps

## 🔗 Nodes Used

- **stickyNote** (×6)
- **webhook** 
- **code** (×5)
- **n8n** 
- **switch** 
- **respondToWebhook** (×2)
- **convertToFile** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
