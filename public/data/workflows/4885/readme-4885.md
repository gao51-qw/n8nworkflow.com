# AI icebreaker builder: scrape sites with Dumpling AI and save to Airtable

> #### Who is this for?

This workflow is ideal for sales teams, marketers, and virtual assistants who manage outbound campaigns and want to improve their cold outreach personalization. It helps automate the research and writing process for each lead, saving time while improving quality.

#### What problem is this workflow solving?

Cold outreach often lacks personalization because manually reviewing each lead's website takes time. This workflow eliminates that bottleneck by using AI to auto-generate personalized icebreakers, summaries, and outreach emails based on a lead’s website—without human research.

#### What this workflow does

This n8n workflow runs on a schedule and pulls leads from Airtable who don't yet have an "Ice breaker" field filled out. For each lead, it does the following:

1. **Trigger**: Scheduled daily via the **Run Daily to Process New Leads** node.
2. **Search Airtable**: Finds leads in Airtable where the `Ice breaker` field is empty using the **Search Cold Leads Without Icebreaker** node.
3. **Split in Batches**: Iterates through each lead one by one using **Loop Through Each Lead**.
4. **Rate Limiting**: Waits briefly before each request using **Wait Before Making Request** to avoid rate limits.
5. **Scrape Website**: Sends each lead’s website to Dumpling AI's `/scrape` endpoint via the **Scrape Lead Website with Dumpling AI** HTTP request.
6. **Generate AI Copy**: Sends the scraped content to GPT-4o using the **Generate Icebreaker, Summary & Email (GPT-4o)** node. It asks the LLM to create:
   - A short personalized icebreaker
   - A 2–3 line website summary
   - A short email body for cold outreach
7. **Save Results**: Updates the original Airtable record with the generated content using the **Save AI Output Back to Airtable** node.
8. **Sticky Note**: Provides an overview of the workflow and usage instructions for future editors or collaborators.

This loop continues for all leads found, updating Airtable with fresh AI-generated outreach content.

#### Integration Requirements

- Airtable (Personal Access Token)
- Dumpling AI API Key (Header Auth)
- OpenAI (GPT-4o)


## 📊 Basic Information

- **Workflow ID:** 4885
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 2169
- **Downloads:** 216
- **Created:** 2025/6/12
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4885)

## 👤 Author

- **Name:** Yang
- **Username:** @yang

## 🏷️ Categories

- Lead Generation
- Multimodal AI

## 🔗 Nodes Used

- **noOp** 
- **scheduleTrigger** 
- **airtable** (×2)
- **splitInBatches** 
- **wait** 
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
