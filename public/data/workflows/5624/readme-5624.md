# Connect AI agents to EPA Clean Air Act data with MCP integration

> Need help? Want access to this workflow + many more paid workflows + live Q&A sessions with a top verified n8n creator?

[Join the community](https://www.skool.com/beyond-nodes-automation-lab-2006/about)

Complete MCP server exposing 16 U.S. EPA Enforcement and Compliance History Online (ECHO) - Clean Air Act API operations to AI agents.

## ⚡ Quick Setup

1. **Import** this workflow into your n8n instance
2. **Credentials** Add U.S. EPA Enforcement and Compliance History Online (ECHO) - Clean Air Act credentials
3. **Activate** the workflow to start your MCP server
4. **Copy** the webhook URL from the MCP trigger node
5. **Connect** AI agents using the MCP URL

## 🔧 How it Works

This workflow converts the U.S. EPA Enforcement and Compliance History Online (ECHO) - Clean Air Act API into an MCP-compatible interface for AI agents.

• **MCP Trigger**: Serves as your server endpoint for AI agent requests
• **HTTP Request Nodes**: Handle API calls to https://echodata.epa.gov/echo
• **AI Expressions**: Automatically populate parameters via `$fromAI()` placeholders
• **Native Integration**: Returns responses directly to the AI agent

## 📋 Available Operations (16 total)

### 🔧 Air_Rest_Services.Get_Download (2 endpoints)

• **GET /air_rest_services.get_download**: Request Air Quality Data
• **POST /air_rest_services.get_download**: Clean Air Act Download Data Service

### 🔧 Air_Rest_Services.Get_Facilities (2 endpoints)

• **GET /air_rest_services.get_facilities**: Query Air Quality Facilities
• **POST /air_rest_services.get_facilities**: Clean Air Act Facility Search

### 🔧 Air_Rest_Services.Get_Facility_Info (2 endpoints)

• **GET /air_rest_services.get_facility_info**: Request Facility Details
• **POST /air_rest_services.get_facility_info**: Clean Air Act Facility Enhanced Search

### 🔧 Air_Rest_Services.Get_Geojson (2 endpoints)

• **GET /air_rest_services.get_geojson**: Request Air Quality GeoJSON
• **POST /air_rest_services.get_geojson**: Clean Air Act GeoJSON Service

### 🔧 Air_Rest_Services.Get_Info_Clusters (2 endpoints)

• **GET /air_rest_services.get_info_clusters**: Request Info Clusters Data
• **POST /air_rest_services.get_info_clusters**: Clean Air Act Info Clusters Service

### 🔧 Air_Rest_Services.Get_Map (2 endpoints)

• **GET /air_rest_services.get_map**: Request Air Quality Map
• **POST /air_rest_services.get_map**: Clean Air Act Map Service

### 🔧 Air_Rest_Services.Get_Qid (2 endpoints)

• **GET /air_rest_services.get_qid**: Query by Query ID
• **POST /air_rest_services.get_qid**: Clean Air Act Search by Query ID

### 🔧 Air_Rest_Services.Metadata (2 endpoints)

• **GET /air_rest_services.metadata**: Request Air Quality Metadata
• **POST /air_rest_services.metadata**: Clean Air Act Metadata Service

## 🤖 AI Integration

**Parameter Handling**: AI agents automatically provide values for:
• Path parameters and identifiers
• Query parameters and filters
• Request body data
• Headers and authentication

**Response Format**: Native U.S. EPA Enforcement and Compliance History Online (ECHO) - Clean Air Act API responses with full data structure

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

- **Workflow ID:** 5624
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 118
- **Downloads:** 11
- **Created:** 2025/7/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5624)

## 👤 Author

- **Name:** David Ashby
- **Username:** @cfomodz

## 🏷️ Categories

- Miscellaneous
- AI RAG

## 🔗 Nodes Used

- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.mcpTrigger** 
- **httpRequestTool** (×16)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
