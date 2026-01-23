# Extract TikTok usernames from any video or creator link format

> ## What's the problem?

Imagine you want to **automate a task** where, based on a TikTok video link, **you must retrieve the username of the creator of that video**.

Many people may think that it's enough to get the "@" part of the link but that's not the case always. TikTok's iOS and Android app have **specific link formats** that are easier to share with others but, at the same time, it makes our task of retrieving creators way harder.

## Our solution:

**In solution to this problem, this simple workflow** makes a HTTP protocol request to retrieve the original link of the video hosted on _www.tiktok.com_ instead of the default mobile app's subdomain _vm.tiktok.com_. Then, we can in fact remove the attributes of the link and extract the handle correctly.

## Good things to know:

**Note that we extract the username** (and not the profile's nickname) **without the "@"**.

Once we have our username, we can simply access to their profile from then on using _"https://www.tiktok.com/@{{ $json.username }}"_.

## 📊 Basic Information

- **Workflow ID:** 10249
- **Complexity:** advanced
- **Node Count:** 18
- **Views:** 204
- **Downloads:** 20
- **Created:** 2025/10/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10249)

## 👤 Author

- **Name:** Dot
- **Username:** @dot

## 🏷️ Categories

- Miscellaneous

## 🔗 Nodes Used

- **if** (×3)
- **set** (×2)
- **httpRequest** 
- **formTrigger** 
- **stopAndError** (×2)
- **form** (×3)
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 18 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
