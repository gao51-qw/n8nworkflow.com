# Generate custom branded PDF invoices from QuickBooks and email to clients

> Automated QuickBooks Invoice to Custom PDF & Email

This n8n workflow automates the entire QuickBooks invoicing process — from creation to delivery. When a new invoice is generated in QuickBooks Online, it automatically fetches the data, applies your company branding, converts it into a professional multi-page PDF via Gotenberg, and emails it directly to your client.

Key Features:

⚡ Fully Automated: Triggers instantly on new QuickBooks invoices.

🧾 Custom Branding: Adds your logo and signature from public URLs.

🎨 Modern PDF Design: Clean, professional multi-page layout with smart totals and “Page X of Y” footers.

📧 Automatic Emailing: Sends the final PDF in a formatted email to your customer.

Requirements:
QuickBooks Online, n8n instance, Gotenberg (HTML→PDF converter), and public URLs for logo/signature.

## 📊 Basic Information

- **Workflow ID:** 10553
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 30
- **Downloads:** 3
- **Created:** 2025/11/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10553)

## 👤 Author

- **Name:** Chintan Prajapati
- **Username:** @satva-technolabs

## 🏷️ Categories

- Invoice Processing

## 🔗 Nodes Used

- **webhook** 
- **quickbooks** 
- **httpRequest** (×3)
- **extractFromFile** (×2)
- **merge** 
- **code** 
- **html** 
- **convertToFile** 
- **emailSend** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
