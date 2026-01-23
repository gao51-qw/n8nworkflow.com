# Aws Lambda manager with GPT-4.1 & Google Sheets audit logging via chat

> # Chat-Based AWS Lambda Manager with Automated Audit Logging (GPT-4.1 mini + Google Sheet)
&gt; This workflow provides a chat-based AI agent to manage AWS Lambda functions. It allows users to list, invoke, get details, and delete Lambda functions, while automatically recording every action into Google Sheets for audit and compliance tracking.

## **Who’s it for**
- Cloud engineers and DevOps teams managing AWS Lambda functions.  
- Developers who want a simple chat interface to perform Lambda operations.  
- Compliance and operations teams needing automatic audit logs of AWS actions.  

## **How it works / What it does**
1. A chat message triggers the **AWS Lambda Manager Agent**.  
2. The agent interprets user intent and calls one of the available tools:  
   - **Invoke Lambda Function**: Runs a Lambda function with given payload.  
   - **List Lambda Functions**: Shows all functions in the account.  
   - **Get Lambda Function**: Retrieves details/configuration of a function.  
   - **Delete a Function**: Removes a Lambda function permanently.  
3. After each action, the agent calls **Audit Logs (Google Sheets)** to record the operation type, function name, timestamp, and outcome.  
4. The agent confirms destructive actions (like delete) before execution.  

## **How to set up**
1. Add a **Chat Trigger** node to start the workflow when a user sends a message.  
2. Connect it to the **AWS Lambda Manager Agent** node.  
3. Configure the agent with the provided system prompt to enforce rules and logging.  
4. Link the agent to the following tool nodes:  
   - Invoke Lambda Function  
   - List Lambda Functions  
   - Get Lambda Function  
   - Delete a Function  
   - Audit Logs (Google Sheets with `appendOrUpdate` enabled)  
5. Deploy the workflow and test it with sample chat commands like “list functions” or “invoke testFunction”.  

## **Requirements**
- AWS account with IAM credentials that have `lambda:ListFunctions`, `lambda:InvokeFunction`, `lambda:GetFunction`, and `lambda:DeleteFunction` permissions.  
- Google Sheets API connected for storing audit logs.  
- Proper region and function names configured when invoking or deleting.  
- n8n instance or automation platform that supports agent + tool integration.  

## **How to customize the workflow**
- **Add new tools**: Extend with more AWS Lambda operations like Update Function Code or Publish Version.  
- **Enhance logging**: Include user ID, request payload, or execution results in Audit Logs.  
- **Access control**: Restrict delete actions to admins by adding role-based logic.  
- **Multi-cloud support**: Extend the agent to handle Azure/AWS/GCP serverless functions in one workflow.  
- **Custom responses**: Modify agent prompt to tailor tone (developer-friendly vs. business-friendly).  

## 📊 Basic Information

- **Workflow ID:** 8623
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 137
- **Downloads:** 13
- **Created:** 2025/9/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8623)

## 👤 Author

- **Name:** Trung Tran
- **Username:** @trungtran

## 🏷️ Categories

- DevOps
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **stickyNote** (×6)
- **@n8n/n8n-nodes-langchain.agent** 
- **awsLambdaTool** 
- **httpRequestTool** (×3)
- **googleSheetsTool** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
