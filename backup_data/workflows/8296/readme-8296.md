# Automated blog publishing with Google Trends, GPT-4, Pexels & WordPress

> This n8n template demonstrates how to automatically generate and publish blog posts using trending keywords, AI-generated content, and watermarked stock images.
Use cases include maintaining an active blog with fresh SEO content, scaling content marketing without manual writing, and automating the full publishing pipeline from keyword research to WordPress posting.

### Good to know

At time of writing, each AI content generation step will incur costs depending on your OpenAI pricing plan.
Image search is powered by Pexels, which provides free-to-use stock images. The workflow also applies a watermark for branding.
Google Trends data may vary by region, and results depend on availability in your selected location.

### How it works

The workflow begins with a scheduled trigger that fetches trending keywords from Google Trends.
The XML feed is converted to JSON and filtered for relevant terms, which are logged into a Google Sheet for tracking.
One random keyword is selected, and OpenAI is used to generate blog content around it. A structured output parser ensures the text is clean and well-formatted.
The system then searches Pexels for a matching image, uploads it, adds metadata for SEO, and applies a watermark.
Finally, the complete article (text and image) is published directly to WordPress.

### How to use

The schedule trigger is provided as an example, but you can replace it with other triggers such as webhooks or manual inputs.
You can also customize the AI prompt to match your niche, tone, or industry focus.
For higher volumes, consider adjusting the keyword filtering and batching logic.

### Requirements

* OpenAI account for content generation
* Pexels API key for stock image search
* Google account with Sheets for keyword tracking
* WordPress site with API access for publishing

### Customising this workflow

This automation can be adapted for different use cases. Try adjusting the prompts for technical blogs, fashion, finance, or product reviews.
You can also replace the image source with other providers or integrate your own media library.
The watermark feature ensures branding, but it can be modified or removed depending on your needs.

## 📊 Basic Information

- **Workflow ID:** 8296
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 1138
- **Downloads:** 113
- **Created:** 2025/9/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8296)

## 👤 Author

- **Name:** Cojocaru David
- **Username:** @cojo

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **set** 
- **httpRequest** (×6)
- **xml** 
- **code** (×3)
- **googleSheets** (×3)
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **wordpress** 
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
