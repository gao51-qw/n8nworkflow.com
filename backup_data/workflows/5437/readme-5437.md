# Automate a Tally form: store with Airtable, notify via Slack

> ## 🎯 Workflow Goal

Still manually checking form responses in your inbox?

What if every submission landed neatly in Airtable — and you got a clean Slack message instantly?

That’s exactly what this workflow does.

No code, no delay — just a smooth automation to keep your team in the loop:

**Tally → Airtable → Slack**

Build an automated flow that:
- receives Tally form submissions,
- cleans up the data into usable fields,
- stores the results in Airtable,
- and automatically notifies a Slack channel.


## Step 1 – Connect Tally to n8n

![automatiserformulairetallyetape1.png](fileId:1668)

### What we’re setting up

A Webhook node in POST mode.

### Technical

1. Add a Webhook node.  
2. Set it to POST.  
3. Copy the generated URL.  
4. In Tally → Integrations → Webhooks → paste this URL.  
5. Submit a test response on your form to capture a sample structure.

## Step 2 – Clean the data

![automatiserformulairetallyetape2.png](fileId:1670)

After connecting Tally, you now receive raw data inside a fields[] array.

Let’s convert that into something clean and structured.

### Goal

Extract key info like Full Name, Email, Phone, etc. into simple keys.

### What we’re doing

Add a Set node to remap and clean the fields.

### Technical

1. Add a Set node right after the Webhook.  
2. Add new values (String type) manually:
   - Name: Full Name → Value: {{$json["fields"][0]["value"]}}  
   - Name: Email → Value: {{$json["fields"][1]["value"]}}  
   - Name: Phone → Value: {{$json["fields"][2]["value"]}}  
   *(Adapt the indexes based on your form structure.)*

Use the data preview in the Webhook node to check the correct order.

**Output**

You now get clean data like:

{ "Full Name": "Jane Doe",
  "Email": "jane@example.com",
  "Phone": "+123456789" }

## Step 3 – Send to Airtable

![automatiserformulairetallyetape3.png](fileId:1667)

✅ Once the data is cleaned, let’s store it in Airtable automatically.

**Goal**

Create one new Airtable row for each form submission.

What we’re setting up

An Airtable – Create Record node.

**Technical**

1. Add an Airtable node.  
2. Authenticate or connect your API token.  
3. Choose the base and table.  
4. Map the fields:
   - Name: {{$json["Full Name"]}}  
   - Email: {{$json["Email"]}}  
   - Phone: {{$json["Phone"]}}

**Output**

Each submission creates a clean new row in your Airtable table.

## Step 4 – Add a delay

![automatiserformulairetallyetape4.png](fileId:1669)

⌛ After saving to Airtable, it’s a good idea to insert a short pause — this prevents actions like Slack messages from stacking too fast.

Goal

Wait a few seconds before sending a Slack notification.

What we’re setting up

A Wait node for X seconds.

✅ Technical
1. Add a Wait node.  
2. Choose Wait for X minutes.  

## Step 5 – Send a message to Slack

![automatiserformulairetallyetape5.png](fileId:1671)

💬 Now that the record is stored, let’s send a Slack message to notify your team.

**Goal**
Automatically alert your team in Slack when someone fills the form.

What we’re setting up

A Slack – Send Message node.

**Technical**

1. Add a Slack node.  
2. Connect your account.  
3. Choose the target channel, like #leads.  
4. Use this message format:

**New lead received!**

Name: {{$json["Full Name"]}}  

Email: {{$json["Email"]}}  

Phone: {{$json["Phone"]}}  


Output

Your Slack team is notified instantly, with all lead info in one clean message.

Workflow Complete

Your automation now looks like this:  

**Tally → Clean → Airtable → Wait → Slack**

Every submission turns into clean data, gets saved in Airtable, and alerts your team on Slack — fully automated, no extra work.

Looking for professional automation support? Try [0vni – Agence automatisation](https://www.0vni.fr/).

## 📊 Basic Information

- **Workflow ID:** 5437
- **Complexity:** advanced
- **Node Count:** 22
- **Views:** 600
- **Downloads:** 60
- **Created:** 2025/6/29
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5437)

## 👤 Author

- **Name:** Baptiste Fort
- **Username:** @baptistefort

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **scheduleTrigger** 
- **airtable** 
- **slack** 
- **stickyNote** (×19)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 22 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
