# Sync Notion content to Webflow CMS as draft items with status tracking

> ## **How it works:**

This template takes approved Notion pages and syncs them to a Webflow CMS collection as **draft** items. It reads pages marked **Status = Ready for publish** in a specific Notion database/project, merges JSON content stored across page blocks into a single object, then either **creates** a new CMS item or **updates** the existing one by **name**. On success it sets the Notion page to **5. Done**; on failure it switches the page to **On Hold** for review.&#x20;

## **Step-by-step:**

1. **Manual Trigger**
   You start the run with **When clicking ‘Execute workflow’**.

2. **Get Notion Pages (Notion → Database: Tech Content Tasks)**
   Pull all pages with **Status = Ready for publish** scoped to the target **Project**.

3. **Loop Over Items (Split In Batches)**
   Process one Notion page at a time.

4. **Code (Pass-through)**
   Expose page fields (e.g., **name**, **id**, **url**, **sector**) for downstream nodes.

5. **Get Notion Block (children)**
   Fetch all blocks under the page **id**.

6. **Merge Content (Code)**
   Concatenate code-block fragments, **parse** them into one `mergedContent` JSON, and attach the page metadata.

7. **Get Webflow Items (HTTP GET)**
   List items in the target Webflow **collection** to see if an item with the same **name** already exists.

8. **Update or Create (Switch)**

   * **No match:** **Create Webflow Item** (POST) with `isDraft: true`, mapping all `fieldData` (e.g., category titles, meta title, excerpt, hero copy/image, benefits, problem pointers, FAQ, ROI).
   * **Match:** **Update Webflow Item (Draft)** (PATCH) for that **id**. Keep the **existing slug**, write latest `fieldData`, leave `isDraft: true`.

9. **Write Back Status (Notion)**

   * **Success path →** set **Status = 5. Done**.
   * **Error path →** set **Status = On Hold**.

10. **Log Submission (Code)**
    Log a compact object with **status**, **notionPageId**, **webflowItemId**, **timestamp**, and **action**.

11. **Wait → Loop**
    Short pause, then continue with the next page.

## **Tools integration:**

* **Notion** — source database and page blocks for approved content.
* **Webflow CMS API** — destination collection; items created/updated as **drafts**.
* **n8n Code** — JSON merge and lightweight logging.
* **Split In Batches + Wait** — controlled, item-wise processing.

Want hands-free publishing? Add a **Cron** trigger before step 2 to run on a schedule.

## 📊 Basic Information

- **Workflow ID:** 7935
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 118
- **Downloads:** 11
- **Created:** 2025/8/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7935)

## 👤 Author

- **Name:** Snehasish Konger
- **Username:** @snehasish

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **notion** (×4)
- **httpRequest** (×3)
- **code** (×3)
- **splitInBatches** 
- **wait** 
- **manualTrigger** 
- **switch** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
