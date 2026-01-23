# Automated FTP file migration with smart cleanup and email notifications

> # Automated FTP File Migration with Smart Cleanup and Email Notifications

## Overview
This n8n workflow automates the secure transfer of files between FTP servers on a scheduled basis, providing enterprise-grade reliability with comprehensive error handling and dual notification systems (email + webhook). Perfect for data migrations, automated backups, and multi-server file synchronization.

## What it does
This workflow automatically discovers, filters, transfers, and safely removes files between FTP servers while maintaining complete audit trails and sending detailed notifications about every operation.

**Key Features:**
- **Scheduled Execution**: Configurable timing (daily, hourly, weekly, or custom cron expressions)
- **Smart File Filtering**: Regex-based filtering by file type, size, date, or name patterns  
- **Safe Transfer Protocol**: Downloads → Uploads → Validates → Cleans up source
- **Dual Notifications**: Email alerts + webhook integration for both success and errors
- **Comprehensive Logging**: Detailed audit trail of all operations with timestamps
- **Error Recovery**: Automatic retry logic with exponential backoff for network issues
- **Production Ready**: Built-in safety measures and extensive documentation

## Use Cases

### 🏢 Enterprise & IT Operations
- **Data Center Migration**: Moving files between different hosting environments
- **Backup Automation**: Scheduled transfers to secondary storage locations  
- **Multi-Site Synchronization**: Keeping files in sync across geographic locations
- **Legacy System Integration**: Bridging old and new systems through automated transfers

### 📊 Business Operations  
- **Document Management**: Automated transfer of contracts, reports, and business documents
- **Media Asset Distribution**: Moving images, videos, and marketing materials between systems
- **Data Pipeline**: Part of larger ETL processes for business intelligence
- **Compliance Archiving**: Moving files to compliance-approved storage systems

### 🔧 Development & DevOps
- **Build Artifact Distribution**: Deploying compiled applications across environments  
- **Configuration Management**: Synchronizing config files between servers
- **Log File Aggregation**: Collecting logs from multiple servers for analysis
- **Automated Deployment**: Moving release packages to production servers

## How it works

### 📋 Workflow Steps
1. **Schedule Trigger** → Initiates workflow at specified intervals
2. **File Discovery** → Lists files from source FTP server with optional recursion
3. **Smart Filtering** → Applies customizable filters (type, size, date, name patterns)
4. **Secure Download** → Retrieves files to temporary n8n storage with retry logic
5. **Safe Upload** → Transfers files to destination with directory auto-creation
6. **Transfer Validation** → Verifies successful upload before proceeding
7. **Source Cleanup** → Removes original files only after confirmed success
8. **Comprehensive Logging** → Records all operations with detailed metadata
9. **Dual Notifications** → Sends email + webhook notifications for success/failure

### 🔄 Error Handling Flow
- **Network Issues** → Automatic retry with exponential backoff (3 attempts)
- **Authentication Problems** → Immediate email alert with troubleshooting steps  
- **Permission Errors** → Detailed logging with recommended actions
- **Disk Space Issues** → Safe failure with source file preservation
- **File Corruption** → Integrity validation with rollback capability

## Setup Requirements

### 🔑 Credentials Needed
1. **Source FTP Server**
   - Host, port, username, password
   - Read permissions required
   - SFTP recommended for security

2. **Destination FTP Server**  
   - Host, port, username, password
   - Write permissions required
   - Directory creation permissions

3. **SMTP Email Server**
   - SMTP host and port (e.g., smtp.gmail.com:587)
   - Authentication credentials
   - For success and error notifications

4. **Monitoring API** (Optional)
   - Webhook URL for system integration
   - Authentication tokens if required

### ⚙️ Configuration Steps
1. **Import Workflow** → Load the JSON template into your n8n instance
2. **Configure Credentials** → Set up all required FTP and SMTP connections
3. **Customize Schedule** → Adjust cron expression for your timing needs
4. **Set File Filters** → Configure regex patterns for your file types
5. **Configure Paths** → Set source and destination directory structures
6. **Test Thoroughly** → Run with test files before production deployment
7. **Enable Monitoring** → Activate email notifications and logging

## Customization Options

### 📅 Scheduling Examples
```cron
0 2 * * *     # Daily at 2 AM
0 */6 * * *   # Every 6 hours  
0 8 * * 1-5   # Weekdays at 8 AM
0 0 1 * *     # Monthly on 1st
*/15 * * * *  # Every 15 minutes
```

