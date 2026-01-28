# Daily SEO audit workflow with HTML reports via Gmail/Slack

> ## Elevate Your Website’s Ranking: Automated Daily SEO Audits

Boost your online visibility and stay ahead of the curve with this **Automated SEO Audit Workflow Template**. This solution streamlines the crucial task of monitoring your website’s health, proactively identifying issues, and ensuring peak performance without the manual grind. It’s your personal, tireless SEO assistant, designed to save you time and provide actionable insights for driving organic traffic and enhancing your search engine optimization (SEO).

---

### Benefits & Target Audience

- **Proactive Issue Detection**  
  Catch SEO errors and performance bottlenecks as they emerge before they impact your rankings.  
- **Time & Resource Savings**  
  Automate daily checks so your team can focus on strategy, not manual audits.  
- **Comprehensive Insights**  
  Receive on-page, technical, performance, accessibility, and security checks in a single, styled HTML report.

**Ideal for:**  
Website owners, bloggers, digital marketing agencies, SEO specialists, web developers, and e-commerce businesses are committed to maintaining a strong online presence and improving organic search performance.

---

### Detailed Workflow

1. **Daily Trigger**  
   A Schedule Trigger node fires the audit at your chosen time each day.  
2. **Configuration**  
   Use the Set Variables node to define the target URL, the recipient, and the sender's email addresses.  
3. **Content Fetch**  
   An HTTP Request node retrieves your site’s raw HTML.  
4. **On-Page Analysis**  
   The HTML node parses critical elements (titles, meta descriptions, H1/H2 headings, image alt tags).  
5. **Audit Logic**  
   A Code node runs your custom SEO audit script covering on-page, technical, performance (Core Web Vitals), accessibility, and basic security checks—to generate actionable findings.  
6. **Report Delivery**  
   A Gmail node formats those findings into a clean HTML report and emails it to your specified recipients.

---

### Required APIs & Customization

- **APIs Needed:**  
  - Gmail (or Slack) credentials for report delivery.  

- **Easy Customization:**  
  - **Target URLs & Recipients:** Update in “Configure Target & Recipients.”  
  - **Audit Frequency:** Adjust the Schedule Trigger (e.g., hourly, weekly).   
  - **Report Branding:** Customize the HTML/CSS in the Gmail/Slack node.  
  - **Delivery Channels:** Swap Gmail for Slack, Teams, or your preferred notification service.

---



## 📊 Basic Information

- **Workflow ID:** 6698
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 784
- **Downloads:** 78
- **Created:** 2025/7/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6698)

## 👤 Author

- **Name:** Mychel Garzon
- **Username:** @mychel-garzon

## 🏷️ Categories

- Market Research

## 🔗 Nodes Used

- **stickyNote** 
- **scheduleTrigger** 
- **set** 
- **httpRequest** 
- **html** 
- **code** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 5 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
