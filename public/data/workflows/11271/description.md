Who is it for
Beauty & Fashion Consultants: To visualize trends for specific client profiles.
Content Creators: To generate personalized variations of trending aesthetics.
Trend Watchers: To automate the collection and adaptation of social media designs.
How it works
Configuration: You define the target hashtags (e.g., #trendnails) and the target skin tone (e.g., "Yellow Base Spring") in the set node.
Scraping: The workflow uses Apify to scrape the latest top posts from Instagram based on your hashtags.
Analysis & Prompting: GPT-4o (Vision) analyzes the original image to understand the pattern and atmosphere, then generates a new prompt optimized for the specified skin tone.
Generation: DALL-E 3 creates a new image based on the generated prompt.
Delivery: The final personalized image is uploaded directly to a Slack channel.
How to set up
Apify: Create an account and get your API Token. Ensure you have access to the instagram-hashtag-scraper actor.
OpenAI: You need an API Key with access to GPT-4o and DALL-E 3.
Slack: Connect your Slack account with OAuth2 in n8n.
Workflow Configuration: Open the "Workflow Configuration" node and fill in your apifyApiToken, desired hashtags, and skinTone.
Requirements
Apify account
OpenAI API key (GPT-4o & DALL-E model access)
Slack account
