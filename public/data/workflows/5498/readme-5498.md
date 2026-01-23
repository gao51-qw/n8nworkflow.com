# Amazon CloudWatch Application Insights API with 27 operations

> Complete MCP server exposing 27 Amazon CloudWatch Application Insights API operations to AI agents.

## ⚡ Quick Setup

Need help? Want access to more workflows and even live Q&A sessions with a top verified n8n creator.. All 100% free?

[Join the community](https://www.skool.com/n8n-nodes-automation-lab-1570/about)

1. **Import** this workflow into your n8n instance
2. **Credentials** Add Amazon CloudWatch Application Insights credentials
3. **Activate** the workflow to start your MCP server
4. **Copy** the webhook URL from the MCP trigger node
5. **Connect** AI agents using the MCP URL

## 🔧 How it Works

This workflow converts the Amazon CloudWatch Application Insights API into an MCP-compatible interface for AI agents.

• **MCP Trigger**: Serves as your server endpoint for AI agent requests
• **HTTP Request Nodes**: Handle API calls to http://applicationinsights.{region}.amazonaws.com
• **AI Expressions**: Automatically populate parameters via `$fromAI()` placeholders
• **Native Integration**: Returns responses directly to the AI agent

## 📋 Available Operations (27 total)

### 🔧 #X-Amz-Target=Ec2Windowsbarleyservice.Createapplication (1 endpoints)

• **POST /#X-Amz-Target=EC2WindowsBarleyService.CreateApplication**: Adds an application that is created from a resource group.

### 🔧 #X-Amz-Target=Ec2Windowsbarleyservice.Createcomponent (1 endpoints)

• **POST /#X-Amz-Target=EC2WindowsBarleyService.CreateComponent**: Creates a custom component by grouping similar standalone instances to monitor.

### 🔧 #X-Amz-Target=Ec2Windowsbarleyservice.Createlogpattern (1 endpoints)

• **POST /#X-Amz-Target=EC2WindowsBarleyService.CreateLogPattern**: Adds an log pattern to a <code>LogPatternSet</code>.

### 🔧 #X-Amz-Target=Ec2Windowsbarleyservice.Deleteapplication (1 endpoints)

• **POST /#X-Amz-Target=EC2WindowsBarleyService.DeleteApplication**: Removes the specified application from monitoring. Does not delete the application.

### 🔧 #X-Amz-Target=Ec2Windowsbarleyservice.Deletecomponent (1 endpoints)

• **POST /#X-Amz-Target=EC2WindowsBarleyService.DeleteComponent**: Ungroups a custom component. When you ungroup custom components, all applicable monitors that are set up for the component are removed and the instances revert to their standalone status.

### 🔧 #X-Amz-Target=Ec2Windowsbarleyservice.Deletelogpattern (1 endpoints)

• **POST /#X-Amz-Target=EC2WindowsBarleyService.DeleteLogPattern**: Removes the specified log pattern from a <code>LogPatternSet</code>.

### 🔧 #X-Amz-Target=Ec2Windowsbarleyservice.Describeapplication (1 endpoints)

• **POST /#X-Amz-Target=EC2WindowsBarleyService.DescribeApplication**: Describes the application.

### 🔧 #X-Amz-Target=Ec2Windowsbarleyservice.Describecomponent (1 endpoints)

• **POST /#X-Amz-Target=EC2WindowsBarleyService.DescribeComponent**: Describes a component and lists the resources that are grouped together in a component.

### 🔧 #X-Amz-Target=Ec2Windowsbarleyservice.Describecomponentconfiguration (1 endpoints)

• **POST /#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfiguration**: Describes the monitoring configuration of the component.

### 🔧 #X-Amz-Target=Ec2Windowsbarleyservice.Describecomponentconfigurationrecommendation (1 endpoints)

• **POST /#X-Amz-Target=EC2WindowsBarleyService.DescribeComponentConfigurationRecommendation**: Describes the recommended monitoring configuration of the component.

### 🔧 #X-Amz-Target=Ec2Windowsbarleyservice.Describelogpattern (1 endpoints)

• **POST /#X-Amz-Target=EC2WindowsBarleyService.DescribeLogPattern**: Describe a specific log pattern from a <code>LogPatternSet</code>.

### 🔧 #X-Amz-Target=Ec2Windowsbarleyservice.Describeobservation (1 endpoints)

• **POST /#X-Amz-Target=EC2WindowsBarleyService.DescribeObservation**: Describes an anomaly or error with the application.

### 🔧 #X-Amz-Target=Ec2Windowsbarleyservice.Describeproblem (1 endpoints)

• **POST /#X-Amz-Target=EC2WindowsBarleyService.DescribeProblem**: Describes an application problem.

### 🔧 #X-Amz-Target=Ec2Windowsbarleyservice.Describeproblemobservations (1 endpoints)

• **POST /#X-Amz-Target=EC2WindowsBarleyService.DescribeProblemObservations**: Describes the anomalies or errors associated with the problem.

### 🔧 #X-Amz-Target=Ec2Windowsbarleyservice.Listapplications (1 endpoints)

• **POST /#X-Amz-Target=EC2WindowsBarleyService.ListApplications**: Lists the IDs of the applications that you are monitoring. 

### 🔧 #X-Amz-Target=Ec2Windowsbarleyservice.Listcomponents (1 endpoints)

• **POST /#X-Amz-Target=EC2WindowsBarleyService.ListComponents**: Lists the auto-grouped, standalone, and custom components of the application.

### 🔧 #X-Amz-Target=Ec2Windowsbarleyservice.Listconfigurationhistory (1 endpoints)

• **POST /#X-Amz-Target=EC2WindowsBarleyService.ListConfigurationHistory**: <p> Lists the INFO, WARN, and ERROR events for periodic configuration updates performed by Application Insights. Examples of events represented are: </p> <ul> <li> <p>INFO: creating a new alarm or updating an alarm threshold.</p> </li> <li> <p>WARN: alarm not created due to insufficient data points used to predict thresholds.</p> </li> <li> <p>ERROR: alarm not created due to permission errors or exceeding quotas. </p> </li> </ul>

### 🔧 #X-Amz-Target=Ec2Windowsbarleyservice.Listlogpatternsets (1 endpoints)

• **POST /#X-Amz-Target=EC2WindowsBarleyService.ListLogPatternSets**: Lists the log pattern sets in the specific application.

### 🔧 #X-Amz-Target=Ec2Windowsbarleyservice.Listlogpatterns (1 endpoints)

• **POST /#X-Amz-Target=EC2WindowsBarleyService.ListLogPatterns**: Lists the log patterns in the specific log <code>LogPatternSet</code>.

### 🔧 #X-Amz-Target=Ec2Windowsbarleyservice.Listproblems (1 endpoints)

• **POST /#X-Amz-Target=EC2WindowsBarleyService.ListProblems**: Lists the problems with your application.

### 🔧 #X-Amz-Target=Ec2Windowsbarleyservice.Listtagsforresource (1 endpoints)

• **POST /#X-Amz-Target=EC2WindowsBarleyService.ListTagsForResource**: Retrieve a list of the tags (keys and values) that are associated with a specified application. A <i>tag</i> is a label that you optionally define and associate with an application. Each tag consists of a required <i>tag key</i> and an optional associated <i>tag value</i>. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.

### 🔧 #X-Amz-Target=Ec2Windowsbarleyservice.Tagresource (1 endpoints)

• **POST /#X-Amz-Target=EC2WindowsBarleyService.TagResource**: <p>Add one or more tags (keys and values) to a specified application. A <i>tag</i> is a label that you optionally define and associate with an application. Tags can help you categorize and manage application in different ways, such as by purpose, owner, environment, or other criteria. </p> <p>Each tag consists of a required <i>tag key</i> and an associated <i>tag value</i>, both of which you define. A tag key is a general label that acts as a category for more specific tag values. A tag value acts as a descriptor within a tag key.</p>

### 🔧 #X-Amz-Target=Ec2Windowsbarleyservice.Untagresource (1 endpoints)

• **POST /#X-Amz-Target=EC2WindowsBarleyService.UntagResource**: Remove one or more tags (keys and values) from a specified application.

### 🔧 #X-Amz-Target=Ec2Windowsbarleyservice.Updateapplication (1 endpoints)

• **POST /#X-Amz-Target=EC2WindowsBarleyService.UpdateApplication**: Updates the application.

### 🔧 #X-Amz-Target=Ec2Windowsbarleyservice.Updatecomponent (1 endpoints)

• **POST /#X-Amz-Target=EC2WindowsBarleyService.UpdateComponent**: Updates the custom component name and/or the list of resources that make up the component.

### 🔧 #X-Amz-Target=Ec2Windowsbarleyservice.Updatecomponentconfiguration (1 endpoints)

• **POST /#X-Amz-Target=EC2WindowsBarleyService.UpdateComponentConfiguration**: Updates the monitoring configurations for the component. The configuration input parameter is an escaped JSON of the configuration and should match the schema of what is returned by <code>DescribeComponentConfigurationRecommendation</code>. 

### 🔧 #X-Amz-Target=Ec2Windowsbarleyservice.Updatelogpattern (1 endpoints)

• **POST /#X-Amz-Target=EC2WindowsBarleyService.UpdateLogPattern**: Adds a log pattern to a <code>LogPatternSet</code>.

## 🤖 AI Integration

**Parameter Handling**: AI agents automatically provide values for:
• Path parameters and identifiers
• Query parameters and filters
• Request body data
• Headers and authentication

**Response Format**: Native Amazon CloudWatch Application Insights API responses with full data structure

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

- **Workflow ID:** 5498
- **Complexity:** advanced
- **Node Count:** 57
- **Views:** 618
- **Downloads:** 61
- **Created:** 2025/7/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5498)

## 👤 Author

- **Name:** David Ashby
- **Username:** @cfomodz

## 🏷️ Categories

- DevOps
- AI RAG

## 🔗 Nodes Used

- **stickyNote** (×29)
- **@n8n/n8n-nodes-langchain.mcpTrigger** 
- **httpRequestTool** (×27)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 57 nodes with 27 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
