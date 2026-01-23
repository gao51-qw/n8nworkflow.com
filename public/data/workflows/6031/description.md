## 📨 Categorize and Label Existing Gmail Emails Automatically with GPT-4o mini

## 👥 Who's it for

This workflow is perfect for individuals or teams who want to sort and label existing emails in their Gmail inbox 🗃️ using AI. Ideal for cleaning up unlabeled emails in bulk — no coding required!

For sorting incoming emails messages in your gmail inbox, please use this free workflow: [Categorize and Label Incoming Gmail Emails Automatically with GPT-4o mini](https://n8n.io/workflows/5595-categorize-and-label-gmail-emails-automatically-with-gpt-4o-mini/)

## 🤖 What it does

It manually processes a selected number of existing Gmail emails, skips those that already have labels, sends the content to an AI Agent powered by GPT-4o mini 🧠, and applies a relevant Gmail label based on the email content. All labels must already exist in Gmail.

## ⚙️ How it works

▶️ Manual Trigger – The workflow starts manually when you click "Execute Workflow".

📥 Gmail Get Many Messages – Pulls a batch of existing inbox emails (default: 50).

🚫 Filter – Skips emails that already have one or more labels.

🧠 AI Agent (GPT-4o mini) – Analyzes the content and assigns a category.

🧾 Structured Output Parser – Converts the AI output into structured JSON.

🔀 Switch Node – Routes each email to the right label based on the AI result.

🏷️ Gmail Nodes – Apply the correct Gmail label to the email.

## 📋 Requirements

Gmail account connected to n8n

Gmail labels must be manually created in your inbox beforehand

Labels must exactly match the category names defined in the AI prompt

OpenAI credentials with GPT-4o mini access

n8n's AI Agent & Structured Output Parser nodes

## 🛠️ How to set up

In your Gmail account, create all the labels you want to use for categorizing emails

Open the workflow and adjust the email fetch limit in the Gmail node (e.g., 50, 100)

Confirm that the Filter skips emails that already have labels

Define your categories in the AI Agent prompt — these must match the Gmail labels exactly

In the Switch Node, create a condition for each label/category

Ensure each Gmail Label Node applies the correct existing label

Save the workflow and run it manually whenever you want to organize your inbox ✅

## 🎨 How to customize the workflow
Add or remove categories in the AI prompt & Switch Node

Adjust the batch size of emails to process more or fewer per run

Fine-tune the AI prompt to suit your inbox type (e.g., work, personal, client support)

