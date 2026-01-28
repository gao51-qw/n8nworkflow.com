# Extract and verify book titles from bookshelf photos using GPT-4o and Google Books

> **Use Case: **
Analyze images with multiple subjects. In this use case I have a bookshelf and am extracting and verifying book titles/authors from a bookshelf photo.

**How it works: **
1) **Webhook** receives an image url from a front end in which a user can upload a picture. 
	- In this use case, it is an image of a book shelf.  
2) **Edit Field (Set)**: Saves image in a consistent location so AI can find it.
3) **Analyze Image**: Image is analyzed. 
	- Extracts titles from the book spines 
4) **Code**: Splits extracted subjects to single item to be able to validate each item separately. 
	- Books are individualized to their own entity
5) **HTTP Request **validates each subject. 
	- Queries Google Books to validate books in case only partial titles were found. 
6) **Edit Field (Set)**: Tidies the result. 
7) **Code**: Aggregates and deduplicates 
	- Titles and authors are aggregate into a list
8) **Respond to Webhook** returns list to front end

**How to use:** 
Use with a frontend that can capture images and receive back the result. For this use case Supabase was used to store images from which the image analyzer could reference.


## 📊 Basic Information

- **Workflow ID:** 7350
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 241
- **Downloads:** 24
- **Created:** 2025/8/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7350)

## 👤 Author

- **Name:** Arlene Martin
- **Username:** @arlenemartin

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **webhook** 
- **respondToWebhook** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **stickyNote** (×8)
- **set** (×2)
- **code** (×2)
- **httpRequest** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
