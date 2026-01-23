# Automated marketing performance email reports with Google Sheets & Outlook

> This n8n workflow template automatically pulls marketing data from Google Sheets, calculates key performance metrics, and sends beautifully formatted HTML email reports. Perfect for marketing teams, agencies, or businesses that need regular performance reporting without manual data processing.

## What This Workflow Does

This automated workflow:
- Retrieves marketing campaign data from Google Sheets
- Calculates 5 key performance metrics (customers, campaigns, clicks, conversions, spend)
- Merges all statistics into a single data object
- Sends a professional HTML email report with modern styling
- Can be run manually or scheduled for regular reporting

The workflow processes data including Customer ID, Campaign names, Clicks, Conversions, and Spend amounts to generate comprehensive performance summaries.

## Tools & Services Used

- **N8N** - Workflow automation platform
- **Google Sheets** - Marketing data source and storage
- **Microsoft Outlook** - Email delivery system
- **HTML/CSS** - Professional report formatting

## Step-by-Step Implementation

### Step 1: Set Up Your Google Sheets Data Source

**Copy the Sample Data Template:**
1. Access the template: [Marketing Performance Data Template](https://docs.google.com/spreadsheets/d/19aUQYZq02qHsCelO4eeV4sx_MTJJupC5qe0gDLQBtRA/edit?usp=sharing)
2. Click "File" → "Make a copy" to create your own version
3. Rename it (e.g., "My Marketing Performance Data")

**Set Up Your Data Structure:**
Your Google Sheet should have a "Data" tab with these columns:
- **Customer ID** - Unique identifier for each customer
- **Campaign** - Name of the marketing campaign
- **Clicks** - Number of clicks generated
- **Conversions** - Number of conversions achieved  
- **Spend ($)** - Amount spent on the campaign

**Configure Google Sheets API Access:**
- Go to [Google Cloud Console](https://console.cloud.google.com/)
- Create a project or select existing one
- Enable "Google Sheets API"
- Create OAuth2 credentials or use service account
- Share your sheet with the service account email (if using service account)

### Step 2: Import and Configure the N8N Workflow

**Import the Workflow:**
1. Copy the workflow JSON from the template
2. In your N8N instance, go to Workflows → Import from JSON
3. Paste the JSON and import the workflow

### Step 3: Configure Each Node

#### Node 1: "When clicking 'Execute workflow'" (Manual Trigger)
- **Purpose**: Starts the workflow manually for testing
- **Configuration**: No setup required
- **Note**: You can replace this with a Schedule Trigger for automated reports

#### Node 2: "Get Google Sheets Data"
- **Purpose**: Retrieves all marketing data from your Google Sheet
- **Setup Required**:
  1. Click on the node
  2. Set up Google Sheets OAuth2 credentials:
     - Click "Create New Credential"
     - Follow OAuth2 setup process
     - Authorize access to your Google account
  3. Select your spreadsheet from the dropdown
  4. Choose the "Data" sheet
  5. Test the connection to ensure data loads

#### Node 3-7: Data Analysis Nodes

**"Count Unique Customers"**
- **Purpose**: Counts how many unique customers were reached
- **Configuration**: Pre-configured to count unique "Customer ID" values
- **No setup required**

**"Count Unique Campaigns"**
- **Purpose**: Counts total number of campaigns run
- **Configuration**: Pre-configured to count unique "Campaign" values
- **No setup required**

**"Sum Total Clicks"**
- **Purpose**: Adds up all clicks across campaigns
- **Configuration**: Pre-configured to sum "Clicks" column
- **No setup required**

**"Sum Total Conversions"**
- **Purpose**: Totals all conversions achieved
- **Configuration**: Pre-configured to sum "Conversions" column
- **No setup required**

**"Sum Total Spend"**
- **Purpose**: Calculates total marketing spend
- **Configuration**: Pre-configured to sum "Spend ($)" column
- **No setup required**

#### Node 8: "Merge"
- **Purpose**: Combines all calculated metrics into one data object
- **Configuration**: Pre-configured to merge by position
- **No setup required**

#### Node 9: "Send Email Report" (Microsoft Outlook)
- **Purpose**: Sends the formatted HTML email report
- **Setup Required**:
  1. Click on the node
  2. Set up Microsoft Outlook OAuth2 credentials:
     - Click "Create New Credential"
     - Follow OAuth2 setup for your Microsoft account
     - Grant necessary email permissions
  3. **Configure Email Settings**:
     - **To Recipients**: Change from "rbreen@ynteractive.com" to your recipient email(s)
     - **Subject**: Modify "Daily Marketing Performance" as needed
     - **Body Content**: Pre-configured with professional HTML template
  4. **Email Template Features**:
     - Modern glassmorphic design
     - Responsive layout for mobile devices
     - Animated gradient accents
     - Hover effects on metric cards
     - Professional typography


For professional setup, customization, or troubleshooting of this workflow, contact:

**Robert - Ynteractive Solutions**
- **Email**: [robert@ynteractive.com](mailto:robert@ynteractive.com)
- **Website**: [www.ynteractive.com](https://www.ynteractive.com)
- **LinkedIn**: [linkedin.com/in/robert-breen-29429625/](https://www.linkedin.com/in/robert-breen-29429625/)

*Specializing in AI-powered workflow automation, business process optimization, and custom integration solutions.*

## 📊 Basic Information

- **Workflow ID:** 7404
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 677
- **Downloads:** 67
- **Created:** 2025/8/15
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7404)

## 👤 Author

- **Name:** Robert Breen
- **Username:** @rbreen

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **googleSheets** 
- **summarize** (×5)
- **microsoftOutlook** 
- **merge** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
