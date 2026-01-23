# Optimize & update Printify title and description workflow

> # Printify Automation - Update Title and Description Workflow

This **n8n workflow** automates the process of retrieving products from Printify, generating optimized product titles and descriptions, and updating them back to the platform. It leverages OpenAI for content generation and integrates with Google Sheets for tracking and managing updates.

---

## Features

- **Integration with Printify**: Fetch shops and products through Printify's API.
- **AI-Powered Optimization**: Generate engaging product titles and descriptions using OpenAI's GPT model.
- **Google Sheets Tracking**: Log and manage updates in Google Sheets.
- **Custom Brand Guidelines**: Ensure consistent tone by incorporating brand-specific instructions.
- **Loop Processing**: Iteratively process each product in batches.

---

## Workflow Structure

### Nodes Overview

1. **Manual Trigger**: Manually start the workflow for testing purposes.
2. **Printify - Get Shops**: Retrieves the list of shops from Printify.
3. **Printify - Get Products**: Fetches product details for each shop.
4. **Split Out**: Breaks down the product list into individual items for processing.
5. **Loop Over Items**: Iteratively processes products in manageable batches.
6. **Generate Title and Desc**: Uses OpenAI GPT to create optimized product titles and descriptions.
7. **Google Sheets Integration**:
   - **Trigger**: Monitors Google Sheets for changes.
   - **Log Updates**: Records product updates, including old and new titles/descriptions.
8. **Conditional Logic**:
   - **If Nodes**: Ensure products are ready for updates and stop processing once completed.
9. **Printify - Update Product**: Sends updated titles and descriptions back to Printify.
10. **Brand Guidelines + Custom Instructions**: Sets brand tone and seasonal instructions.

---

## Setup Instructions

### Prerequisites

1. **n8n Instance**: Ensure n8n is installed and configured.
2. **Printify API Key**:
   - Obtain an API key from your Printify account.
   - Add it to n8n under `HTTP Header Auth`.
3. **OpenAI API Key**:
   - Obtain an API key from OpenAI.
   - Add it to n8n under `OpenAI API`.
4. **Google Sheets Integration**:
   - Share your Google Sheets with the Google API service account.
   - Configure Google Sheets credentials in n8n.

---

### Workflow Configuration

1. **Set Brand Guidelines**:
   - Update the `Brand Guidelines + Custom Instructions` node with your brand name, tone, and seasonal instructions.
2. **Batch Size**:
   - Configure the `Loop Over Items` node for optimal batch sizes.
3. **Google Sheets Configuration**:
   - Set the correct Google Sheets document and sheet names in the integration nodes.
4. **Run the Workflow**:
   - Start manually or configure the workflow to trigger automatically.

---

## Key Notes

- **Customization**:
  - Modify API calls to support other platforms like Printful or Vistaprint.
- **Scalability**:
  - Use batch processing for efficient handling of large product catalogs.
- **Error Handling**:
  - Configure retries or logging for any failed nodes.

---

## Output Examples

### Optimized Content Example

- **Input Title**: "Classic White T-Shirt"
- **Generated Title**: "Stylish Classic White Tee for Everyday Wear"
- **Input Description**: "Plain white T-shirt made of cotton."
- **Generated Description**: "Discover comfort and style with our classic white tee, crafted from premium cotton for all-day wear. Perfect for casual outings or layering."

---

## Next Steps

1. **Monitor Updates**:
   - Use Google Sheets to review logs of updated products.
2. **Expand Integration**:
   - Add support for more Printify shops or integrate with other platforms.
3. **Enhance AI Prompts**:
   - Customize prompts for different product categories or seasonal needs.

---

Feel free to reach out for additional guidance or troubleshooting!


## 📊 Basic Information

- **Workflow ID:** 2583
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 3283
- **Downloads:** 328
- **Created:** 2024/11/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2583)

## 👤 Author

- **Name:** Alex Kim
- **Username:** @alexk1919

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** (×4)
- **splitOut** (×2)
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.toolCalculator** 
- **@n8n/n8n-nodes-langchain.toolWikipedia** 
- **set** (×3)
- **stickyNote** (×6)
- **googleSheetsTrigger** 
- **googleSheets** (×2)
- **if** (×2)
- **code** 
- **@n8n/n8n-nodes-langchain.openAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
