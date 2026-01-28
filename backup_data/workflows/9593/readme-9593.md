# Optimize technical manuals for RAG & agents with Blockify IdeaBlocks

> # Blockify® Technical Manual Data Optimization Workflow

## Blockify Optimizes Data for Technical Manual RAG and Agents - Giving Structure to Unstructured Data for ~78X Accuracy, when pairing Blockify Ingest and Blockify Distill

## Learn more at [https://iternal.ai/blockify](https://iternal.ai/blockify)

### Get Free Demo API Access here: [https://console.blockify.ai/signup](https://console.blockify.ai/signup)

### Read the Technical Whitepaper here: [https://iternal.ai/blockify-results](https://iternal.ai/blockify-results)

### See example Accuracy Comparison here: [https://iternal.ai/case-studies/medical-accuracy/](https://iternal.ai/case-studies/medical-accuracy/)

Blockify is a data optimization tool that takes messy, unstructured text, like hundreds of sales‑meeting transcripts or long proposals, and intelligently optimizes the data into small, easy‑to‑understand "IdeaBlocks." Each IdeaBlock is just a couple of sentences in length that capture one clear idea, plus a built‑in contextualized question and answer.

With this approach, Blockify improves accuracy of LLMs (Large Language Models) by an average aggregate 78X, while shrinking the original mountain of text to about 2.5% of its size while keeping (and even improving) the important information.

When Blockify's IdeaBlocks are compared with the usual method of breaking text into equal‑sized chunks, the results are dramatic. Answers pulled from the distilled IdeaBlocks are roughly 40X more accurate, and user searches return the right information about 52% more accurate. In short, Blockify lets you store less data, spend less on computing, and still get better answers- turning huge documents into a concise, high‑quality knowledge base that anyone can search quickly.

Blockify works by processing chunks of text to create structured data from an unstructured data source.

Blockify® replaces the traditional "dump‑and‑chunk" approach with an end‑to‑end pipeline that cleans and organizes content before it ever hits a vector store.

Admins first define who should see what, then the system ingests any file type—Word, PDF, slides, images—inside public cloud, private cloud, or on‑prem. A ​context‑aware splitter finds natural breaks, and a series of specially developed Blockify LLM model turns each segment into a draft IdeaBlock.

GenAI systems fed with this curated data return sharper answers, hallucinate far less, and comply with security policies out of the box.

The result: higher trust, lower operating cost, and a clear path to enterprise‑scale RAG without the cleanup headaches that stall most AI rollouts.

## 📊 Basic Information

- **Workflow ID:** 9593
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 51
- **Downloads:** 5
- **Created:** 2025/10/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9593)

## 👤 Author

- **Name:** Iternal Technologies
- **Username:** @iternal

## 🏷️ Categories

- Document Extraction
- AI RAG

## 🔗 Nodes Used

- **scheduleTrigger** 
- **httpRequest** (×4)
- **wait** 
- **set** (×3)
- **convertToFile** 
- **code** (×3)
- **googleDrive** (×3)
- **if** 
- **stickyNote** (×8)
- **splitInBatches** (×2)
- **awsS3** 
- **aggregate** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 21 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
