# Automated restaurant call handling & table booking system with VAPI and PostgreSQL

> Acts as a virtual receptionist for the restaurant, handling incoming calls via VAPI without human intervention. It collects user details (name, booking time, number of people) for table bookings, checks availability in a PostgreSQL database using n8n, books the table if available, and sends confirmation. It also provides restaurant details to users, mimicking a human receptionist.

### Key Insights

1. VAPI must be configured to accurately capture user input for bookings and inquiries.
2. PostgreSQL database requires a table to manage restaurant bookings and availability.

### Workflow Process

- Initiate the workflow with a VAPI call to collect user details (name, time, number of people).  
- Use n8n to query the PostgreSQL database for table availability.  
- If a table is available, book it using n8n and update the PostgreSQL database.  
- Send a booking confirmation and hotel service details back to VAPI via n8n.  
- Store and update restaurant table data in the PostgreSQL database using n8n.

### Usage Guide

1. Import the workflow into n8n and configure VAPI and PostgreSQL credentials.  
2. Test with a sample VAPI call to ensure proper data collection and booking confirmation.

### Prerequisites

- VAPI API credentials for call handling  
- PostgreSQL database with booking and availability tables  

### Customization Options

Modify the **VAPI** input fields to capture additional user details or adjust the **PostgreSQL** query for specific availability criteria.

## 📊 Basic Information

- **Workflow ID:** 5466
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 5820
- **Downloads:** 582
- **Created:** 2025/6/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5466)

## 👤 Author

- **Name:** Oneclick AI Squad
- **Username:** @oneclick-ai

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **stickyNote** (×3)
- **postgres** (×2)
- **respondToWebhook** (×2)
- **webhook** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
