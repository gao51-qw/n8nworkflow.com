# Private secret santa assignment & notification system with Gmail & verification

> ### **Secret Santa (Amigo Invisible) Automation 🎁**

This workflow fully automates a **Secret Santa** (Amic Invisible) event — perfect for friends, families, or office teams who want to make their gift exchange fun, fair, and completely private.

It takes a simple list of participant names and emails, then automatically pairs everyone using a **non-repeating random assignment system (derangement algorithm)** — meaning no one is ever assigned to themselves and every participant both gives and receives a gift exactly once.

Once the pairs are generated, the workflow sends each participant a beautifully formatted email revealing only their assigned recipient. After each email is sent, it is **automatically deleted from the “Sent” folder** to ensure the organizer cannot see or trace who got whom, keeping the surprise intact.

At the end of the process, the workflow generates a **numerical summary** like “1 sent to 2, 2 sent to 3…” — allowing the organizer to verify that everything worked correctly **without revealing the actual names or emails** of the participants.

This automation combines creativity, privacy, and transparency — making it perfect for anyone who wants to manage a Secret Santa game with ease, fairness, and a touch of automation magic.

Created by [oxsr11](https://n8n.io/creators/oxsr11/) — explore more original and innovative workflows on my n8n profile.


## 📊 Basic Information

- **Workflow ID:** 9609
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 155
- **Downloads:** 15
- **Created:** 2025/10/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9609)

## 👤 Author

- **Name:** Oriol Seguí
- **Username:** @oxsr11

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **manualTrigger** 
- **gmail** (×3)
- **code** (×2)
- **set** (×2)
- **splitInBatches** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
