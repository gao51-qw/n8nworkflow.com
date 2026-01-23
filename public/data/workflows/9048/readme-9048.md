# AI resume screening with GPT-4o & error handling | Google Sheets & Drive flow

> # GPT-4o Resume Screener with Error Handling - Google Sheets & Drive Pipeline

## How it works

Enterprise-grade resume screening automation built for production environments. This workflow combines intelligent AI analysis with comprehensive error handling to ensure reliable processing of candidate applications. Every potential failure point is monitored with automatic recovery and notification systems.

**Core workflow steps:**
1. **Intelligent Email Processing** - Monitors Gmail with attachment validation and file type detection
2. **Robust File Handling** - Multi-format support with upload verification and extraction validation
3. **Quality-Controlled AI Analysis** - GPT-4o evaluation with output validation and fallback mechanisms
4. **Verified Data Extraction** - Contact and qualification extraction with data integrity checks
5. **Dual Logging System** - Success tracking in main dashboard, error logging in separate audit trail

**Error Recovery Features:**
- Upload failure detection with retry mechanisms
- Text extraction validation with quality thresholds
- AI processing timeout protection and fallback responses
- Data validation before final logging
- Comprehensive error notification and tracking system

## Set up steps

**Total setup time: 25-35 minutes**

### Core Credentials Setup (8 minutes)
- Gmail OAuth2 with attachment permissions
- Google Drive API with folder creation rights
- Google Sheets API with read/write access
- OpenAI API key with GPT-4o model access

### Primary Configuration (12 minutes)
1. **Configure monitoring systems** - Set up Gmail trigger with error detection
2. **Establish file processing pipeline** - Create Drive folders for resumes and configure upload validation
3. **Deploy dual spreadsheet system** - Set up main tracking sheet and error logging sheet
4. **Initialize AI processing** - Configure GPT-4o with structured output parsing and timeout settings
5. **Customize job requirements** - Update role specifications and scoring criteria

### Error Handling Setup (10 minutes)
1. **Configure error notifications** - Set administrator email for failure alerts
2. **Set up error logging spreadsheet** - Create audit trail for failed processing attempts
3. **Customize timeout settings** - Adjust processing limits based on expected file sizes
4. **Test error pathways** - Validate notification system with sample failures

### Advanced Customization (5 minutes)
- Modify validation thresholds for resume quality
- Adjust AI prompt for industry-specific requirements
- Configure custom error messages and escalation rules
- Set up automated retry logic for transient failures

**Production-Ready Features:**
- Comprehensive logging for compliance and auditing
- Graceful degradation when services are temporarily unavailable
- Detailed error context for troubleshooting
- Scalable architecture for high-volume processing

## Template Features

**Enterprise Error Management**
- Multi-layer validation at every processing stage
- Automatic error categorization and routing
- Administrative alerts with detailed context
- Separate error logging for audit compliance
- Timeout protection preventing workflow hangs

**Advanced File Processing**
- Upload success verification before processing
- Text extraction quality validation
- Resume content quality thresholds
- Corrupted file detection and handling
- Format conversion error recovery

**Robust AI Integration**
- GPT-4o processing with output validation
- Structured response parsing with error checking
- AI timeout protection and fallback responses
- Failed analysis logging with manual review triggers
- Retry logic for transient API failures

**Production Monitoring**
- Real-time error notifications via email
- Comprehensive error logging dashboard
- Processing success/failure metrics
- Failed resume tracking for manual review
- Audit trail for compliance requirements

**Data Integrity Controls**
- Pre-logging validation of all extracted data
- Missing information detection and flagging
- Contact information verification checks
- Score validation and boundary enforcement
- Duplicate detection and handling

Designed for HR departments and recruiting agencies that need reliable, scalable resume processing with enterprise-level monitoring and error recovery capabilities.

## 📊 Basic Information

- **Workflow ID:** 9048
- **Complexity:** advanced
- **Node Count:** 34
- **Views:** 147
- **Downloads:** 14
- **Created:** 2025/9/28
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/9048)

## 👤 Author

- **Name:** David Olusola
- **Username:** @dae221

## 🏷️ Categories

- HR
- AI Summarization

## 🔗 Nodes Used

- **stickyNote** (×5)
- **gmailTrigger** 
- **googleDrive** (×4)
- **if** (×5)
- **switch** 
- **extractFromFile** (×2)
- **httpRequest** 
- **set** (×7)
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.informationExtractor** 
- **googleSheets** (×2)
- **merge** 
- **gmail** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 34 nodes with 27 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
