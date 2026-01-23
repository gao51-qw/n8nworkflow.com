# Build academic citation networks with PDF Vector API for Gephi visualization

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## Build Citation Networks from Research Papers

Automatically build and visualize citation networks by fetching papers and their references. Discover influential works and research trends in any field.

### Workflow Features:
- Start with seed papers (DOIs, PubMed IDs, etc.)
- Fetch cited and citing papers recursively
- Build network graph data
- Export to visualization tools (Gephi, Cytoscape)
- Identify key papers and research clusters

### Process Flow:
1. **Input**: Seed paper identifiers
2. **Fetch Papers**: Get paper details and references
3. **Expand Network**: Fetch cited papers (configurable depth)
4. **Build Graph**: Create nodes and edges
5. **Analyze**: Calculate metrics (centrality, clusters)
6. **Export**: Generate visualization-ready data

### Applications:
- Research trend analysis
- Finding seminal papers in a field
- Grant proposal background research

## 📊 Basic Information

- **Workflow ID:** 7356
- **Complexity:** intermediate
- **Node Count:** 9
- **Views:** 366
- **Downloads:** 36
- **Created:** 2025/8/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7356)

## 👤 Author

- **Name:** PDF Vector
- **Username:** @pdfvector

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** 
- **set** 
- **code** (×4)
- **n8n-nodes-pdfvector.pdfVector** (×2)
- **writeBinaryFile** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 9 nodes with 6 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
