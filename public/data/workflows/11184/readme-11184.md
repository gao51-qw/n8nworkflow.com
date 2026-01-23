# Automate Airtable inventory tracking and purchase order creation

> ## Overview

This workflow automates the complete purchase order cycle for Airtable-based inventory management using n8n. It continuously monitors your stock levels, automatically creates purchase orders when inventory falls below reorder thresholds, and sends formatted order emails to suppliers—eliminating manual tracking and reducing stockout risk.

The system handles three critical automation processes: ensuring each supplier always has a draft purchase order ready, intelligently adding products to those orders based on forecasted stock levels versus threshold quantities, and automatically emailing suppliers when orders are approved for sending.

## Key Features

- **Automated stock monitoring:** Hourly checks identify products that need reordering based on customizable threshold levels
- **Smart purchase order management:** Automatically creates and maintains draft purchase orders for each supplier
- **Supplier email automation:** Sends formatted order details directly to suppliers when purchase orders are ready
- **Movement-based ledger:** Tracks every stock-in and stock-out transaction for complete audit trails
- **Test data generator:** Includes a manual-trigger workflow to simulate random sales orders for testing

## Setup Requirements

**Required first step:** You must copy the Airtable inventory management base into your own Airtable account from: https://airtable.com/appN9ivOwGQt1FwT5/shr1ApcBSi4SOVoPh

After copying the base, you'll need to configure:

- **Airtable credentials:** Personal Access Token with read/write permissions to your copied base
- **Gmail credentials:** OAuth2 connection for sending purchase order emails to suppliers
- **Base connections:** Update all Airtable nodes to point to your copied base URL and table IDs

## Configuration

The workflow runs on an hourly schedule by default to check for products needing reorder. You can adjust this frequency in the "Check Products Hourly" Schedule Trigger node based on your business needs.

All supplier-specific settings including email addresses, reorder thresholds, and refill quantities are managed directly in the Airtable base—not in the workflow itself. This allows non-technical team members to adjust inventory parameters without touching the automation.

The included test workflow ("Generate random SO") is manual-trigger only and simulates daily sales by randomly reducing product quantities, making it easy to test the reorder automation without waiting for real sales data.

## 📊 Basic Information

- **Workflow ID:** 11184
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 119
- **Downloads:** 11
- **Created:** 2025/11/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11184)

## 👤 Author

- **Name:** Milan Vasarhelyi - SmoothWork
- **Username:** @vasarmilan

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **stickyNote** (×6)
- **airtableTrigger** (×2)
- **airtable** (×11)
- **manualTrigger** 
- **scheduleTrigger** 
- **merge** 
- **if** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 13 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
