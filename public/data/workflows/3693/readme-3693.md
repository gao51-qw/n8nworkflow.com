# Create & Publish Instagram Carousel Posts with GPT-4.1-mini, Imgur & Graph API

> # Create & Publish Instagram Carousel Posts with GPT-4.1-mini, Imgur & Graph API

**Version**: 2.0.0
**n8n Version**: 1.88.0+
**Author**: Unknown
**License**: MIT

### Description

An intelligent and modular workflow that **automatically generates**, **manages**, and **publishes** Instagram **carousel** posts, using AI for both content and images. It includes semantic memory to ensure uniqueness across posts and a scalable architecture for brand growth.

### Key Features

* 🤖 **Advanced AI Carousel Content**: Generates unique multi-slide post content—titles, captions, hashtags, and strategic CTAs for each card in the carousel.
* 🎨 **Automated Image Generation**: Creates high-quality visuals for every slide using OpenAI's DALL·E API.
* 🧠 **Semantic Memory Search**: Checks each theme against a local vector database using OpenAI Embeddings to avoid content repetition.
* 📊 **Publication Database**: Logs all generated carousel posts into Google Sheets for tracking, analytics, and audits.
* 📱 **Instagram Direct Publishing**: Publishes carousel media and captions automatically through the Instagram Graph API.
* 🗓️ **Scheduled & Manual Runs**: Trigger manually or schedule every 12 hours.
* 🔐 **Secure Credential Management**: Uses n8n credential fields—no hardcoded API keys or tokens.
* 🚀 **Flexible Prompting System**: Dynamically adapts style templates for different brands and industries.

### Use Cases

1. **E‑commerce Launches**: Showcase product features across multiple slides with tailored benefits and CTAs.
2. **Fitness & Wellness Tips**: Educate followers with step-by-step workouts or nutrition advice in a carousel format.
3. **Educational Infographics**: Present multi-part tutorials, stats, or course highlights.
4. **SaaS Feature Demos**: Demonstrate software workflows or new features slide by slide.
5. **Event Announcements**: Build excitement for webinars, conferences, or local meetups.

### Customization Examples

* **Retail/E‑commerce**: Adjust the **Theme Generator Code Node** to include product category, price point, and seasonal focus as vector inputs.
* **Health & Fitness**: Tweak the **AI Prompt Templates** to match your brand voice—e.g., friendly coach tone with bullet‑pointed workout steps.
* **Education/Training**: Modify the **Semantic Memory Embeddings Node** thresholds to deepen topic variety across tutorial series.
* **Tech/SaaS**: Customize the **Image Hosting HTTP Request Node** to use your company’s CDN instead of Imgur by swapping the endpoint and credential field.

### Workflow Overview

#### 1. Theme Generation (Generate Theme Code Node)

* Combines random vectors (topic starter + focus + benefit) to create unique carousel themes.

#### 2. Content Creation (AI Agent Code Node)

* Sends themed prompts to OpenAI, generating slide-by-slide titles, captions, and CTAs in structured JSON.

#### 3. Semantic Memory Check (OpenAI Embeddings Node)

* Runs embeddings against past themes stored in a Postgres vector database (pgvector) to ensure novelty.
* If similarity &gt; threshold, regenerates theme.

#### 4. JSON Validation (Parse & Validate Code Node)

* Parses AI response, validates JSON schema, and handles errors gracefully to prevent workflow failures.

#### 5. Content Storage (Google Sheets Node)

* Writes carousel metadata (titles, captions, hashtags, slide count, scheduled date) to a Google Sheets spreadsheet.

#### 6. Image Generation (DALL·E Image Generation Node)

* Generates one graphic per slide at 1024×1024 resolution.

#### 7. Image Hosting (Imgur Upload HTTP Request Node)

* Uses an HTTP Request node with Imgur credential field to upload each image and retrieve public URLs.

#### 8. Instagram Publishing (Instagram Graph API Nodes)

* **Create Media Containers**: Sends batch media creation request.
* **Publish Carousel**: Publishes the carousel using the list of container IDs and caption.

#### 9. Scheduling & Triggers

* **Manual Trigger**: For testing and one‑off posts.
* **Cron Trigger**: Scheduled trigger every 12 hours (configurable).

### Security

All sensitive values (OpenAI API key, Imgur Client ID/Secret, Instagram Access Token, Google Sheets OAuth2) must be stored in n8n’s **Credentials** panel. **Do not** hardcode keys or tokens in HTTP Request or Code nodes. Instead, reference credential fields:

* In HTTP Request nodes: select the corresponding credential under **Authentication**.
* In Code nodes: access `this.getCredentials('openAI')`, `this.getCredentials('imgur')`, etc.

### Instructions

1. **Import the Workflow**: In n8n, go to **Workflows &gt; Import from File** and upload the JSON.
2. **Configure Credentials**:

   * OpenAI API – set up in **Credentials &gt; OpenAI API**.
   * Google Sheets OAuth2 – set up in **Credentials &gt; Google Sheets OAuth2**.
   * Imgur – set up in **Credentials &gt; Imgur**.
   * Instagram Graph API – set up in **Credentials &gt; Instagram Graph API**.
3. **Set Placeholders**:

   * Google Sheets Document ID
   * Instagram User ID
4. **Customize Prompts & Vectors**: Tweak Code node inputs and prompt templates as needed.
5. **Test & Activate**: Run a manual trigger, verify outputs, then enable the cron schedule.

### Tags

`Social Media` `Instagram Carousel` `AI Content Generation` `OpenAI` `n8n` `Marketing Automation` `Vector Search` `Content Scheduling`

### Technical Notes

* Uses pgvector in Postgres for efficient semantic similarity.
* Supports extensible platforms—duplicate the publishing steps to add LinkedIn or Facebook.
* Error handling ensures invalid JSON never reaches the publishing nodes.

### License

This workflow is released under the MIT License.


## 📊 Basic Information

- **Workflow ID:** 3693
- **Complexity:** advanced
- **Node Count:** 26
- **Views:** 1511
- **Downloads:** 151
- **Created:** 2025/4/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3693)

## 👤 Author

- **Name:** Luciano Gutierrez
- **Username:** @koresoluciones

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **code** (×2)
- **@n8n/n8n-nodes-langchain.agent** 
- **scheduleTrigger** 
- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.vectorStoreInMemory** (×2)
- **@n8n/n8n-nodes-langchain.embeddingsOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **stickyNote** (×9)
- **@n8n/n8n-nodes-langchain.toolVectorStore** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **googleSheets** 
- **httpRequest** (×3)
- **@n8n/n8n-nodes-langchain.openAi** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 26 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
