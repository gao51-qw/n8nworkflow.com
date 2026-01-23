*This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## Transform Complex Research Papers into Accessible Summaries

This workflow automatically generates multiple types of summaries from research papers, making complex academic content accessible to different audiences. By combining PDF Vector's advanced parsing capabilities with GPT-4's language understanding, researchers can quickly digest papers outside their expertise, communicate findings to diverse stakeholders, and create social media-friendly research highlights.

### Target Audience & Problem Solved
This template is designed for:
- **Research communicators** translating complex findings for public audiences
- **Journal editors** creating accessible abstracts and highlights
- **Science journalists** quickly understanding technical papers
- **Academic institutions** improving research visibility and impact
- **Funding agencies** reviewing large volumes of research outputs

It solves the critical challenge of research accessibility by automatically generating summaries tailored to different audience needs - from technical experts to the general public.

### Prerequisites
- n8n instance with PDF Vector node installed
- OpenAI API key with GPT-4 or GPT-3.5 access
- PDF Vector API credentials
- Basic understanding of webhook setup
- Optional: Slack/Email integration for notifications
- Minimum 20 API credits per paper summarized

### Step-by-Step Setup Instructions

1. **Configure API Credentials**
   - Navigate to n8n Credentials section
   - Add PDF Vector credentials with your API key
   - Add OpenAI credentials with your API key
   - Test both connections to ensure they work

2. **Set Up the Webhook Endpoint**
   - Import the workflow template into n8n
   - Note the webhook URL from the "Webhook - Paper URL" node
   - This URL will receive POST requests with paper URLs
   - Example request format:
     ```json
     {
       "paperUrl": "https://example.com/paper.pdf"
     }
     ```

3. **Configure Summary Models**
   - Review the OpenAI model settings in each summary node
   - GPT-4 recommended for executive and technical summaries
   - GPT-3.5-turbo suitable for lay and social media summaries
   - Adjust temperature settings for creativity vs accuracy

4. **Customize Output Formats**
   - Modify the "Combine All Summaries" node for your needs
   - Add additional fields or metadata as required
   - Configure response format (JSON, HTML, plain text)

5. **Test the Workflow**
   - Use a tool like Postman or curl to send a test request
   - Monitor the execution for any errors
   - Verify all four summary types are generated
   - Check response time and adjust timeout if needed

### Implementation Details

The workflow implements a sophisticated summarization pipeline:

1. **PDF Parsing**: Uses LLM-enhanced parsing for accurate extraction from complex layouts
2. **Parallel Processing**: Generates all summary types simultaneously for efficiency
3. **Audience Targeting**: Each summary type uses specific prompts and constraints
4. **Quality Control**: Structured prompts ensure consistent, high-quality outputs
5. **Flexible Output**: Returns all summaries in a single API response

### Customization Guide

**Adding Custom Summary Types:**
Create new summary nodes with specialized prompts:
```javascript
// Example: Policy Brief Summary
{
  "content": "Create a policy brief (max 300 words) highlighting:
  1. Policy-relevant findings
  2. Recommendations for policymakers
  3. Societal implications
  4. Implementation considerations
  
  Paper content: {{ $json.content }}"
}
```

**Modifying Summary Lengths:**
Adjust word limits in each summary prompt:
```javascript
// In Executive Summary node:
"max 500 words" // Change to your desired length
// In Tweet Summary node:
"max 280 characters" // Twitter limit
```

**Adding Language Translation:**
Extend the workflow with translation nodes:
```javascript
// After summary generation, add:
"Translate this summary to Spanish:
{{ $json.executiveSummary }}"
```

**Implementing Caching:**
Add a caching layer to avoid reprocessing:
- Use Redis or n8n's static data
- Cache based on paper DOI or URL hash
- Set appropriate TTL for cache entries

**Batch Processing Enhancement:**
For multiple papers, modify the workflow:
- Accept array of paper URLs
- Use SplitInBatches node for processing
- Aggregate results before responding

### Summary Types:
1. **Executive Summary**: 1-page overview for decision makers
2. **Technical Summary**: Detailed summary for researchers
3. **Lay Summary**: Plain language for general audience
4. **Social Media**: Tweet-sized key findings

### Key Features:
- Parse complex academic PDFs with LLM enhancement
- Generate multiple summary types simultaneously
- Extract and highlight key methodology and findings
- Create audience-appropriate language and depth
- API-driven for easy integration

### Advanced Features

**Quality Metrics:**
Add a quality assessment node:
```javascript
// Evaluate summary quality
const qualityChecks = {
  hasKeyFindings: summary.includes('findings'),
  appropriateLength: summary.length &lt;= maxLength,
  noJargon: !technicalTerms.some(term =&gt; summary.includes(term))
};
```

**Template Variations:**
Create field-specific templates:
- Medical research: Include clinical implications
- Engineering papers: Focus on technical specifications
- Social sciences: Emphasize methodology and limitations