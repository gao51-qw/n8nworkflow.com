
# Workflow: Auto-Ticket Maker

## ⚡ About the Creators
This workflow was created by [Varritech Technologies](https://varritech.com), an innovative agency that leverages AI to engineer, design, and deliver software development projects 500% faster than traditional agencies. Based in New York City, we specialize in custom software development, web applications, and digital transformation solutions. If you need assistance implementing this workflow or have questions about content management solutions, please reach out to our team.

## 🏗️ Architecture Overview
This workflow transforms your Slack conversations into complete project tickets, effectively replacing the need for a dedicated PM for task creation:

Slack Webhook → Captures team conversation
Code Transformation → Parses Slack message structure
AI PM Agent → Analyzes requirements and creates complete tickets
Memory Buffer → Maintains conversation context
Slack Output → Returns formatted tickets to your channel

Say goodbye to endless PM meetings just to create tickets! Simply describe what you need in Slack, and our AI PM handles the rest, breaking down complex projects into structured epics and tasks with all the necessary details.

## 📦 Node-by-Node Breakdown
flowchart LR
  A[Webhook: Slack Trigger] --&gt; B[Code: Parse Message]
  B --&gt; C[AI PM Agent] 
  C --&gt; D[Slack: Post Tickets]
  E[Memory Buffer] --&gt; C
  F[OpenAI Model] --&gt; C

### Webhook: Slack Trigger
Type: HTTP Webhook (POST /slack-ticket-maker)
Purpose: Captures messages from your designated Slack channel.

### Code Transformation
Function: Parses complex Slack payload structure
Extracts: User ID, channel, message text, timestamp, thread information

### AI PM Agent
Inputs: Parsed Slack message
Process:
- Evaluates project complexity
- Requests project name if needed
- Asks clarifying questions (up to 2 rounds)
- Breaks down into epics and tasks
- Formats with comprehensive structure

Ticket Structure:
- Title
- Description
- Objectives/Goals
- Definition of Done
- Requirements/Acceptance Criteria
- Implementation Details
- Risks & Challenges
- Testing & Validation
- Timeline & Milestones
- Related Notes & References
- Open Questions

### Memory Buffer
Type: Window Buffer Memory
Purpose: Maintains context across conversation

### Slack Output
Posts fully-formatted tickets back to your channel
Uses markdown for clean, structured presentation

## 🔍 Design Rationale & Best Practices
**Replace Your PM's Ticket Creation Time**
Let your PM focus on strategy while AI handles the documentation. Cut ticket creation time by 90%.

**Standardized Quality**
Every ticket follows best practices with consistent structure, detail level, and formatting.

**No Training Required**
Describe your needs conversationally - the AI adapts to your communication style.

**Seamless Integration**
Works within your existing Slack workflow - no new tools to learn.
```
