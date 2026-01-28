# N8N contact form workflow

> # 📬 N8N Contact Form Workflow: Capture, Notify via Email, and Redirect with Confirmation/Error Handling

This n8n workflow facilitates contact form submissions through a customizable form that sends an email notification to support and redirects users based on the submission outcome. It is ideal for embedding a functional "Contact Us" form on websites with automated email notifications.

---

## ✨ Features

- Collects first name, last name, email, company name, and a message
- Sends formatted email notification to the support team
- Displays success or error confirmation to the user
- Customizable UI and form behavior
- Error fallback handling with user-friendly feedback

---

## 🧩 Nodes Overview

### 1. **On form submission (Trigger)**
- **Type:** `formTrigger`
- Displays the contact form to users and triggers the workflow on submission.

### 2. **Send Email to Support**
- **Type:** `emailSend`
- Sends an HTML email to a support address with the form details.
- Uses an SMTP credential for sending.

### 3. **If Email Sent**
- **Type:** `if`
- Checks if the email was sent successfully using the existence of `messageId`.

### 4. **Confirmation Form**
- **Type:** `form`
- Displays a “Thank You” HTML message after a successful submission.

### 5. **Redirect Form**
- **Type:** `form`
- Redirects the user to a specified URL (e.g., LinkedIn profile).

### 6. **Form (Error)**
- **Type:** `form`
- Displays an error message if email delivery fails.

### 7. **NoOp Nodes**
- **End (Success)** and **End (Error)** to mark flow terminations cleanly.

---

## ⚙️ Customization Options

- Change the form fields, title, or descriptions in the `formTrigger` node.
- Update the email body or subject in the `emailSend` node.
- Redirect to a different URL by editing the `Redirect Form` node.
- Modify success and error UI with HTML content in the `Confirmation Form` and `Form`.

---

## 🧠 Use Cases

- Website "Contact Us" form integration
- Lead generation forms for businesses
- Customer service inquiry collection
- Feedback or support ticket system

---

## 🚀 How to Use

1. **Import** this workflow into your n8n instance.
2. **Configure SMTP credentials** for the `emailSend` node.
3. **Publish the formTrigger** endpoint (e.g., `/contact-us`) publicly or embed in your website.
4. Test submission and confirm email delivery and redirects.

---

## 🔐 Notes

- Ensure SMTP credentials are correctly configured in n8n.
- Make sure your n8n webhook URLs are reachable from your website or frontend.

---

Made with ❤️ using n8n by Akhil.

## 📊 Basic Information

- **Workflow ID:** 4337
- **Complexity:** intermediate
- **Node Count:** 13
- **Views:** 3486
- **Downloads:** 348
- **Created:** 2025/5/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/4337)

## 👤 Author

- **Name:** Akhil Varma Gadiraju
- **Username:** @akhilv7

## 🏷️ Categories

- Ticket Management

## 🔗 Nodes Used

- **formTrigger** 
- **form** (×3)
- **if** 
- **emailSend** 
- **noOp** (×2)
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 13 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
