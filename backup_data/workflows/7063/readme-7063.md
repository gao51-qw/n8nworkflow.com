# Automate blog post publishing from Airtable to Hashnode with API integration

> # 📝 Automated Blog Post Publishing from Airtable to Hashnode

This workflow streamlines your content publishing process by automatically creating draft blog posts on Hashnode from content stored in Airtable. Perfect for content creators, marketing teams, and developers who want to maintain a consistent publishing schedule while managing multiple Hashnode publications from a centralized database.

## 🎯 Who's it for

- **Content creators** managing multiple blog publications
- **Marketing teams** coordinating content across different Hashnode accounts
- **Developers** looking to automate their technical blog publishing workflow
- **Agencies** managing content for multiple clients on Hashnode

## ⚙️ How it works

The workflow operates in a simple 7-step process:

1. **Retrieves unpublished posts** from your Airtable database (filtered by "Not Published" status)
2. **Processes each post individually** using a loop to handle multiple posts
3. **Fetches the publication ID** from Hashnode using the provided domain
4. **Validates the publication exists** before proceeding with post creation
5. **Creates draft posts** on Hashnode with the title and markdown content
6. **Updates post status** to "Published" in Airtable upon successful creation
7. **Handles errors** by marking failed posts with "Error" status for easy troubleshooting

## 📋 Requirements

**Airtable Setup:**
Your Airtable table must include these columns:
- `Title` - The blog post title
- `Content_markdown` - Full blog post content in Markdown format
- `Hashnode_Token` - Your Hashnode API authentication token
- `HashNode_Publication_Domain` - Your publication's domain (e.g., "yourblog.hashnode.dev")
- `Status` - Publication status ("Not Published", "Published", or "Error")

**Hashnode Requirements:**
- Valid Hashnode account with API access
- Publication domain configured
- API token with draft creation permissions

## 🔧 How to set up

1. **Configure Airtable credentials** in the "Get Posts" and "Update Post" nodes
2. **Set your Airtable base and table IDs** to match your setup
3. **Ensure your Airtable table** contains all required columns listed above
4. **Add your content** with status "Not Published" to trigger the workflow
5. **Test the workflow** with a single post before processing multiple items

## 🎨 How to customize the workflow

- **Modify the filter criteria** in the "Get Posts" node to target different post statuses
- **Add content validation** before posting (word count, required fields, etc.)
- **Include post scheduling** by adding date/time conditions
- **Extend with notifications** using Slack, Discord, or email nodes
- **Add SEO optimization** by including meta descriptions and tags
- **Create published post tracking** by storing Hashnode draft IDs in Airtable

## 💡 Need Help?

Join the [Discord](https://discord.com/invite/XPKeKXeB7d) or ask in the [Forum](https://community.n8n.io/)!

## 📊 Basic Information

- **Workflow ID:** 7063
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 248
- **Downloads:** 24
- **Created:** 2025/8/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7063)

## 👤 Author

- **Name:** FabioInTech
- **Username:** @fabiointech

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **stickyNote** (×8)
- **httpRequest** (×2)
- **airtable** (×3)
- **manualTrigger** 
- **if** 
- **splitInBatches** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
