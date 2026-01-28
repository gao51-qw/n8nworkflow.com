![Screenshot 20250726 at 10.51.44.png](fileId:1869)
**⚠️ Disclaimer:** This workflow utilizes community nodes that needs self hosted version

Code for UI Form is [accessible here](https://github.com/khmuhtadin/n8n-template/tree/main/Additional%20FE/Automate%20Booking%20with%20Xendit%20)

The **bykhaisa** workflow streamlines makeup service bookings by capturing customer details via webhook, calculating pricing including add-ons and payment types, generating payment invoices with Xendit, and sending personalized WhatsApp booking confirmations.

This powerful combination of n8n, GoWhatsApp API, and Xendit reduces manual work and accelerates payment collection, saving you valuable time and boosting client satisfaction.
![Screenshot 20250725 at 21.09.06.png](fileId:1867)
## 💡 Why Use bykhaisa?

- **Save Time:** Automate booking and payment processes to eliminate hours spent on manual data entry
- **Simplify Payments:** Generate invoices instantly with Xendit, making it easier for clients to pay securely and promptly
![Screenshot 20250725 at 21.08.50.png](fileId:1868)

- **Enhance Communication:** Send automated WhatsApp messages that keep customers informed and engaged without lifting a finger
- **Stand Out:** Offer a modern, seamless booking experience that elevates your makeup business above competitors still stuck in the stone age

## ⚡ Perfect For

- **Makeup Artists & Studios:** Who want a hassle-free booking and payment system
- **Beauty Salons:** Seeking smooth client communication and invoicing automation
- **Freelancers:** Looking to appear professional with automated workflows and instant payment requests
- **General Business with booking system**: to make a seamless booking process

## 🔧 How It Works

1. **⏱ Trigger:** Customer sends booking details via Form (a POST request to the webhook)
2. **📎 Process:** Extract and format booking data, calculate prices with add-ons and urgent fees, and create a unique booking ID
3. **🤖 Smart Logic:** Calculate whether payment is a Down Payment (DP) or full amount, set invoice expiry, and generate Xendit invoices automatically
4. **💌 Output:** WhatsApp notification with booking details and payment link sent to customer, complete with friendly typing delays for that human touch
5. **🗂 Storage:** Booking data enriched with pricing and payment state, ready for follow-up or record-keeping

## 🔐 Quick Setup

1. Import JSON file to your [n8n instances](https://n8n.partnerlinks.io/khmuhtadin)
2. **Add credentials:** Xendit API key, GoWhatsApp API credentials
3. **Customize:** Adjust pricing logic, add-on fees, and payment types as needed
4. **Update:** Replace webhook URLs and redirect URLs for payment success/failure pages
5. **Test:** Run the workflow with sample booking data to verify end-to-end automation

## 🧩 Requirements

- Active [n8n instances](https://n8n.partnerlinks.io/khmuhtadin)
- Xendit account & API credentials for invoice generation
- GoWhatsApp API setup for WhatsApp messaging
- Optional: Custom domain for webhook endpoint

## 🛠️ Level Up Ideas

- Add calendar integration to automatically block booked slots
- Integrate Google Sheets or Airtable for backup and reporting
- Set up payment reminders and follow-ups via WhatsApp automatically

## 🧠 Nodes Used

- **Webhook** - Receives booking requests
- **Set (Process Booking)** - Data transformation and formatting
- **Code (Calculate Price)** - Custom pricing logic with add-ons
- **HTTP Request (Generate Invoice)** - Xendit invoice creation
- **Respond to Webhook** - Send response back to client
- **GoWhatsApp** - WhatsApp messaging functionality

## 📋 Workflow Categories

- **Category:** E-commerce, Bussiness
- **Tags:** automation, booking, invoicing, payments, whatsapp, makeup

**Made by:** [khaisa Studio](https://khaisa.studio)  
Need custom work? **[Contact Me](https://khmuhtadin.com)**