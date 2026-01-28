# Stripe payment order sync – auto retrieve customer & product purchased

> ## Overview

This automation template is designed to streamline your payment processing by automatically triggering upon a successful Stripe payment. The workflow retrieves the complete payment session and filters the information to display only the customer name, customer email, and the purchased product details. This template is perfect for quickly integrating Stripe transactions into your inventory management, CRM, or notification systems.

## Step-by-Step Setup Instructions

1. **Stripe Account Configuration:**
   - Ensure you have an active Stripe account.
   - Connect your Stripe Credentials.
  
2. **Retrieve Product and Customer Data:**
   - Utilize Stripe’s API within the automation to fetch the purchased product details.
   - Retrieve customer information such as: email and full name.

3. **Integration and Response:**
   - Map the retrieved data to your desired format.
   - Trigger subsequent nodes or actions such as sending a confirmation email, updating a CRM system, or logging the transaction.

## Pre-Conditions and Requirements

- **Stripe Account:** A valid Stripe account with access to API keys and webhook configurations.
- **API Keys:** Ensure you have your Stripe secret and publishable keys ready.

## Customization Guidance

- **Data Mapping:** Customize the filtering node to match your specific data schema or to include additional data fields if needed.
- **Additional Actions:** Integrate further nodes to handle post-payment actions like sending SMS notifications, updating order statuses, or generating invoices.

Enjoy seamless integration and enhanced order management with this automation template!

## 📊 Basic Information

- **Workflow ID:** 3391
- **Complexity:** beginner
- **Node Count:** 3
- **Views:** 3522
- **Downloads:** 352
- **Created:** 2025/4/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3391)

## 👤 Author

- **Name:** Matt F.
- **Username:** @lemolex

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **stripeTrigger** 
- **httpRequest** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 3 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
