# Japanese document translation quality checker with DeepL & Google Drive to Slack

> ## Title

Japanese Document Translation Quality Checker with DeepL & Google Drive to Slack

## Who’s it for

Localization teams, QA reviewers, and operations leads who need a fast, objective signal on Japanese document translation quality without manual checks.

## What it does / How it works

This workflow watches a Google Drive folder for new Japanese documents, exports the text, translates JA→EN with DeepL, then back-translates EN→JA. It compares the original and back-translation to estimate a quality score and summarizes differences. A Google Docs report is generated, and a Slack message posts the score, difference count, and report link—so teams can triage quickly.

## How to set up

1. Connect credentials for Google Drive, DeepL, and Slack.
2. Point the Google Drive Trigger to your “incoming JP docs” folder.
3. In the **Workflow Configuration (Set)** node, fill `targetFolder` (report destination) and `slackChannel`.
4. Run once, then activate and drop a test doc.

## Requirements

n8n (Cloud or self-hosted), Google Drive, DeepL, and Slack credentials; two Drive folders (incoming, reports).

## How to customize the workflow

Tune the diff logic (character → token/line level, normalization rules), adjust score thresholds and Slack formatting, or add reviewer routing/Jira creation for low-score cases. Always avoid hardcoded secrets; keep user-editable variables in the Set node.

## 📊 Basic Information

- **Workflow ID:** 10315
- **Complexity:** intermediate
- **Node Count:** 11
- **Views:** 49
- **Downloads:** 4
- **Created:** 2025/10/30
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/10315)

## 👤 Author

- **Name:** s3110
- **Username:** @s3110

## 🏷️ Categories

- Document Extraction
- AI Summarization

## 🔗 Nodes Used

- **googleDriveTrigger** 
- **slack** 
- **googleDocs** 
- **code** 
- **deepL** (×2)
- **set** 
- **httpRequest** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 11 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
