# Multi-platform social media publisher with Airtable, Google Drive, and Postiz

>  ## 📝 POSTIZ MEDIA UPLOAD WORKFLOW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 PURPOSE:
Automated media upload pipeline that downloads videos and images from Google Drive and uploads them to Postiz storage for social media posting.

🔄 WORKFLOW PROCESS:
1. Webhook triggers the workflow
2. Fetch media metadata from Airtable
3. Download video + image from Google Drive
4. Upload both files to Postiz storage
5. Save Postiz file paths back to Airtable

🔧 TECHNICAL DETAILS:
• API: Postiz /upload endpoint (multipart-form-data)
• Storage: Converts Google Drive files → Postiz URLs
• Integration: Updates Airtable with Postiz paths
• Required: All media must be uploaded before posting

## 📱 SOCIAL MEDIA POSTING WORKFLOW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 PURPOSE:
Automated multi-platform social media posting using Postiz API. Distributes content across Instagram, Twitter/X (2 accounts), LinkedIn, and Facebook with platform-specific content cleaning and formatting.

🔄 COMPLETE WORKFLOW PROCESS:
1. 📊 Fetch social media content from Airtable database
2. 🔗 Get integration IDs for all connected social platforms
3. 🔀 Route each platform to appropriate content processor
4. 🧹 Clean content to prevent JSON formatting errors
5. 📱 Post to respective social media platforms simultaneously

📋 PLATFORM COVERAGE:
• 📸 Instagram (Visual content + captions)
• 🐦 Twitter/X Main Account (Text + images)
• 🐦 Twitter/X Alt Account (Duplicate posting)
• 💼 LinkedIn (Professional content)
• 📘 Facebook (Meta ecosystem posting)

⚠️ CRITICAL CONTENT CLEANING:
• Removes line breaks (\n), carriage returns (\r), tabs (\t)
• Replaces multiple spaces with single spaces
• Prevents 'JSON parameter needs to be valid JSON' errors
• ESSENTIAL: Without cleaning, all API calls fail!

🔧 TECHNICAL SPECIFICATIONS:
• API: Postiz /posts endpoint (POST)
• Authentication: HTTP Header Auth
• Content-Type: application/json
• Posting Type: Immediate ('now') + 1 minute delay
• Media: References pre-uploaded Postiz image paths
• Rate Limit: 30 requests/hour (API beta limitation)

🔗 DATA SOURCES:
• Content: Airtable 
• Media: Pre-uploaded via separate media upload workflow
• Fields: instagram_caption, linkedin_post, twitter single, faceboook
• Images: References 'postiz image' field paths

⚡ EXECUTION FLOW:
Airtable → Integrations → Platform Router → Content Cleaners → Social Publishers

🚨 TROUBLESHOOTING:
• JSON Errors: Check content cleaning nodes
• 500 Errors: Verify integration IDs and account connections
• Missing Media: Ensure media upload workflow ran first
• Rate Limits: Space out executions (30/hour limit)

🔄 DEPENDENCIES:
• Requires: Media upload workflow (for image/video paths)
• Connects to: Analytics and monitoring workflows
• Updates: Airtable with posting status and URLs

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━






⚠️ CRITICAL NOTES:
• Cannot use external URLs in Postiz posts
• Files must be uploaded to google drive first - id referenced in airtable
• Enables reference tracking for all platforms

📊 DATA FLOW:
Google Drive → Download → Postiz Upload → Airtable Update

🔗 CONNECTS TO:
Main social media posting workflows that reference these uploaded file paths for Instagram, Twitter, LinkedIn, Facebook, and YouTube posting.
## 🎬 VIDEO POSTING WORKFLOW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 PURPOSE:
Automated video content distribution across Instagram, Facebook, and YouTube using Postiz API. Specialized workflow for video content with platform-specific processing and cleaning.

🔄 WORKFLOW EXECUTION:
1. 📊 Fetch video content from Airtable database (recuoYjg4icStHsMK)
2. 🔗 Get integration IDs for video-enabled platforms
3. 🔀 Route platforms to appropriate video processors
4. 🧹 Clean content for Instagram & Facebook (YouTube bypassed)
5. 📹 Publish to video platforms simultaneously

📹 PLATFORM COVERAGE:
• 📱 Instagram: Video posts & Reels (✅ Working)
• 📘 Facebook: Video content (⚠️ Test mode)
• 🎬 YouTube: Long-form videos (🚨 Broken)

⚡ EXECUTION FLOW:
Airtable → Integrations → Video Router → [3 Parallel Paths]
├── Instagram: Cleaner → Publisher
├── Facebook: Cleaner → Publisher  
└── YouTube: [Direct] → Publisher

🗄️ DATA SOURCE:
• Base: Netkreatives.com 
• Table: Youtube tool 
• Video Field: 'postiz video'
• Content Fields: instagram_caption, faceboook


🔧 TECHNICAL SPECS:
• Method: POST
• Auth: HTTP Header (Postiz credentials)
• Timing: Immediate posting (+1 minute delay)
• Media: Pre-uploaded video paths
• Content-Type: application/json

## 📊 Basic Information

- **Workflow ID:** 5943
- **Complexity:** advanced
- **Node Count:** 41
- **Views:** 1292
- **Downloads:** 129
- **Created:** 2025/7/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5943)

## 👤 Author

- **Name:** Kurt Bijl
- **Username:** @netkreatives

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **airtable** (×6)
- **httpRequest** (×13)
- **googleDrive** (×3)
- **stickyNote** (×3)
- **switch** (×2)
- **code** (×7)
- **if** 
- **stopAndError** 
- **webhook** (×3)
- **manualTrigger** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 41 nodes with 30 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
