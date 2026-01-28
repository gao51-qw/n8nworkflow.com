#### Who is this for?

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
