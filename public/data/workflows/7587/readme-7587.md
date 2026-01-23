# Send personalized HTML welcome emails to new Xero contacts via SMTP

> # Automated HTML Welcome Email for New Xero Contacts

Crafted with ❤️ by the automation experts at **[Elegant BizTech](https://www.elegantbiztech.com/)**.

## Summary

This workflow automatically sends a beautiful, personalized HTML welcome email to a new contact the moment they are created in your Xero account.

## Description

First impressions matter. When you add a new client or customer to Xero, the opportunity to welcome them warmly and professionally is often missed. Manually sending welcome emails is time-consuming and inconsistent.

This workflow solves that problem by instantly triggering a customizable email that not only welcomes your new contact but also confirms the key details you have on file, building trust and starting the relationship on a high note.

## What it does

*   **Triggers** when a new contact is created in Xero.
*   **Filters** to ensure it only runs for *new* contacts, not updates.
*   **Fetches** the full contact details (Name, Address, Phone) from Xero for personalization.
*   **Builds** a beautifully formatted HTML email using the contact's data.
*   **Sends** the final, personalized email to the new contact via your preferred SMTP service.

## **Setup Guide**

Follow these steps carefully to configure this workflow for your own use.

### **IMPORTANT: Handling Xero Webhook Signatures**

&gt; Xero webhooks require a signature verification that the standard n8n Webhook node cannot perform directly. To solve this, this workflow is designed to be used with a simple proxy application.

&gt; **You must first set up a small Express.js (or similar) application on your own server/VPS.**

&gt; 1.  This app receives the webhook from Xero and verifies the signature.

&gt; 2.  Once verified, it forwards the clean JSON payload to the n8n Webhook URL.

&gt; The first node in this workflow, `Start: New Contact in Xero`, contains the URL where your proxy app should send the data.

### **Step 1: Credentials**

This workflow requires two sets of credentials.

*   **(Node: `Fetch Full Contact Details from Xero`) Xero Account:**
    1.  Select the `Fetch Full Contact Details from Xero` node.
    2.  In the `Credential for Xero API` field, select your existing credential or click `Create New` to connect your Xero account to n8n.

*   **(Node: `Send Personalized Welcome Email`) SMTP Account:**
    1.  Select the `Send Personalized Welcome Email` node.
    2.  In the `Credential for SMTP` field, select your existing credential or click `Create New` to connect your email provider (e.g., Gmail, Outlook, SendGrid) to n8n.

### **Step 2: Customize Your Email Template**

This is where you make the email your own!

1.  Select the **`Build Personalized HTML Email`** (Code) node.
2.  Inside the code editor, you'll need to update the following placeholders:
    *   **Line 35:** Change `https://yourdomain.com/images/logo.png` to the direct URL of your company's logo.
    *   **Line 47:** Change `https://yourdomain.com/` to the link you want the main call-to-action button to go to (e.g., your website or a client portal).
    *   **Line 53:** Change `info@yourdomain.com` to your company's support email address.
    *   **Line 54:** Change `[Your Company Name]` to your actual company name.

### **Step 3: Activate Your Workflow**

1.  Click the **`Active`** toggle in the top-right corner of the n8n canvas.
2.  Save the workflow.

Now, go to your Xero account, create a new contact, and watch the magic happen! A beautiful, personalized email will be sent automatically.

---

### Need Help or More Advanced Workflows?

At **Elegant BizTech**, we specialize in creating powerful, custom automations that streamline your business processes.

*   **Visit our website:** [https://www.elegantbiztech.com/](https://www.elegantbiztech.com/)
*   **Contact us for a consultation:** [sales@elegantbiztech.com](mailto:sales@elegantbiztech.com)

## 📊 Basic Information

- **Workflow ID:** 7587
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 50
- **Downloads:** 5
- **Created:** 2025/8/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7587)

## 👤 Author

- **Name:** Elegant Biztech
- **Username:** @ebworkflows

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **emailSend** 
- **webhook** 
- **if** 
- **xero** 
- **code** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
