# Auto-generate & schedule LinkedIn posts from Google Sheets with GPT-4o

> ## Target audience

Solo creators, PMs, and content teams who queue LinkedIn ideas in Google Sheets and want them posted on a fixed schedule with AI-generated copy.

## How it works

The workflow runs on a schedule (Mon/Wed/Fri at 09:30). It pulls the first Google Sheet row with **Status = Pending**, generates a LinkedIn-ready post from **Post title** using an OpenAI prompt, publishes to your LinkedIn profile, then updates the same row to **Done** and writes the final post back to the sheet.

## Prerequisites (use your own credentials)

* **Google Sheets (OAuth2)** with access to the target sheet
* **LinkedIn OAuth2** tied to the account that should post — set the **person** field to your profile’s URN in the LinkedIn node
* **OpenAI API key** for the Chat Model node
* Store secrets in n8n **Credentials**. Never hard-code keys in nodes.

## Google Sheet structure (exact columns)

**Minimum required columns**

* `id` — unique integer/string used to update the same row later
* `Status` — allowed values: `Pending` or `Done`
* `Post title` — short prompt/topic for the AI model

**Recommended columns**

* `Output post` — where the workflow writes the final text (use this header, or keep your existing `Column 5`)
* `Hashtags` *(optional)* — comma-separated list (the prompt can append these)
* `Image URL` *(optional)* — public URL; add an extra LinkedIn “Create Post” input if you post with media later
* `Notes` *(optional)* — extra hints for tone, audience, or CTA

**Example header row**

```
id | Status | Post title | Hashtags | Image URL | Output post | Notes
```

**Example rows (inputs → outputs)**

```
1  | Pending | Why I moved from Zapier to n8n | #automation,#nocode |  |  | Focus on cost + flexibility
2  | Done    | 5 lessons from building a rules engine | #product,#backend |  | This is the final posted text... |
```

**Resulting `Output post` (for row 1 after publish)**

```
I switched from Zapier to n8n for three reasons: control, flexibility, and cost.
Here’s what changed in my stack and what I’d repeat if I had to do it again.

#automation #nocode
```

&gt; If your sheet already has a column named **Column 5**, either rename it to **Output post** and update the mapping in the final Google Sheets **Update** node, or keep **Column 5** as is and leave the node mapping untouched.

## Step-by-step

1. **Schedule Trigger**
   Runs on **Mon/Wed/Fri at 09:30**.
2. **Fetch pending rows (Google Sheets → Get Rows)**
   Reads the sheet and filters rows where **Status = Pending**.
3. **Limit**
   Keeps only the first pending row so one post goes out per run.
4. **Writing the post (Agent + OpenAI Chat Model + Structured Output Parser)**
   Uses **Post title** (and optional `Notes`/`Hashtags`) as input. The agent returns JSON with a `post` field. Model set to **gpt-4o-mini** by default.
5. **Create a post (LinkedIn)**
   Publishes `{{$json.output.post}}` to the configured **person** (your profile URN).
6. **Update the sheet (Google Sheets → Update)**
   Matches by `id`, sets **Status = Done**, and writes the generated text into **Output post** (or your existing output column).

## Customization

* **Schedule** — change days/time in the Schedule node. Consider your n8n server timezone.
* **Posts per run** — remove or raise the **Limit** to post more than one item.
* **Style and tone** — edit the Agent’s system prompt. Add rules for line breaks, hashtags, or a closing CTA.
* **Hashtags handling** — parse the `Hashtags` column in the prompt so the model appends them cleanly.
* **Media posts** — add a branch that attaches `Image URL` (requires LinkedIn media upload endpoints).
* **Company Page** — switch the **person** field to an **organization** URN tied to your LinkedIn app scope.

## Troubleshooting

* **No post created**

  * Check the **If/Limit** path: is there any row with `Status = Pending`?
  * Confirm the sheet **ID** and **tab name** in the Google Sheets nodes.
* **Sheet not updating**

  * The **Update** node must receive the original `id`. If you changed field names, remap them.
  * Make sure `id` values are unique.
* **LinkedIn errors (403/401/404)**

  * Refresh **LinkedIn OAuth2** in Credentials.
  * The **person/organization URN** is wrong or missing. Copy the exact URN from the LinkedIn node helper.
  * App lacks required permissions for posting.
* **Rate limit (429) or model errors**

  * Add a short **Wait** before retries.
  * Switch to a lighter model or simplify the prompt.
* **Post too long or broken formatting**

  * LinkedIn hard limit is \~3,000 characters. Add a truncation step in Code or instruct the prompt to cap length.
  * Replace double line breaks in the LinkedIn node if you see odd spacing.
* **Timezone mismatch**

  * The Schedule node uses the n8n instance timezone. Adjust or move to a Cron with explicit TZ if needed.

Need to post at a different cadence, or push two posts per day? Tweak the **Schedule** and **Limit** nodes and you’re set.


## 📊 Basic Information

- **Workflow ID:** 8332
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 542
- **Downloads:** 54
- **Created:** 2025/9/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8332)

## 👤 Author

- **Name:** Snehasish Konger
- **Username:** @snehasish

## 🏷️ Categories

- Social Media
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **scheduleTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **linkedIn** 
- **googleSheets** (×2)
- **limit** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
