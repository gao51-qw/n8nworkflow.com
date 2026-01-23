# Create AI generated videos 4x cheaper than veo3 with Google Sheets & Fal.AI

> Turn Your Ideas into Videos—Right from Google Sheets!

This workflow helps you make cool 5-second videos using Fal.AI and Kling 2.1, just by typing your idea into a Google Sheet. You can even choose if you want your video to have sound or not. It’s super easy—no tech skills needed! 

And the best?
4x Cheaper than Veo3 model with similar quality!

Why use this?

Just type your idea in a sheet—no fancy tools or uploads.

Get a video link back in the same sheet.

Works with or without sound—your choice!

How does it work?

You write your idea, pick the video shape, and say if you want sound (true or false) in the Google Sheet.

n8n reads your idea and asks Fal.AI to make your video.

When your video is ready, the link shows up in your sheet.

What do you need?

A Google account and Google Sheets connected with service account ([check this link for reference](https://docs.google.com/spreadsheets/d/1VGhoJU-qHzav53pTUSPtX6PNVPrRp9e38E34AmHoWvg/edit?usp=sharing))

A copy of the following Google Spreadsheet:
Spreadsheet to copy

An OpenAI API key

A Fal.AI account with some money in it

That’s it! Just add your ideas and let the workflow make the videos for you. Have fun creating!

If you have any questions, just contact me in X **[@maxrojasdelgado](https://x.com/maxrojasdelgado)**.

## 📊 Basic Information

- **Workflow ID:** 5034
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 2662
- **Downloads:** 266
- **Created:** 2025/6/19
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5034)

## 👤 Author

- **Name:** Maximiliano Rojas-Delgado
- **Username:** @maxr

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **wait** 
- **if** 
- **httpRequest** (×3)
- **set** 
- **googleSheetsTrigger** 
- **stickyNote** (×5)
- **googleSheets** 
- **@n8n/n8n-nodes-langchain.openAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
