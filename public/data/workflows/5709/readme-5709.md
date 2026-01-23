# Create and manage short URLs with Telegram bot, MongoDB and Nginx redirects

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

This workflow allows you to create and manage custom short URLs directly via Telegram, with all data stored in MongoDB, and redirects handled efficiently via Nginx.

## How it works
This flow provides a seamless URL shortening experience:

- Create via Telegram: Send a long URL to your bot. It will ask if you want a custom short code.

- Store in MongoDB: All long URLs and their corresponding short codes are securely stored in your MongoDB instance.

- Fast Redirects: When a user accesses a short URL, Nginx forwards the request to a dedicated n8n webhook, which then quickly redirects them to the original long URL.

## Set up steps
This setup is straightforward, especially if you already have a running n8n instance and a VPS.

- Difficulty: Medium (Basic n8n/VPS knowledge required)

- Estimated Time: 15-30 minutes

- n8n Instance & VPS: Ensure you have n8n running on your VPS (e.g., 2 core 2GB, as you have).

- Telegram Bot: Create a new bot via @BotFather and get your Bot Token. Add this as a Telegram credential in n8n.

- MongoDB Database: Set up a MongoDB instance (either on your VPS or a cloud service like MongoDB Atlas). Create a database and a collection (e.g., url or short_urls). Add your MongoDB credentials in n8n.

Here's MongoDB data structure JSON:

&gt;[
    {"_id": "686a11946a48b580d72d0397",
    "longUrl": "https://longurl.com/abcdefghijklm/",
    "shortUrl": "short-code"}
]


- Domain/Subdomain: Point a domain or subdomain (e.g., s.yourdomain.com) to your VPS IP address. This will be your short URL base.

- Nginx/Caddy Configuration: Configure your web server (Nginx or Caddy) on the VPS to proxy requests from your short URL domain to the n8n webhook for redirects. (Detailed Nginx config is provided as sticky notes in the redirect workflow)

## Workflow Setup:

- Import both provided n8n workflows (Telegram URL Shortener Creator and URL Redirect Handler).

- Activate both workflows.

Crucial: Set an environment variable in your n8n instance (or .env file) named SHORTENER_DOMAIN with the value of your short URL domain (e.g., https://s.yourdomain.com).

Refer to sticky notes inside the workflows for detailed node configurations and expressions.

## 📊 Basic Information

- **Workflow ID:** 5709
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 242
- **Downloads:** 24
- **Created:** 2025/7/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5709)

## 👤 Author

- **Name:** Rudi Afandi
- **Username:** @fanfanra

## 🏷️ Categories

- Miscellaneous

## 🔗 Nodes Used

- **telegramTrigger** 
- **mongoDb** (×3)
- **telegram** (×4)
- **stickyNote** (×7)
- **if** (×4)
- **set** (×5)
- **webhook** 
- **code** (×2)
- **respondToWebhook** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
