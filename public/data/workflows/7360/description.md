*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

**Description:**
## Unified Academic Search Across Major Research Databases

This powerful workflow enables researchers to search multiple academic databases simultaneously, automatically deduplicate results, and export formatted bibliographies. By leveraging PDF Vector's multi-database search capabilities, researchers can save hours of manual searching and ensure comprehensive literature coverage across PubMed, ArXiv, Google Scholar, Semantic Scholar, and ERIC databases.

### Target Audience & Problem Solved
This template is designed for:
- **Graduate students** conducting systematic literature reviews
- **Researchers** ensuring comprehensive coverage of their field
- **Librarians** helping patrons with complex searches
- **Academic teams** building shared bibliographies

It solves the critical problem of fragmented academic search by providing a single interface to query all major databases, eliminating duplicate results, and standardizing output formats.

### Prerequisites
- n8n instance with PDF Vector node installed
- PDF Vector API credentials with search permissions
- Basic understanding of academic search syntax
- Optional: PostgreSQL for search history logging
- Minimum 50 API credits for comprehensive searches

### Step-by-Step Setup Instructions

1. **Configure PDF Vector Credentials**
   - Go to n8n Credentials section
   - Create new PDF Vector credentials
   - Enter your API key from pdfvector.io
   - Test the connection to verify setup

2. **Import the Workflow Template**
   - Copy the template JSON code
   - In n8n, click "Import Workflow"
   - Paste the JSON and save
   - Review all nodes for any configuration needs

3. **Customize Search Parameters**
   - Open the "Set Search Parameters" node
   - Modify the default search query for your field
   - Adjust the year range (default: 2020-present)
   - Set results per source limit (default: 25)

4. **Configure Export Options**
   - Choose your preferred export formats (BibTeX, CSV, JSON)
   - Set the output directory for files
   - Configure file naming conventions
   - Enable/disable specific export types

5. **Test Your Configuration**
   - Run the workflow with a sample query
   - Check that all databases return results
   - Verify deduplication is working correctly
   - Confirm export files are created properly

### Implementation Details

The workflow implements a sophisticated search pipeline:

1. **Parallel Database Queries**: Searches all configured databases simultaneously for efficiency
2. **Smart Deduplication**: Uses DOI matching and fuzzy title comparison to remove duplicates
3. **Relevance Scoring**: Combines citation count, title relevance, and recency for ranking
4. **Format Generation**: Creates properly formatted citations in multiple styles
5. **Batch Processing**: Handles large result sets without memory issues

### Customization Guide

**Adding Custom Databases:**
```javascript
// In the PDF Vector search node, add to providers array:
"providers": ["pubmed", "semantic_scholar", "arxiv", "google_scholar", "eric", "your_custom_db"]
```

**Modifying Relevance Algorithm:**
Edit the "Rank by Relevance" node to adjust scoring weights:
```javascript
// Adjust these weights for your needs:
const titleWeight = 10;    // Title match importance
const citationWeight = 5;  // Citation count importance
const recencyWeight = 10;  // Recent publication bonus
const fulltextWeight = 15; // Full-text availability bonus
```

**Custom Export Formats:**
Add new format generators in the workflow:
```javascript
// Example: Add APA format export
const apaFormat = papers.map(p =&gt; {
  const authors = p.authors.slice(0, 3).join(', ');
  return `${authors} (${p.year}). ${p.title}. ${p.journal || 'Preprint'}.`;
});
```

**Advanced Filtering:**
Implement additional filters:
- Journal impact factor thresholds
- Open access only options
- Language restrictions
- Methodology filters for systematic reviews

### Search Features:
- Query multiple databases in parallel
- Advanced filtering and deduplication
- Citation format export (BibTeX, RIS, etc.)
- Relevance ranking across sources
- Full-text availability checking

### Workflow Process:
1. **Input**: Search query and parameters
2. **Parallel Search**: Query all databases
3. **Merge & Deduplicate**: Combine results
4. **Rank**: Sort by relevance/citations
5. **Enrich**: Add full-text links
6. **Export**: Multiple format options