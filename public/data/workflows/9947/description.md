![Instagram Lead Magnet Automation.png](fileId:3032)

## **Community Node Disclaimer**
This workflow uses **KlickTipp community nodes**, available for **self-hosted n8n instances only**.

---

## **Who’s it for**
Marketing teams, agencies, and content creators who want to **turn Instagram post comments into automated conversations** — capturing leads, sending personalized DMs, and enriching contacts in **KlickTipp** without manual work.

---

## **How it works**
This workflow automates engagement between **Instagram users** and your **marketing funnel**.  
It listens for **new Instagram comments**, validates the **Meta webhook**, and sends **personalized DMs** with form links. The workflow then stores and syncs user data for tagging and enrichment in KlickTipp.  

When a new comment appears, it:

- Validates the webhook setup via the Meta `hub.challenge`  
- Captures the commenter’s username and ID  
- Sends a personalized DM with a form link for lead capture  
- Stores the data in **Google Sheets** for tracking  
- Updates or tags the contact in **KlickTipp**  

The result: every Instagram comment turns into a structured, tagged lead for your marketing automation.

---

## **How to set up**
Connect accounts for **Meta (Instagram)**, **Google Sheets**, and **KlickTipp**.  
Set up your **Meta App webhook** for Instagram comments, using your workflow’s webhook URL and verify token (e.g., `KlickTipp`).  
Create a Google Sheet as a matching table with the columns:  
- `Instagram username`  
- `Instagram ID`  
Authenticate KlickTipp with API credentials and ensure your subscriber fields are configured.  
Test by commenting on a connected Instagram post to trigger the workflow.  

💡 **Pro Tip:** Customize the DM to include your brand’s tone and lead form link for higher engagement.

---

## **Requirements**
- Meta (Instagram) Business Account  
- Facebook Graph API with `pages_messaging` permission  
- Google Sheets OAuth connection  
- KlickTipp account with API access  

---

## **How to customize**
- Replace the default form link with your own **JotForm** or landing page URL.  
- Adjust DM content to fit your tone and campaign messaging.  
- Add logic to send different DMs based on comment keywords.  
- Integrate with **KlickTipp tags** for automatic segmentation.  
- Expand the workflow to handle **repeat commenters** or trigger follow-ups.

