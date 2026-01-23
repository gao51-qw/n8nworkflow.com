## Description
This workflow automates the evaluation of interviewer feedback using AI. It retrieves raw notes from Google Sheets, processes them through GPT-4o-mini for structured scoring, validates outputs, and calculates weighted quality scores. The system provides real-time Slack feedback to interviewers, logs AI errors for transparency, and recommends training if the feedback quality is low.
## What This Template Does (Step-by-Step)
- ⚡ Manual Trigger – Runs the workflow manually to start evaluation.
-  📋 Fetch Raw Feedback Data (Google Sheets) – Reads all feedback entries (Role, Stage, Interviewer Email, Feedback Text, row_number).
-  🧠 AI Quality Evaluator (Azure GPT-4o-mini) – Processes feedback into structured JSON across 5 dimensions.
-  🔍 Analyze Feedback Quality (LLM Chain) – Applies scoring rules (Specificity, STAR, Bias-Free, Actionability, Depth) and outputs structured JSON.
-  ✅ Validate AI Response – Ensures AI output isn’t undefined or malformed.
-  🚨 Log AI Errors (Google Sheets) – Records invalid AI responses for debugging and auditing.
-  🔄 Parse AI JSON Output (Code Node) – Converts AI JSON text into structured n8n objects with error handling.
-  🧮 Calculate Weighted Quality Score (Code Node) – Computes final weighted score (0–100), generates flags, formats vague phrases, and preserves context.
-  💾 Save Scores to Spreadsheet (Google Sheets) – Updates the original feedback row with Score, Flags, and AI JSON.
-  💬 Send Feedback Summary to Interviewer (Slack) – Sends interviewers a structured Slack report (score, flags, vague phrases, STAR improvement tips).
-  🎯 Check if Training Needed – Applies threshold logic: if score &lt; 50, route to training recommendations.
-  📚 Send Training Recommendations (Slack) – Delivers STAR method guides and bias-free interviewing resources to low scorers.

## Prerequisites
- Google Sheets (Raw_Feedback + Error Log Sheet)
- Azure OpenAI API credentials (for GPT-4o-mini)
- Slack API credentials (for sending feedback & training notifications)
- n8n instance (cloud or self-hosted)

## Key Benefits
 ✅ Automated interview feedback quality scoring
 ✅ Bias detection and vague feedback flagging
 ✅ Real-time Slack feedback to interviewers
 ✅ Error logging for AI reliability tracking
 ✅ Training recommendations for low scorers
 ✅ Audit trail maintained in Google Sheets

## Perfect For
- HR & Recruitment teams ensuring structured interviewer feedback
- Organizations enforcing STAR method & bias-free hiring
- Teams seeking continuous interviewer coaching
- Companies needing audit-ready records of interview quality