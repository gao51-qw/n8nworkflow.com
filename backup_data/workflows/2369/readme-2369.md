# Parse DMARC reports, save them in database and notify on DKIM or SPF error

> ## Who is it for
If you are a postmaster or you manage email server, you can set up DKIM and SPF records to ensure that spoofing your email address is hard. On your domain you can also set up DMARC record to receive XML reports from email providers (rua tag). Those reports contain data if email they received passed DKIM and SPF verifications. 

Since DMARC email is public, you will receive a lot of emails from email providers, not only if DKIM/SPF fail. There is no need for it - you probably only need to know if SPF/DKIM failed. 

So this script is intended to automatically parse all DMARC reports that come from email providers, but ONLY send you notification if SPF or DKIM failed - meaning that either someone tries to spoof your email or your DKIM/SPF is improperly set up.

## How it works
- script monitors postmaster email for DMARC reprots (rua)
- unpacks report and parses XML into JSON
- maps JSON and formats fields for MySQL/MariaDB input
	- inputs into database
	- sends notification on DKIM or SPF failure

## Remember to set up
- email input mailbox
- notification channels
	- for slack
	- for email


## 📊 Basic Information

- **Workflow ID:** 2369
- **Complexity:** advanced
- **Node Count:** 20
- **Views:** 3281
- **Downloads:** 328
- **Created:** 2024/7/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2369)

## 👤 Author

- **Name:** Łukasz
- **Username:** @lukaszpp

## 🏷️ Categories

- SecOps

## 🔗 Nodes Used

- **emailReadImap** 
- **dateTime** (×2)
- **if** (×2)
- **set** (×2)
- **mySql** 
- **renameKeys** 
- **stickyNote** (×5)
- **compression** 
- **extractFromFile** 
- **xml** 
- **splitOut** 
- **slack** 
- **emailSend** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 20 nodes with 12 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
