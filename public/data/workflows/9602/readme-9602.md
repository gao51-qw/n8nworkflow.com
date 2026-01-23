# Automate job search with LinkedIn, Google Sheets & AI

> When I was applying for roles, I learned the hard way that a one-size-fits-all resume never wins. I obsessively tailored my resume for each posting, reflecting the exact scope, impact, and stack the team cared about. That’s when the callbacks really started landing from places like Google, Apple, Amazon, and other big tech teams. Personalization worked because recruiters saw immediate alignment: my bullets mirrored their needs.


![Screenshot 20251013 at 6.56.32 AM.png](fileId:2992)


So I built a small automation that flips the script. Instead of you chasing listings, it collects them for you, scores the fit against your resume, drafts a tailored cover letter, and files everything neatly into a Google Sheet then pings you for the best ones. One daily run. No more “I’ll get to it later.” Just a short list of high-signal roles and a ready-to-edit draft.


But tailoring takes time and the hardest part was upstream: finding roles that truly matched my skills and narrowing to the best-fit few worth customizing for. That’s why I built a lightweight n8n workflow that does the heavy lifting for me: it pulls fresh roles, scores each one against my resume, drafts a role-specific cover letter, and drops everything into a clean Google Sheet. Below is a quick guide to set it up end-to-end so you can spend less time hunting and more time sending targeted, high-quality applications.



Tutorial - 


[Full setup tutorial](https://open.substack.com/pub/jugaldb/p/ultimate-job-search-workflow-with?r=18lxy5&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false)

https://open.substack.com/pub/jugaldb/p/ultimate-job-search-workflow-with?r=18lxy5&utm_campaign=post&utm_medium=web&showWelcomeOnShare=false

## 📊 Basic Information

- **Workflow ID:** 9602
- **Complexity:** advanced
- **Node Count:** 27
- **Views:** 1891
- **Downloads:** 189
- **Created:** 2025/10/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9602)

## 👤 Author

- **Name:** Jugal
- **Username:** @jugaldb

## 🏷️ Categories

- HR
- AI Summarization

## 🔗 Nodes Used

- **googleDrive** 
- **extractFromFile** 
- **googleSheets** (×2)
- **code** 
- **httpRequest** (×2)
- **html** (×2)
- **splitOut** 
- **splitInBatches** 
- **wait** 
- **set** (×2)
- **@n8n/n8n-nodes-langchain.agent** (×2)
- **@n8n/n8n-nodes-langchain.lmChatGoogleGemini** (×2)
- **gmail** 
- **stickyNote** (×7)
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 27 nodes with 19 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
