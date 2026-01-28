# Find quality YouTube videos with automated filtering & relevance scoring to Google Sheets

> ## Who's it for
Content creators, researchers, educators, and digital marketers who need to discover high-quality YouTube training videos on specific topics. Perfect for building curated learning resource lists, competitive research, or content inspiration.

## What it does
This workflow automatically searches YouTube using multiple search queries, filters for quality content, scores videos by relevance, and exports the top results to Google Sheets. It processes hundreds of videos and delivers only the most valuable educational content ranked by custom relevance criteria.

The workflow searches for videos using 10 different AI automation-related queries (easily customizable), filters out low-quality content like shorts and clickbait, then ranks results based on title keywords, view counts, and engagement metrics.

## How it works
1. Multi-query search: Searches YouTube with an array of related queries to get comprehensive coverage
2. Content filtering: Removes shorts, spam, and low-quality videos using regex patterns
3. Quality assessment: Filters videos based on view count, likes, and publication date
4. Relevance scoring: Assigns scores based on title keywords and engagement metrics
5. Result ranking: Sorts videos by relevance score and limits to top 50 results
6. Export to Sheets: Delivers clean, organized data to Google Sheets with all metadata

## Requirements
- YouTube Data API v3 credentials from Google Cloud Console
- Google Sheets credentials for n8n workspace
- A Google Sheets document to receive the results

## How to set up
1. Enable YouTube Data API v3 in your Google Cloud Console
2. Add YouTube OAuth2 credentials to your n8n workspace
3. Add Google Sheets credentials to your n8n workspace
4. Create a Google Sheet and update the Google Sheets node with your document ID
5. Customize search queries in the "Set Query" node for your topic
6. Adjust filtering criteria in the Filter nodes based on your quality requirements


## How to customize the workflow
Search topics: Modify the query array in the "Set Query" node to research any topic:

```
[
"Python tutorial",
"JavaScript course", 
"React beginner guide",
// Add your queries here
]
```


**Quality thresholds**: Adjust minimum views, likes, and date ranges in the "Filter for Quality" node

**Relevance scoring**: Customize keyword weightings in the "Relevance Score" node to match your priorities

**Result limits**: Change the number of final results in the "Limit" node (default: 50)

**Output format**: Modify the "Set Fields" node to include additional YouTube metadata like duration, thumbnails, or category information

The workflow is designed to be easily adaptable for any research topic while maintaining high content quality standards.

## 📊 Basic Information

- **Workflow ID:** 5797
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 1020
- **Downloads:** 102
- **Created:** 2025/7/9
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5797)

## 👤 Author

- **Name:** Zach @BrightWayAI
- **Username:** @ajenta

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **manualTrigger** 
- **stickyNote** (×5)
- **set** (×3)
- **httpRequest** (×2)
- **wait** 
- **filter** (×2)
- **splitOut** (×2)
- **splitInBatches** 
- **removeDuplicates** 
- **sort** 
- **limit** 
- **googleSheets** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
