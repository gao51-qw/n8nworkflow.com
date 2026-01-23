# Export n8n Cloud execution data to CSV

> # Overview

This template helps n8n cloud plan users execute all executions to a CSV for easy data analysis. Identify what workflows are generating the most executions or could be optimized.


## How this workflow works
* Click ["Test Workflow"](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.manualworkflowtrigger/) to manually execute the workflow
* Open the "Convert to CSV" node to access the binary data of the CSV file
* Download the CSV file

![csv_binary_data.png](fileId:811)

### Nodes included:
1. [n8n node](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.n8n/)
2. [Convert to File](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.converttofile/)
3. [No Operation, do nothing](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.noop/) - replace with another

## Set up steps
1. [Import the workflow](https://docs.n8n.io/workflows/export-import/) to your workspace
2. Add your n8n API credential

## Benefits of Exporting n8n Cloud Executions to CSV

Exporting n8n Cloud executions to CSV offers significant advantages for enhancing workflow management and data analysis capabilities. Here are three key benefits:

1. **Enhanced Data Analysis**:
   - **Comprehensive Insights**: Exporting execution data allows for in-depth analysis of workflow performance, helping identify bottlenecks and optimize processes.
   - **Custom Reporting**: CSV files can be easily imported into various data analysis tools (e.g., Excel, Google Sheets, or BI software) to create custom reports and visualizations tailored to specific business needs.

2. **Improved Workflow Monitoring**:
   - **Historical Data Review**: Accessing historical execution data enables users to track workflow changes and their impacts over time, facilitating better decision-making.
   - **Error Tracking and Debugging**: By reviewing execution logs, users can quickly identify and address errors or failures, ensuring smoother and more reliable workflow operations.

3. **Regulatory Compliance and Auditing**:
   - **Audit Trails**: Keeping a record of all executions provides a clear audit trail, essential for regulatory compliance and internal audits.
   - **Data Retention**: Exported data ensures that execution records are preserved according to organizational data retention policies, safeguarding against data loss.

By leveraging the capabilities of CSV exports, users can gain valuable insights, streamline workflow management, and ensure robust data handling practices, ultimately driving better performance and efficiency in their n8n Cloud operations.

## 📊 Basic Information

- **Workflow ID:** 2295
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 4148
- **Downloads:** 414
- **Created:** 2024/6/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/2295)

## 👤 Author

- **Name:** Ludwig
- **Username:** @ludwig-n8n

## 🏷️ Categories

- Document Extraction

## 🔗 Nodes Used

- **manualTrigger** 
- **n8n** 
- **convertToFile** 
- **stickyNote** (×3)
- **noOp** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 3 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
