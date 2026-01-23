# Posting from Wordpress to Medium

> ## Usage 
This workflow gets all the posts from your WordPress site and sorts them into a clear format before publishing them to medium.

Step 1. Set up the HTTP node and set the URL of the source destination. This will be the URL of the blog you want to use. We shall be using https://mailsafi.com/blog for this.

Step 2. Extract the URLs of all the blogs on the page
This gets all the blog titles and their URLs. Its an easy way to sort ou which blogs to share and which not to share.

Step 3. Split the entries for easy sorting or a cleaner view.

Step 4. Set a new https node with all the blog URLs that we got from the previous steps. 

Step 5. Extract the contents of the blog

Step 6. Add the medium node and then set the contents that you want to be shared out.

Execute your workflow and you are good to go




## 📊 Basic Information

- **Workflow ID:** 2062
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 2699
- **Downloads:** 269
- **Created:** 2024/1/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2062)

## 👤 Author

- **Name:** Zacharia Kimotho
- **Username:** @imperolq

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **html** (×2)
- **httpRequest** (×2)
- **itemLists** (×2)
- **medium** 
- **splitInBatches** 
- **manualTrigger** 
- **stickyNote** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
