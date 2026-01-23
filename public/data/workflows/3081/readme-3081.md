# Sync Dartagnan email templates to Braze

> # Sync Dartagnan Email Templates to Braze

## Why Use This Workflow

Email marketing demands consistency across platforms. This workflow automatically synchronizes your email templates from Dartagnan to Braze, eliminating manual transfers and ensuring brand consistency. Perfect for marketing teams who need to maintain a unified email experience while leveraging the strengths of both platforms.

## Business Benefits

- **Save Time**: Eliminate hours of manual template copying and formatting between platforms
- **Maintain Consistency**: Ensure your email templates look identical across Dartagnan and Braze
- **Reduce Errors**: Automated synchronization prevents human error in template transfers
- **Streamline Workflows**: Create once in Dartagnan, use everywhere through Braze's distribution power
- **Preserve Image Assets**: Keep images hosted on Dartagnan while properly formatting them for Braze

## How It Works

This workflow performs a bi-directional sync between your Dartagnan email templates and Braze platform. It intelligently handles:

1. **Template Updates**: Automatically updates existing templates in Braze when modified in Dartagnan
2. **New Template Creation**: Creates new templates in Braze when added to Dartagnan
3. **Image URL Transformation**: Properly embeds and formats image URLs to meet Braze requirements while keeping assets on Dartagnan infrastructure

## Technical Implementation

The workflow uses a scheduled trigger to check for template changes and then processes them in batches:

1. **Authentication**: Securely connects to both Dartagnan and Braze APIs
2. **Template Retrieval**: Fetches current templates from Dartagnan
3. **Comparison Logic**: Determines which templates need updating or creation in Braze
4. **Content Transformation**: Processes HTML content and image URLs to ensure compatibility
5. **API Integration**: Pushes changes to Braze through their Content Blocks API

## Customization Options

This workflow can be customized to meet your specific needs:

- **Sync Frequency**: Adjust the schedule to run hourly, daily, or on any custom schedule
- **Template Filtering**: Add conditions to sync only specific templates based on tags or categories
- **Error Handling**: Configure notification emails when synchronization issues occur
- **Logging**: Enable detailed logs for troubleshooting and auditing

## Setup Requirements

Setting up this workflow takes approximately 20-30 minutes and requires:

### Dartagnan Requirements
- API Client ID
- API Client Secret
- Template access permissions

### Braze Requirements
- Braze Instance URL
- API Key with content block permissions
- Appropriate rate limits configured

## Common Use Cases

- **Email Campaign Coordination**: Maintain consistent templates across platforms for multi-channel campaigns
- **Agency Work**: Design in Dartagnan, deploy through client's Braze instance
- **Rebranding Projects**: Update templates once and propagate changes automatically
- **International Marketing**: Maintain language variants across platforms with automatic synchronization

## Get Started

Once installed, configure your API credentials, set your desired synchronization schedule, and let the workflow handle the rest. The initial sync will create all your templates in Braze, with subsequent runs only updating what's changed.

## 📊 Basic Information

- **Workflow ID:** 3081
- **Complexity:** advanced
- **Node Count:** 28
- **Views:** 409
- **Downloads:** 40
- **Created:** 2025/3/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3081)

## 👤 Author

- **Name:** Vincent LE ROUX
- **Username:** @vincent-ux-tech

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **httpRequest** (×8)
- **set** (×5)
- **splitOut** 
- **merge** (×2)
- **if** (×2)
- **code** (×2)
- **stickyNote** (×7)
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 28 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
