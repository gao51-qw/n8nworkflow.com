# Monitor Kubernetes services & pods with Prometheus and send alerts to Slack

> #### 🧩 Short Summary

Proactively alert to service endpoint changes and pod/container issues (Pending, Not Ready, Restart spikes) using Prometheus metrics, formatted and sent to Slack.

#### 🗂️ Category

DevOps / Monitoring & Observability

#### 🏷️ Tags

kubernetes, prometheus, slack, alerting, sre, ops, kube-state-metrics

#### ✅ Prerequisites

- Prometheus scraping kube-state-metrics v2.x.
- Slack App or Incoming Webhook (channel access).
- n8n instance with outbound access to Prometheus & Slack.


#### 🔑 Required Credentials in n8n

Slack: Bot OAuth (chat:write) or Incoming Webhook URL.

(Optional) Prometheus Basic Auth (if your Prometheus needs it).

#### 🧠 What This Template Does

- Detects pods stuck in Pending (scheduling problems like taints/affinity/capacity).
- Detects containers Not Ready (readiness probe failures).
- Detects container restart spikes over a sliding window (default 5 minutes).
- Detects service discovery changes (endpoint count diffs current vs previous snapshot).
- Sends clean, emoji-enhanced Slack alerts with pod/namespace/service context.
- Outputs a 5-minute summary block to reduce noise.

#### 📣 Slack Message Style (examples)

![image.png](fileId:2165)

![image.png](fileId:2164)

## 📊 Basic Information

- **Workflow ID:** 7665
- **Complexity:** advanced
- **Node Count:** 32
- **Views:** 737
- **Downloads:** 73
- **Created:** 2025/8/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7665)

## 👤 Author

- **Name:** John Pranay Kumar Reddy
- **Username:** @johnpranay

## 🏷️ Categories

- DevOps
- Multimodal AI

## 🔗 Nodes Used

- **scheduleTrigger** 
- **httpRequest** (×8)
- **code** (×5)
- **stickyNote** (×16)
- **merge** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 32 nodes with 15 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
