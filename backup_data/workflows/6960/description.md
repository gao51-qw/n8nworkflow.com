*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

📬 Magic Inbox P2P for n8n — ✨ Instantly Teleport Workflows
Magic Inbox is the simplest, most powerful way to TELEPORT your workflows, messages, or files between any two n8n instances — instantly, securely, and with no central server.

All you need:

A Magic Inbox receiver ("Inbox" node, webhook trigger)
A Magic Inbox sender ("Send" node, transformer)
A trusted peer’s webhook URL — and the magic happens!
✨ Teleport Your Automation
🚀 Click, Send, Teleport: Send a workflow or any file to another n8n, anywhere in the world, with a single node.
🪄 No cloud, no barriers: Pure peer-to-peer transfer. Your workflow arrives instantly and privately on the recipient's machine, ready-to-use and auto-imported if you wish.
🔁 Collaborate with your team: Share, delegate, or migrate automations on demand, without manual copy-paste or API scripting.
🔹 Features
📤 Teleport workflows, files, and secure messages P2P between n8n servers
📬 Receive and auto-import (optional) any incoming workflow — no extra steps!
⚡️ Works across docker, cloud, self-hosted — anywhere n8n runs
🔐 Whitelist option: restrict trusted senders
🔄 Simple vs Advanced: auto-import for speed, raw mode for power users
🛠️ Installation
npm: npm install n8n-nodes-magic-inbox


Docker volume: cd /var/lib/docker/volumes/n8n_data/_data/nodes/ npm install n8n-nodes-magic-inbox docker restart


🚦 Usage: Teleport in 3 Steps
Create a workflow on n8n-A with your favorite nodes
Add Magic Inbox Send.
Set "Destination Magic Inbox URL" to your teammate’s or other n8n’s Inbox node webhook.
Choose content type: Workflow + Message for teleportation.
On n8n-B:
Add and enable a Magic Inbox node (receiver) in any workflow.
When you hit “Send” on n8n-A, your workflow is instantly delivered/teleported!
Auto-import enabled? The workflow appears, active, in the recipient’s n8n — like magic 🪄

⚙️ Main Parameters
Destination Magic Inbox URL:
Where to teleport your automation (recipient's webhook).
Workflow JSON:
Paste the full export from n8n’s workflow page (no manual API!).
Auto Import:
If enabled, new workflows are instantly usable by the recipient.
Whitelist:
Allow only trusted emails/IDs as senders.
📝 Example — Teleport a Workflow
On n8n-A:

Export your workflow as JSON (from the workflow menu)
Use Magic Inbox Send with destination URL from n8n-B’s Inbox node
Attach the exported JSON and an optional message
On n8n-B:

Magic Inbox node receives, parses, and (optionally) auto-imports the workflow into your library
No code, no copy-paste, no cloud — just teleport!

🐞 Bug Report / Contribute
Email : ccharleslepoittevin34@gmail.com
📜 License
MIT © Charles Magic Dev

🎁 Magic Dev

📋 1. Presentation and Prerequisites - Quick Without Blabla

Essential: manual trigger + n8n-nodes-magic-dev

🤖 Magic Mapping → A prompt, instance URL, N8N API key, OpenRouter API to teleport your workflow to your instance.

🎁 Creator Mapping → Instance URL, N8N API key and a random creator workflow teleports to your instance.

🔑 Quest Mapping → Instance URL, N8N API key, secret code found in Creator Mapping to win a premium workflow.

🗃️ Magic Market: PUBLISH — Share your workflow with a public Google Sheets URL.
SEARCH — Find workflows to teleport by keyword in our community database.

⚠️ REQUIRED! Your Google Sheet must have a column named WORKFLOW (all caps, no spaces).

Do not use any other column name — otherwise mapping and teleportation will fail.

Each row must contain a single n8n workflow as a JSON string in that column.

Always check the column header before using Magic Market Teleport!

⭐ FEEDBACK: Optional rating system (1-20 stars) + comments available in all modes

🤝 Creators: Want to collaborate? Contact me via Telegram @magicdev_bot! 💝 