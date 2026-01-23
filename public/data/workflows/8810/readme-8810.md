# Convert event text to calendar entries with AI and NextCloud/Google/Zoho

> ## Why use this?
This workflow turns any event-related text into a new event on your calendar.

**Poster for a concert you want to go to?** Snap a photo [with your iPhone] and boom city, it's in your calendar. †

**Parent-Teacher conference you can't forget?** Forward that email to the webhook. †

**Appointment card from the doctor?** Snap it in, baby! †

## How it works
*(Very, very simple)*
1. Data received by webhook.
2. Ai Agent prompted to parse the text into structured event data.
3. Create event in NextCloud cal (or Zoho, or GoogleCal).
4. (Optional, intended use case) Set up the iOS Shortcut (linked in workflow) to turn your iPhone into the trigger for this workflow. Say *"Siri, Add Event To Calendar,"* and she opens the camera, OCRs the text in the photo and sends that to the webhook. Boom city.

### Expected input structure
```json
[
  {
    "body": {
      "cal": "work", &lt;- this is optional for deciding among calendars
      "eventInfo": "Join us for Betty-Jean's 98th birthday! (Yes, we celebrate every year now...) It's October 11th at 2:30pm, at Betty-Jean's house. Come after lunch 'cause her kitchen hasn't been used in 20 years. She mellows out pretty early these days so plan for the party to end by 4:00pm."
    }
  }
]
```

## Extras
- **Includes multiple calendar nodes.** Whether you're using NextCloud, Zoho or Google Cal, you can swap in the node you need.
- **iOS Shortcut linked in workflow.** I also set up a Shortcut for the iPhone. The first time you use the Shortcut, you'll need to give it some permissions, and paste in your production webhook URL.
- **Expansion option: Accept images**. iPhone has a native OCR feature but this isn't always an option. To make this workflow more versatile, consider building out a second branch to send an image to an Agent to parse the event data from the image directly.
- **Expansion option: Multiple triggers**. You could add more triggers to receive event-related text from other sources, like an IMAP node reading your email (pro tip: set up a designated folder and give the IMAP access only to that folder).


† Workflow begins with a webhook which can receive correctly-formatted data from anywhere on the web --- mailhook, webform, iOS Shortcut, etc. Direct data to this webhook from your source of text to use this workflow.

## 📊 Basic Information

- **Workflow ID:** 8810
- **Complexity:** advanced
- **Node Count:** 19
- **Views:** 181
- **Downloads:** 18
- **Created:** 2025/9/22
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8810)

## 👤 Author

- **Name:** Eric
- **Username:** @automation-wizard

## 🏷️ Categories

- Personal Productivity
- AI Chatbot

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.toolCode** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **stickyNote** (×7)
- **switch** 
- **httpRequest** (×2)
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **respondToWebhook** (×2)
- **if** 
- **googleCalendar** 
- **webhook** 
- **@n8n/n8n-nodes-langchain.agent** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 19 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
