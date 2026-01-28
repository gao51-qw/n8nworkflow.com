# Abandoned cart recovery functionality using Gmail and Google Sheets for analytics

> ## How it works

**Automatic Detection**: Instantly identifies abandoned carts via webhook from your e-commerce store.

**Progressive Sequence**: Automatically sends 3 recovery emails over 7 days with increasing incentives.

**Dynamic Personalization**: Inserts abandoned products, customer name, and unique promo codes.

**Performance Tracking**: Analyzes conversion rates and recovered revenue.

---

## Set up steps

1. **Configure the webhook**: Connect your e-commerce platform (Shopify, WooCommerce, Magento) to trigger the workflow when a cart is abandoned.

2. **Email service**: Set up your email sending service (Gmail, SendGrid, Mailgun) with proper credentials.

3. **Customization**: Adapt email templates with your brand guidelines, logo, and tone of voice.

4. **Promo codes**: Integrate your discount code system (10%, 15%, 20%).

5. **Analytics tracking**: Connect a Google Sheet to track recovery performance.

6. **Testing**: Validate the workflow with test data before activation.

---

## Key Features

🎯 **Smart targeting**: Automatically filters qualified carts (minimum value, valid email)

⏰ **Optimized timing**: Scientifically timed sequence (1h, 24h, 72h) to maximize conversions

💰 **Progressive incentives**: Increasing discounts (10% → 15% → 20%) to create urgency

📱 **Responsive design**: Email templates optimized for all devices

🔄 **Unique codes**: Automatically generates personalized promo codes for each customer

📊 **Built-in analytics**: Real-time tracking of open rates, clicks, and conversions

🛡️ **Error handling**: Robust system with notifications in case of technical issues

🎨 **Professional templates**: Modern email designs with optimized call-to-actions

---

## Advanced Features

- **Customer segmentation**: Differentiates between new and returning customers
- **Automatic exclusions**: Avoids sending to customers who already purchased
- **Multi-language**: Supports different languages based on location
- **A/B Testing**: Tests different email versions to optimize performance
- **CRM integration**: Syncs data with your customer management system

---

## Metrics Tracked

- Recovery rate per email in the sequence  
- Real-time recovered revenue  
- Open and click-through rates for each email  
- Promo codes used and their effectiveness  
- Average delay between abandonment and conversion  

---

## Customization Options

- **Flexible timing**: Adjust sending delays to fit your industry
- **Variable incentives**: Change discount percentages as needed
- **Dynamic content**: Adjust messages based on product types
- **Configurable thresholds**: Set your own qualification criteria
- **Full branding**: Integrate your complete visual identity

---

&gt; This workflow automatically turns abandoned carts into sales opportunities with a scientific and personalized approach, generating measurable ROI for your e-commerce.


## 📊 Basic Information

- **Workflow ID:** 6045
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 330
- **Downloads:** 33
- **Created:** 2025/7/16
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6045)

## 👤 Author

- **Name:** Rodrigue Gbadou
- **Username:** @gbadou

## 🏷️ Categories

- Social Media

## 🔗 Nodes Used

- **webhook** 
- **stickyNote** (×2)
- **set** 
- **if** 
- **code** 
- **wait** (×3)
- **gmail** (×3)
- **googleSheets** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
