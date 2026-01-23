Need help? Want access to this workflow + many more paid workflows + live Q&A sessions with a top verified n8n creator?

[Join the community](https://www.skool.com/beyond-nodes-automation-lab-2006/about)

Complete MCP server exposing 16 U.S. EPA Enforcement and Compliance History Online (ECHO) - Resource Conservation and Recovery Act  API operations to AI agents.

## ⚡ Quick Setup

1. **Import** this workflow into your n8n instance
2. **Credentials** Add U.S. EPA Enforcement and Compliance History Online (ECHO) - Resource Conservation and Recovery Act  credentials
3. **Activate** the workflow to start your MCP server
4. **Copy** the webhook URL from the MCP trigger node
5. **Connect** AI agents using the MCP URL

## 🔧 How it Works

This workflow converts the U.S. EPA Enforcement and Compliance History Online (ECHO) - Resource Conservation and Recovery Act  API into an MCP-compatible interface for AI agents.

• **MCP Trigger**: Serves as your server endpoint for AI agent requests
• **HTTP Request Nodes**: Handle API calls to https://echodata.epa.gov/echo
• **AI Expressions**: Automatically populate parameters via `$fromAI()` placeholders
• **Native Integration**: Returns responses directly to the AI agent

## 📋 Available Operations (16 total)

### 🔧 Rcra_Rest_Services.Get_Download (2 endpoints)

• **GET /rcra_rest_services.get_download**: Request RCRA Data Download
• **POST /rcra_rest_services.get_download**: Resource Conservation and Recovery Act (RCRA) Download Data Service

### 🔧 Rcra_Rest_Services.Get_Facilities (2 endpoints)

• **GET /rcra_rest_services.get_facilities**: Request RCRA Facility Search
• **POST /rcra_rest_services.get_facilities**: Resource Conservation and Recovery Act (RCRA) Facility Search Service

### 🔧 Rcra_Rest_Services.Get_Facility_Info (2 endpoints)

• **GET /rcra_rest_services.get_facility_info**: Request RCRA Facility Details
• **POST /rcra_rest_services.get_facility_info**: Resource Conservation and Recovery Act (RCRA) Facility Enhanced Search Service

### 🔧 Rcra_Rest_Services.Get_Geojson (2 endpoints)

• **GET /rcra_rest_services.get_geojson**: Request RCRA GeoJSON Data
• **POST /rcra_rest_services.get_geojson**: Resource Conservation and Recovery Act (RCRA) GeoJSON Service

### 🔧 Rcra_Rest_Services.Get_Info_Clusters (2 endpoints)

• **GET /rcra_rest_services.get_info_clusters**: Request RCRA Info Clusters
• **POST /rcra_rest_services.get_info_clusters**: Resource Conservation and Recovery Act (RCRA) Info Clusters Service

### 🔧 Rcra_Rest_Services.Get_Map (2 endpoints)

• **GET /rcra_rest_services.get_map**: Request RCRA Map Data
• **POST /rcra_rest_services.get_map**: Resource Conservation and Recovery Act (RCRA) Map Service

### 🔧 Rcra_Rest_Services.Get_Qid (2 endpoints)

• **GET /rcra_rest_services.get_qid**: Request RCRA Paginated Results
• **POST /rcra_rest_services.get_qid**: Resource Conservation and Recovery Act (RCRA) Paginated Results Service

### 🔧 Rcra_Rest_Services.Metadata (2 endpoints)

• **GET /rcra_rest_services.metadata**: Request RCRA Metadata
• **POST /rcra_rest_services.metadata**: Resource Conservation and Recovery Act (RCRA) Metadata Service

## 🤖 AI Integration

**Parameter Handling**: AI agents automatically provide values for:
• Path parameters and identifiers
• Query parameters and filters
• Request body data
• Headers and authentication

**Response Format**: Native U.S. EPA Enforcement and Compliance History Online (ECHO) - Resource Conservation and Recovery Act  API responses with full data structure

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