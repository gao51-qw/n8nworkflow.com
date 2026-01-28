# Access CO2 measurement data with CarbonDoomsDay API for AI agents

> Complete MCP server exposing 2 CarbonDoomsDay API operations to AI agents.

## ⚡ Quick Setup

Need help? Want access to more workflows and even live Q&A sessions with a top verified n8n creator.. All 100% free?

[Join the community](https://www.skool.com/n8n-nodes-automation-lab-1570/about)

1. **Import** this workflow into your n8n instance
2. **Credentials** Add CarbonDoomsDay credentials
3. **Activate** the workflow to start your MCP server
4. **Copy** the webhook URL from the MCP trigger node
5. **Connect** AI agents using the MCP URL

## 🔧 How it Works

This workflow converts the CarbonDoomsDay API into an MCP-compatible interface for AI agents.

• **MCP Trigger**: Serves as your server endpoint for AI agent requests
• **HTTP Request Nodes**: Handle API calls to https://api.carbondoomsday.com/api
• **AI Expressions**: Automatically populate parameters via `$fromAI()` placeholders
• **Native Integration**: Returns responses directly to the AI agent

## 📋 Available Operations (2 total)

### 🔧 Co2 (2 endpoints)

• **GET /co2/**: Get CO2 Measurement by Date
• **GET /co2/{date}/**: CO2 measurements from the Mauna Loa observatory.

This data is made available through the good work of the people at the
Mauna Loa observatory. Their release notes say:

    These data are made freely available to the public and the scientific
    community in the belief that their wide dissemination will lead to greater
    understanding and new scientific insights.

We currently scrape the following sources:

  * [co2_mlo_weekly.csv]
  * [co2_mlo_surface-insitu_1_ccgg_DailyData.txt]
  * [weekly_mlo.csv]

We have daily CO2 measurements as far back as 1958.

Learn about using pagination via [the 3rd party documentation].

[co2_mlo_weekly.csv]: https://www.esrl.noaa.gov/gmd/webdata/ccgg/trends/co2_mlo_weekly.csv
[co2_mlo_surface-insitu_1_ccgg_DailyData.txt]: ftp://aftp.cmdl.noaa.gov/data/trace_gases/co2/in-situ/surface/mlo/co2_mlo_surface-insitu_1_ccgg_DailyData.txt
[weekly_mlo.csv]: http://scrippsco2.ucsd.edu/sites/default/files/data/in_situ_co2/weekly_mlo.csv
[the 3rd party documentation]: http://www.django-rest-framework.org/api-guide/pagination/#pagenumberpagination

## 🤖 AI Integration

**Parameter Handling**: AI agents automatically provide values for:
• Path parameters and identifiers
• Query parameters and filters
• Request body data
• Headers and authentication

**Response Format**: Native CarbonDoomsDay API responses with full data structure

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

- **Workflow ID:** 5550
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 251
- **Downloads:** 25
- **Created:** 2025/7/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5550)

## 👤 Author

- **Name:** David Ashby
- **Username:** @cfomodz

## 🏷️ Categories

- Engineering
- AI RAG

## 🔗 Nodes Used

- **stickyNote** (×3)
- **@n8n/n8n-nodes-langchain.mcpTrigger** 
- **httpRequestTool** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
