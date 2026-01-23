# Automatically add Gmail sender contacts to MySQL database

> ## This workflow processes emails received in Gmail and adds the sender's **name** and **email address** to a MySQL database.

## Use Cases:
- A sales or marketing agency can use this to automatically save client contact info to a database to build a list of leads
- Companies can use this to automatically save contacts to a database in case of Gmail data loss / losing access to their Gmail account
- Companies can build mailing lists to automatically send promotions to all of the clients who have contacted them in a given time period

## Before using, you need to have:
- Gmail credential
- MySQL database credential
- A Table in the MySQL database to store your contacts
- The table should have a "name" column, which allows NULL values
- The table should have an "email" column, which should be UNIQUE

## How it works:
- The Gmail Trigger will listen for a new email every minute
- For each email, the code node will extract the name and email address of the sender. If there is no name, it will return null
- The MySQL node will insert the new contact into a table in your database
- If the contact email already exists in your database, the MySQL node will update the contact name


## How to use:
- Please set up the MySQL node by selecting the correct table to store contacts in
- Please choose your "email" column to match on
- Please choose your "name" column to store names

## Customizing this Workflow:
- You can customize this workflow to save more data to MySQL. Here are some examples:
- In the MySQL node, click "Add Value", and choose one of the fields from the Gmail node to save in your database column. You can try saving the following items:
  - Subject line
  - MessageID
  - ThreadID
  - Snippet
  - Recipient Info

## 📊 Basic Information

- **Workflow ID:** 6300
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 433
- **Downloads:** 43
- **Created:** 2025/7/23
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6300)

## 👤 Author

- **Name:** Rosh Ragel
- **Username:** @roshragel

## 🏷️ Categories

- Lead Generation

## 🔗 Nodes Used

- **stickyNote** (×4)
- **mySql** 
- **gmailTrigger** 
- **code** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
