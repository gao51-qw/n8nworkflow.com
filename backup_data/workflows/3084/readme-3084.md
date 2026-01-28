# Send SMS via ClickSend API worldwide without a phone number

> This workflow allows you to send SMS messages globally using API without needing a physical phone number. 

#### **1. How It Works**

Consists of three main nodes:

- **Manual Trigger**: The workflow starts when you click the "Test workflow" button in n8n.
- **Set SMS Data**: This node defines the SMS message content and the recipient's phone number (including the international prefix).
- **Send SMS**: This node sends the SMS using the ClickSend API. It uses HTTP Basic Authentication with your ClickSend credentials and sends a POST request to the ClickSend API endpoint with the message and recipient details.

The workflow is simple and efficient, making it easy to automate SMS sending for various use cases, such as notifications, alerts, or marketing campaigns.

---

#### **2. Set Up Steps**
To set up and use this workflow in n8n, follow these steps:

1. **Register on ClickSend**:
   - Go to [ClickSend](https://clicksend.com/?u=586989) and create an account.
   - Obtain your **API Key** and take advantage of the **2 € free credits** provided.

2. **Set Up Basic Authentication in n8n**:
   - In the **"Send SMS" node**, configure the **HTTP Basic Auth** credentials:
     - **Username**: Use the username you registered with on ClickSend.
     - **Password**: Use the **API Key** provided by ClickSend.

3. **Configure the SMS Data**:
   - In the **"Set SMS data" node**, define:
     - The **message content** (e.g., "Hi, this is my first message").
     - The **recipient's phone number**, including the international prefix (e.g., +39xxxxxxxx).

4. **Test the Workflow**:
   - Click the **"Test workflow"** button in n8n to trigger the workflow.
   - The workflow will send the SMS using the ClickSend API, and you should receive the message on the specified phone number.

5. **Optional Customization**:
   - You can modify the workflow to dynamically set the message content or recipient phone number using data from other nodes or external sources.

This workflow is a quick and efficient way to send SMS messages programmatically.

---


### **Need help customizing?**  
[Contact me](mailto:info@n3w.it) for consulting and support or add me on [Linkedin](https://www.linkedin.com/in/davideboizza/). 

## 📊 Basic Information

- **Workflow ID:** 3084
- **Complexity:** intermediate
- **Node Count:** 5
- **Views:** 2395
- **Downloads:** 239
- **Created:** 2025/3/5
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/3084)

## 👤 Author

- **Name:** Davide
- **Username:** @n3witalia

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **manualTrigger** 
- **httpRequest** 
- **set** 
- **stickyNote** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 5 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
