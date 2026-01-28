# Create QuickBooks Online customers with sales receipts for new Stripe payments

> Streamline your accounting by automatically creating QuickBooks Online customers and sales receipts whenever a successful Stripe payment is processed. Ideal for businesses looking to reduce manual data entry and improve accounting efficiency.

## How it works

1. **Trigger**: The workflow is triggered when a new successful payment intent event is received from Stripe.
2. **Retrieve Customer Data**: Fetches customer details from Stripe associated with the payment.
3. **Check QuickBooks Customer**: Searches QuickBooks Online to see if the customer already exists using their email address.
4. **Create or Use Existing Customer**: If the customer doesn't exist in QuickBooks, they are created; otherwise, the existing customer is used.
5. **Generate Sales Receipt**: A sales receipt is created in QuickBooks Online with payment details, including item descriptions, amounts, and currency.

## Set up steps

1. **Connect Accounts**: Authenticate both your QuickBooks Online and Stripe accounts in n8n.
2. **Webhook Setup**: Configure the Stripe webhook to send `payment_intent.succeeded` events to this workflow.
3. **Test the Workflow**: Trigger a test payment in Stripe to validate the integration.
4. **Customize Details**: Adjust item descriptions or other fields in the QuickBooks sales receipt JSON body as needed.

This workflow requires basic familiarity with n8n, but setup can be completed in under 15 minutes for most users.

## 📊 Basic Information

- **Workflow ID:** 2807
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 2795
- **Downloads:** 279
- **Created:** 2025/1/27
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2807)

## 👤 Author

- **Name:** Artur
- **Username:** @arlusm1

## 🏷️ Categories

- Invoice Processing

## 🔗 Nodes Used

- **httpRequest** (×3)
- **stripe** 
- **stripeTrigger** 
- **if** 
- **merge** (×3)
- **quickbooks** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
