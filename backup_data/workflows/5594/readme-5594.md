# Automated hazard analysis for ISO 26262 compliance using GPT-4

> **Modular Hazard Analysis Workflow : Free Version**

## **Business Value Proposition**
**Accelerates ISO 26262 compliance** for automotive/industrial systems by automating safety analysis while maintaining rigorous audit standards.

## :chart_with_upwards_trend: **Key Benefits**
+ Time
    - Instant report generation vs. weeks of documentation for HAZOP

+ Risk Mitigation
    - Pre-validated templates reduce human error

### Quick guide
- Input a systems_description file to the workflow
- Provide an OPENAI_API_KEY to the chat model. You can also replace the chat model with the model of your interest.


### :play_or_pause_button: Running the Workflow
Refer to the [github repo](https://github.com/ManiRajan1/Project_repositories/blob/AI_Assisted_HARA/docs/README.AI_Assisted_HARA.md) to understand in detail about how the workflow can be used 

### :email: Contact
For collaboration proposals or security issues, contact me by [Email](gopalakrishnan.manirajan@gmail.com).


## :warning: Validation & Limitations

### **AI-Assisted Analysis Considerations**
| Advantage | Mitigation Strategy | Implementation Example |
|-----------|---------------------|------------------------|
| Rapid hazard identification | Human validation layer | Manual review nodes in workflow |
| Consistent S/E/C scoring | Rule-based validation | ASIL-D → Redundancy check |
| Edge case coverage | Cross-reference with historical data | Integration with incident databases |



## 📊 Basic Information

- **Workflow ID:** 5594
- **Complexity:** intermediate
- **Node Count:** 8
- **Views:** 401
- **Downloads:** 40
- **Created:** 2025/7/2
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5594)

## 👤 Author

- **Name:** MRJ
- **Username:** @manirajan

## 🏷️ Categories

- Engineering
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **readWriteFile** (×2)
- **extractFromFile** 
- **convertToFile** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 8 nodes with 7 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
