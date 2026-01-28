# Automated Zoho Inventory to Supabase product data pipeline

> **Description**

This powerful n8n automation template enables seamless synchronization between Zoho Inventory and Supabase—keeping your product database up to date with zero manual effort. Whether you’re running an eCommerce store, inventory dashboard, or product catalog app, this workflow ensures your data pipeline stays clean, consistent, and fully automated.

**What This Template Does:**

🔁 Runs on a schedule to fetch inventory data from Zoho
🔓 Authenticates via OAuth using refresh token for secure API access
📦 Fetches products & variants with complete metadata
🔄 Splits each item and maps it into Supabase row-by-row
📊 Pushes rich product data, including name, SKU, unit, tags, stock levels, dimensions, and up to 3 custom attributes

**Fields Included in Sync:**

Product ID, Variant ID, Variant Name, Brand, SKU
Returnability, Item Type, Unit, Attributes (1–3)
Tags, Stock on Hand, UPC/EAN/ISBN, Status
Reorder Level, Dimensions, Created Time, and more

**Requirements:**
- Zoho Inventory API access (with Refresh Token)
- Supabase account & API key
- Target table (e.g., Fairy Frills) set up in Supabase
- Optional: Custom field mapping for additional use cases

**Perfect For:**

- Inventory managers syncing Zoho to custom dashboards
- D2C brands and eCommerce platforms powered by Supabase
- Internal tooling teams needing a real-time product database sync
- Startups replacing spreadsheets with a production-grade backend


## 📊 Basic Information

- **Workflow ID:** 5503
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 702
- **Downloads:** 70
- **Created:** 2025/7/1
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5503)

## 👤 Author

- **Name:** Rahul Joshi
- **Username:** @rahul08

## 🏷️ Categories

- CRM

## 🔗 Nodes Used

- **stickyNote** (×6)
- **scheduleTrigger** 
- **httpRequest** (×2)
- **splitOut** 
- **supabase** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
