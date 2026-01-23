# Better Oauth2.0 workflow for Pipedrive CRM with Supabase

> This workflow provides an OAuth 2.0 auth token refresh process for better control. Developers can utilize it as an alternative to n8n's built-in OAuth flow to achieve improved control and visibility. In this template, I've used [Pipedrive API](https://developers.pipedrive.com/docs/api/v1/Oauth#get-tokens), but users can apply it with any app that requires the authorization_code for token access.

This resolves the issue of manually refreshing the OAuth 2.0 token when it expires, or when n8n's native OAuth stops working.

## What you need to replicate this

1. Your database with a pre-existing table for storing authentication tokens and associated information. I'm using Supabase in this example, but you can also employ a self-hosted MySQL.

Here's a [quick video](https://go.screenpal.com/watch/cZiXhEV8N0y) on setting up the Supabase table.


2. Create a client app for your chosen application that you want to access via the API.

3. After duplicating the template:

a. Add credentials to your database and connect the DB nodes in all 3 workflows.

4. Enable/Publish the first workflow, "1. Generate and Save Pipedrive tokens to Database."

5. Open your client app and follow the Pipedrive instructions to authenticate.

Click on [Install and test](https://www.awesomescreenshot.com/image/49321214?key=886672146f2ba1b1482d43a625b72f10).


This will save your initial refresh token and access token to the database.

6. Please watch the [YouTube video](https://youtu.be/6nXi_yverss) for a detailed demonstration of the workflow:


## How it operates

**Workflow 1**. Create a workflow to capture the authorization_code, generate the access_token, and refresh the token, and then save the token to the database.

**Workflow 2**. Develop your primary workflow to fetch or post data to/from your application. Observe the logic to include an if condition when an error occurs with an invalid token. This triggers the third workflow to refresh the token.

**Workflow 3**. This workflow will handle the token refresh. Remember to send the unique ID to the webhook to fetch the necessary tokens from your table.

Detailed demonstration of the workflow:
https://youtu.be/6nXi_yverss

## 📊 Basic Information

- **Workflow ID:** 2319
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 1995
- **Downloads:** 199
- **Created:** 2024/7/7
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2319)

## 👤 Author

- **Name:** Priya Jain
- **Username:** @processease

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **stopAndError** 
- **stickyNote** (×9)
- **supabase** (×6)
- **httpRequest** (×4)
- **if** (×3)
- **respondToWebhook** 
- **code** 
- **set** 
- **webhook** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
