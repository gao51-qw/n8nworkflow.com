# Automate WooCommerce SEO with Yoast & AI-powered meta tag generation for FREE

> This workflow is designed to automate the generation and updating of SEO meta titles and descriptions for WooCommerce products using n8n. It leverages Google Sheets for data input, a FREE language model (Gemini 2.0 Flash Exp. via OpenRouter) for generating SEO-optimized meta tags, and WooCommerce for updating product details.

#### How It Works:
1. **Trigger**: The workflow can be triggered manually or on a schedule. The manual trigger allows for testing, while the schedule trigger can be set to run at regular intervals (e.g., every few minutes) to process new products.
   
2. **Data Retrieval**: 
   - The workflow starts by retrieving product IDs from a Google Sheets document. It looks for products that do not yet have meta titles or descriptions.
   - Using the retrieved product ID, the workflow fetches the corresponding product details from WooCommerce, including the product name, description, short description, and categories.

3. **Meta Tag Generation**:
   - The product details are passed to a language model (Gemini 2.0 Flash Exp) via OpenRouter. The model generates SEO-optimized meta titles and descriptions based on the provided content.
   - The generated meta tags are structured and validated to ensure they meet SEO best practices, such as character limits and keyword inclusion.

4. **Update WooCommerce**:
   - The generated meta title and description are then updated in the WooCommerce product metadata using the Yoast SEO fields.

5. **Update Google Sheets**:
   - Finally, the workflow updates the Google Sheets document with the newly generated meta tags, along with the product URL, title, and the timestamp of the update.

#### Set Up Steps:
1. **Google Sheets Setup**:
   - Create a copy of the provided Google Sheets template and insert WooCommerce product IDs in column "B".
   - Ensure the Google Sheets document has columns for `METATITLE`, `METADESCRIPTION`, `URL`, `TITLE POST`, and `DATA` (timestamp).

2. **n8n Workflow Configuration**:
   - **Google Sheets Node**: Configure the "Get product ID" node to connect to your Google Sheets document. Use OAuth2 for authentication.
   - **WooCommerce Node**: Set up the WooCommerce nodes to connect to your WooCommerce store using the WooCommerce API credentials.
   - **OpenRouter Node**: Configure the "Gemini 2.0 Flash Exp" node with your OpenRouter API credentials to access the language model.
   - **Structured Output Parser**: Ensure the output parser is set to handle the structured data format for meta titles and descriptions.

3. **Workflow Execution**:
   - Trigger the workflow manually to test the process or set up a schedule trigger to automate the workflow at regular intervals.
   - Monitor the workflow execution to ensure that meta tags are generated and updated correctly in both WooCommerce and Google Sheets.

4. **Validation**:
   - After the workflow runs, verify that the meta titles and descriptions in WooCommerce are correctly updated and that the Google Sheets document reflects the changes.

This workflow streamlines the process of optimizing WooCommerce product pages for SEO, saving time and ensuring consistency in meta tag generation.


---


### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/). 

## 📊 Basic Information

- **Workflow ID:** 2963
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 7037
- **Downloads:** 703
- **Created:** 2025/2/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2963)

## 👤 Author

- **Name:** Davide
- **Username:** @n3witalia

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **scheduleTrigger** 
- **googleSheets** (×2)
- **wooCommerce** (×2)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
