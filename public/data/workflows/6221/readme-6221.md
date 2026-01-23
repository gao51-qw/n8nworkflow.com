# Manage Stripe data using natural language with Kimi K2 via OpenRouter

> Elevate your Stripe workflows with an AI agent that intelligently, securely, and interactively handles essential Stripe data operations. Leveraging the Kimi K2 model via OpenRouter, this n8n template enables safe data retrieval. From fetching summarized financial insights to managing customer discounts, while strictly enforcing privacy, concise outputs, and operational boundaries.

---

## 🧾 Requirements

**Stripe:**
- Active Stripe account
- API key with read and write access.

**n8n:**
- Deployed n8n instance (cloud or self-hosted)

**OpenRouter:**
- Active OpenRouter account with credit
- API key from OpenRouter

---

## 🔗 Useful Links

- [Stripe](https://stripe.com)
- [n8n Stripe Credentials Setup](https://docs.n8n.io/integrations/builtin/credentials/stripe/)
- [OpenRouter](https://openrouter.ai/)

---

## 🚦 Workflow Breakdown

1. **Trigger: User Request**
   - Workflow initiates when an authenticated user sends a message in the chat trigger.

2. **AI Agent (Kimi K2 OpenRouter): Intent Analysis**
   - Determines whether the user wants to:
     - List customers, charges, or coupons
     - Retrieve the account’s balance
     - Create a new coupon in Stripe
   - Filters unsupported or unclear requests, explaining permissions or terminology as needed.

3. **Stripe Data Retrieval**
   - For data queries:
     - Only returns summarized, masked lists (e.g., last 10 transactions/customers)
     - Sensitive details, such as card numbers, are automatically masked or truncated
     - Never exposes or logs confidential information

4. **Coupon Creation**
   - When a coupon creation is requested:
     - AI agent collects coupon parameters (discount, expiration, restrictions)
     - Clearly summarizes the action and **requires explicit user confirmation** before proceeding
     - Creates the coupon upon confirmation and replies with only the public-safe coupon details

---

## 🛡️ Privacy & Security

- **No data storage:** All responses are ephemeral; sensitive Stripe data is never retained.
- **Strict minimization:** Outputs are tightly scoped; only partial identifiers are shown and only when necessary.
- **Retention rules enforced:** No logs, exports, or secondary storage of Stripe data.
- **Confirmation required:** Actions modifying Stripe (like coupon creation) always require the user to approve before execution.
- **Compliance-ready:** Aligned with Stripe and general data protection standards.

---

## ⏱️ Setup Steps

- Setup time: 10–15 minutes
- Add Stripe API credentials in n8n
- Add the OpenRouter API credentials in n8n and select your desired AI model to run the agent. In our template we selected Kimi K2 from Moonshot AI.

---

## ✅ Summary

This workflow template connects a privacy-prioritized AI agent (Kimi K2 via OpenRouter) with your Stripe account to enable:
- Fast, summarized access to customer, transaction, coupon, and balance data
- Secure, confirmed creation of discounts/coupons
- Complete adherence to authorization, privacy, and operational best practices

---

## 🙋‍♂️ Need Help?

Feel free to contact us at [1 Node](https://1node.ai)
Get instant access to a library of [free resources](https://1node.ai/resources) we created.


## 📊 Basic Information

- **Workflow ID:** 6221
- **Complexity:** intermediate
- **Node Count:** 12
- **Views:** 380
- **Downloads:** 38
- **Created:** 2025/7/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6221)

## 👤 Author

- **Name:** Aitor | 1Node
- **Username:** @aitoralonso

## 🏷️ Categories

- CRM
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenRouter** 
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **stripeTool** (×5)
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 12 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