### 🔍 File Filter Patterns
```regex
# Documents
\\.(pdf|doc|docx|xls|xlsx)$

# Images  
\\.(jpg|jpeg|png|gif|svg)$

# Data Files
\\.(csv|json|xml|sql)$

# Archives
\\.(zip|rar|7z|tar|gz)$

# Size-based (add as condition)
{{ $json.size &gt; 1048576 }}  # Files &gt; 1MB

# Date-based (recent files only)
{{ $json.date &gt; $now.minus({days: 7}) }}
```

### 📁 Directory Organization
```javascript
// Date-based structure
/files/{{ $now.format('YYYY/MM/DD') }}/

// Type-based structure  
/files/{{ $json.name.split('.').pop() }}/

// User-based structure
/users/{{ $json.owner || 'system' }}/

// Hybrid approach
/{{ $now.format('YYYY-MM') }}/{{ $json.type }}/
```

## Template Features

### 🛡️ Safety & Security
- **Transfer Validation**: Confirms successful upload before source deletion
- **Error Preservation**: Source files remain intact on any failure
- **Audit Trail**: Complete logging of all operations with timestamps
- **Credential Security**: Secure storage using n8n's credential system
- **SFTP Support**: Encrypted transfers when available
- **Retry Logic**: Automatic recovery from transient network issues

### 📧 Notification System
**Success Notifications:**
- Confirmation email with transfer details
- File metadata (name, size, transfer time)
- Next scheduled execution information
- Webhook payload for monitoring systems

**Error Notifications:**
- Immediate email alerts with error details
- Troubleshooting steps and recommendations
- Failed file information for manual intervention
- Webhook integration for incident management

### 📊 Monitoring & Analytics
- **Execution Logs**: Detailed history of all workflow runs
- **Performance Metrics**: Transfer speeds and success rates
- **Error Tracking**: Categorized failure analysis
- **Audit Reports**: Compliance-ready activity logs

## Production Considerations

### 🚀 Performance Optimization
- **File Size Limits**: Configure timeouts based on expected file sizes
- **Batch Processing**: Handle multiple files efficiently
- **Network Optimization**: Schedule transfers during off-peak hours
- **Resource Monitoring**: Track n8n server CPU, memory, and disk usage

### 🔧 Maintenance
- **Regular Testing**: Validate credentials and connectivity
- **Log Review**: Monitor for patterns in errors or performance
- **Credential Rotation**: Update passwords and keys regularly
- **Documentation Updates**: Keep configuration notes current


## Testing Protocol

### 🧪 Pre-Production Testing
1. **Phase 1**: Test with 1-2 small files (&lt; 1MB)
2. **Phase 2**: Test error scenarios (invalid credentials, network issues)
3. **Phase 3**: Test with representative file sizes and volumes
4. **Phase 4**: Validate email notifications and logging
5. **Phase 5**: Full production deployment with monitoring

### ⚠️ Important Testing Notes
- **Disable Source Deletion** during initial testing
- Use **test directories** to avoid production data impact
- **Monitor execution logs** carefully during testing
- **Validate email delivery** to ensure notifications work
- **Test rollback procedures** before production use

## Support & Documentation

This template includes:
- **8 Comprehensive Sticky Notes** with visual documentation
- **Detailed Node Comments** explaining every configuration option
- **Error Handling Guide** with common troubleshooting steps
- **Security Best Practices** for production deployment
- **Performance Tuning** recommendations for different scenarios

## Technical Specifications

- **n8n Version**: 1.0.0+  
- **Node Count**: 17 functional nodes + 8 documentation sticky notes
- **Execution Time**: 2-10 minutes (depending on file sizes and network speed)
- **Memory Usage**: 50-200MB (scales with file sizes)
- **Supported Protocols**: FTP, SFTP (recommended)
- **File Size Limit**: Up to 150MB per file (configurable)
- **Concurrent Files**: Processes files sequentially for stability

## Who is this for?

### 🎯 Primary Users
- **System Administrators** managing file transfers between servers
- **DevOps Engineers** automating deployment and backup processes  
- **IT Operations Teams** handling data migration projects
- **Business Process Owners** requiring automated file management

### 💼 Industries & Use Cases
- **Healthcare**: Patient data archiving and compliance reporting
- **Financial Services**: Secure document transfer and regulatory reporting
- **Manufacturing**: CAD file distribution and inventory data sync
- **E-commerce**: Product image and catalog management
- **Media**: Asset distribution and content delivery automation



## 📊 Basic Information

- **Workflow ID:** 8161
- **Complexity:** advanced
- **Node Count:** 15
- **Views:** 196
- **Downloads:** 19
- **Created:** 2025/9/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8161)

## 👤 Author

- **Name:** Dariusz Koryto
- **Username:** @dako

## 🏷️ Categories

- File Management
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×6)
- **scheduleTrigger** 
- **ftp** (×4)
- **filter** (×2)
- **set** 
- **emailSend** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 15 nodes with 9 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
