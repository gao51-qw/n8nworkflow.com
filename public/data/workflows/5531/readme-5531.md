# Auto generate & post LinkedIn content for Amazon sellers with GPT-4o & Apify

> ### **How it works**

This powerful automation turns LinkedIn influencer activity into high performing Amazon seller content, fully hands-off. It runs in two phases:

1. **AI Content Generator**
   * Retrieves influencer usernames from Airtable
   * Scrapes their most recent LinkedIn post via Apify
   * Uses OpenAI (GPT-4o) to generate **original** Amazon focused post content
   * Generates a branded LinkedIn image using AI (WeSpark visual identity)
   * Saves content & image link to Google Drive
   * Creates a record in Airtable with `Status = In review`

2. **Scheduled Publisher**

   * Every day at **4 PM**, one post from Airtable with `Status = Approved` is:

     * Downloaded from Drive
     * Published on LinkedIn
     * Marked as `Posted` in Airtable

---

### ⚙️ Set Up Steps

* **Time to set up:** 15–20 minutes
* Create two Airtable tables:

  * `influencers` with `UserName` (LinkedIn usernames only)
  * `posts` with fields:

    * `Description` (text)
    * `Image` (Drive link)
    * `InfluencerUsername`
    * `InfluencerPost`
    * `InfluencerPostCreatedAt`
    * `Status` (`In review`, `Approved`, `Posted`, `Rejected`)
* Add **Google Drive OAuth2 credentials** for saving & downloading images
* Configure **OpenAI GPT-4o key** (for text + image generation)
* Set up **Apify LinkedIn scraper** and add header credentials
* Link your **LinkedIn account** (company or personal profile)

---

### Workflow Phases

#### 1. **AI Generator** (Triggered manually)

* Loops over influencer usernames
* Scrapes latest LinkedIn post
* Skips if already stored
* Uses GPT-4o to:

  * Rewrite the post uniquely for Amazon sellers
  * Generate JSON with text + image prompt
* Saves AI-generated image to Google Drive
* Logs post to Airtable with `In review` status

#### 2. **Daily Publisher** (Scheduled)

* Runs every day at 4 PM
* Filters Airtable for `Status = Approved`
* Picks 1 record, downloads image from Drive
* Publishes to LinkedIn
* Updates Airtable status to `Posted`

---

## Airtable Setup Example

### `influencers` Table:

| UserName    |
| ----------- |
| jon-derkits |

---

### `posts` Table:

| Description                    | Image         | InfluencerUsername | InfluencerPost  | InfluencerPostCreatedAt | Status    |
| ------------------------------ | ------------- | ------------------ | --------------- | ----------------------- | --------- |
| Amazon Listing Optimization... | \[Drive Link] | jon-derkits        | \[LinkedIn URL] | 2025-06-18 19:30:01     | In review |

Status field options:

* `In review`
* `Approved`
* `Posted`
* `Rejected`

---

## Example LinkedIn Visuals

| Caption                                                                                            | Image                                                                                               |
| -------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| **Boost Your Amazon ROI!** <br> *Data-driven strategies are your secret weapon...*                    | [View Image](https://drive.google.com/file/d/19RNMI3G-gb6N6JtjIwuSwKHlMOOdbUZL/view?usp=sharing) |
| **Boost Sales with 5–10% Higher Conversions!** <br> *Utilize Enhanced Brand Content and Smart PPC...* | [View Image](https://drive.google.com/file/d/1hUbsKAzNZJjTWqggF_qEIq8pVI3Ah6y9/view?usp=sharing) |
| **Grow Your Amazon Business** <br> *WeSpark – Amazon Consulting Agency...*                            | [View Image](https://drive.google.com/file/d/10vihhsNblwA6lrJMSWAwf1v-clekDFi9/view?usp=sharing) |
| **Amazon Growth Strategies** <br> *Embrace the power of smart optimization...*                     | [View Image](https://drive.google.com/file/d/1Id_OtzKPHgB1svkHTGmlT3JzCre4xjbZ/view?usp=sharing) |

---

## ✅ Best For:

* Amazon agencies and FBA consultants
* B2B SaaS tools targeting eCommerce
* LinkedIn ghostwriters and creators
* Content marketing teams for Amazon sellers

---

## 📊 Basic Information

- **Workflow ID:** 5531
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 461
- **Downloads:** 46
- **Created:** 2025/7/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5531)

## 👤 Author

- **Name:** Usman Liaqat
- **Username:** @usmanliaqat

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.openAi** 
- **scheduleTrigger** (×2)
- **airtable** (×5)
- **splitInBatches** 
- **httpRequest** (×2)
- **wait** 
- **if** (×2)
- **googleDrive** (×2)
- **limit** 
- **linkedIn** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 20 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
