## Try It Out!
This n8n template helps you analyze Google Maps reviews for a list of restaurants, summarize them with AI, and identify optimization opportunities—all in one automated workflow.
Whether you're managing multiple locations, helping local restaurants improve their digital presence, or conducting a competitor analysis, this workflow helps you extract insights from dozens of reviews in minutes.

  How It Works?
- Start with a pre-filled list of restaurants in Google Sheets.
- The workflow uses SerpAPI to scrape Google Maps reviews for each listing.
- Reviews with content are passed to ChatGPT for summarization.
- Empty or failed reviews are logged in a separate tab for easy follow-up.
- Results are stored back in your Google Sheet for analysis or sharing

How To Use
- Customize the input list in Google Sheets with your own restaurants.
- Update the OpenAI prompt if you want a different style of summary.
- You can trigger this manually or swap in a schedule, webhook, or other event.

Requirements
- A SerpAPI account to fetch reviews
- An OpenAI account for ChatGPT summarization
- Access to Google Sheets and n8n

Who Is It For? 
- This is helpful for people looking to analyze a large batch of Google reviews in a short amount of time. Additionally, it can be used to compare restaurants and see where each can be optimized. 


How To Set-Up? 
- Use a SerpAPI endpoint to include in the HTTP request node. Refer to this n8n documentation for more help! https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.toolserpapi/. 

Happy Automating! 