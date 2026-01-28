## How it works  
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
