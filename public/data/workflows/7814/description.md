**How it works**
• Webhook triggers from content creation system in Airtable
• Downloads media (images/videos) from Airtable URLs
• Uploads media to Postiz cloud storage
• Schedules or publishes content across multiple platforms via Postiz API
• Tracks publishing status back to Airtable for reporting

**Set up steps**
• Sign up for Postiz account at https://postiz.com/?ref=max
• Connect your social media channels in Postiz dashboard
• Get channel IDs and API key from Postiz settings
• Add Postiz API key to n8n credentials (Header Auth)
• Update channel IDs in "Prepare for Publish" node
• Connect Airtable with your content database
• Customize scheduling times per platform as needed
• Full setup details in workflow sticky notes