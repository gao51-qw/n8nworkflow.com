# Automated WordPress post tagging with AI analysis and Claude Opus 4.5

> This workflow automates the full process of **generating, creating, and assigning optimized WordPress tags** to a specific blog post. It uses a combination of WordPress API actions, AI analysis (Claude Opus 4.5), and internal data cleaning to ensure SEO-friendly, consistent, and properly structured tags.

---

### **Key Features**

#### ✅ **1. Full Tag Automation**

The workflow removes the need for manual tag selection or creation. It automatically:

* Reads the article content
* Chooses relevant existing tags
* Creates new SEO-optimized ones
* Assigns them to the article

This eliminates human error and saves significant editorial time.

#### ✅ **2. AI-Optimized SEO**

Thanks to the integrated Claude analysis, tags are:

* Semantically relevant
* Optimized for search intent
* Designed to improve discoverability and CTR
* Adapted to the specific content structure

This allows for a much higher SEO quality compared to manual tagging.

#### ✅ **3. Intelligent Tag Management**

The system ensures:

* A maximum of 4 total tags
* No irrelevant or duplicate tags
* Tags follow naming conventions (e.g., multi-word or acronyms)

This creates a clean, consistent tag taxonomy across the WordPress site.

#### ✅ **4. Automated Tag Creation in WordPress**

New tags are automatically created directly in WordPress via API, ensuring:

* Perfect synchronization with your CMS
* No need to manually add new tags from the WordPress backend
* Immediate availability for future posts

#### ✅ **5. Clean and Reliable Data Handling**

Custom code nodes and aggregation steps:

* Merge tag arrays safely
* Remove duplicates
* Produce clean, valid JSON outputs
  This makes the workflow stable even with large or complex tag lists.

#### ✅ **6. Modular and Scalable Architecture**

Every step (fetching, AI analysis, creation, merge, update) is separated into independent nodes, making it easy to:

* Extend the workflow (e.g., add categories, multilingual tags, taxonomy validation)
* Plug in different AI models
* Reuse the structure for other WordPress automations

#### ✅ **7. Consistent Output Validation**

The Structured Output Parser ensures:

* Correct JSON schema
* Safe handling of AI output
* No malformed data sent to WordPress

This makes the automation robust and production-ready.

---

### How it works

This workflow is an intelligent, AI-powered tag suggestion and assignment system for WordPress. It automates the process of analyzing a blog post's content and assigning the most relevant tags, creating new ones if necessary.

1.  **Data Retrieval & Preparation:** The workflow starts by fetching a specific WordPress article using a provided `post_id`. Simultaneously, it retrieves all existing tags from the WordPress site via the REST API. These two data streams are then merged into a single data structure.

2.  **AI-Powered Tag Analysis:** The merged data (article content and existing tag list) is sent to an LLM (Claude Opus 4.5). The AI acts as an "SEO expert," analyzing the article's title, content, and excerpt. It follows a strict set of instructions to select up to 4 relevant tags from the existing list and, if needed, suggests new tag names to reach a total of 4 tags.

3.  **Tag Processing & Creation:** The workflow splits the AI's output into two paths:
    *   **Existing Tags:** The list of selected tag IDs is prepared for the final update.
    *   **New Tags:** The list of new tag names is processed in a loop. For each new tag, the workflow sends a `POST` request to the WordPress API to create it. The newly created tag IDs are collected.

4.  **Final Assignment:** The existing tag IDs and the newly created tag IDs are merged into a single list. This final list of tag IDs is then sent back to the original WordPress article via an "Update" operation, effectively tagging the post.

---

### Set up steps

To configure and run this workflow, follow these steps:

1.  **Provide Input Data:** In the "Set data" node, you must configure the two required assignment fields:
    *   `post_id`: Set this to the numerical ID of the WordPress post you want to analyze and tag.
    *   `url`: Set this to the base URL of your WordPress site (e.g., `https://yourwebsite.com/`).

2.  **Configure WordPress Credentials:** Ensure that the "Wordpress" and "HTTP Request" nodes are correctly linked to a valid set of WordPress credentials within n8n. These credentials must have the necessary permissions to read and update posts, as well as create new tags.

3.  **Configure Claude Opus 4.5 Credentials:** Verify that the "Claude Chat Model" nodes are linked to a valid Claude API key credential in n8n.

4.  **Execute:** Once the credentials and input data are set, click "Execute Workflow" on the manual trigger node to run the process. The workflow will fetch the article, analyze it with AI, create any new tags, and update the post with the final selection of tags.


---

### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/).

## 📊 Basic Information

- **Workflow ID:** 11226
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 255
- **Downloads:** 25
- **Created:** 2025/11/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11226)

## 👤 Author

- **Name:** Davide
- **Username:** @n3witalia

## 🏷️ Categories

- Content Creation
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **merge** (×2)
- **splitInBatches** 
- **splitOut** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **wordpress** (×2)
- **set** (×3)
- **httpRequest** (×2)
- **aggregate** (×3)
- **code** 
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
