# Auto-categorize blog posts in wordpress using A.I.

> WordPress Post Auto-Categorization Workflow

![Cover.png](fileId:887)

[📺 Click here to watch youtube tutorial ](https://www.youtube.com/watch?v=IvQioioVqhw)

## 🎯 Purpose
Automatically categorize WordPress blog posts using AI, saving hours of manual work. This workflow analyzes your post titles and assigns them to predefined categories using artificial intelligence.

## 🔄 What This Workflow Does
• Connects to your WordPress site
• Retrieves all uncategorized posts
• Uses AI to analyze post titles
• Automatically assigns appropriate category IDs
• Updates posts with new categories
• Processes dozens of posts in minutes

## ⚙️ Setup Requirements
1. WordPress site with admin access
2. Predefined categories in WordPress
3. OpenAI API credentials (or your preferred AI provider)
4. n8n with WordPress credentials

## 🛠️ Configuration Steps
1. Add your WordPress categories (manually in WordPress)
2. Note down category IDs
3. Update the AI prompt with your category IDs
4. Configure WordPress credentials in n8n
5. Set up AI API connection

## 🔧 Customization Options
• Modify AI prompts for different categorization criteria
• Adjust for multiple category assignments
• Add tag generation functionality
• Customize for different content types
• Add additional metadata updates

## ⚠️ Important Notes
• Backup your WordPress database before running
• Test with a few posts first
• Review AI categorization results initially
• Categories must be created manually first

## 🎁 Bonus Features
• Can be modified for tag generation
• Works with scheduled posts
• Handles bulk processing
• Maintains categorization consistency

Perfect for content managers, bloggers, and website administrators looking to organize their WordPress content efficiently.

#n8n #WordPress #ContentManagement #Automation #AI

Created by [rumjahn](https://rumjahn.com)

## 📊 Basic Information

- **Workflow ID:** 2706
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 5252
- **Downloads:** 525
- **Created:** 2025/1/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2706)

## 👤 Author

- **Name:** Keith Rumjahn
- **Username:** @rumjahn

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **wordpress** (×2)
- **stickyNote** (×4)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
