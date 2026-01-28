Need help? Want access to this workflow + many more paid workflows + live Q&A sessions with a top verified n8n creator?

[Join the community](https://www.skool.com/beyond-nodes-automation-lab-2006/about)

Complete MCP server exposing 23 AWS Budgets API operations to AI agents.

## ⚡ Quick Setup

1. **Import** this workflow into your n8n instance
2. **Credentials** Add AWS Budgets credentials
3. **Activate** the workflow to start your MCP server
4. **Copy** the webhook URL from the MCP trigger node
5. **Connect** AI agents using the MCP URL

## 🔧 How it Works

This workflow converts the AWS Budgets API into an MCP-compatible interface for AI agents.

• **MCP Trigger**: Serves as your server endpoint for AI agent requests
• **HTTP Request Nodes**: Handle API calls to https://budgets.amazonaws.com
• **AI Expressions**: Automatically populate parameters via `$fromAI()` placeholders
• **Native Integration**: Returns responses directly to the AI agent

## 📋 Available Operations (23 total)

### 🔧 #X-Amz-Target=Awsbudgetservicegateway.Createbudget (1 endpoints)

• **POST /#X-Amz-Target=AWSBudgetServiceGateway.CreateBudget**: <p>Creates a budget and, if included, notifications and subscribers. </p> &lt;important&gt; <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_CreateBudget.html#API_CreateBudget_Examples">Examples</a> section. </p> &lt;/important&gt;

### 🔧 #X-Amz-Target=Awsbudgetservicegateway.Createbudgetaction (1 endpoints)

• **POST /#X-Amz-Target=AWSBudgetServiceGateway.CreateBudgetAction**:  Creates a budget action. 

### 🔧 #X-Amz-Target=Awsbudgetservicegateway.Createnotification (1 endpoints)

• **POST /#X-Amz-Target=AWSBudgetServiceGateway.CreateNotification**: Creates a notification. You must create the budget before you create the associated notification.

### 🔧 #X-Amz-Target=Awsbudgetservicegateway.Createsubscriber (1 endpoints)

• **POST /#X-Amz-Target=AWSBudgetServiceGateway.CreateSubscriber**: Creates a subscriber. You must create the associated budget and notification before you create the subscriber.

### 🔧 #X-Amz-Target=Awsbudgetservicegateway.Deletebudget (1 endpoints)

• **POST /#X-Amz-Target=AWSBudgetServiceGateway.DeleteBudget**: <p>Deletes a budget. You can delete your budget at any time.</p> &lt;important&gt; <p>Deleting a budget also deletes the notifications and subscribers that are associated with that budget.</p> &lt;/important&gt;

### 🔧 #X-Amz-Target=Awsbudgetservicegateway.Deletebudgetaction (1 endpoints)

• **POST /#X-Amz-Target=AWSBudgetServiceGateway.DeleteBudgetAction**:  Deletes a budget action. 

### 🔧 #X-Amz-Target=Awsbudgetservicegateway.Deletenotification (1 endpoints)

• **POST /#X-Amz-Target=AWSBudgetServiceGateway.DeleteNotification**: <p>Deletes a notification.</p> &lt;important&gt; <p>Deleting a notification also deletes the subscribers that are associated with the notification.</p> &lt;/important&gt;

### 🔧 #X-Amz-Target=Awsbudgetservicegateway.Deletesubscriber (1 endpoints)

• **POST /#X-Amz-Target=AWSBudgetServiceGateway.DeleteSubscriber**: <p>Deletes a subscriber.</p> &lt;important&gt; <p>Deleting the last subscriber to a notification also deletes the notification.</p> &lt;/important&gt;

### 🔧 #X-Amz-Target=Awsbudgetservicegateway.Describebudget (1 endpoints)

• **POST /#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudget**: <p>Describes a budget.</p> &lt;important&gt; <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudget.html#API_DescribeBudget_Examples">Examples</a> section. </p> &lt;/important&gt;

### 🔧 #X-Amz-Target=Awsbudgetservicegateway.Describebudgetaction (1 endpoints)

• **POST /#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetAction**:  Describes a budget action detail. 

### 🔧 #X-Amz-Target=Awsbudgetservicegateway.Describebudgetactionhistories (1 endpoints)

• **POST /#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionHistories**:  Describes a budget action history detail. 

### 🔧 #X-Amz-Target=Awsbudgetservicegateway.Describebudgetactionsforaccount (1 endpoints)

• **POST /#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionsForAccount**:  Describes all of the budget actions for an account. 

### 🔧 #X-Amz-Target=Awsbudgetservicegateway.Describebudgetactionsforbudget (1 endpoints)

• **POST /#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetActionsForBudget**:  Describes all of the budget actions for a budget. 

### 🔧 #X-Amz-Target=Awsbudgetservicegateway.Describebudgetnotificationsforaccount (1 endpoints)

• **POST /#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetNotificationsForAccount**:  Lists the budget names and notifications that are associated with an account. 

### 🔧 #X-Amz-Target=Awsbudgetservicegateway.Describebudgetperformancehistory (1 endpoints)

• **POST /#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgetPerformanceHistory**: Describes the history for <code>DAILY</code>, <code>MONTHLY</code>, and <code>QUARTERLY</code> budgets. Budget history isn't available for <code>ANNUAL</code> budgets.

### 🔧 #X-Amz-Target=Awsbudgetservicegateway.Describebudgets (1 endpoints)

• **POST /#X-Amz-Target=AWSBudgetServiceGateway.DescribeBudgets**: <p>Lists the budgets that are associated with an account.</p> &lt;important&gt; <p>The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_DescribeBudgets.html#API_DescribeBudgets_Examples">Examples</a> section. </p> &lt;/important&gt;

### 🔧 #X-Amz-Target=Awsbudgetservicegateway.Describenotificationsforbudget (1 endpoints)

• **POST /#X-Amz-Target=AWSBudgetServiceGateway.DescribeNotificationsForBudget**: Lists the notifications that are associated with a budget.

### 🔧 #X-Amz-Target=Awsbudgetservicegateway.Describesubscribersfornotification (1 endpoints)

• **POST /#X-Amz-Target=AWSBudgetServiceGateway.DescribeSubscribersForNotification**: Lists the subscribers that are associated with a notification.

### 🔧 #X-Amz-Target=Awsbudgetservicegateway.Executebudgetaction (1 endpoints)

• **POST /#X-Amz-Target=AWSBudgetServiceGateway.ExecuteBudgetAction**:  Executes a budget action. 

### 🔧 #X-Amz-Target=Awsbudgetservicegateway.Updatebudget (1 endpoints)

• **POST /#X-Amz-Target=AWSBudgetServiceGateway.UpdateBudget**: <p>Updates a budget. You can change every part of a budget except for the <code>budgetName</code> and the <code>calculatedSpend</code>. When you modify a budget, the <code>calculatedSpend</code> drops to zero until Amazon Web Services has new usage data to use for forecasting.</p> &lt;important&gt; <p>Only one of <code>BudgetLimit</code> or <code>PlannedBudgetLimits</code> can be present in the syntax at one time. Use the syntax that matches your case. The Request Syntax section shows the <code>BudgetLimit</code> syntax. For <code>PlannedBudgetLimits</code>, see the <a href="https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_UpdateBudget.html#API_UpdateBudget_Examples">Examples</a> section. </p> &lt;/important&gt;

### 🔧 #X-Amz-Target=Awsbudgetservicegateway.Updatebudgetaction (1 endpoints)

• **POST /#X-Amz-Target=AWSBudgetServiceGateway.UpdateBudgetAction**:  Updates a budget action. 

### 🔧 #X-Amz-Target=Awsbudgetservicegateway.Updatenotification (1 endpoints)

• **POST /#X-Amz-Target=AWSBudgetServiceGateway.UpdateNotification**: Updates a notification.

### 🔧 #X-Amz-Target=Awsbudgetservicegateway.Updatesubscriber (1 endpoints)

• **POST /#X-Amz-Target=AWSBudgetServiceGateway.UpdateSubscriber**: Updates a subscriber.

## 🤖 AI Integration

**Parameter Handling**: AI agents automatically provide values for:
• Path parameters and identifiers
• Query parameters and filters
• Request body data
• Headers and authentication

**Response Format**: Native AWS Budgets API responses with full data structure

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