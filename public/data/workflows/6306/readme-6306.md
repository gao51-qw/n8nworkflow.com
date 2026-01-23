# BIN code lookup with apilayer API

> This workflow is designed to validate and fetch information about a card using the BIN code. It utilizes apilayer's BIN Check API and provides details like the card brand, type, issuing bank, and country.

Prerequisites:
- An apilayer account
- API Key for the BIN Check API

---

Steps in n8n:

Step 1: Manual Trigger
- Node Type: Manual Trigger
- Purpose: Starts the workflow manually

Step 2: Set BIN Code and API Key
- Node Type: Set
- Fields to set:
  - bin_code: A sample BIN like JH4KA7560RC003647
  - apikey: Your apilayer API key

Step 3: HTTP Request
- Node Type: HTTP Request
- Method: GET
- URL: https://api.apilayer.com/bincheck/{{ $json.bin_code }}
- Headers:
  - Name: apiKey
  - Value: {{ $json.apikey }}

(Optional) Step 4: Handle the Output
- Add nodes to store, parse, or visualize the API response.

---

Expected Output:
The response from apilayer contains detailed information about the provided BIN:
- Card scheme (e.g., VISA, MasterCard)
- Type (credit, debit, prepaid)
- Issuing bank
- Country of issuance

---

Example Use Case:
Use this to build a fraud prevention microservice, pre-validate card data before sending to payment gateways, or enrich card-related logs.


## 📊 Basic Information

- **Workflow ID:** 6306
- **Complexity:** beginner
- **Node Count:** 4
- **Views:** 55
- **Downloads:** 5
- **Created:** 2025/7/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6306)

## 👤 Author

- **Name:** Sarfaraz Muhammad Sajib
- **Username:** @sarfarazmuhammad

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **manualTrigger** 
- **set** 
- **stickyNote** 
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 4 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
