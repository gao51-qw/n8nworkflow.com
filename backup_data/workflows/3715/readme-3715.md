# Convert Gumroad sales to Beehiiv subscribers with Sheets & Telegram alerts

> ## Turn Gumroad buyers into newsletter subscribers on [Beehiiv](https://www.beehiiv.com?via=1node-ai), log to Google Sheets and get notified on Telegram

### Requirements

- **Gumroad account**  
- **Gumroad application** + **API key**  
- **Product listed** on Gumroad  
- **[Beehiiv](https://www.beehiiv.com?via=1node-ai) account**  
- **Publication created** on Beehiiv  
- **Beehiiv API key**  
- **Google Sheets access** (with API credentials)
- **Telegram Bot** created + Bot Token  
- **Telegram Channel** created and Bot added as admin

---

### Set Up

#### 1. Trigger on a New Gumroad Sale
- Create a **new application** in Gumroad (**Settings &gt; Advanced**).
- Copy your **API key** (access token).
- Paste it into the **Gumroad Sale Trigger** node.

#### 2. Connect to [Beehiiv](https://www.beehiiv.com?via=1node-ai) Newsletter
- Create a **publication** inside Beehiiv.
- Generate and copy your **Beehiiv API key**.
- Use it to **list publications** and **post a new subscription**.

#### 3. Load Into CRM (Google Sheets)
- Set up your **Google Sheets API credentials**
- Append the subscriber's data into your CRM

#### 4. Send a Telegram Message
- Create a **Telegram Bot** and get your **Bot Token**.
- Add the Bot to your **Telegram Channel** and make it an admin.
- In the **Telegram Send Message** node:
  - Use your **Bot Token**.
  - Set your **Channel Username** or **Chat ID**.
  - Customize the message content (e.g., "New Sale from {{customerEmail}} 🎉").


---
### Further Optimizations

- **Add more data to [Beehiiv](https://www.beehiiv.com?via=1node-ai)**:  
  Include optional fields like first name, last name, custom tags, etc., when posting the subscription.

- **Customize your Telegram message**:  
  Personalize the message with product name, sale amount, or customer name.

- **Enhance CRM data**:  
  Add additional sale details into Google Sheets, like product ID, purchase timestamp, or affiliate code if available.

- **Error Handling**:  
  Add an error workflow to retry failed Beehiiv or Google Sheets updates automatically or log the error messages in your team chat in Slack or Microsoft Teams.

---

✅ **That's it!**  
Every time a new sale happens, the customer is added to your Beehiiv newsletter, saved in your CRM, and you receive an instant notification on Telegram!

### Get in touch with us
Feel free to contact us at [1 Node](https://1node.ai).
Get instant access to a library of [free resources](https://1node.ai/resources) we created.



## 📊 Basic Information

- **Workflow ID:** 3715
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 431
- **Downloads:** 43
- **Created:** 2025/4/26
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3715)

## 👤 Author

- **Name:** Aitor | 1Node
- **Username:** @aitoralonso

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **gumroadTrigger** 
- **googleSheets** 
- **stickyNote** (×4)
- **httpRequest** (×2)
- **telegram** 
- **set** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
