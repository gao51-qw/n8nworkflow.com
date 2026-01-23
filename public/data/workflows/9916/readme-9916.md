# Trello task management with Telegram notifications and Supabase database

> # Trello Task-Sync Assistant

## Description

This n8n workflow automates task management by integrating Trello, Supabase, and Telegram to streamline card creation, user assignment, and due date notifications. It ensures seamless synchronization of Trello card data with a Supabase database and sends timely Telegram notifications to keep team members informed about task assignments and deadlines.

### Key Features
- **Trello Card Syncing**: Automatically registers new Trello cards in Supabase and keeps card details (e.g., due dates, URLs) updated.
- **User Management**: Tracks Trello user assignments in Supabase, creating new user entries and linking them to cards as needed.
- **Real-Time Notifications**: Sends Telegram messages when users are added to or removed from Trello cards, using dynamic, engaging message templates.
- **Due Date Reminders**: Schedules daily checks to notify users via Telegram about tasks due on the current day.

### Workflow Structure

1. **Trello Trigger Flow**:
   - **Trigger**: Activates when a new Trello card is created.
   - **Actions**:
     - Registers the card in Supabase (`cards` table) with details like ID, name, and board.
     - Sets up a Trello webhook for real-time updates on the card.
     - Syncs due date changes to Supabase.
     - Detects member additions/removals, checks for existing users in Supabase, creates new user entries if needed, and links users to cards in the `card_user` table.

2. **Webhook Event Flow**:
   - **Trigger**: Processes Trello webhook events (e.g., member changes, due date updates).
   - **Actions**:
     - Validates event types (add/remove member).
     - Maps Trello usernames to Telegram handles.
     - Sends formatted Telegram notifications with card details and playful, randomized messages for engagement.

3. **Due-Date Notification Flow**:
   - **Trigger**: Runs twice daily (every 12 hours) via a scheduled trigger.
   - **Actions**:
     - Fetches cards due on the current day from Supabase.
     - Retrieves assigned users for each card.
     - Sends Telegram reminders with urgent, formatted messages including card name, board, URL, and due date.

### Technical Details
- **Tools Used**:
  - **Trello**: Triggers on card creation and updates via webhooks.
  - **Supabase**: Stores card, user, and card-user relationship data in `cards`, `users`, and `card_user` tables.
  - **Telegram**: Sends notifications using a bot.
- **Credentials Required**:
  - Trello API key and token.
  - Supabase URL and key.
  - Telegram bot token and chat ID.
- **Scheduling**: Due date checks run every 12 hours (adjustable).
- **Error Handling**: Includes checks for user existence and conditional logic to manage add/remove events.

### Use Case
Ideal for teams using Trello for project management, this workflow ensures real-time data syncing with Supabase and keeps members informed via Telegram, reducing manual oversight and improving task accountability. It’s particularly useful for remote or distributed teams needing automated task tracking and reminders.

### Setup Requirements
- Configure Trello webhooks to point to the n8n webhook URL.
- Set up Supabase with the required tables (`cards`, `users`, `card_user`).
- Provide Telegram bot token and chat IDs
- Test the workflow by creating a Trello card, assigning a member, and setting a due date to verify Supabase entries and Telegram notifications.

This workflow enhances productivity by automating task synchronization and communication, ensuring no deadline is missed.

## 📊 Basic Information

- **Workflow ID:** 9916
- **Complexity:** advanced
- **Node Count:** 30
- **Views:** 235
- **Downloads:** 23
- **Created:** 2025/10/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9916)

## 👤 Author

- **Name:** Hermon
- **Username:** @hermong

## 🏷️ Categories

- Project Management
- AI Chatbot

## 🔗 Nodes Used

- **trelloTrigger** 
- **webhook** 
- **telegram** (×2)
- **set** (×2)
- **supabase** (×9)
- **httpRequest** 
- **if** (×2)
- **code** (×3)
- **scheduleTrigger** 
- **switch** 
- **stickyNote** (×7)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 30 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
