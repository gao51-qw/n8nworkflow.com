# Automated Wazuh rule deployment pipeline with GitHub, XML validation & Telegram alerts

> **🚀 Say Goodbye to Manual Rule Deployments in Wazuh!**

**Just Commit**— Let Your Pipeline Auto‑Deploy via **GitHub + n8n 🎯**

**👨‍💻 Tired of This Endless Cycle?**

***Create rule → Validate → Copy to server → Restart Wazuh → Notify team***

Repeat that every week — you’re spending more time deploying than detecting.

**What if one GitHub commit could do it all automatically?**
**✅ Validate
✅ Deploy
✅ Restart
✅ Notify** — without touching the server.

Well, this workflow does just that.

**🔥 Presenting:
⚡️ Git‑Powered Wazuh Rule Deployment Using n8n**

---

🧠 What This Workflow Does in **10 Seconds — Automatically:**

✅ Watches GitHub commits — triggers only if the message contains #deploy-wazuh

✅ Checks if commit author is allowed

✅ Sends contextual SOC notifications about deployment attempt

🧪 Downloads & validates rule XML using xmllint

📦 Uploads to Wazuh Manager node only if validation succeeds

♻️ Restarts Wazuh Manager and verifies loading

📢 Sends alert to your team on Telegram (or other medium) with result: success/failure & reasons

---

**🧠 Why Detection Engineers Will Love This:**

⏱️ Saves hours weekly — Just commit & chill

🕒 Zero‑delay deployments — Go live instantly

🧪 Stops bad rules before they crash your SIEM

🔁 Rapid iteration — build, commit, done

🧘 No babysitting — Pipeline handles everything

📊 Informative alerts like:
"Rule custom_malware_alert.xml deployed by Mariskarthick – Validation ✅ – Restart 🔁 Completed"

---
**📌 Perfect For:**

🛡️ Detection Engineers deploying rules weekly

🏢 MSSPs with multiple Wazuh environments

🚨 Threat Intel teams needing rapid turnaround

---

**💥 This Isn’t Just Automation — It’s Detection Engineering at Its Finest.
Let your GitHub commits trigger real‑time rule deployment — with validation, restart, and SOC alerts built‑in.**

***Commit. Deploy. Detect.***

---

**Created by [Mariskarthick M](https://www.linkedin.com/in/mariskarthickm/)** 
Senior Security Analyst | Detection Engineer | Threat Hunter | Open-Source Enthusiast


## 📊 Basic Information

- **Workflow ID:** 7226
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 130
- **Downloads:** 13
- **Created:** 2025/8/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7226)

## 👤 Author

- **Name:** mariskarthick
- **Username:** @mariskarthick

## 🏷️ Categories

- SecOps
- Multimodal AI

## 🔗 Nodes Used

- **githubTrigger** 
- **code** 
- **httpRequest** 
- **ssh** (×4)
- **telegram** (×3)
- **noOp** 
- **if** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
