## ⚠️ ADVANCED USE ONLY - U.S. EPA Enforcement and Compliance History Online (ECHO) - Clean Water Act (CWA) Rest Services MCP Server (36 operations)

### 🚨 This workflow is for advanced users only!

Need help? Want access to this workflow + many more paid workflows + live Q&A sessions with a top verified n8n creator?

[Join the community](https://www.skool.com/beyond-nodes-automation-lab-2006/about)

This MCP server contains **36 operations** which is significantly more than the recommended maximum of tools for most AI clients.

### 🔍 Recommended Alternative for basic use cases
**Seek a simplified MCP server** that utilizes the official n8n tool implementation for U.S. EPA Enforcement and Compliance History Online (ECHO) - Clean Water Act (CWA) Rest Services if available, or an MCP server with only common operations as it will be more efficient and easier to manage.

### 🛠️ Advanced Usage Requirements

**BEFORE adding this MCP server to your client:**
### Disable or delete unused nodes - Review sections and disable/delete those you don't need

**AFTER adding the MCP server to your client:**
1.**Selective tool enabling** - Instead of enabling all tools (default), manually select only the specific tools you need for *that* Workflow's MCP client.
2. **Monitor performance** - Too many tools can slow down AI responses

### 💡 Pro Tips
**Keep maximum 40 enabled tools** - Most AI clients perform better with fewer tools
- Group related operations and only enable one group at a time
- Use the overview note to understand what each operation group does

- Ping me on [discord](https://discord.me/cfomodz) if your business needs this implemented professionally
## ⚡ Quick Setup

1. **Import** this workflow into your n8n instance
2. **Credentials** Add U.S. EPA Enforcement and Compliance History Online (ECHO) - Clean Water Act (CWA) Rest Services credentials
3. **Activate** the workflow to start your MCP server
4. **Copy** the webhook URL from the MCP trigger node
5. **Connect** AI agents using the MCP URL

## 🔧 How it Works

This workflow converts the U.S. EPA Enforcement and Compliance History Online (ECHO) - Clean Water Act (CWA) Rest Services API into an MCP-compatible interface for AI agents.

• **MCP Trigger**: Serves as your server endpoint for AI agent requests
• **HTTP Request Nodes**: Handle API calls to https://echodata.epa.gov/echo
• **AI Expressions**: Automatically populate parameters via `$fromAI()` placeholders
• **Native Integration**: Returns responses directly to the AI agent

## 📋 Available Operations (36 total)

### 🔧 Cwa_Rest_Services.Get_Download (2 endpoints)

• **GET /cwa_rest_services.get_download**: Submit CWA Download Data
• **POST /cwa_rest_services.get_download**: Clean Water Act (CWA) Download Data Service

### 🔧 Cwa_Rest_Services.Get_Facilities (2 endpoints)

• **GET /cwa_rest_services.get_facilities**: Submit CWA Facility Search
• **POST /cwa_rest_services.get_facilities**: Clean Water Act (CWA) Facility Search Service

### 🔧 Cwa_Rest_Services.Get_Facility_Info (2 endpoints)

• **GET /cwa_rest_services.get_facility_info**: Submit CWA Facility Details
• **POST /cwa_rest_services.get_facility_info**: Clean Water Act (CWA) Facility Enhanced Search Service

### 🔧 Cwa_Rest_Services.Get_Geojson (2 endpoints)

• **GET /cwa_rest_services.get_geojson**: Submit CWA GeoJSON Data
• **POST /cwa_rest_services.get_geojson**: Clean Water Act (CWA) GeoJSON Service

### 🔧 Cwa_Rest_Services.Get_Info_Clusters (2 endpoints)

• **GET /cwa_rest_services.get_info_clusters**: Submit CWA Info Clusters
• **POST /cwa_rest_services.get_info_clusters**: Clean Water Act (CWA) Info Clusters Service

### 🔧 Cwa_Rest_Services.Get_Map (2 endpoints)

• **GET /cwa_rest_services.get_map**: Submit CWA Map Data
• **POST /cwa_rest_services.get_map**: Clean Water Act (CWA) Map Service

### 🔧 Cwa_Rest_Services.Get_Qid (2 endpoints)

• **GET /cwa_rest_services.get_qid**: Submit CWA Paginated Results
• **POST /cwa_rest_services.get_qid**: Clean Water Act (CWA) Paginated Results Service

### 🔧 Cwa_Rest_Services.Metadata (2 endpoints)

• **GET /cwa_rest_services.metadata**: Submit CWA Metadata
• **POST /cwa_rest_services.metadata**: Clean Water Act (CWA) Metadata Service

### 🔧 Rest_Lookups.Bp_Tribes (2 endpoints)

• **GET /rest_lookups.bp_tribes**: Submit BP Tribes Data
• **POST /rest_lookups.bp_tribes**: ECHO BP Tribes Lookup Service

### 🔧 Rest_Lookups.Cwa_Parameters (2 endpoints)

• **GET /rest_lookups.cwa_parameters**: Submit CWA Parameters
• **POST /rest_lookups.cwa_parameters**: ECHO CWA Parameter Lookup Service

### 🔧 Rest_Lookups.Cwa_Pollutants (2 endpoints)

• **GET /rest_lookups.cwa_pollutants**: Submit CWA Pollutants
• **POST /rest_lookups.cwa_pollutants**: ECHO CWA Pollutants Lookup Service

### 🔧 Rest_Lookups.Federal_Agencies (2 endpoints)

• **GET /rest_lookups.federal_agencies**: Submit Federal Agencies
• **POST /rest_lookups.federal_agencies**: ECHO Federal Agency Lookup Service

### 🔧 Rest_Lookups.Icis_Inspection_Types (2 endpoints)

• **GET /rest_lookups.icis_inspection_types**: Submit ICIS Inspection Types
• **POST /rest_lookups.icis_inspection_types**: ECHO ICIS NPDES Inspection Types Lookup Service

### 🔧 Rest_Lookups.Icis_Law_Sections (2 endpoints)

• **GET /rest_lookups.icis_law_sections**: Submit ICIS Law Sections
• **POST /rest_lookups.icis_law_sections**: ECHO ICIS NPDES Law Sections Lookup Service

### 🔧 Rest_Lookups.Naics_Codes (2 endpoints)

• **GET /rest_lookups.naics_codes**: Submit NAICS Codes
• **POST /rest_lookups.naics_codes**: ECHO NAICS Codes Lookup Service

### 🔧 Rest_Lookups.Npdes_Parameters (2 endpoints)

• **GET /rest_lookups.npdes_parameters**: Submit NPDES Parameters
• **POST /rest_lookups.npdes_parameters**: ECHO NPDES Parameters Lookup Service

### 🔧 Rest_Lookups.Wbd_Code_Lu (2 endpoints)

• **GET /rest_lookups.wbd_code_lu**: Submit WBD Codes
• **POST /rest_lookups.wbd_code_lu**: ECHO WBD Code Lookup Service

### 🔧 Rest_Lookups.Wbd_Name_Lu (2 endpoints)

• **GET /rest_lookups.wbd_name_lu**: Submit WBD Names
• **POST /rest_lookups.wbd_name_lu**: ECHO WBD Name Lookup Service

## 🤖 AI Integration

**Parameter Handling**: AI agents automatically provide values for:
• Path parameters and identifiers
• Query parameters and filters
• Request body data
• Headers and authentication

**Response Format**: Native U.S. EPA Enforcement and Compliance History Online (ECHO) - Clean Water Act (CWA) Rest Services API responses with full data structure

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