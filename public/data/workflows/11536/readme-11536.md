# The blog agent

> # The Blog Agent

## Description

An intelligent content automation system that manages the complete blog content lifecycle, from strategic planning to publish-ready articles. It combines AI-powered research, SEO-optimized writing, and strategic content management to execute a pillar/cluster content strategy that establishes thought leadership and drives organic search performance.

## Overview

This automation workflow orchestrates a multi-agent system to continuously produce high-quality blog content for Trigify.io. It intelligently manages content strategy, conducts focused research, and generates complete, SEO-optimized blog posts that follow best practices for both traditional search engines and AI-powered search platforms. The system maintains state across multiple content projects, tracks completion status, and ensures consistent brand positioning throughout all content.

## 🔄 Workflow Process

### 1. Schedule Trigger
**Automated content pipeline activation**

- Runs weekly on Mondays, Tuesdays, and Wednesdays
- Triggers the content lifecycle management process
- Ensures consistent content production cadence
- Can also be manually triggered via chat interface

### 2. Blog Status Manager Agent
**Strategic content lifecycle orchestration**

- Queries Linear API to retrieve all previously written blog posts
- Cross-references completed blogs with Google Sheets strategy state
- Updates blog statuses from PLANNED to DRAFT_CREATED when content exists in Linear
- Identifies next priority blog topic from existing pillar/cluster strategy
- Selects topics marked as PLANNED for content creation
- When all current content is complete, analyzes SEO Report to identify new high-priority pillars
- Creates new pillar/cluster strategies based on SEO opportunities
- Updates Google Sheets with new content plans and status changes
- Passes selected blog topic to Researcher Agent with clear instructions

### 3. Google Sheets Integration
**Centralized content strategy management**

- **Strategy_State Sheet**: Tracks current pillar, cluster statuses, and progress
- **SEO Report Sheet**: Contains comprehensive SEO analysis and keyword opportunities
- Maintains real-time state of content pipeline
- Stores pillar/cluster relationships and completion tracking
- Enables data-driven content prioritization

### 4. Researcher Agent
**Fast, focused content research**

- Receives blog topic from Blog Status Manager Agent
- Conducts efficient research using FireCrawl MCP (maximum 2 calls)
- Gathers competitor information and market statistics
- Creates comprehensive blog briefs with structured outlines
- Defines content type (PILLAR or CLUSTER) and word count targets
- Specifies metadata requirements (title ≤60 chars, description ≤160 chars)
- Identifies image requirements with source URLs
- Documents key data points and sources for attribution
- Plans internal linking strategy
- Defines Trigify positioning angle and CTA
- Outputs structured brief for Blog Writer Agent

### 5. Blog Writer Agent
**Complete, publish-ready content generation**

- Receives comprehensive blog brief from Researcher Agent
- Conducts additional research using FireCrawl MCP tools
- Writes complete blog posts following pillar/cluster structure:
  - **Pillar Posts**: 2,000-3,000+ words, resource hub style
  - **Cluster Posts**: 800-1,500 words, focused deep-dives
- Implements SEO optimization:
  - Creates metadata within strict character limits
  - Implements strategic internal linking
  - Positions Trigify as the primary solution
  - Uses target keywords naturally throughout content
- Ensures brand consistency:
  - Avoids em dashes (uses parentheses, commas, colons)
  - Provides real source URLs (never temporary screenshot links)
  - Includes proper image instructions with public source URLs
  - Maintains Trigify-first positioning
- Generates complete, publish-ready articles (not summaries)
- Formats content with proper markdown structure
- Creates Linear issue with full blog post content

### 6. FireCrawl MCP Integration
**Web scraping and research capabilities**

- Enables web scraping for competitor research
- Gathers pricing information and product details
- Collects statistics and market data
- Provides source URLs for proper attribution
- Supports image source identification

### 7. Linear Integration
**Content management and tracking**

