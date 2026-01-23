# LinkedIn lead generation: Auto DM system with comment triggers using Unipile & NocoDB

> ## Short Description

This LinkedIn automation workflow monitors post comments for specific trigger words and automatically sends direct messages with lead magnets to engaged users. The system checks connection status, handles non-connected users with connection requests, and prevents duplicate outreach by tracking all interactions in a database.

## Key Features

- **Comment Monitoring**: Scans LinkedIn post comments for customizable trigger words
- **Connection Status Check**: Determines if users are 1st-degree connections
- **Automated DMs**: Sends personalized messages with lead magnet links to connected users
- **Connection Requests**: Asks non-connected users to connect via comment replies
- **Duplicate Prevention**: Tracks interactions in NocoDB to avoid repeat messages
- **Message Rotation**: Uses different comment reply variations for authenticity
- **Batch Processing**: Handles multiple comments with built-in delays

## Who This Workflow Is For

- Content creators looking to convert post engagement into leads
- Coaches and consultants sharing valuable LinkedIn content
- Anyone wanting to automate lead capture from LinkedIn posts

## How It Works

1. **Setup**: Configure post ID, trigger word, and lead magnet link via form
2. **Comment Extraction**: Retrieves all comments from the specified post using [Unipile](https://www.unipile.com/?utm_source=partner&utm_campaign=spalato)
3. **Trigger Detection**: Filters comments containing the specified trigger word
4. **Connection Check**: Determines if commenters are 1st-degree connections
5. **Smart Routing**: Connected users receive DMs, others get connection requests
6. **Database Logging**: Records all interactions to prevent duplicates

## Setup Requirements

### Required Credentials
- **[Unipile](https://www.unipile.com/?utm_source=partner&utm_campaign=spalato) API Key**: For LinkedIn API access
- **NocoDB API Token**: For database tracking

### Database Structure
**Table: leads
- `linkedin_id`: LinkedIn user ID
- `name`: User's full name
- `headline`: LinkedIn headline
- `url`: Profile URL
- `date`: Interaction date
- `posts_id`: Post reference
- `connection_status`: Network distance
- `dm_status`: Interaction type (sent/connection request)

## Customization Options

- **Message Templates**: Modify DM and connection request messages
- **Trigger Words**: Change the words that activate the workflow
- **Timing**: Adjust delays between messages (8-12 seconds default)
- **Reply Variations**: Add more comment reply options for authenticity

## Installation Instructions

1. Import the workflow into your n8n instance
2. Set up NocoDB database with required table structure
3. Configure [Unipile](https://www.unipile.com/?utm_source=partner&utm_campaign=spalato) and NocoDB credentials
4. Set environment variables for Unipile root URL and LinkedIn account ID
5. Test with a sample post before full use
```


## 📊 Basic Information

- **Workflow ID:** 7844
- **Complexity:** advanced
- **Node Count:** 32
- **Views:** 1333
- **Downloads:** 133
- **Created:** 2025/8/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7844)

## 👤 Author

- **Name:** Alexandra Spalato
- **Username:** @alexaspalato

## 🏷️ Categories

- Lead Nurturing
- Multimodal AI

## 🔗 Nodes Used

- **httpRequest** (×4)
- **splitOut** (×3)
- **if** (×3)
- **filter** (×2)
- **code** (×4)
- **nocoDb** (×4)
- **splitInBatches** 
- **wait** 
- **merge** 
- **formTrigger** 
- **stickyNote** (×8)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 32 nodes with 24 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
