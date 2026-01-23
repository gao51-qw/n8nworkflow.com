# Save n8n Cloud invoices received in Gmail in Google Drive

> ## Who this is for
This template is for everyone that wants to download their n8n Cloud invoices automatically as a PDF instead of downloading them manually.
## How it works
This workflow checks your Gmail inbox for new n8n invoice emails from n8n's payment provider Paddle. Once it finds something, it converts the URL into a PDF using pdflayer and saves it in Google Drive.
## Setup
1. Setup your **Gmail** and **Google Drive** credentials
1. Create a free account at https://pdflayer.com/
2. Insert your **pdflayer** API key into the `Setup` node
3. Insert the URL to the wanted drive folder into the setup node (make sure to remove everything after the `?`)
## How to adjust it to your need
Instead of saving the PDF in Google drive, you could also save it in your local system, any other storage provider or send the PDF automatically to the right person in your company.

## 📊 Basic Information

- **Workflow ID:** 2393
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 3486
- **Downloads:** 348
- **Created:** 2024/8/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2393)

## 👤 Author

- **Name:** Niklas Hatje
- **Username:** @nik8n

## 🏷️ Categories

- Invoice Processing

## 🔗 Nodes Used

- **gmailTrigger** 
- **if** 
- **splitOut** 
- **filter** 
- **noOp** 
- **stickyNote** (×2)
- **set** 
- **httpRequest** (×2)
- **googleDrive** (×2)
- **html** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
