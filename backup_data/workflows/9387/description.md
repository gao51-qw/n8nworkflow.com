## Who's it for

This workflow is ideal for content creators, marketers, and business professionals who want to automatically repurpose their LinkedIn content into email newsletters. If you're actively posting on LinkedIn and want to maximize your content's reach by delivering it directly to your email subscribers, this automation saves you hours of manual work each week.

## What it does
This workflow automatically transforms your latest LinkedIn posts into professionally formatted email newsletters. It monitors your LinkedIn profile, extracts your most recent post, and intelligently converts it into engaging newsletter content with proper HTML formatting. The final newsletter is then delivered directly to your target email inbox, ready to be reviewed and sent to your subscribers.

## How it works
The workflow operates through four key stages:

1. Content Extraction: Uses an Apify actor node to scrape all posts from your specified LinkedIn account

2. Latest Post Filter: Automatically identifies and isolates your most recent LinkedIn post from the scraped data

3. AI Transformation: Leverages OpenAI to convert the LinkedIn post into newsletter-style content with improved formatting and structure

4. Email Delivery: Applies email-friendly HTML formatting and sends the polished newsletter to your designated email inbox

## Requirements
To use this workflow, you'll need:

- Apify account - For LinkedIn data scraping (free tier available)
- OpenAI API key - For content transformation and formatting
- Gmail API credentials - For email delivery

## Setup instructions

1. Configure Apify: Add your Apify API credentials and specify the LinkedIn profile URL you want to monitor

2. Connect OpenAI: Insert your OpenAI API key in the AI transformation node

3. Set up Gmail: Authenticate your Gmail account and specify the recipient email address

4. Customize prompts: Adjust the OpenAI prompts to match your newsletter's tone and style

5. Test the workflow: Run manually first to ensure all connections work properly

## How to customize

- Modify the OpenAI prompts to adjust newsletter tone, length, and formatting style
- Change the filtering logic to select posts based on engagement metrics instead of recency
- Add additional nodes to schedule automatic runs or post to multiple platforms
- Integrate with email marketing platforms like Mailchimp or SendGrid for direct subscriber delivery