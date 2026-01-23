🤖 AI-Powered Hardware Store Assistant with PostgreSQL & MCP
Supercharge your customer service with this conversational AI agent! This n8n workflow provides a complete solution for a hardware store chatbot that connects to a PostgreSQL database in real-time. It uses Google Gemini for natural language understanding and the powerful MCP (My Credential Provider) nodes to securely expose database operations as tools for the AI agent.
✨ Key Features
💬 Conversational Product Queries: Allow users to ask for products by name, category, description, or even technical notes.
📦 Real-time Inventory & Pricing: The agent fetches live data directly from your PostgreSQL database, ensuring accurate stock and price information.
💰 Automatic Quote Generation: Ask the agent to create a detailed quote for a list of materials, and it will calculate quantities and totals.
🧠 Smart Project Advice: The agent is primed with a system message to act as an expert, helping users calculate materials for projects (e.g., "How much drywall do I need for a 10x12 foot room?").
🛠️ Tech Stack & Core Components
Technologies Used
🗄️ PostgreSQL: For storing and managing product data.
✨ Google Gemini API: The large language model that powers the agent's conversational abilities.
🔗 MCP (My Credential Provider): Securely exposes database queries as callable tools without exposing credentials directly to the agent.
n8n Nodes Used
@n8n/n8n-nodes-langchain.agent: The core AI agent that orchestrates the workflow.
@n8n/n8n-nodes-langchain.chatTrigger: To start a conversation.
@n8n/n8n-nodes-langchain.lmChatGoogleGemini: The connection to the Google Gemini model.
n8n-nodes-base.postgresTool: Individual nodes for querying products by ID, name, category, etc.
@n8n/n8n-nodes-langchain.mcpTrigger: Exposes the PostgresTools.
@n8n/n8n-nodes-langchain.mcpClientTool: Allows the AI agent to consume the tools exposed by the MCP Trigger.
🚀 How to Get Started: Setup & Configuration
Follow these steps to get your AI assistant up and running:
Configure your Database:
This template assumes a PostgreSQL database named bd_ferreteria with a productos table. You can adapt the PostgresTool nodes to match your own schema.
Set up Credentials:
Create and assign your PostgreSQL credentials to each of the six PostgresTool nodes.
Create and assign your Google Gemini API credentials in the Language Model (Google Gemini) node.
Review the System Prompt:
The main AI Agent node has a detailed system prompt that defines its persona and capabilities. Feel free to customize it to better fit your business's tone and product line.
Activate the Workflow:
Save and activate the workflow. You can now start interacting with your new AI sales assistant through the chat interface!
💡 Use Cases & Customization
While designed for a hardware store, this template is highly adaptable. You can use it for:
Any e-commerce store with a product database (e.g., electronics, clothing, books).
An internal IT support bot that queries a database of company assets.
A booking assistant that checks availability in a database of appointments or reservations.