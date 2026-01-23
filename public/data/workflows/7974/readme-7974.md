# Generate end-to-end blog content from Slack with Gemini AI and RSS feeds

> This workflow turns Slack into your content control hub and automates the full blog creation pipeline — from sourcing trending headlines, validating topics, drafting posts, and preparing content for your CMS.

With one command in Slack, you can source news from RSS feeds, refine them with Gemini AI, generate high-quality blog posts, and get publish-ready output — all inside a single n8n workflow.

⸻

## ⚙️ How It Works
	**1.Trigger in Slack**

	Type start in a Slack channel to fetch trending headlines.
	Headlines are pulled from your configured RSS feeds.

	**2.Topic Generation (Gemini AI)**

	Gemini rewrites RSS headlines into unique, non-duplicate topics.
	Slack displays these topics in a numbered list (e.g., reply with 2 to pick topic 2).

	**3.Content Validation**
		When you reply with a number, Gemini validates and slightly rewrites the topic to ensure originality.
		Slack confirms the selected topic back to you.

	**4.Content Creation**
	
		Gemini generates a LinkedIn/blog-style draft:
		Strong hook introduction
		3–5 bullet insights
		A closing takeaway and CTA
		Optionally suggests asset ideas (e.g., image, infographic).

	**5.CMS-Ready Output**

	Final draft is structured for publishing (markdown or plain text).
	You can expand this workflow to automatically send the output to your CMS (WordPress, Ghost, Notion, etc.).

⸻

## 🛠 Setup Instructions
	1.	Connect your Slack Bot to n8n.
	2.	Configure your RSS Read nodes with feeds relevant to your niche.
	3.	Add your Gemini API credentials in the AI node.
	4.	Run the workflow:
		Type start in Slack → see trending topics.
		Reply with a number (e.g., gen 3) → get a generated blog draft in the same Slack thread.

⸻

## 🎛 Customization Options
	•	Change RSS sources to match your industry.
	•	Adjust Gemini prompts for tone (educational, casual, professional).
	•	Add moderation filters (skip sensitive or irrelevant topics).
	•	Connect the final output step to your CMS, Notion, or Google Docs for publishing.

⸻

## ✅ Why Use This Workflow?
	•	One-stop flow: Sourcing → Validation → Writing → Publishing.
	•	Hands-free control: Everything happens from Slack.
	•	Flexible: Easily switch feeds, tone, or target CMS.
	•	Scalable: Extend to newsletters, social posts, or knowledge bases.

## 📊 Basic Information

- **Workflow ID:** 7974
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 136
- **Downloads:** 13
- **Created:** 2025/8/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7974)

## 👤 Author

- **Name:** Nijan
- **Username:** @nijan

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **rssFeedRead** (×3)
- **slackTrigger** 
- **code** (×4)
- **switch** 
- **merge** 
- **@n8n/n8n-nodes-langchain.googleGemini** (×2)
- **slack** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
