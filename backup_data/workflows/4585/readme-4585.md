# Collect YouTube channel stats & contact info with Google Sheets and SerpAPI

> ## Workflow Overview
This advanced n8n automation is a powerful channel research and intelligence gathering tool designed to transform raw YouTube channel data into actionable insights. By intelligently connecting multiple APIs and data sources, this workflow:

1. **Discovers Channel Metrics**: 
   - Automatically retrieves channel statistics
   - Captures detailed performance indicators
   - Provides comprehensive channel intelligence

2. **Performs Deep Analysis**:
   - Extracts recent video performance data
   - Calculates engagement metrics
   - Aggregates view count insights

3. **Uncovers Contact Information**:
   - Attempts to retrieve public email addresses
   - Provides direct outreach opportunities
   - Enhances lead generation capabilities

4. **Seamless Data Logging**:
   - Automatically updates Google Sheets
   - Maintains a live intelligence dashboard
   - Preserves historical channel data

## Key Benefits
- 🤖 **Full Automation**: Continuous channel intelligence gathering
- 💡 **Smart Analysis**: Comprehensive performance insights
- 📊 **Real-Time Tracking**: Always-updated channel metrics
- 🔍 **Lead Generation**: Direct contact information extraction

## Workflow Architecture

### 🔹 Stage 1: Channel Identification
- **Google Sheets Trigger**: Detects new channel additions
- **YouTube Data API**: Fetches channel statistics
- **Comprehensive Metric Collection**:
  - Subscriber count
  - Total view metrics
  - Channel overview

### 🔹 Stage 2: Video Performance Analysis
- **Recent Video Retrieval**: Fetches 5 latest uploads
- **View Count Aggregation**: 
  - Calculates total recent views
  - Provides engagement snapshot
- **Performance Insights**: Measures content effectiveness

### 🔹 Stage 3: Contact Discovery
- **SerpAPI Integration**: Attempts email extraction
- **Public Contact Information**: 
  - Retrieves available email addresses
  - Supports outreach and networking

### 🔹 Stage 4: Data Compilation
- **Intelligent Data Formatting**
- **Google Sheets Update**
- **Live Intelligence Dashboard**

## Potential Use Cases
- **Marketing Teams**: Influencer research
- **Sales Professionals**: Lead qualification
- **Content Strategists**: Competitive analysis
- **Recruitment Specialists**: Talent scouting
- **Business Development**: Partnership identification

## Setup Requirements
1. **YouTube Data API**
   - Google Cloud API credentials
   - Configured API access

2. **SerpAPI Account**
   - API key for email extraction
   - Web scraping permissions

3. **Google Sheets**
   - Connected Google account
   - Prepared tracking spreadsheet
   - Appropriate sharing settings

4. **n8n Installation**
   - Cloud or self-hosted instance
   - Workflow configuration
   - API credential management

## Future Enhancement Suggestions
- 🤖 AI-powered channel scoring
- 📊 Advanced trend analysis
- 🔔 Automated alert system
- 🌐 Multi-platform channel tracking
- 🧠 Machine learning insights generation

## Technical Considerations
- Implement robust error handling
- Use exponential backoff for API calls
- Maintain flexible data extraction strategies
- Ensure compliance with platform terms of service

## Ethical Guidelines
- Respect content creator privacy
- Use data for legitimate research
- Maintain transparent data collection practices
- Provide opt-out mechanisms

## Connect With Me

**Ready to unlock YouTube channel insights?**

📧 **Email**: Yaron@nofluff.online

🎥 **YouTube**: [@YaronBeen](https://www.youtube.com/@YaronBeen/videos)

💼 **LinkedIn**: [Yaron Been](https://www.linkedin.com/in/yaronbeen/)

**Transform your channel research with intelligent, automated workflows!**

## 📊 Basic Information

- **Workflow ID:** 4585
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 633
- **Downloads:** 63
- **Created:** 2025/6/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4585)

## 👤 Author

- **Name:** Yaron Been
- **Username:** @yaron-nofluff

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **googleSheetsTrigger** 
- **httpRequest** (×4)
- **set** (×2)
- **code** 
- **googleSheets** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
