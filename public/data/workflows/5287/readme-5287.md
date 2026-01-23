# Generate multiple languange blogpost with OpenAI, support Yoast & Polylang

> The **blogblizt: polylang** workflow streamlines the creation and publication of high-quality blog content using powerful automation with n8n, OpenAI’s GPT and the WordPress API. It enables effortlessly generate SEO-friendly articles complete with metadata and optimized featured images, improving content freshness and search engine visibility.

![Screenshot 20250625 at 15.16.45.png](fileId:1580)

### 💡 Why Use blogblizt?

* **Automate content creation** to keep your blog fresh and engaging
* **Generate SEO-optimized posts** with expert-crafted titles, meta descriptions, and focus keyphrases
* **Save hours** of manual writing, image sourcing, and SEO configuration
* **Leverage AI** for topic ideation and high-quality writing tailored to international student audiences
* **Seamlessly publish and manage drafts** directly on your WordPress site via API
* **Produce captivating, relevant featured images** without external tools
* **Support multilingual content creation** with randomized language selection for diversity



### ⚡ Who Is This For?

* Content strategists managing WordPress blogs needing efficient topic generation
* SEO specialists wanting automated post creation with optimized metadata
* Website owners aiming to maintain active, multilingual content
* Marketers who want to leverage AI for high-quality, consistent article production



### ❓ What Problem Does It Solve?

This workflow automates the entire editorial cycle—from generating engaging topics with AI, drafting full-length articles, producing featured images automatically, to posting drafts configured for SEO on WordPress—dramatically reducing editor workload and improving content output.

### 🔧 What This Workflow Does

1. ⏱ **Trigger**

   * Runs on manual trigger or a weekly schedule to ensure consistent content flow
2. 📎 **Fetch Site Context**

   * Retrieves recent posts, taxonomies, and WordPress API schema to understand site structure
3. 🔍 **Generate Topic**

   * Uses OpenAI GPT-4.1-mini to roll a random language and craft a targeted blog post topic + SEO metadata
4. 🤖 **Draft Article**

   * Composes a comprehensive, SEO-friendly article tailored to the generated topic
5. 💌 **Create Draft**

   * Posts the draft on WordPress with Yoast SEO fields populated
6. 🖼 **Generate Image**

   * Creates a high-quality, cinematic featured image via AI
7. 📤 **Upload & Attach**

   * Uploads the image to the WordPress media library and sets it as the post’s featured image

---

### 🔐 Setup Instructions

1. **Import** the workflow file into n8n:

2. **Add credentials:**

   * WordPress API (with create-post & media permissions)
   * OpenAI API key (for GPT and image models)
3. **Customize** categories, languages, and schedule in the relevant nodes
4. **Adjust** the Schedule Trigger timing as desired (e.g. every Monday at 9 AM)
5. **Test** end-to-end on a staging WordPress site to verify drafts and images publish correctly



### 🧩 Pre-Requirements

* An operational **[n8n instance](https://n8n.partnerlinks.io/khaisastudio) (Cloud or self-hosted)** (self-hosted or n8n cloud)
* WordPress site with REST API access & proper authentication
* OpenAI account with API access for both language and image models
* (Optional) Yoast SEO plugin installed for metadata recognition


### 🛠️ Customize It Further

* Tweak OpenAI prompts for niche topics or additional languages
* Add social-media nodes to auto-share new posts
* Insert an editorial review step before publishing
* Refine image prompts for different visual styles (e.g., “modern infographic” vs. “cinematic portrait”)

---

### 🧠 Nodes Used

* **Manual Trigger**
* **Schedule Trigger** (weekly)
* **HTTP Request** (fetch posts, taxonomies, schema; upload media)
* **Code** (JavaScript analyzers for API schema & taxonomy parsing)
* **OpenAI Chat** (GPT-4.1-mini for topics & articles)
* **OpenAI Image Generation** (for featured images)
* **WordPress** (create draft post)
* **Sticky Notes** (in-flow documentation)

---

### 📞 Support

**Built by:** [Khaisa Studio](https://khaisa.studio)
**Tags:** wordpress, marketing, polylang
**Category:** Content Creation

**Need a custom?** contact me on **[LinkedIn](https://www.linkedin.com/in/khmuhtadin/)** or **[Web](khmuhtadin.com)**


## 📊 Basic Information

- **Workflow ID:** 5287
- **Complexity:** advanced
- **Node Count:** 25
- **Views:** 1952
- **Downloads:** 195
- **Created:** 2025/6/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5287)

## 👤 Author

- **Name:** Khairul Muhtadin
- **Username:** @khmuhtadin

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** (×11)
- **code** (×3)
- **stickyNote** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.agent** 
- **wordpress** 
- **@n8n/n8n-nodes-langchain.openAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 25 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
