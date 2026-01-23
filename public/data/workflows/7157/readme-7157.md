# Beginner Outlook calendar summary with OpenAI

> A step-by-step demo that shows **how to pull your Outlook calendar events for the week and ask GPT-4o to write a short summary**.  
Along the way you’ll practice basic data-transform nodes (Code, Filter, Aggregate) and see where to attach the required API credentials.

---

## 1️⃣ Manual Trigger — *Run Workflow*
| Why | Lets you click “Execute” in the n8n editor so you can test each change. |
| --- | --- |

---

## 2️⃣ Get Outlook Events — *Get many events*
1. **Node type:** `Microsoft Outlook → Event → Get All`  
2. **Fields selected:** `subject`, `start`  
3. **API setup (inside this node):**  
   - Click **Credentials ▸ Microsoft Outlook OAuth2 API**  
   - If you haven’t connected before:  
     1. Choose **“Microsoft Outlook OAuth2 API” → “Create New”**.  
     2. Sign in and grant the **Calendars.Read** permission.  
     3. Save the credential (e.g., **“Microsoft Outlook account”**).  
4. **Output:** A list of events with the raw ISO start time.

&gt; **Teaching moment:** Outlook returns a full `dateTime` string. We’ll normalize it next so it’s easy to filter.

---

## 3️⃣ Normalize Dates — *Convert to Date Format*  
```js
// Code node contents
return $input.all().map(item =&gt; {
  const startDateTime = new Date(item.json.start.dateTime);
  const formattedDate = startDateTime.toISOString().split('T')[0]; // YYYY-MM-DD
  return { json: { ...item.json, startDateFormatted: formattedDate } };
});

### 4️⃣ Filter the Events Down to *This* Week  
After we’ve normalised the `start` date-time into a simple `YYYY-MM-DD` string, we drop in a **Filter** node.  
Add one rule for every day you want to keep—for example `2025-08-07` **or** `2025-08-08`. Rows that match any of those dates will continue through the workflow; everything else is quietly discarded.  

*Why we’re doing this:* we only want to summarise tomorrow’s and the following day’s meetings, not the entire calendar.

---

### 5️⃣ Roll All Subjects Into a Single Item  
Next comes an **Aggregate** node. Tell it to aggregate the `subject` field and choose the option *“Only aggregated fields.”*  
The result is one clean item whose `subject` property is now a tidy list of every meeting title. It’s far easier (and cheaper) to pass one prompt to GPT than dozens of small ones.

---

### 6️⃣ Turn That List Into Plain Text  
Insert a small **Code** node right after the aggregation:

```js
return [{
  json: {
    text: items
      .map(item =&gt; JSON.stringify(item.json))
      .join('\n')
  }
}];

Need a Hand?
I’m always happy to chat automation, n8n, or Outlook API quirks.

Robert Breen – Automation Consultant & n8n Instructor
📧 robert@ynteractive.com | LinkedIn

## 📊 Basic Information

- **Workflow ID:** 7157
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 3972
- **Downloads:** 397
- **Created:** 2025/8/8
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7157)

## 👤 Author

- **Name:** Robert Breen
- **Username:** @rbreen

## 🏷️ Categories

- Personal Productivity
- Multimodal AI

## 🔗 Nodes Used

- **microsoftOutlook** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **manualTrigger** 
- **stickyNote** (×3)
- **code** (×2)
- **filter** 
- **aggregate** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
