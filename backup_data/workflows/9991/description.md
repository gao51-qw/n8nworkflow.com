![Instagram user enrichment, KlickTipp subscription and sending DMs.png](fileId:3104)

## **Community Node Disclaimer**
This workflow uses **KlickTipp community nodes**, available for **self-hosted n8n instances only**.

---

## **Who’s it for**
Digital marketers, social media managers, and coaches who engage leads through **Instagram DMs** and want to **automate personalized outreach, lead enrichment, and segmentation** in KlickTipp — without manual follow-ups or data entry.

---

## **How it works**
This workflow creates a **complete Instagram-to-email enrichment loop** — starting with personalized **DM outreach**, capturing responses via **JotForm**, enriching profile data, and syncing everything with **KlickTipp**.

When a workflow trigger or campaign action occurs, it:
1. Sends a **personalized Instagram DM** inviting the user to fill out a JotForm.  
2. Listens for **form submissions** in real time.  
3. Retrieves the lead’s **Instagram profile data** via the **Facebook Graph API**.  
4. Matches the username to the **Instagram DM ID** in a **Google Sheet**.  
5. Generates **AI-powered marketing insights** using **OpenAI**.  
6. Subscribes or updates the lead in **KlickTipp**, mapping enriched fields and tags.  

The result: every DM-initiated lead is captured, analyzed, and segmented — ready for intelligent follow-ups and personalized campaigns.

---

## **How to set up**
1. Connect accounts for KlickTipp, JotForm, Google Sheets, Facebook Graph API, and OpenAI.  
2. Set up a KlickTipp tag or campaign trigger to initiate the **DM sending**.  
3. Create KlickTipp fields for Instagram data (e.g., Bio, Follower count, Insights).  
4. Add tags: `Instagram | Outreach`, `Instagram | Enrichment`, `Instagram | Username found`.  
5. Test a sample flow: send a DM → fill the JotForm → verify data enrichment in KlickTipp.  

💡 *Pro Tip:* Personalize the DM message template and test both personal and business accounts to ensure optimal engagement and AI insight quality.

---

## **Requirements**
- Meta (Instagram) Business Account  
- Facebook Graph API with `instagram_basic` and `pages_show_list` permissions  
- KlickTipp account with API access  
- OpenAI connection (`gpt-4.1-mini` model)  
- (Optional) Active Instagram Page connected to your Facebook App for DM messaging  

---

## **How to customize**
- Adjust DM content and message timing for different campaigns or audiences.  
- Edit tags and field mappings in KlickTipp to match your segmentation logic.  
- Modify the AI prompt to emphasize tone, purchase intent, or niche interests.  
- Add conditional logic (e.g., `followers &gt; 1,000 → influencer tag`).  
- Extend the flow to LinkedIn, website tracking, or CRM syncing for multi-channel enrichment.
