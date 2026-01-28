*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

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