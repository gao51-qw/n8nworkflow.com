# Auto CVE & IOC feed ingestor with OpenAI risk triage & email alerts

> ## How it works  
This Blue Team workflow ingests threat intelligence from public CVE and IOC feeds, merges the data, performs automated triage using OpenAI, and routes actionable alerts via email.

- 📥 CVE and IOC feeds pulled from trusted sources  
- 🤖 AI node evaluates risk severity and recommends response  
- 🧠 Playbook logic determines whether to notify, monitor, or isolate  
- 📧 Alerts sent to email and also logged to Google Sheets  
- 🧱 Built with modular, no-code logic for maximum clarity  

## Set up steps  
1. Add your OpenAI API key in the AI nodes  
2. Configure your email in the Gmail node  
3. Update Google Sheets credentials and sheet ID  
4. (Optional) Add a Cron or Webhook trigger to automate intake

## Requirements  
• OpenAI API key  
• Gmail credentials  
• Google Sheets access  
• Internet connection

## Who’s it for  
• Blue teamers  
• SOC analysts  
• Cybersecurity students  
• SME defenders using no-code tooling  

---

This template is part of the CYBERPULSE AI BlueOps Lite & Pro plans.  
Visit [cyberpulsesolutions.com/blueops](https://www.cyberpulsesolutions.com/blueops) for the full bundle.


## 📊 Basic Information

- **Workflow ID:** 6356
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 193
- **Downloads:** 19
- **Created:** 2025/7/24
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6356)

## 👤 Author

- **Name:** Adnan Tariq
- **Username:** @adnantariq

## 🏷️ Categories

- SecOps
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **httpRequest** (×3)
- **merge** 
- **code** (×5)
- **if** 
- **emailSend** (×2)
- **googleSheets** (×2)
- **switch** 
- **splitOut** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 14 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
