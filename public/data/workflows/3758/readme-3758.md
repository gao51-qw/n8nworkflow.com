# AI-personalized multi-product email outreach with SMTP rotation (GPT-4o/o3-mini)

> # Multi Product AI Email Automation with SMTP Rotation & No-Code Workflow(OpenAI GPT-4o or o3-mini)

## 🚀 Why This Workflow Matters
- **True Multi-Offer Campaigns**  
  Promote any mix of products, services or solutions in one run; no separate workflows needed.
- **SMTP Load Balancing**  
  A Switch node rotates sends across five Gmail/SMTP accounts to spread volume, avoid rate limits and boost deliverability.
- **Model Flexibility**  
  Supports GPT-4o, GPT-3 or OpenAI o3-mini for query generation and email personalization.
- **Personalized Outreach**  
  The AI reads each prospect’s website, then crafts concise (&lt;200 words) HTML emails tailored to their needs, embedding the right offer and link.
- **SEO & Conversion Focus**  
  Every message uses SEO-smart phrasing, clear hooks and a direct call to action to your specific page.

## 🛠️ How It Works
1. **Define All Offers**  
   In the `pinData` node, list each product/service with its name, description and URL.  
2. **Smart Query Generation**  
   The AI builds 100 targeted Google Maps searches per offer to uncover ideal leads.  
3. **Data Extraction**  
   Scrape website content, dedupe URLs and emails, then compile verified email lists.  
4. **Dynamic Email Creation**  
   For each lead, the workflow picks an offer, analyzes their site and generates a personalized HTML email with the correct link.  
5. **SMTP Rotation & Throttling**  
   A Switch node randomly assigns one of five Gmail/SMTP accounts, then applies a random delay to mimic human sending patterns and manage quotas.

## 💡 Key Benefits
- **Scale Effortlessly**: Run thousands of personalized emails daily without manual effort.  
- **Protect Sender Reputation**: Distribute sends across multiple accounts and built-in delays.  
- **Drive Targeted Traffic**: SEO-optimized outreach that resonates with prospects and points them to the right solution.

## 📈 Ideal Use Cases
- Launching multiple products or service lines  
- Seasonal or promotional campaigns  
- Account-Based Marketing with varied solutions  
- Agencies running outreach for diverse clients

## ⚙️ Quick Start
1. Import the JSON into n8n.  
2. Connect your GPT-4o or o3-mini credentials and five Gmail/SMTP accounts.  
3. Populate `pinData` with all your offers.  
4. Run the workflow—let automation build your pipeline.

## 📊 Basic Information

- **Workflow ID:** 3758
- **Complexity:** advanced
- **Node Count:** 41
- **Views:** 822
- **Downloads:** 82
- **Created:** 2025/4/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3758)

## 👤 Author

- **Name:** Badr
- **Username:** @b4dr

## 🏷️ Categories

- Lead Nurturing
- Multimodal AI

## 🔗 Nodes Used

- **code** (×6)
- **removeDuplicates** (×2)
- **splitOut** 
- **aggregate** 
- **httpRequest** (×3)
- **filter** 
- **splitInBatches** (×5)
- **wait** (×2)
- **@n8n/n8n-nodes-langchain.openAi** 
- **if** (×2)
- **stickyNote** (×5)
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **noOp** 
- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **function** 
- **switch** 
- **gmail** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 41 nodes with 35 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
