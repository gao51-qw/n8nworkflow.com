# Automated end-to-end fine-tuning of OpenAI models with Google Drive integration

> ### **1. How it Works**  
This n8n workflow automates **fine-tuning OpenAI models** through these key steps:  
- **Manual Trigger**:  
  - Starts with the *"When clicking ‘Test workflow’"* event to initiate the process.  
  - Downloads a `.jsonl` file from Google Drive   
- **Upload to OpenAI**:  
  - Uploads the `.jsonl` file to OpenAI via the *"Upload File"* node (with purpose `"fine-tune"`).  
- **Create Fine-tuning Job**:  
  - Sends a **POST** request to the endpoint `https://api.openai.com/v1/fine_tuning/jobs` with:  
    ```json  
    {  
      "training_file": "{{ $json.id }}",  
      "model": "gpt-4o-mini-2024-07-18"  
    }  
    ```  
  - OpenAI automatically starts training the model based on the provided file.  
- **Interaction with the Trained Model**:  
  - An *"AI Agent"* uses the custom model (e.g., `ft:gpt-4o-mini-2024-07-18:n3w-italia::XXXX7B`) to respond to chat messages.  

---

### **2. Set up Steps**  
**To configure the workflow:**  
1. **Prepare the Training File**:  
   - Create a `.jsonl` file following the specified syntax (e.g., travel assistant Q/A examples).  
   - Upload it to Google Drive and update the ID in the *"Google Drive"* node.  

2. **Configure Credentials**:  
   - **Google Drive**: Connect an account via OAuth2 (`googleDriveOAuth2Api`).  
   - **OpenAI**: Add your API key in the *"OpenAI Chat Model"* and *"Upload File"* nodes.  

3. **Customize the Model**:  
   - In the *"OpenAI Chat Model"* node, specify the name of your fine-tuned model (e.g., `ft:gpt-4o-mini-...`).  
   - Update the HTTP request body (`Create Fine-tuning Job`) if needed (e.g., a different base model).  

4. **Start the Workflow**:  
   - Use the manual trigger (*"Test workflow"*) to begin the upload and training process.  
   - Test the model via the *"Chat Trigger"* (chat messages).  

5. **Integrated Documentation**:  
   - Follow the instructions in the **Sticky Notes** to:  
     - Properly format the `.jsonl` (Step 1).  
     - Monitor progress on OpenAI (Step 2, link: `https://platform.openai.com/finetune/`).  

--- 

**Note**: Ensure the `.jsonl` file adheres to OpenAI’s required structure and that credentials are valid.

## 📊 Basic Information

- **Workflow ID:** 2781
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 4399
- **Downloads:** 439
- **Created:** 2025/1/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2781)

## 👤 Author

- **Name:** Davide
- **Username:** @n3witalia

## 🏷️ Categories

- Engineering
- AI Chatbot

## 🔗 Nodes Used

- **manualTrigger** 
- **googleDrive** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **stickyNote** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