- Queries existing Linear issues to track completed blogs
- Creates new Linear issues with complete blog post content
- Stores full articles (not summaries) for editorial review
- Maintains content library and prevents duplicate creation
- Enables team collaboration and content review

### 8. Multi-Model AI Architecture
**Optimized AI model selection**

- **Claude Sonnet 4.5**: Primary model for Blog Writer Agent (with thinking enabled)
- **Claude Opus 4.5**: Research and analysis tasks
- **GPT-5**: Secondary model option for content generation
- **Anthropic Chat Models**: Strategic planning and research
- Models configured with appropriate token limits and reasoning budgets

## 🛠️ Technology Stack

- **n8n**: Workflow orchestration and automation platform
- **Claude Sonnet 4.5**: Primary AI model for content generation
- **Claude Opus 4.5**: Research and strategic analysis
- **GPT-5**: Alternative content generation model
- **FireCrawl MCP**: Web scraping and research tool
- **Google Sheets API**: Content strategy and state management
- **Linear API**: Content tracking and issue management
- **LangChain Agents**: Multi-agent orchestration framework

## ✨ Key Features

- **Automated Content Lifecycle Management**: Tracks content from planning to completion
- **Pillar/Cluster SEO Strategy**: Implements proven content architecture for search performance
- **Multi-Agent AI System**: Specialized agents for research, writing, and management
- **State Management**: Maintains content strategy state across multiple runs
- **SEO Optimization**: Creates metadata, internal links, and keyword-optimized content
- **Brand Consistency**: Ensures Trigify positioning and brand voice throughout
- **Quality Control**: Prevents duplicate content and maintains high standards
- **Research Efficiency**: Limits research calls to maintain speed and cost-effectiveness
- **Source Attribution**: Properly documents sources and image requirements
- **Publish-Ready Output**: Generates complete articles, not summaries or outlines

## 🎯 Ideal Use Cases

Perfect for organizations seeking systematic, scalable content creation:

- **B2B SaaS Companies** building thought leadership through content
- **Marketing Teams** executing pillar/cluster SEO strategies
- **Content Teams** needing consistent, high-quality blog production
- **SEO-Focused Organizations** optimizing for search performance
- **Companies** requiring brand-consistent content at scale
- **Teams** managing multiple content projects simultaneously
- **Organizations** wanting to automate content research and writing
- **Businesses** tracking content performance and strategy execution

## 📈 Business Impact

Transform content creation from manual process to automated system:

- **Consistent Content Production**: Weekly automated content creation
- **SEO Performance**: Pillar/cluster architecture improves search rankings
- **Time Efficiency**: Automates research, writing, and content management
- **Brand Consistency**: Ensures Trigify positioning across all content
- **Scalability**: Manages multiple content projects simultaneously
- **Quality Assurance**: Prevents duplicates and maintains content standards
- **Strategic Alignment**: Data-driven content prioritization from SEO reports
- **Team Collaboration**: Integrates with Linear for editorial workflow

This workflow ensures every blog post is strategically planned, thoroughly researched, SEO-optimized, and ready for publication, creating a sustainable system for thought leadership content that drives organic growth.


## 📊 Basic Information

- **Workflow ID:** 11536
- **Complexity:** advanced
- **Node Count:** 21
- **Views:** 351
- **Downloads:** 35
- **Created:** 2025/12/6
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/11536)

## 👤 Author

- **Name:** Max Mitcham
- **Username:** @maxmitcham

## 🏷️ Categories

- Content Creation
- Multimodal AI

## 🔗 Nodes Used

- **@n8n/n8n-nodes-langchain.mcpClientTool** (×2)
- **linearTool** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** (×3)
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **scheduleTrigger** 
- **googleSheetsTool** (×3)
- **httpRequestTool** 
- **@n8n/n8n-nodes-langchain.toolThink** (×2)
- **@n8n/n8n-nodes-langchain.chatTrigger** 
- **stickyNote** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 21 nodes with 18 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
