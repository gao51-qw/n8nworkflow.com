# Daily habit RPG: Gamified Gmail reminders with quest system and progress tracking

> Who's it for
This template is perfect for anyone struggling with habit consistency who wants a fun, engaging way to maintain daily routines. It's ideal for productivity enthusiasts, fitness beginners, remote workers, students, or anyone who loves gamification and RPG elements. If you've ever wished your daily tasks felt more like an adventure game, this workflow is for you.
How it works
The workflow runs automatically every morning at your chosen time (default: 6 AM) and transforms your daily habits into an RPG adventure:
1. Daily Trigger - Scheduled to run every morning
2. Player Stats Generation - Creates random level, XP, and streak data (in production, connect to a database)
3. Quest Generation - Assigns daily "quests" based on the day of week (weekday routines, weekend specials, Monday goals)
4. Quote Fetching - Gets a motivational quote from a free API
5. Achievement Processing - Checks for milestone achievements (7-day streak, 30-day streak, level 10)
6. Email Creation - Builds a beautiful HTML email with game-like design
7. Email Delivery - Sends the quest email via Gmail
8. Stats Logging - Records execution statistics
The system includes different habit sets for weekdays and weekends, random bonus quests, a rank system (D to SSS), achievement unlocks, and progress tracking with visual elements like progress bars.
Setup steps
Setup takes approximately 5 minutes:
1. Import the workflow into your n8n instance
2. Connect Gmail - Click "Create New" in the Gmail node credentials and authenticate via OAuth2
3. Update recipient email - Change "your-email@gmail.com" to your actual email in the "Send Quest Email" node
4. Customize habits (optional) - Edit the quest arrays in the "Generate Daily Quests" node
5. Test the workflow - Click "Execute Workflow" to send a test email
6. Activate - Toggle the workflow to "Active" when ready for daily automation
Requirements
* Gmail account with OAuth2 authentication
* n8n instance (cloud or self-hosted)
* No external API keys required (uses free Quotable API)
* No database required (uses random data for demonstration)
How to customize the workflow
Modify Daily Habits
Edit the questDatabase object in the "Generate Daily Quests" node:
* Add your own habits with custom names
* Adjust XP and coin rewards
* Change difficulty levels (Easy, Medium, Hard, Epic, Bonus)
* Set different quests for weekdays vs weekends
Visual Customization
In the "Create Email Template" node:
* Modify color schemes in the CSS
* Adjust font sizes and layouts
* Change emoji icons for quests
* Update achievement thresholds
Timing and Schedule
In the "Daily Morning Trigger" node:
* Change the trigger hour (default: 6 AM)
* Adjust timezone if needed
* Set different schedules for weekdays/weekends
Motivational Content
* Update daily motivation messages for each day of the week
* Customize achievement names and descriptions
* Modify rank titles and progression
* Add your own fallback quotes
This workflow brings the addictive nature of RPG games to your daily habits, making routine tasks feel like an epic adventure. Perfect for anyone who wants to level up their life, one quest at a time!

## 📊 Basic Information

- **Workflow ID:** 10688
- **Complexity:** advanced
- **Node Count:** 17
- **Views:** 213
- **Downloads:** 21
- **Created:** 2025/11/10
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10688)

## 👤 Author

- **Name:** ueharayuuki
- **Username:** @ueharayuuki1012

## 🏷️ Categories

- Personal Productivity

## 🔗 Nodes Used

- **stickyNote** (×9)
- **scheduleTrigger** 
- **code** (×5)
- **httpRequest** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 17 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
