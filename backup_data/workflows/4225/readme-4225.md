# Automate cryptocurrency funding fee tracking with Binance API and Airtable

> ### Video Guide

I prepared a detailed guide that showed the whole process of integrating the Binance API and storing data in Airtable to manage funding statements associated with tokens in a wallet.

[![Youtube Thumbnail](https://res.cloudinary.com/de9jgixzm/image/upload/qkd9krobszxhrzk34wpg)](https://youtu.be/GBZRduOzOzg)

[Youtube Link](https://youtu.be/GBZRduOzOzg)

### Who is this for?
This workflow is ideal for developers, financial analysts, and cryptocurrency enthusiasts who want to automate the process of managing funding statements and token prices. It’s particularly useful for those who need a systematic approach to track and report funding fees associated with tokens in their wallets.

### What problem does this workflow solve?
Managing funding statements and token prices across multiple platforms can be cumbersome and error-prone. This workflow automates the process, allowing users to seamlessly fetch funding fees from Binance and record them alongside token prices in Airtable, minimizing manual data entry and potential discrepancies.

### What this workflow does
This workflow integrates the Binance API with an Airtable database, facilitating the storage and management of funding statements linked to tokens in a wallet. The agent can:
- Fetch funding fees and current positions from Binance.
- Aggregate data to create structured funding statements.
- Insert records into Airtable, ensuring proper linkage between funding data and tokens.

1. **API Authentication**: The workflow establishes authentication with the Binance API using a Crypto Node to handle API keys and signatures, ensuring secure and verified requests.
2. **Data Collection**: It retrieves necessary data, including funding fees and current positions with properly formatted API requests to ensure seamless communication with Binance.
3. **Airtable Integration**: The workflow inserts aggregated funding statements and token data into the corresponding Airtable records, managing token existence checks to avoid duplicate entries.

### Setup

1. **Set Up Airtable Database**:
   - Create an Airtable base with tables for Funding Statements and Tokens.

2. **Generate Binance API Key**:
   - Log in and create an API key with appropriate permissions.

3. **Set Up Authentication in N8N**:
   - Utilize a Crypto Node for Binance API authentication.

4. **Configure API Request to Binance**:
   - Set request method and headers for communication with the Binance API.

5. **Fetch Funding Fees and Current Positions**:
   - Retrieve funding data and current positions efficiently.

6. **Aggregate and Create Statements**:
   - Aggregate data to create detailed funding statements.

7. **Insert Data into Airtable**:
   - Input the structured data into Airtable and manage token records.

8. **Using Get Price Node**:
   - Implement a Get Price Node to maintain current token price tracking without additional setup.

## 📊 Basic Information

- **Workflow ID:** 4225
- **Complexity:** advanced
- **Node Count:** 31
- **Views:** 2028
- **Downloads:** 202
- **Created:** 2025/5/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4225)

## 👤 Author

- **Name:** Mark Shcherbakov
- **Username:** @lowcodingdev

## 🏷️ Categories

- Crypto Trading

## 🔗 Nodes Used

- **crypto** (×3)
- **set** (×4)
- **splitOut** 
- **httpRequest** (×4)
- **aggregate** (×3)
- **airtable** (×6)
- **scheduleTrigger** (×2)
- **stickyNote** (×7)
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 31 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
