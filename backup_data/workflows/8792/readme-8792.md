# Monitor VPS security with GPT-4 mini analysis via SSH and Telegram alerts

> # Monitor VPS security with AI analysis via SSH and Telegram alerts

This n8n template automatically monitors your VPS for suspicious processes and network connections using AI analysis. It connects to your server via SSH, analyzes running processes, and sends Telegram alerts when potential security threats are detected.

## Who's it for

- System administrators managing VPS/dedicated servers
- DevOps teams monitoring production environments  
- Security-conscious users who want automated threat detection
- Anyone running services on Linux servers who wants proactive monitoring

## How it works

The workflow runs on a scheduled basis and performs the following steps:

1. **SSH Connection**: Connects to your VPS via SSH and executes system commands to gather process and network information
2. **Data Collection**: Runs `ps aux --sort=-%cpu,-%mem && ss -tulpn` to capture running processes sorted by CPU/memory usage and active network connections
3. **AI Analysis**: Uses OpenAI's language model to analyze the collected data for suspicious patterns, malware signatures, unusual network connections, or abnormal resource usage
4. **Structured Output**: Parses AI responses into structured data identifying malicious and suspicious activities with explanations
5. **Alert System**: Sends immediate Telegram notifications when malicious processes are detected

## Requirements

- **SSH access** to your VPS with valid credentials
- **OpenAI API key** for AI analysis (uses GPT-4 mini model)
- **Telegram Bot** and chat ID for receiving alerts
- Linux-based VPS or server to monitor

## How to set up

1. **Configure SSH credentials**: Set up SSH connection to your VPS in the "Execute a command" node
2. **Add OpenAI API key**: Configure your OpenAI credentials in the "OpenAI Chat Model" node  
3. **Set up Telegram bot**: 
   - Create a Telegram bot and get the API token
   - Get your Telegram chat ID
   - Update the `admin_telegram_id` in the "Edit Fields" node with your chat ID
   - Configure Telegram credentials in the "Send a text message" node
4. **Adjust schedule**: Modify the "Schedule Trigger" to set your preferred monitoring frequency
5. **Test the workflow**: Run a manual execution to ensure all connections work properly

## How to customize the workflow

- **Change monitoring frequency**: Adjust the schedule trigger interval (hourly, daily, etc.)
- **Modify analysis criteria**: Update the AI prompt in "Basic LLM Chain" to focus on specific security concerns
- **Add more commands**: Extend the SSH command to include additional system information like disk usage, log entries, or specific service status
- **Multiple servers**: Duplicate the SSH execution nodes to monitor multiple VPS instances
- **Different alert channels**: Replace or add to Telegram with email, Slack, or Discord notifications
- **Custom filtering**: Add conditions to filter out known safe processes or focus on specific suspicious patterns

## Good to know

- The AI model analyzes both running processes and network connections for comprehensive monitoring
- Each analysis request costs approximately $0.001-0.01 USD depending on system activity
- The workflow only sends alerts when malicious  or suspicious activity is detected, reducing notification noise
- SSH commands require appropriate permissions on the target server
- Consider running this workflow from a secure, always-on n8n instance for continuous monitoring

## 📊 Basic Information

- **Workflow ID:** 8792
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 520
- **Downloads:** 52
- **Created:** 2025/9/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/8792)

## 👤 Author

- **Name:** IranServer.com
- **Username:** @iranserver

## 🏷️ Categories

- SecOps
- AI Summarization

## 🔗 Nodes Used

- **scheduleTrigger** 
- **ssh** 
- **@n8n/n8n-nodes-langchain.chainLlm** 
- **@n8n/n8n-nodes-langchain.outputParserStructured** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **if** (×2)
- **telegram** (×2)
- **set** 
- **stickyNote** (×4)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
