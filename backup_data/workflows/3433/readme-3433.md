# Smart sales support chatbot with GPT-4o and Google Sheets

> ## Who is this tempate for?
This workflow powers a **simple yet effective customer and sales support chatbot** for your webshop. It's perfect for solopreneurs who want to **automate customer interactions without relying on expensive or complex support tools**.

## How it works?
The chatbot listens to user requests—such as checking product availability—and automatically handles the following

- Fetches product information from a Google Sheet
- Answers customer queries
- Places an order
- Updates the stock after a successful purchase

*Everything runs through a single Google Sheet used for both stock tracking and order management.*

## **Setup Instructions**

Before you begin, connect your Google Sheets credentials by following this guide: This will be used to connect all the tools to Google Sheets
👉 [Setup Google sheets credentials](https://docs.n8n.io/integrations/builtin/credentials/google/oauth-generic/#finish-your-n8n-credential)

- ### Get Stock

	- Open "Get Stock" tool node and select the Google sheet credentials you created. 
	- Choose the correct google sheet document and sheet name and you are done.
	
- ### Place order
	
	- Go to your "Place Order" tool node and select the Google sheet credentials you have created. 
	- Choose the correct google sheet document and sheet name.

- ### Update Stock
	- - Open your "Update Stock" tool node and select the Google sheet credentials you have created. 
	- Choose the correct google sheet document and sheet name.
	- In "Mapping Column Mode" section select map each column manually.
	- In "Column to match on" select the column with a unique identifier (e.g., Product ID) to match stock items.
	- In values to update section, add only the column(s) that need to be updated—usually the stock count.
	
- ### AI Agent node 
	- Adjust the prompt according to your use case and customize what you need. 

## Google Sheet Template
**Stock sheet**

|Case ID|Phone Model|Case Name|Case Type|Image URL|Quantity Avaialble|Initital Inventory|Sold|
|-|-|-|-|-|-|-|-|
|1023|Iphone 14 pro|Black Leather|Magsafe|https://example.com/url|90|100|10

**Order sheet**

|Case ID|Phone Model|Case Name|Name|Phone Number|Address|
|-|-|-|-|-|-|
|1023|Black Leather |Iphone 14 pro|Fernando Torres|9998898888|Paris, France



## 📊 Basic Information

- **Workflow ID:** 3433
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 9175
- **Downloads:** 917
- **Created:** 2025/4/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3433)

## 👤 Author

- **Name:** Babish Shrestha
- **Username:** @bbz

## 🏷️ Categories

- Support Chatbot
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **googleSheetsTool** (×3)
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
