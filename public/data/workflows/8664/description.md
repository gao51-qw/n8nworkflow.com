
## Who’s it for
Teams that want to turn a chat prompt into a researched, ready-to-post social update—optionally published to Facebook.

## What it does / How it works
- Chat Trigger receives the user prompt
- Topic Agent optionally calls a research sub-workflow for fresh sources
- Outputs are validated into a structured JSON
- Post Writing Agent crafts a concise Vietnamese post
- (Optional) Facebook Graph API publishes to your Page

## How to set up
1. Connect OpenAI & Facebook in **Credentials** (no API key inside nodes).
2. In **Tool: Call Perplexity Researcher**, set your research `workflowId`.
3. In **Publish: Facebook Graph API**, set your Page ID and edge.
4. Adjust prompts/tone and the `LANGUAGE` in **CONFIG**.
5. Test the flow with sample prompts in the chat.

## Requirements
- n8n (Cloud or self-hosted)
- OpenAI API key (stored in Credentials)
- Facebook Page publish permissions
- (Optional) a research workflow for Perplexity

## How to customize the workflow
- Add moderation/review gates before publishing.
- Duplicate the publish path for other platforms.
- Store outputs in Sheets/Notion/DB for auditing.
- Tune model choice & temperature for your brand voice.

## Security
- Avoid hardcoding secrets in HTTP or Code nodes.
- Keep identifiers (Page IDs, workflowIds) configurable in **CONFIG**.