# API that extracts engaging moments from YouTube videos 

> # How it works
This template takes a YouTube video ID and identifies potentially engaging moments based on the intensity of specific timestamps 👇


![Screenshot 20240228 at 15.51.02.png](fileId:760)

Ideal for vloggers and YouTube content creators, it serves as a foundation for various automations to streamline content calendars or highlight popular moments in your videos. You can leverage it for:

- Automatic processes to analyze YouTube videos and create sizzle reels or clips for social media, particularly effective for microcontent strategies like those endorsed by Gary Vee.
- Instant alerts via Slack, Telegram, Email, or WhatsApp when significant moments occur in your videos.
- Utilizing transcripts of these moments with AI to refine content ideas or brainstorm chatbots in your editorial workflow.


### Example response from the Workflow-as-an-API 

A GET request to `{your instance URL}/webhook/youtube-engaging-moments-extractor?ytID=IZsQqarWXtYy` returns 👇


![successresponse.png](fileId:759)

The workflow generates multiple moments; the screenshot above shows a truncated version.

Not all videos contain timestamp intensity data, the workflow handles this case as well 👇
![errorresponse.png](fileId:758)

# How to use
1. Import the template into your n8n workspace or self-hosted instance, then activate the workflow.
2. Open the Webhook trigger node and copy the Production URL.
3. In a web browser or any tool capable of consuming HTTP Requests (e.g., native code, Bubble app, n8n workflow, another automation tool, Postman, etc.), pass along the URL parameter `?ytID={youtube video ID}` when invoking the API endpoint.

Your URL should resemble something like `https://acme.app.n8n.cloud/webhook/youtube-engaging-moments-extractor?ytID=IZsQqarWXtYy`.


**Keep in mind**
This workflow relies on an unofficial YouTube API graciously hosted for free by the folks at lemnoslife.com. It's not recommended for high-volume production usecases. 

## 📊 Basic Information

- **Workflow ID:** 2152
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 6564
- **Downloads:** 656
- **Created:** 2024/2/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2152)

## 👤 Author

- **Name:** Max T
- **Username:** @maxtkacz

## 🏷️ Categories

- Content Creation
- AI Summarization

## 🔗 Nodes Used

- **httpRequest** 
- **splitOut** 
- **if** 
- **noOp** 
- **filter** (×2)
- **set** (×4)
- **aggregate** 
- **webhook** 
- **respondToWebhook** (×2)
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
