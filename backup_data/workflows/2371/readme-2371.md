# Request and receive Zigbee backup from zigbee2mqtt and save it via SFTP

> A single workflow with 2 flows/paths that combine to handle the backup sequence for Zigbee device configuration from HomeAssistant / zigbee2mqtt.  This provides a way to automate a periodic capture of Zigbee coordinators and device pairings to speed the recovery process when/if the HomeAssistant instance needs to be rebuilt.  Setting up similar automation without n8n (e.g. shell scripts and system timers) is consiterably more challenging.  n8n makes it easy and this template should remove any other excuse not to do it.

## Flow 1
* Triggered by Cron/Timer
  * set whatever interval for backups
  * sends mqtt message to request zigbee2mqtt backup (via separate message)

## Flow 2
* Triggered by zigbee2mqtt backup message
* Extracts zip file from the message and stores somewhere, with a date-stamp in the filename, via sftp

## Setup
* Create a MQTT connection named **"MQTT Account"** with the appropriate protocol (mqtt), host, port (1883), username, and password
* Create an sftp connection named **"SFTP Zigbee Backups"** with the appropriate host, port (22), username, and password or key.

## Reference
* [This article](https://home-assistant-guide.com/changelog/zigbee2mqtt/zigbee2mqtt-1-26-0/you-can-now-back-up-your-complete-zigbee2mqtt-configuration/) describes the mqtt parts.


## 📊 Basic Information

- **Workflow ID:** 2371
- **Complexity:** intermediate
- **Node Count:** 6
- **Views:** 1874
- **Downloads:** 187
- **Created:** 2024/8/3
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2371)

## 👤 Author

- **Name:** Hubschrauber
- **Username:** @hubschrauber

## 🏷️ Categories

- File Management

## 🔗 Nodes Used

- **ftp** 
- **scheduleTrigger** 
- **mqtt** 
- **mqttTrigger** 
- **code** 
- **convertToFile** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 6 nodes with 4 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
