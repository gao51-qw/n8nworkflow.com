# Automate multi-step onboarding with Google Sheets, Forms and Gmail notifications

> 

This **n8n workflow** enables teams to automate and standardize multi-step onboarding or messaging workflows using **Google Sheets**, **Forms**, **Gmail**, and dynamic logic powered by **Code** and **Switch** nodes. It ensures the right email is sent at the right step, tracks progress in Google Sheets, and handles errors or escalations.

---

## **🧑‍💼 Who is this for?**

- HR and PeopleOps teams managing candidate or employee onboarding processes
    
- Customer success or onboarding teams handling structured, step-based journeys
    
- Any team using Google Sheets as a lightweight CRM or workflow tracker
    

---

## **🧩 What problem is this workflow solving?**

  

Coordinating multi-step onboarding or communication flows using spreadsheets and email can quickly become error-prone. This workflow:

- Dynamically detects the current step and status from a Google Sheet
    
- Sends the right message at the right time
    
- Updates statuses and creates next steps
    
- Handles errors with escalation logic
    

---

## **⚙️ What this workflow does**

1. **Trigger via Form or Manual Execution**
    
    - Users can fill a web form or run the workflow manually.
        
    
2. **Read Google Sheets**
    
    - Retrieves step definitions and user progress from two sheets:
        
        - One for message templates
            
        - One for user step/status tracking
            
        
    
3. **Generate Message Table**
    
    - Uses custom JavaScript to parse and structure message templates based on step and message type (sent, completed, error).
        
    
4. **Determine User Step**
    
    - A **Switch node** checks the user’s current step and status.
        
    - Logic branches into the correct flow for message sending and verification.
        
    
5. **Send Message**
    
    - Message variables are replaced using a **Code** node.
        
    - Final message is sent via Gmail or another workflow (using Execute Workflow).
        
    
6. **Update Sheets**
    
    - Marks the step as completed or passed.
        
    - Creates the next step in the sheet with updated status.
        
    
7. **Handle Errors**
    
    - If the step fails, an error message is sent to the responsible admin.
        
    

---

## **🛠️ Setup**

1. **Connect Google Sheets and Gmail**:
    
    - Ensure credentials are configured in n8n.
        
    
2. **Prepare Sheets**:
    
    - One sheet for messages with steps/types/subjects/content. You can copy the one from [here](https://docs.google.com/spreadsheets/d/17_fUSV9zJo8Ya6ulvCOon2wjoeEmOwDFrpK1Xxa9gmw/edit?usp=sharing)
        
    - One sheet for tracking users and their current step/status. You can copy the one from [here](https://docs.google.com/spreadsheets/d/1HBLJNt8hAXNkqj6lfwQilBr9FCRxjT3j0r0Ni6cgoYA/edit?usp=sharing)
        
    
3. **Customize Webform**:
    
    - Use the provided form to capture First Name, Last Name, and Email.
        
    
4. **Connect to Your Email Templates**:
    
    - Ensure your message structure follows the expected JSON format by step and type.
        
    

---

## **✏️ How to customize this workflow to your needs**

- **Add More Steps**: Expand the Switch logic and template sheet for more steps.
    
- **Use Different Channels**: Replace Gmail with Slack, Telegram, or another messaging node.
    
- **Change Form Fields**: Adjust the FormTrigger node to match your onboarding fields.
    
- **Custom Error Logic**: Customize escalation emails, including admin routing or Slack alerts.
    
- **Integrate with Databases**: Swap Google Sheets with Airtable, PostgreSQL, or Notion.
    

---

This workflow is ideal for automating repetitive, step-based processes involving human communication. It’s modular, extensible, and powered by spreadsheet-driven logic.

## 📊 Basic Information

- **Workflow ID:** 7809
- **Complexity:** advanced
- **Node Count:** 31
- **Views:** 658
- **Downloads:** 65
- **Created:** 2025/8/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7809)

## 👤 Author

- **Name:** PollupAI
- **Username:** @Pollup

## 🏷️ Categories

- HR
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **code** (×2)
- **googleSheets** (×6)
- **scheduleTrigger** 
- **if** 
- **form** 
- **noOp** (×2)
- **executeWorkflowTrigger** 
- **gmail** 
- **executeWorkflow** (×4)
- **set** (×2)
- **stickyNote** (×5)
- **switch** (×3)
- **formTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 31 nodes with 22 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
