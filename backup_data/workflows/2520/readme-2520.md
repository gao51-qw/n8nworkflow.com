# Summarize Umami data with AI (via Openrouter) and save it to Baserow

> ## Who's this for?
- Anyone who wants to improve the SEO of their website
- Umami users who want insights on how to improve their site
- SEO managers who need to generate reports weekly

![Screenshot 20241102 at 3.00.47 PM.png](fileId:859)![Screenshot 20241102 at 3.01.13 PM.png](fileId:860)

## Case study

[Watch youtube tutorial here](https://www.youtube.com/watch?v=hGzdhXyU-o8)

[Get my SEO A.I. agent system here](https://2828633406999.gumroad.com/l/rumjahn)


## How it works
- This workflow calls the Umami API to get data 
- Then it sends the data to A.I. for analysis
- It saves the data and analysis to Baserow

## How to use this
- Input your Umami credentials
- Input your website property ID
- Input your Openrouter.ai credentials
- Input your baserow credentials
- You will need to create a baserow database with columns: Date, Summary, Top Pages, Blog (name of your blog).

## Future development
- Use this as a template. There's alot more Umami stats you can pull from the API.
- Change the A.I. prompt to give even more detailed analysis.

Created by [Rumjahn](https://rumjahn.com/)

## 📊 Basic Information

- **Workflow ID:** 2520
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 1312
- **Downloads:** 131
- **Created:** 2024/11/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2520)

## 👤 Author

- **Name:** Keith Rumjahn
- **Username:** @rumjahn

## 🏷️ Categories

- Market Research
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **scheduleTrigger** 
- **httpRequest** (×5)
- **stickyNote** (×6)
- **code** (×3)
- **baserow** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
