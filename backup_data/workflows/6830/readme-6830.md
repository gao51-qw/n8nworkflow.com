# Send daily 4K Bluray preorder updates from Blu-ray.com to Discord

> This is a simple webpage scraper that  specifically grabs today's newest 4K Bluray Preorders as listed on the Blu-ray.com website.  This is a scheduled workflow that can run every day and will post a formatted summary message of links to a Discord channel of your choice.

## Minimal setup required:
- Just create a webhook for the channel you want posted to in Discord and provide that in the final step.
- The timezone format step is set to East Coast (NYC) by default, feel free to change.
- No API keys or any special configuration needed (beyond your Discord webhook)
- Feel free to customize the formatting of the message that gets posted 👍


## How it works:
- First format todays date to match the formatting used on the website
- Grab the HTML for the preorders page at www.blu-ray.com
- Filter only the hyperlinks for each Bluray on the page
- Then further filter only those with an html header matching today's date
- Format how you want the message to be sent to your Discord channel (in this case a simple list of Hyperlinks for each Title)
- Send to Discord!

## Disclaimer:
- **This should be only for personal use.**
- The links go back to the blu-ray.com website, which is a good thing!
- Don't abuse this by slamming their site with some crazy level of automation frequency.
- Support the blu-ray.com website by using their affiliate links whenever you do want to preorder a title ;) 
- This is one of my first shared templates, so it may not be super optimal or perfect but it works for my needs and hopefully you'll find some use out of it!
- Discord currently has a 2000 character limit on webhook messages. Some of the messages may get truncated as a result.

## 📊 Basic Information

- **Workflow ID:** 6830
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 161
- **Downloads:** 16
- **Created:** 2025/8/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6830)

## 👤 Author

- **Name:** Jason Krol
- **Username:** @shorttompkins

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **manualTrigger** 
- **scheduleTrigger** 
- **code** (×3)
- **httpRequest** 
- **html** 
- **stickyNote** (×4)
- **discord** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
