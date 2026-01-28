## 🎯 Who's it for

**ESG analysts**, **investors**, **procurement teams**, **activists** and **sustainability professionals** who need comprehensive, objective assessments of companies' **environmental impact** and **animal welfare policies**. Perfect for:
- Due diligence and investment screening
- Supplier evaluation and ethical sourcing  
- Compliance reporting and ESG benchmarking
- Consumer guidance for ethical purchasing decisions

## ⚡ How it works

This workflow **automates the entire research and analysis process** for comprehensive sustainability and animal welfare assessment. Simply input a company name, and the system handles everything:

**🔍 Multi-Source Research**: Calls a specialized subworkflow that queries:
- Open Paws database for animal welfare data
- Web scraping for sustainability reports  
- Search engines for recent developments
- Social media monitoring for real-time insights

**🤖 Parallel AI Analysis**: Two specialized chains process data simultaneously:
- **Structured scoring** with percentages and letter grades (A+ to D)
- **Detailed HTML reports** with narrative analysis and insights

**📊 Complete Assessment**: Final output combines both formats for actionable intelligence on:
- Environmental policies and carbon footprint
- Animal welfare practices and ethical sourcing
- Vegan accommodation and plant-based initiatives

## 📋 Requirements

- **Prerequisites**: Download the research subworkflow from [**Multi-Tool Research Agent for Animal Advocacy with OpenRouter, Serper & Open Paws DB**](https://n8n.io/workflows/5588-multi-tool-research-agent-for-animal-advocacy-with-openrouter-serper-and-open-paws-db/) and save it in your n8n instance
- API key for OpenRouter or other AI service provider

## 🚀 How to set up

1. **Install Research Subworkflow**: First download the [**Multi-Tool Research Agent for Animal Advocacy with OpenRouter, Serper & Open Paws DB**](https://n8n.io/workflows/5588-multi-tool-research-agent-for-animal-advocacy-with-openrouter-serper-and-open-paws-db/) and import it into your n8n instance
2. **Configure API Keys**: Set up your AI service credentials in the LLM nodes
3. **Link Subworkflow**: Connect the Research Agent node to reference your installed research subworkflow
4. **Test Connection**: Verify the research tools and databases are accessible
5. **Run Test**: Input a well-known company name to validate the complete pipeline

## 🛠️ How to customize the workflow

- **Scoring Weights**: Adjust percentage weightings for environmental impact, animal welfare, and vegan accommodation
- **Research Sources**: Modify the subworkflow to include additional databases or exclude certain sources
- **Output Format**: Customize the HTML report template or JSON schema structure
- **Grading Scale**: Change letter grade thresholds (A+, A, B+, etc.) in the scoring logic
- **Assessment Focus**: Adapt prompts to emphasize specific sustainability or animal welfare aspects for your industry