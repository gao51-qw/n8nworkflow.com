# Calculate Embodied Carbon (CO2) for Revit/IFC Models using AI Classification

> Estimate **embodied carbon (CO2e)** for grouped BIM/CAD elements. The workflow accepts an existing **XLSX** (grouped element data) or, if missing, can trigger a local **RvtExporter.exe** to generate one. It detects category fields, filters out non-building elements, infers **aggregation rules** with AI, computes **CO2** using densities & emission factors, and exports a **multi-sheet Excel** plus a clean **HTML** report.

## What it does
- **Reads or builds XLSX** (from your model via `RvtExporter.exe` when needed).
- **Finds category/volumetric fields**; separates building vs. annotation elements.
- Uses AI to **infer aggregation rules** (sum/mean/first) per header.
- **Groups** rows by your `group_by` field and aggregates totals.
- Prepares **enhanced prompts** and calls your LLM to classify materials and estimate CO2 (A1-A3 minimum).
- **Computes project totals** and generates a **multi-sheet XLSX** + **HTML** report with charts and hotspots.

## Prerequisites
- **LLM credentials** for one provider (e.g., OpenAI, Anthropic, Gemini, Grok/OpenRouter). Enable one chat node and connect credentials.
- **Windows host** only if you want to auto-extract from `.rvt/.ifc` via `RvtExporter.exe`. If you already have an XLSX, Windows is **not required**.
- Optional: mapping/classifier files (XLSX/CSV/PDF) to improve material classification.

## How to use
1. **Import** this JSON into n8n.
2. Open the **Setup/Parameters** node(s) and set:
   - `project_file` — path to your `.rvt/.ifc` **or** to an existing grouped `*_rvt.xlsx`
   - `path_to_converter` — `C:\\DDC_Converter_Revit\\datadrivenlibs\\RvtExporter.exe` (optional)
   - `group_by` — e.g., `Type Name` / `Category` / `IfcType`
   - `sheet_name` — default `Summary` (if reading from XLSX)
3. **Enable one LLM node** and attach credentials; keep others disabled.
4. **Execute** (Manual Trigger). The workflow detects/builds the XLSX, analyzes, classifies, estimates CO2, then writes **Excel** and opens the **HTML** report.

## Outputs
- **Excel** (`CO2_Analysis_Report_YYYY-MM-DD.xlsx`, ~8 sheets): Executive Summary, All Elements, Material Summary, Category Analysis, Impact Analysis, Top 20 Hotspots, Data Quality, Recommendations.
- **HTML**: executive report with key KPIs and charts.
- Per-group fields include: *Material (EU/DE/US), Quantity & Unit, Density, Mass, CO2 Factor, Total CO2 (kg/tonnes), CO2 %, Confidence, Assumptions*.

## Notes & tips
- Input quantities (volumes/areas) are **already aggregated per group** — do **not** multiply by element count.
- Use `-no-collada` upstream if you only need XLSX in extraction.
- Prefer ASCII-safe paths and ensure write permissions to output folder.

## Categories
Data Extraction · Files & Storage · ETL · CAD/BIM · Carbon/ESG

## Tags
`cad-bim`, `co2`, `carbon`, `embodied-carbon`, `lca`, `revit`, `ifc`, `xlsx`, `html-report`, `llm`

## Author
 [DataDrivenConstruction.io ](https://DataDrivenConstruction.io )
 [info@datadrivenconstruction.io](mailto:info@datadrivenconstruction.io)


## Consulting and Training
We work with leading construction, engineering, consulting agencies and technology firms around the world to help them implement open data principles, automate CAD/BIM processing and build robust ETL pipelines.

If you would like to test this solution with your own data, or are interested in adapting the workflow to real project tasks, feel free to contact us.


**Docs & Issues:**  
  [Full Readme on GitHub](https://github.com/datadrivenconstruction/cad2data-Revit-IFC-DWG-DGN-pipeline-with-conversion-validation-qto)

## 📊 Basic Information

- **Workflow ID:** 7653
- **Complexity:** advanced
- **Node Count:** 57
- **Views:** 325
- **Downloads:** 32
- **Created:** 2025/8/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7653)

## 👤 Author

- **Name:** Artem Boiko
- **Username:** @datadrivenconstruction

## 🏷️ Categories

- AI Summarization
- Multimodal AI

## 🔗 Nodes Used

- **code** (×17)
- **set** (×8)
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **if** (×5)
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 
- **spreadsheetFile** (×2)
- **readBinaryFile** (×2)
- **executeCommand** (×2)
- **merge** 
- **manualTrigger** 
- **stickyNote** (×10)
- **writeBinaryFile** (×2)
- **@n8n/n8n-nodes-langchain.lmChatOpenAi** 
- **@n8n/n8n-nodes-langchain.lmChatXAiGrok** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 57 nodes with 41 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
