## Github Deployer Agent
## Overview
The Github Deployer Agent is an intelligent automation tool that integrates with Slack to streamline code deployment workflows. Powered by Anthropic's Claude 3.5 and Tavily for web search, it enables seamless, context-aware file pushes to a GitHub repository with minimal user input.

## Capabilities
- Accepts natural language via Slack
- Automatically pushes code to a default GitHub repository
- Uses Claude 3.5 for code generation and decision-making
- Leverages Tavily for real-time web search to enhance context
- Supports folder structure hints to ensure clean and organized repositories

## Required Connections
To operate correctly, the following integrations must be in place:
- Slack API Token with permission to read messages and post responses
- GitHub Personal Access Token with repo write permissions
- Tavily API Key for external search functionality
- Claude 3.5 API Access via Anthropic

*Detailed configuration instructions are provided in the workflow*

## Example Input
From Slack, you can send messages like:
"Generate a basic `README.md` for my Python project and store it in the root directory."

## Customising This Workflow
You can tailor the workflow by:
- Modifying default folder paths or repository settings
- Integrate Jira node to use issue keys as default folder naming
- Add slack file upload option 