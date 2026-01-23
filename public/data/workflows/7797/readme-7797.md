# Compare your n8n version with latest release using n8n API

> ## 🧑‍💻 Description
This workflow automatically compares the **version of your n8n instance** with the **latest release available**.  

Keeping your n8n instance up-to-date is essential for **security patches, bug fixes, performance improvements, and access to new automation features**. By running this workflow, you’ll know right away if your instance is behind and whether it’s time to upgrade.  

After the comparison, the workflow clearly shows whether your instance is **up-to-date** or **outdated**, along with the version numbers for both. This makes it easy to plan updates and keep your automation environment secure and reliable.  

---

## ⚙️ Setup Instructions  

### 1️⃣ Set Up n8n API Credentials
1. In your **n8n instance** → go to **Admin Panel → API**  
2. Copy your **API Key**  
3. In **n8n → Credentials → New → n8n API**  
   - Paste the API Key  
   - Save it  
4. Attach this credential to the **n8n node** (`Set up your n8n credentials`)  

---

## ✅ How It Works
- **Get Most Recent n8n Version** → Fetches the latest release info from [docs.n8n.io](https://docs.n8n.io).  
- **Extract Version + Clean Value** → Parses the version string for accuracy.  
- **Get your n8n version** → Connects to your own n8n instance via API and retrieves the current version.  
- **Compare** → Evaluates the difference and tells you if your instance is **current** or needs an **update**.  

---

## 🎛️ Customization Guidance
- **Notifications**: Add an Email or Slack node to automatically notify your team when a new n8n update is available.  
- **Scheduling**: Use a **Schedule Trigger** to run this workflow daily or weekly for ongoing monitoring.  
- **Conditional Actions**: Extend the workflow to log version mismatches into Google Sheets, or even trigger upgrade playbooks.  
- **Multi-Instance Tracking**: Duplicate the version-check step for multiple n8n environments (e.g., dev, staging, production).  

---

## 💬 Example Output
- *“Your instance (v1.25.0) is up-to-date with the latest release (v1.25.0).”*  
- *“Your instance (v1.21.0) is behind the latest release (v1.25.0). Please update to get the latest bug fixes and features.”*  

---

## 📬 Contact
Need help setting up API credentials or automating version checks across environments?  

- 📧 **robert@ynteractive.com**  
- 🔗 **[Robert Breen](https://www.linkedin.com/in/robert-breen-29429625/)**  
- 🌐 **[ynteractive.com](https://ynteractive.com)**


## 📊 Basic Information

- **Workflow ID:** 7797
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 443
- **Downloads:** 44
- **Created:** 2025/8/25
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7797)

## 👤 Author

- **Name:** Robert Breen
- **Username:** @rbreen

## 🏷️ Categories

- DevOps
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×3)
- **n8n** 
- **httpRequest** (×2)
- **html** 
- **code** 
- **if** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
