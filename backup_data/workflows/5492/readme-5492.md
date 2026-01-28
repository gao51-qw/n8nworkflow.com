# Generate & send spare parts price quotes with Gmail, Sheets and Gemini AI

> ## **Who's it for**

This workflow is perfect for **sales teams**, **customer service departments**, and **businesses** that frequently handle spare parts inquiries via email. It's especially valuable for companies managing **multiple products with complex pricing structures** who want to automate their quotation process while maintaining professional, multilingual communication.

![Screenshot 20250630 214522.png](fileId:1653)

---

## **What it does**

This workflow:

- **Monitors your Gmail inbox** for incoming spare parts requests  
- **Automatically generates professional HTML price quotes** in the sender's language  
- **Sends personalized replies**  
- Uses **AI to detect the email language** (supports Turkish, English, German, and more)  
- **Extracts project or part codes**  
- **Fetches pricing data from Google Sheets**  
- **Calculates totals accurately**  
- **Formats everything** into a clean, professional quote that matches your brand  
![ddd.png](fileId:1652)
---

## **How it works**

1. **Schedule Trigger** runs every minutes to check for new emails  
2. **Gmail node** fetches the latest unread email  
3. **Keyword detection** filters for spare parts-related terms in multiple languages  
4. **AI Agent** processes the request by:  
   - Detecting the email's language  
   - Extracting project/part codes  
   - Querying three Google Sheets: CRM, Bill of Materials, Pricing  
   - Calculating line totals and grand total  
   - Generating a professional HTML quote in the sender's language  
5. **Gmail reply** sends the quote and marks the original email as read  

---

## **Requirements**

- n8n self-hosted or cloud instance  
- Gmail account with OAuth2 authentication  
- Google Sheets with proper structure (3 sheets for CRM, BoM, and Pricing data)  
- Google Gemini API key for AI processing  
- Basic understanding of Google Cloud Console for OAuth setup  

---

## **How to set up**

1. **Import** the workflow into your n8n instance  
2. **Create three Google Sheets** with the following column structure:

   - *CRM Sheet*: `Email`, `ProjectCode`, `CustomerName`  
   - *Bill of Materials*: `ProjectCode`, `PartCode`, `PartDescription`, `Quantity`  
   - *Pricing Sheet*: `PartCode`, `UnitPriceEUR`, `PartDescription`  

3. **Configure credentials**:
   - Set up **Gmail OAuth2** in Google Cloud Console  
   - Configure **Google Sheets OAuth2** (can use same project)  
   - Get your **Google Gemini API key** from Google AI Studio  

4. **Update the workflow**:
   - Replace placeholder **Sheet IDs** in the CRM, BoM, and Pricing nodes  
   - Adjust **company name** in the AI Agent’s system message  
   - Modify **keyword detection** if needed  

5. **Test with a sample email** before activating  

---

## **How to customize the workflow**

- **Add more languages**: Update the keyword detection node with additional terms  
- **Modify the quote template**: Edit the HTML in the AI Agent's message to match your branding  
- **Change data sources**: Replace Google Sheets with PostgreSQL or MySQL nodes  
- **Add approval steps**: Insert a manual approval node for quotes above a certain value  
- **Include attachments**: Add PDF or product spec file nodes  
- **Enhance notifications**: Add Slack or Teams notifications after quote is sent  
- **Implement follow-ups**: Create a separate workflow for reminder emails  

---

This template provides a **solid foundation** for automating your quotation process, while staying flexible to fit your specific business needs.

*Feel free to contact me for further implementation guidelines:*
[LinkedIn: Berke](https://www.linkedin.com/in/berke-celik-a1466a136/)

## 📊 Basic Information

- **Workflow ID:** 5492
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 7286
- **Downloads:** 728
- **Created:** 2025/7/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5492)

## 👤 Author

- **Name:** berke
- **Username:** @berke

## 🏷️ Categories

- CRM
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×6)
- **scheduleTrigger** 
- **gmail** (×3)
- **if** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** 
- **googleSheetsTool** (×3)
- **@n8n/n8n-nodes-langchain.toolCalculator** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
