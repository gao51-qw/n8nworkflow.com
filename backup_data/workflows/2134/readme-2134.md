# Extract emails from website HTMLs

> ## How to scrap emails from websites

This workflow shows how to quickly build an Email scraping API using n8n.

Email marketing is at the core of most marketing strategies, be it content marketing, sales, etc. As such, being able to find contacts in bulk for your business on a large scale is key. 
There are available tools available in the market that can do this, but most are premium; why not build a custom one with n8n?


## Usage
The workflow gets the data from a website and performs an extraction based on the date around on the website

1. Copy the webhook URL to your browser
2. Add a query parameter eg ?Website=https://mailsafi.com . This should give you a URL like this {{$n8nhostingurl/webhook/ea568868-5770-4b2a-8893-700b344c995e?Website=https://mailsafi.com
3. Click on the URL and wait for the extracted email to be displayed. 
This will return the email address on the website, or if there is no email, the response will be "workflow successfully executed."

**Make sure to use HTTP:// for your domains**

Otherwise, you may get an error. 





## 📊 Basic Information

- **Workflow ID:** 2134
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 10559
- **Downloads:** 1055
- **Created:** 2024/2/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2134)

## 👤 Author

- **Name:** Zacharia Kimotho
- **Username:** @imperolq

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **splitOut** 
- **removeDuplicates** 
- **respondToWebhook** 
- **stickyNote** (×3)
- **webhook** 
- **httpRequest** 
- **set** 
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
