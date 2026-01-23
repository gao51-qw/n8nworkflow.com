# Create Jira tickets from Streamlit forms with webhook & REST API

> ## Description
Automated workflow that creates Jira issues directly from Streamlit form submissions. Receives webhook data, validates and transforms it to Jira's API schema, creates the issue, and returns the ticket details to the frontend application.

## Context
Bridges the gap between lightweight Streamlit prototypes and enterprise Jira workflows. Enables rapid ticket creation while maintaining Jira as the authoritative source of truth. Includes safety mechanisms to prevent duplicate submissions and malformed requests.

## Target Users

- Product Managers building internal request portals.
- Engineering Managers creating demo applications.
Teams requiring instant Jira integration without complex UI development.
- Project Manager using Jira pour mangement and reporting.
- Organizations wanting controlled ticket creation without exposing Jira directly.

## Technical Requirements

- n8n instance (cloud or self-hosted) with webhook capabilities
- Jira Cloud project with API token and issue creation permissions
- Streamlit application configured to POST to n8n webhook endpoint
- Optional: Custom field IDs for Story Points (typically customfield_10016)

## Workflow Steps
![image.png](fileId:2303)

- Webhook Trigger - Receives POST from Streamlit with ticket payload.
- Deduplication Guard - Filters out ping requests and rapid duplicate submissions.
- Data Validation - Ensures required fields are present and properly formatted.
- Schema Transformation - Maps Streamlit fields to Jira API structure.
- Jira API Call - Creates issue via REST API with error handling.
- Response Formation - Returns success status with issue key and URL.

## Key Features

- Duplicate submission prevention.
- Rich text description formatting for Jira.
- Configurable priority and issue type mapping.
- Story points integration for agile workflows.
- Comprehensive error handling and logging.
- Clean JSON response for frontend feedback.

## Validation Testing

- Ping/test requests are ignored without creating issues.
- First submission creates Jira ticket with proper formatting.
- Rapid resubmission is blocked to prevent duplicates.
- All field types (priority, labels, due dates, story points) map correctly.
- Error responses are handled gracefully.

## Expected Output

- Valid Jira issue created in specified project
- JSON response: {ok: true, jiraKey: "PROJ-123", url: "https://domain.atlassian.net/browse/PROJ-123"}
- No orphaned or duplicate tickets.
- Audit trail in n8n execution logs.

## Implementation Notes

- Jira Cloud requires accountId for assignee (not username).
- Date format must be YYYY-MM-DD for due dates.
- Story Points field ID varies by Jira configuration.
- Enable response output in HTTP node for debugging.
- Consider rate limiting for high-volume scenarios.

![image.png](fileId:2301)

![image.png](fileId:2302)

## Tutorial video:
[Watch the Youtube Tutorial video](https://www.youtube.com/watch?v=Apb-pMqycrU)

## How it works

⏰ Trigger: Webhook fires when the app submits.
🧹 Guard: Ignore pings/invalid, deduplicate rapid repeats.
🧱 Prepare: Normalize to Jira’s field model (incl. Atlassian doc description).
🧾 Create: POST to /rest/api/3/issue and capture the key.
🔁 Respond: Send { ok, jiraKey, url } back to Streamlit for instant UI feedback.

## About me :
I’m Yassin a Project & Product Manager  Scaling tech products with data-driven project management.
📬 Feel free to connect with me on [Linkedin](https://www.linkedin.com/in/yassin-zehar)

## 📊 Basic Information

- **Workflow ID:** 8156
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 244
- **Downloads:** 24
- **Created:** 2025/9/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8156)

## 👤 Author

- **Name:** Yassin Zehar
- **Username:** @yassinzehar

## 🏷️ Categories

- Project Management

## 🔗 Nodes Used

- **webhook** 
- **set** (×3)
- **httpRequest** 
- **code** (×4)
- **if** 
- **stickyNote** (×6)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 10 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
