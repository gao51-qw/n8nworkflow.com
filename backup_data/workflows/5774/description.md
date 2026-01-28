
## Use Case
Turn any web page into a compelling LinkedIn post — complete with an AI-generated image. This automation is ideal for sharing content like blog posts, case studies, or product updates in a polished and engaging format.

## What This Automation Does
Given a page URL and optional user instructions, this automation:
- Scrapes the content of the webpage
- Uses AI to write a clear, educational, and LinkedIn-optimized post
- Generates a brand-aligned visual that matches the content
- Sends both to Slack for review and approval
- Handles feedback and revisions via Slack interactions

Input:
- **Page URL** — The link to the webpage (required)
- **Instructions** — Optional notes on tone, emphasis, or format

Output:
- LinkedIn post text
- AI-generated visual prompt and image
- Slack message with review/approval options

## How It Works
1. **Form Submission**: User inputs a web page and optional instructions.
2. **Web Scraping**: Uses Airtop to extract page content.
3. **Post Generation**: AI agent writes a post based on the page and instructions.
4. **Visual Generation**: Another AI model creates an image prompt; this is sent to a sub-workflow for image rendering.
5. **Slack Review Flow**:
   - Post and image sent to Slack for feedback
   - User can approve, request revisions, or decline
   - Revisions trigger reprocessing steps automatically
6. **Final Post Delivery**: Approved post and image are sent back to Slack, ready to publish.

## Setup Requirements
1. Airtop API key
2. OpenAI credentials for post and image prompt generation
3. Slack OAuth integration with a review channel
4. A sub-workflow for branded image generation

## Next Steps
- **Post Directly**: Add LinkedIn publishing to automate the full content workflow.
- **Template Variations**: Offer post style presets (e.g., technical, story-driven, short-form).
- **CRM Sync**: Save approved posts and stats in Airtable or Notion for team use.

[Read more about content generation with Airtop](https://www.airtop.ai/automations/generate-linkedin-post-and-image-from-a-webpage-n8n)