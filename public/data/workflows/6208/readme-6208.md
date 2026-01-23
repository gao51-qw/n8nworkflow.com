# Automate ISO 26262 compliance with GPT-4 for automotive safety analysis

> ## :car: **Business Value Proposition**
**Accelerates ISO 26262 compliance** for automotive/industrial systems by automating safety analysis while maintaining rigorous audit standards.

## :gear: **How It Works**
```mermaid
graph TD
    A[Engineer uploads<br>system description] --&gt; B(LLM identifies hazards)
    B --&gt; C(LLM scores risks per ISO 26262)
    C --&gt; D(Generates mitigation strategies)
    D --&gt; E(Produces audit-ready reports)
```

## :chart_with_upwards_trend: **Key Benefits**
+ Time
    - 50-70% faster than manual HAZOP/FMEA sessions
    - Instant report generation vs. weeks of documentation

+ Risk Mitigation
    - Pre-validated templates reduce human error
    - Auto-generated traceability simplifies audits


## :warning: Governance Controls
+ Human-in-the-loop: All LLM outputs require engineer sign-off
+ Version tracking: Full history of modifications
+ Audit mode: Export all decision rationales

## :computer: Technical Requirements
+ Runs on existing n8n instances
+ Docker deployment (&lt;1hr setup)
+ Integrates with JAMA/DOORS (optional)


## :wrench: Setup and Usage

### Prerequisites
- Docker ([Install Guide](https://docs.docker.com/engine/install/))
- Docker Compose ([Install Guide](https://docs.docker.com/compose/install/))
- n8n instance ([Free Self-Hosted](https://docs.n8n.io/hosting/installation/server-setups/docker-compose/) or [Cloud - Paid](https://n8n.io/cloud/))
- OpenAI API key ([Get Key](https://platform.openai.com/api-keys))

Enterprise-ready deployment: When supported by IT infrastructure teams, this solution transforms into a scalable AI safety assistant, providing real-time HARA guidance akin to engineering Co-pilot tools.



### :arrow_down: Installation and :play_or_pause_button: Running the Workflow

For installation procedures and usage of workflow, refer the [repository](https://github.com/ManiRajan1/Project_repositories/blob/AI_Assisted_HARA/docs/README.AI_Assisted_HARA.md)

## :warning: Validation & Limitations

### **AI-Assisted Analysis Considerations**
| Advantage | Mitigation Strategy | Implementation Example |
|-----------|---------------------|------------------------|
| Rapid hazard identification | Human validation layer | Manual review nodes in workflow |
| Consistent S/E/C scoring | Rule-based validation | ASIL-D → Redundancy check |
| Edge case coverage | Cross-reference with historical data | Integration with incident databases |

### **Critical Validation Steps**
1. **AI Output Review node in n8n**  
Example: (by code)
   ```json
   {
     "type": "function",
     "parameters": {
       "functionCode": "if ($input.item.json.ASIL === 'D' && !$input.item.json.redundancy) throw new Error('ASIL D requires redundancy');"
     }
   }

2. **Version Control**
+ Prompt versions tied to ISO standard editions (e.g., ISO26262:2018-v1.2)
+ Git-tracked changes to ai_models/training_data/

3. **Audit trails**
+ Providing a log structure for audit trails
``` bash
# Log structure
/logs/
└── YYYY-MM-DD/
  ├── hazards_approved.log
  └── hazards_rejected.log
```


## 📊 Basic Information

- **Workflow ID:** 6208
- **Complexity:** advanced
- **Node Count:** 16
- **Views:** 593
- **Downloads:** 59
- **Created:** 2025/7/21
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/6208)

## 👤 Author

- **Name:** MRJ
- **Username:** @manirajan

## 🏷️ Categories

- Engineering
- AI Summarization

## 🔗 Nodes Used

- **manualTrigger** 
- **@n8n/n8n-nodes-langchain.agent** (×3)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.memoryBufferWindow** 
- **readWriteFile** (×4)
- **extractFromFile** (×3)
- **convertToFile** (×3)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 16 nodes with 16 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
