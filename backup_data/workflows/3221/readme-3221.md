# 📦 Electronic data interchange (EDI) message parsing with Gmail and Google Sheet

> *Tags: Supply Chain Management, Logistics, Transportation, Data Transmission*

### Context
Hey! I'm [Samir](https://samirsaci.com) , a **Supply Chain Engineer and Data Scientist from Paris** founder of 
[LogiGreen Consulting](https://www.logi-green.com/)

We help **small and medium businesses** **improve their logistics processes** using AI, Data Analytics and Automation.

&gt; Sustainable and Efficient supply chains with N8N!

📬 For business inquiries, you can add me on [Here](https://www.linkedin.com/in/samir-saci)

### What is an EDI Message?
Electronic Data Interchange (EDI) is **a standardized method** of automatically transferring data between computer systems.

![Data Exchange between Systems](https://www.samirsaci.com/content/images/size/w1000/2025/03/image-20.png)

They ensure the **smooth flow of essential transactional data**, such as **purchase orders**, invoices, **shipping notices**, and more.

[![Example of Order Translated in EDI](https://www.samirsaci.com/content/images/size/w1000/2025/03/image-21.png)](https://youtu.be/-phwXeYk7Es)

For instance, a manufacturing company can receive purchase orders from a retailer via EDI.

[![Example of Transactions](https://www.samirsaci.com/content/images/size/w1000/2025/03/image-22.png)](https://youtu.be/-phwXeYk7Es)

However, they need **complex integration** for the transmission and processing of the messages.

### Who is this template for?
This workflow template is designed for **small companies** that cannot connect to their customers and need to **manually process** the EDI messages received.

### How does it work?
This workflow uses a **Gmail Trigger** that analyzes all the incoming emails.
1. **📧 Gmail Trigger** → Detects emails with "EDI" in the subject.
2. **📜 Parses EDI Message** → Uses a JavaScript Code Node to extract structured data.
3. **📊 Formats the Data** → Converts it into a table-friendly format.
4. **📑 Updates Google Sheets** → Automatically logs the processed orders.

### Prerequisite
This workflow does not require any additional paying subscription.

- A **Google Drive Account** with a folder including a Google Sheet
- API Credentials: **Google Drive API**, **Google Sheets API** and **Gmail API**
- A Google sheet to store the shipment records. *You do not need to prepare the columns.*

### Next Steps
Follow the **sticky notes** to set up the parameters inside each node and get ready to improve your logistics operations!


**📺 Watch the Step-by-Step Guide** 

[![image.png](https://www.samirsaci.com/content/images/2025/04/EDI-Message-Parser.png)](https://youtu.be/-phwXeYk7Es)

🎥 [Check My Tutorial](https://youtu.be/-phwXeYk7Es)

🚀 Interested in applications of N8N for Logistics & Supply Chain Management? Let's connect on [Linkedin](www.linkedin.com/in/samir-saci)

### Notes
- This template includes an example of EDI message to test the workflow.
- If you want to learn more about Electronic Data Interchange: 🚚 [Blog Article about Electronic Data Interchange (EDI)](https://www.samirsaci.com/what-is-edi-electronic-data-interchange/)

*This workflow has been created with N8N  1.82.1*
*Submitted: March 19th, 2025*

## 📊 Basic Information

- **Workflow ID:** 3221
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 2436
- **Downloads:** 243
- **Created:** 2025/3/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3221)

## 👤 Author

- **Name:** Samir Saci
- **Username:** @samirsaci

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **stickyNote** (×6)
- **set** (×2)
- **googleSheets** (×2)
- **if** (×2)
- **gmailTrigger** 
- **gmail** 
- **code** (×2)
- **merge** 
- **splitOut** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
