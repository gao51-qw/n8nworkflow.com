# Learn JavaScript data processing with code node: filtering, analysis & export examples

> ## Overview
A comprehensive educational workflow that demonstrates practical JavaScript usage in n8n's Code node through real-world business scenarios. Perfect for learning data manipulation, transformation, and automation patterns that you can immediately apply to client projects.
What This Template Teaches:

Data Filtering & Transformation - Filter employees by age, calculate bonuses, format contact information
Statistical Analysis - Generate team statistics, averages, role distributions, and KPIs
Multi-Format Export - Create CSV files, email lists, and API-ready payloads from raw data
n8n Best Practices - Proper JSON handling, return formats, and data flow patterns

## How It Works:

Manual Trigger starts the workflow with sample employee data
Set Sample Data provides realistic business data (employees with roles, salaries, ages)
Three Code Node Examples process the same data differently:

Filter & Transform: Creates adult employee list with calculated bonuses
Calculate Stats: Generates comprehensive team analytics and reports
Format for Export: Prepares data for external systems (APIs, emails, CSV)



**Key Learning Points**:

Access input data using items[0].json.propertyName
Return proper n8n format with [{ json: data }] structure
Use JSON.parse() for string-to-object conversion
Apply JavaScript array methods (filter, map, reduce) for data processing
Handle multiple output scenarios and data aggregation

**Perfect For**:

n8n beginners learning Code node fundamentals
Developers transitioning to n8n automation
Client demos showing data processing capabilities
Team training and onboarding sessions
Foundation for building custom business automation workflows

**Business Use Cases**:
Transform this template for lead qualification, customer segmentation, report generation, data enrichment, and API integrations. Each Code node pattern can be adapted for different industries and automation needs.

## 📊 Basic Information

- **Workflow ID:** 5729
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 906
- **Downloads:** 90
- **Created:** 2025/7/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5729)

## 👤 Author

- **Name:** David Olusola
- **Username:** @dae221

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **stickyNote** (×6)
- **manualTrigger** 
- **set** 
- **code** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
