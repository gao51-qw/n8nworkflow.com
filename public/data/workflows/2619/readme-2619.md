# Deduplicate scraping AI grants for eligibility using AI

> This n8n template scrapes a list of AI grants from grants.gov and qualifies them using AI; determining interest and eligibility for the business. It then sends an email alert of interesting items to team members in an email.

The template also shows how you can use the "Remove Duplicates" node to simplify deduplication of external listings without the need to manage this yourself.

**Not particularly interested in AI Grants? This template works for other tender websites as long as you're able to scrape them.**

### How it works
* A scheduled trigger is set to fetch a list of AI grants listed on the grants.gov website in the past day.
* A Remove Duplicates node is used to track Grant IDs to filter out those already processed by the workflow.
* New grants are summarized and analysed by AI nodes to determine eligibility and interest which is then saved to an Airtable database.
* Another scheduled trigger starts a little later  than the first to collect and summarize the new grants
* The results are then compiled into an email template using the HTML node, in the form of a newsletter designed to alert and brief team members of new AI grants.
* This email is then sent to a list of subscribers using the gmail node.

## How to use
* Make a copy of sample Airtable here: [https://airtable.com/appiNoPRvhJxz9crl/shrRdP6zstgsxjDKL](https://airtable.com/appiNoPRvhJxz9crl/shrRdP6zstgsxjDKL)
* The filters for fetching the grants is currently set to the "AI" category. Feel free to change this to include more categories.
* Not interested in grants, this template can works for other sources of leads just change the endpoint and how you're defining the item ID to track.

## Requirements
* Airtable for database
* OpenAI for LLM

Note: These are not hard requirements and can be exchanged for services available to you.

## customising the workflow
* "Eligibility" criteria at this stage may be better served by identifying hard blockers instead ie. certifications, geographical considerations or certain legal checks. Be sure to mention any hard blockers into the Eligibility prompt.
* Not particularly interested in AI prompts? This template works for other tender websites as long as you're able to scrape them.

## 📊 Basic Information

- **Workflow ID:** 2619
- **Complexity:** advanced
- **Node Count:** 24
- **Views:** 4632
- **Downloads:** 463
- **Created:** 2024/12/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2619)

## 👤 Author

- **Name:** Jimleuk
- **Username:** @jimleuk

## 🏷️ Categories

- Lead Generation
- AI Summarization

## 🔗 Nodes Used

- **splitOut** 
- **httpRequest** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** (×2)
- **@n8n/n8n-nodes-langchain.informationExtractor** (×2)
- **merge** 
- **airtable** (×3)
- **removeDuplicates** 
- **html** 
- **scheduleTrigger** (×2)
- **stickyNote** (×8)
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 24 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
