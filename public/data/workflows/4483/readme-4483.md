# LinkedIn post automation with AI (GPT-4o) generation & Slack approval

> # LinkedIn Post Automation with AI Generation (Gpt-4o) & Slack Approval

## How it Works ##

This workflow automates the creation and publishing of **LinkedIn posts** with **AI-generated content** and **human approval** via **Slack**, using **Google Sheets**, **OpenAI (GPT-4)**, **Slack Interactive Messages**, and the **LinkedIn API**.

Whether you're a social media manager, content creator, or marketing professional, this workflow helps you **maintain consistent LinkedIn presence** and **scale content creation** while keeping human oversight — all managed from a simple spreadsheet.

## 🎯 Use Case

Ideal for:
- **Content Marketers** managing multiple LinkedIn accounts
- **Personal Brand Builders** maintaining regular posting schedule  
- **Agencies** handling client social media presence
- **Teams** requiring content approval workflows

## Setup Instructions ##

### 1. Prepare the Spreadsheet

- File name: `Linkedin Post`
- Main sheet structure:
| ID | Linkedin Post Title | Status | Image URL |
- Groups sheet structure:
| GroupIds |
- Add post topics and set their `Status` as `Pending`

### 2. Configure Google Sheets Nodes

Connect your **Google account** to:
- `Linkedin-Post-Topic` (Trigger node)
- `Update-Status` 
- `Get-Group-id`

### 3. Add API Credentials

- **OpenAI API Key** → for GPT-4 content generation
- **Slack OAuth Token** → for approval messages
- **LinkedIn Access Token** → for posting content
- **HTTP Header Auth** → Bearer token for LinkedIn API

### 4. Configure Webhooks

- Set up **Slack Interactive Components** webhook
- Point Request URL to your N8N webhook endpoint
- Enable interactive messages in Slack app

### 5. Activate the Workflow

Once live, the workflow will:
1. Monitor spreadsheet for new topics every minute
2. Generate LinkedIn post using GPT-4
3. Send to Slack for approval/editing
4. Upload image to LinkedIn
5. Publish to profile and groups
6. Update spreadsheet status to `Posted`

## 🔁 Workflow Logic

1. **Trigger**: New/updated row with `Pending` status
2. **Generate**: AI creates engaging LinkedIn post
3. **Approve**: Slack message for review/edit
4. **Process**: Handle approval response
5. **Upload**: Register and upload image
6. **Publish**: Post to LinkedIn profile & groups
7. **Update**: Mark as `Posted` in sheet

## 🧩 Node Descriptions

| Node Name | Description |
|-----------|-------------|
| Linkedin-Post-Topic | Monitors spreadsheet for new post topics |
| Validate-Status | Filters only 'Pending' items |
| Limit | Processes one item at a time |
| Linedin-Post-Creator | Generates post content using GPT-4 |
| Format-Content | Prepares content for Slack display |
| Approval-on-Slack | Sends interactive approval message |
| Webhook | Receives Slack button responses |
| Format-Response | Extracts edited content from Slack |
| Set-Final-Message | Prepares approved content |
| Linkedin-User-Detail | Fetches LinkedIn user info |
| Register Image | Initiates LinkedIn image upload |
| Upload Image | Uploads image to LinkedIn |
| Linkedin-post | Publishes to personal profile |
| Get-Group-id | Retrieves LinkedIn group IDs |
| Post-Linkedin-Groups | Posts to multiple groups |
| Update-Status | Marks as completed in sheet |

## 🛠️ Customization Tips

- Adjust AI prompt for brand voice and hashtags
- Change Slack approver or add multiple reviewers
- Modify posting schedule with delay nodes
- Add analytics tracking with additional API calls
- Filter groups based on specific criteria
- Include URL shortening for tracking

## 📒 Suggested Sticky Notes for Workflow

| Node/Section | Sticky Note Content |
|--------------|---------------------|
| Linkedin-Post-Topic | "Triggers every minute for new posts in your spreadsheet" |
| Validate-Status | "Filters to process only 'Pending' items - prevents duplicates" |
| Linedin-Post-Creator | "Uses GPT-4 to generate LinkedIn content - customize prompt for your brand voice" |
| Approval-on-Slack | "Sends for human review - edit the Slack user to change approver" |
| Webhook | "Receives approval responses - ensure URL is configured in Slack app" |
| Register Image | "Initiates LinkedIn media upload - requires valid image URL from sheet" |
| Linkedin-post | "Publishes to your profile - update with your LinkedIn credentials" |
| Post-Linkedin-Groups | "Posts to multiple groups - add group IDs in Groups sheet" |
| Update-Status | "Marks as 'Posted' to prevent reprocessing" |

## 💡 AI Prompt Configuration

The workflow uses a sophisticated prompt that:
- Creates compelling hooks
- Includes 3-4 informative paragraphs
- Adds engagement questions
- Inserts relevant emojis
- Generates 4-6 hashtags
- Formats with proper spacing

## 🔒 Security & Permissions

**LinkedIn App Requirements:**
- `r_liteprofile` - Read profile data
- `r_emailaddress` - Access email
- `w_member_social` - Post content
- `rw_organization_admin` - Group posting

**Slack Bot Permissions:**
- `chat:write` - Send messages
- `im:write` - Direct messages
- `users:read` - User information

## 📎 Required Components

| Component | Purpose |
|-----------|---------|
| Google Sheet | Store post topics and status |
| LinkedIn App | API access for posting |
| Slack App | Interactive approval flow |
| OpenAI Account | GPT-4 content generation |
| N8N Instance | Workflow execution |

## 🧪 Testing Tips

- Start with one test topic marked as `Pending`
- Verify Slack message appears correctly
- Test both "Approve" and "Edit" buttons
- Check image upload completes
- Confirm post appears on LinkedIn
- Verify status updates to `Posted`

## ⚠️ Common Issues & Solutions

**LinkedIn API Errors:**
- Token expiration → Refresh access token
- Rate limits → Add delays between posts
- Group restrictions → Check posting permissions

**Slack Integration:**
- Missing responses → Verify webhook URL
- Button not working → Check interactive components
- User not found → Confirm Slack user ID

**Image Upload Failures:**
- Invalid URL → Validate image accessibility
- Size limits → Compress images under 10MB
- Format issues → Use JPEG or PNG only

## 📊 Workflow Benefits

- **Time Savings**: 80% reduction in content publishing time
- **Consistency**: Regular posting schedule maintained
- **Quality Control**: Human review ensures brand standards
- **Scalability**: Handle multiple accounts and groups
- **Flexibility**: Easy to modify and extend

## 📎 Required Files

| File Name | Purpose |
|-----------|---------|
| Linkedin Post | Google Sheet to hold post topics and status |


## 🏷 Suggested Tags & Categories

- #LinkedIn
- #AI
- #ContentAutomation
- #SocialMedia
- #Slack
- #GPT4
- #Marketing
- #WorkflowAutomation

## 📊 Basic Information

- **Workflow ID:** 4483
- **Complexity:** advanced
- **Node Count:** 32
- **Views:** 2825
- **Downloads:** 282
- **Created:** 2025/5/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4483)

## 👤 Author

- **Name:** Amit Mehta
- **Username:** @amitswba

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×8)
- **limit** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **webhook** 
- **googleSheetsTrigger** 
- **if** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **code** (×3)
- **slack** 
- **set** (×3)
- **httpRequest** (×6)
- **googleSheets** (×2)
- **splitInBatches** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 32 nodes with 24 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
