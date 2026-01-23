## HOW IT WORKS
This workflow automates end-to-end data intelligence processing by ingesting structured data (CSV, JSON), enriching it through multiple AI analysis pathways, and generating actionable insights. Designed for business analysts, data scientists, and operations teams, it solves the problem of manual data enrichment and fragmented analysis by consolidating diverse AI models (GPT-4, LLM analysis, sentiment detection) into a unified pipeline. Data flows from source ingestion → enrichment/validation → branching into three specialized analysis paths (Competitive Intelligence, Sentiment Analysis, Market Insights) → aggregation → result storage (Google Sheets) and notifications (Slack, Gmail). Each path applies distinct AI models for comprehensive intelligence gathering.

## SETUP STEPS
1. Configure OpenAI API key in credentials
2. Set up Google Sheets connection with service account
3. Add Slack webhook for notifications
4. Connect Gmail for automated report distribution
5. Configure NVIDIA API (if using specialized models)
6. Map input data source (CSV upload or API endpoint)
7. Test each branch independently before full deployment

## PREREQUISITES
OpenAI API key, Google Sheets access, Slack workspace, Gmail account, basic n8n familiarity.  

## USE CASES
Market research automation, competitive intelligence monitoring, customer feedback analysis at scale 

## CUSTOMIZATION
Swap AI models (Claude, Gemini, Llama), add/remove analysis branches, modify output destinations 

## BENEFITS
Eliminates manual data processing (80% time savings), enables simultaneous multi-perspective analysis 