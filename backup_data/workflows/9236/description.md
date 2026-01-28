## Description
This workflow automates employee retention analytics by combining candidate performance data with trait-level retention statistics. It scores candidates, validates data, and generates a polished Retention Digest HTML email using GPT (Azure OpenAI). Hiring managers receive structured insights weekly, highlighting top/weak traits, candidate scores, and actionable JD refinement tips.

## What This Template Does (Step-by-Step)
⚡ Manual Trigger – Starts workflow execution on demand.
 📑 Candidate Data Fetch (Google Sheets – Hires Tracking) – Pulls candidate-level details like name, role, traits, start date, and retention status.
 📑 Trait Summary Fetch (Google Sheets – Retention Summary) – Fetches aggregated trait-level retention statistics, including hires, stayed, left, retention %, and weight adjustments.
 🔀 Merge Candidate + Trait Data – Combines both datasets into a unified stream for scoring.
 🧮 Candidate Scoring & Data Normalization (Code Node) –
- Cleans and standardizes data.
- Builds a trait → weight map.
- Calculates each candidate’s Candidate_Score.
- Outputs normalized JSON.
-  ✅ Data Validation (If Node) – Ensures both candidate and trait datasets are present.
  - TRUE → continues to AI digest generation.
  - FALSE → routes to error logging.
  -  ⚠️ Error Handling Logic (Google Sheets – Error Log) – Logs any failed or incomplete runs into a dedicated error sheet for auditing.
  -  🧠 AI Processing Backend (Azure OpenAI) – Prepares candidate + trait data for GPT processing.
  -  🤖 Retention Digest Generator (LLM Chain) – Uses GPT (gpt-4o-mini) to create a structured HTML Retention Digest, including:
   - TL;DR summary
   - Top Traits (positive retention)
   - Weak Traits (negative retention)
   - Candidate highlights (scores & retention status)
  - 3 actionable JD refinement tips
  -  📧 Email Delivery (Gmail) – Sends the digest directly to hiring managers as a styled HTML email with subject:
  - Retention Analysis Digest – Weekly Update

## Prerequisites
Google Sheets (Hires Tracking + Retention Summary + Error Log)
Gmail API credentials
Azure OpenAI access (gpt-4o-mini model)
n8n instance (self-hosted or cloud)

## Key Benefits
 ✅ Automates retention analytics & reporting
 ✅ Provides AI-powered insights in structured HTML
 ✅ Improves hiring strategy with trait-based scoring
 ✅ Reduces manual effort in weekly retention reviews
 ✅ Ensures reliability with error handling & validation

## Perfect For
HR & Recruitment teams monitoring post-hire retention
Organizations optimizing job descriptions & hiring strategy
Talent analytics teams needing automated, AI-driven insights
Stakeholders requiring clear weekly digest emails