# Complete Lyft API integration for AI agents with 16 operations using MCP

> Need help? Want access to this workflow + many more paid workflows + live Q&A sessions with a top verified n8n creator?

[Join the community](https://www.skool.com/beyond-nodes-automation-lab-2006/about)

Complete MCP server exposing 16 Lyft API operations to AI agents.

## ⚡ Quick Setup

1. **Import** this workflow into your n8n instance
2. **Credentials** Add Lyft credentials
3. **Activate** the workflow to start your MCP server
4. **Copy** the webhook URL from the MCP trigger node
5. **Connect** AI agents using the MCP URL

## 🔧 How it Works

This workflow converts the Lyft API into an MCP-compatible interface for AI agents.

• **MCP Trigger**: Serves as your server endpoint for AI agent requests
• **HTTP Request Nodes**: Handle API calls to https://api.lyft.com/v1
• **AI Expressions**: Automatically populate parameters via `$fromAI()` placeholders
• **Native Integration**: Returns responses directly to the AI agent

## 📋 Available Operations (16 total)

### 🔧 Cost (1 endpoints)

• **GET /cost**: Retrieve Cost Estimate

### 🔧 Drivers (1 endpoints)

• **GET /drivers**: List Nearby Drivers

### 🔧 Eta (1 endpoints)

• **GET /eta**: Retrieve Pickup ETA

### 🔧 Profile (1 endpoints)

• **GET /profile**: Retrieve User Profile

### 🔧 Rides (7 endpoints)

• **GET /rides**: Update Sandbox Ride Status
• **POST /rides**: Request a Lyft
• **GET /rides/{id}**: Get the ride detail of a given ride ID
• **POST /rides/{id}/cancel**: Cancel a ongoing requested ride
• **PUT /rides/{id}/destination**: Update the destination of the ride
• **PUT /rides/{id}/rating**: Add the passenger's rating, feedback, and tip
• **GET /rides/{id}/receipt**: Get the receipt of the rides.

### 🔧 Ridetypes (1 endpoints)

• **GET /ridetypes**: Update Driver Availability

### 🔧 Sandbox (4 endpoints)

• **PUT /sandbox/primetime**: Set Prime Time Percentage
• **PUT /sandbox/rides/{id}**: Propagate ride through ride status
• **PUT /sandbox/ridetypes**: Preset types of rides for sandbox
• **PUT /sandbox/ridetypes/{ride_type}**: Driver availability for processing ride request

## 🤖 AI Integration

**Parameter Handling**: AI agents automatically provide values for:
• Path parameters and identifiers
• Query parameters and filters
• Request body data
• Headers and authentication

**Response Format**: Native Lyft API responses with full data structure

**Error Handling**: Built-in n8n HTTP request error management

## 💡 Usage Examples

Connect this MCP server to any AI agent or workflow:

• **Claude Desktop**: Add MCP server URL to configuration
• **Cursor**: Add MCP server SSE URL to configuration
• **Custom AI Apps**: Use MCP URL as tool endpoint
• **API Integration**: Direct HTTP calls to MCP endpoints

## ✨ Benefits

• **Zero Setup**: No parameter mapping or configuration needed
• **AI-Ready**: Built-in `$fromAI()` expressions for all parameters
• **Production Ready**: Native n8n HTTP request handling and logging
• **Extensible**: Easily modify or add custom logic

&gt; 🆓 **[Free for community use](https://github.com/Cfomodz/community-use)!** Ready to deploy in under 2 minutes.

## 📊 Basic Information

- **Workflow ID:** 5606
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 110
- **Downloads:** 11
- **Created:** 2025/7/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5606)

## 👤 Author

- **Name:** David Ashby
- **Username:** @cfomodz

## 🏷️ Categories

- Engineering
- AI RAG

## 🔗 Nodes Used

- **stickyNote** (×8)
- **@n8n/n8n-nodes-langchain.mcpTrigger** 
- **httpRequestTool** (×16)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
