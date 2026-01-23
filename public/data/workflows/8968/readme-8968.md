# Email outreach drafter based on HubSpot data

> This n8n template turns a small, targeted HubSpot list into tailored outreach. It scans each contact’s recent Gmail conversations, builds a lightweight persona with AI (tone, goals, pain points, decision style), then drafts a concise sales email aligned to your offer—saved to Gmail as a reviewable draft.

Perfect for SDRs and founders who want personalization at scale without writing from scratch.

This template was originally created by [Jim Le](https://n8n.io/creators/jimleuk/).

---

## How it works

* **Manual trigger** starts a controlled run.
* **HubSpot search** pulls a focused list of contacts (e.g., `hs_buying_role = DECISION_MAKER`).
* **Batch loop** processes contacts one by one.
* **Gmail fetch** grabs up to 20 recent threads from each contact.
* **AI persona extraction** (Information Extractor + Gemini) analyzes messages to capture:

  * decision-making style, communication preferences, goals/motivations
  * pain points, work style, personality traits, buying behavior, values, market awareness
* **Variables node** sets core fields (first name, last name, email) and the **offer** you want to pitch.
* **AI email generation** (Gemini) mirrors the contact’s tone and priorities; outputs **subject** + **HTML body**.
* **Gmail draft** is created for the contact so a rep can skim, tweak, and send.

---

## How to use

1. **Connect HubSpot** on the “Get Contacts” node and refine the filter to your segment.
2. **Connect Gmail** on both read and draft nodes (same account recommended).
3. **Add Gemini key** to both Gemini nodes.
4. In **Variables**, update `product_to_sell` with your offer and confirm the contact field mappings.
5. (Optional) Tweak the **persona attributes** or the **email prompt** for tone/length/CTA.
6. Click **Test workflow**. Review drafts in Gmail, edit if needed, then send.

---

## Requirements

* **HubSpot** (OAuth2) for contact targeting
* **Gmail** (read + draft)
* **Google Gemini** (API key) for persona + copy generation

---

## Notes & customization

* **Tighter targeting:** Change the HubSpot filter (e.g., industry, territory, lifecycle stage) to keep the list small and measurable.
* **Richer inputs:** Increase Gmail `limit` or include received/sent filters to capture more context (mind rate limits).
* **Brand voice:** Add a short style guide to the email generator’s system prompt (e.g., sentence length, jargon rules, sign-off).
* **Offer variants:** Replace `product_to_sell` per segment, or branch by industry to load different value props.
* **Compliance & privacy:** Limit stored outputs to essentials; avoid copying sensitive content from threads verbatim.
* **Auto-send option:** Swap the draft step for “send email” if you want hands-off delivery for known segments.

## 📊 Basic Information

- **Workflow ID:** 8968
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 1164
- **Downloads:** 116
- **Created:** 2025/9/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8968)

## 👤 Author

- **Name:** Miha
- **Username:** @miha

## 🏷️ Categories

- Lead Nurturing
- AI Chatbot

## 🔗 Nodes Used

- **noOp** 
- **gmail** (×2)
- **stickyNote** (×6)
- **splitInBatches** 
- **hubspot** 
- **@n8n/n8n-nodes-langchain.informationExtractor** (×2)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **set** 
- **manualTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 11 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
