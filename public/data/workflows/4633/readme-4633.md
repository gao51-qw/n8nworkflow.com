# Generate captions from autocomplete ideas using Dumpling AI + GPT-4o

> ### 📌 Who is this for?

This workflow is perfect for social media managers, content creators, digital marketers, and copywriters who want to save time and stay relevant by automatically generating fresh caption ideas based on trending search behavior.

---

### 💡 What problem is this workflow solving?

Manually coming up with engaging social media content is time-consuming and often hit-or-miss. This workflow leverages Google autocomplete to identify what users are searching for, then uses AI to convert those suggestions into short, engaging captions for use on platforms like Instagram, LinkedIn, or Twitter.

---

### ⚙️ What this workflow does

This automation runs daily at noon and transforms trending search topics into ready-to-use captions:

1. **Run Every Day at 12 PM**  
   A schedule trigger that activates the workflow once per day.

2. **Get Search Keywords from Google Sheet**  
   Pulls a list of base search phrases from a Google Sheet which serve as the starting point for getting trending autocomplete terms.

3. **Fetch Autocomplete Suggestions (Dumpling AI)**  
   Calls Dumpling AI’s `get-autocomplete` endpoint using the base phrase to return Google autocomplete suggestions.  
   [API Reference →](https://docs.dumplingai.com/api-reference/introduction)

4. **Format Suggestions into Array**  
   Formats the list of returned suggestions into an array format that can be looped through.

5. **Loop Through Each Autocomplete Suggestion**  
   Splits the array into individual suggestions to process each one separately.

6. **Generate Caption from Suggestion (GPT-4o)**  
   Sends each suggestion to GPT-4o with a detailed system prompt to create a short, human-sounding, engaging caption under 280 characters.

7. **Save Keyword & Generated Caption to Google Sheet**  
   Saves both the original search suggestion and the generated caption to another tab in Google Sheets for content scheduling or review.

---

This workflow combines real-time search trend data with the power of AI to keep your social media feed fresh, relevant, and consistent — all without lifting a finger.


## 📊 Basic Information

- **Workflow ID:** 4633
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 431
- **Downloads:** 43
- **Created:** 2025/6/4
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4633)

## 👤 Author

- **Name:** Yang
- **Username:** @yang

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **googleSheets** (×2)
- **httpRequest** 
- **set** 
- **splitOut** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
