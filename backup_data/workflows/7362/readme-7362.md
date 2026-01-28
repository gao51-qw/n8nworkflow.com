# Build academic knowledge graph from research papers with PDF vector, GPT-4 and Neo4j

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## Transform Research Papers into a Searchable Knowledge Graph

This workflow automatically builds and maintains a comprehensive knowledge graph from academic papers, enabling researchers to discover connections between concepts, track research evolution, and perform semantic searches across their field of study. By combining PDF Vector's paper parsing capabilities with GPT-4's entity extraction and Neo4j's graph database, this template creates a powerful research discovery tool.

### Target Audience & Problem Solved
This template is designed for:
- **Research institutions** building internal knowledge repositories
- **Academic departments** tracking research trends and collaborations
- **R&D teams** mapping technology landscapes
- **Libraries and archives** creating searchable research collections

It solves the problem of information silos in academic research by automatically extracting and connecting key concepts, methods, authors, and findings across thousands of papers.

### Prerequisites
- n8n instance with PDF Vector node installed
- OpenAI API key for GPT-4 access
- Neo4j database instance (local or cloud)
- Basic understanding of graph databases
- At least 100 API credits for PDF Vector (processes ~50 papers)

### Step-by-Step Setup Instructions

1. **Configure PDF Vector Credentials**
   - Navigate to Credentials in n8n
   - Add new PDF Vector credentials with your API key
   - Test the connection to ensure it's working

2. **Set Up Neo4j Database**
   - Install Neo4j locally or create a cloud instance at [Neo4j Aura](https://neo4j.com/cloud/aura/)
   - Note your connection URI, username, and password
   - Create database constraints for better performance:
     ```cypher
     CREATE CONSTRAINT paper_id IF NOT EXISTS ON (p:Paper) ASSERT p.id IS UNIQUE;
     CREATE CONSTRAINT author_name IF NOT EXISTS ON (a:Author) ASSERT a.name IS UNIQUE;
     CREATE CONSTRAINT concept_name IF NOT EXISTS ON (c:Concept) ASSERT c.name IS UNIQUE;
     ```

3. **Configure OpenAI Integration**
   - Add OpenAI credentials in n8n
   - Ensure you have GPT-4 access (GPT-3.5 can be used with reduced accuracy)
   - Set appropriate rate limits to avoid API throttling

4. **Import and Configure the Workflow**
   - Import the template JSON into n8n
   - Update the search query in the "PDF Vector - Fetch Papers" node to your research domain
   - Adjust the schedule trigger frequency based on your needs
   - Configure the PostgreSQL connection for logging (optional)

5. **Test with Sample Papers**
   - Manually trigger the workflow
   - Monitor the execution for any errors
   - Check Neo4j browser to verify nodes and relationships are created
   - Adjust entity extraction prompts if needed for your domain

### Implementation Details

The workflow operates in several stages:

1. **Paper Discovery**: Uses PDF Vector's academic search to find relevant papers
2. **Content Parsing**: Leverages LLM-enhanced parsing for accurate text extraction
3. **Entity Extraction**: GPT-4 identifies concepts, methods, datasets, and relationships
4. **Graph Construction**: Creates nodes and relationships in Neo4j
5. **Statistics Tracking**: Logs processing metrics for monitoring

### Customization Guide

**Adjusting Entity Types:**
Edit the GPT-4 prompt in the "Extract Entities" node to include domain-specific entities:
```javascript
// Add custom entity types like:
// - Algorithms
// - Datasets
// - Institutions
// - Funding sources
```

**Modifying Relationship Types:**
Extend the "Build Graph Structure" node to create custom relationships:
```javascript
// Examples:
// COLLABORATES_WITH (between authors)
// EXTENDS (between papers)
// FUNDED_BY (paper to funding source)
```

**Changing Search Scope:**
- Modify providers array to include/exclude databases
- Adjust year range for historical or recent focus
- Add keyword filters for specific subfields

**Scaling Considerations:**
- For large-scale processing (&gt;1000 papers/day), implement batching
- Use Redis for deduplication across runs
- Consider implementing incremental updates to avoid reprocessing

### Knowledge Base Features:
- Automatic concept extraction with GPT-4
- Research timeline tracking
- Author collaboration networks
- Topic evolution visualization
- Semantic search interface via Neo4j

### Components:
1. **Paper Ingestion**: Continuous monitoring and parsing
2. **Entity Extraction**: Identify key concepts, methods, datasets
3. **Relationship Mapping**: Connect papers, authors, concepts
4. **Knowledge Graph**: Store in graph database
5. **Search Interface**: Query by concept, author, or topic
6. **Visualization**: Interactive knowledge exploration

## 📊 Basic Information

- **Workflow ID:** 7362
- **Complexity:** intermediate
- **Node Count:** 10
- **Views:** 1880
- **Downloads:** 188
- **Created:** 2025/8/14
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7362)

## 👤 Author

- **Name:** PDF Vector
- **Username:** @pdfvector

## 🏷️ Categories

- AI RAG
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** 
- **scheduleTrigger** 
- **n8n-nodes-pdfvector.pdfVector** (×2)
- **openAi** 
- **code** (×2)
- **neo4j** (×2)
- **postgres** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 10 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
