# Automate birthday discount emails for e-commerce using Google Sheets and Gmail

> # ⚙ **How It Works & Setup Steps: Automated Birthday Discount**

---

## **How It Works**

This workflow is a powerful yet simple automation to delight your customers on their birthdays. It runs every day on a schedule you define and automatically pulls data from your customer list on Google Sheets. The workflow then checks to see if any customer has a birthday on the current day. If a match is found, it generates a unique discount code and sends a personalized, celebratory email with the code directly to the customer. This ensures no birthday is ever missed, fostering customer loyalty and driving sales with zero manual effort.

---

## **Setup Steps**

Follow these steps to get the workflow running in your n8n instance and start sending automated birthday discounts.

## **1. Prerequisites**
You will need a working n8n instance and a few key accounts:
* **Google Sheets:** To store your customer data, including their email address and birthday. The birthday column should be formatted as **`MM-dd`** (e.g., `08-27`).
* **Gmail:** To send the personalized birthday emails to your customers.

## **2. Workflow Import**
Import the provided workflow JSON into your n8n canvas. All the necessary nodes will appear on your canvas, ready for configuration.

## **3. Configure Credentials**
Connect the following credentials to their respective nodes:
* **Google Sheets:** Connect your Google account to the **`Get Customer Data`** node.
* **Gmail:** Connect your Gmail account to the **`Send Birthday Email`** node.

## **4. Customize the Workflow**
1.  **`Get Customer Data`:**
    * Enter the **`Spreadsheet ID`** and **`Sheet Name`** of your Google Sheet containing the customer data.
2.  **`Is It Their Birthday?`:**
    * This node compares the customer's birthday column with the current date. Ensure `{{ $json.birthday }}` matches the exact name of your birthday column in Google Sheets.
3.  **`Generate Discount Code`:**
    * This node is pre-configured to create a simple unique code. For an e-commerce platform (like Shopify or WooCommerce), you will need to replace this node with the specific API call to generate a valid coupon code in your system.
4.  **`Send Birthday Email`:**
    * Enter your sender email in the **`From Email`** field.
    * Customize the **`Subject`** and **`Message`** with your own text and branding to make it personal. The `{{ $json.name }}` and `{{ $json.discountCode }}` expressions will automatically pull the correct customer name and generated code.

## **5. Activate the Workflow**
Once all configurations are complete, click **"Save"** and then **"Active"**. The workflow is now live and will automatically run every morning to send out birthday wishes!

## 📊 Basic Information

- **Workflow ID:** 7936
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 294
- **Downloads:** 29
- **Created:** 2025/8/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7936)

## 👤 Author

- **Name:** Marth
- **Username:** @marth

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **googleSheets** 
- **if** 
- **function** 
- **gmail** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
