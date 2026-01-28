# Estimate Construction Costs from Revit/IFC Models with GPT-4 and Claude

> 
Estimate **material price** and **total cost** for grouped BIM/CAD elements using an **LLM-driven** analysis. The workflow accepts an existing **XLSX** (from your model) or, if missing, can trigger a local **RvtExporter.exe** to generate one. It enriches each element group with quantities, pricing, confidence, and produces a **multi-sheet Excel** report plus a polished **HTML executive report**.

## What it does
- **Reads grouped element data** (from XLSX or extracted via `RvtExporter.exe`).
- Builds **enhanced prompts** with clear rules (volumes/areas are already aggregated per group).
- Calls your selected **LLM** (OpenAI/Anthropic/etc.) to identify materials, pick the pricing unit, and estimate **price per unit** and **total cost**.
- **Parses AI output**, adds per-group KPIs (cost %, rank), and aggregates **project totals** (by material, by category).
- Exports a **multi-sheet XLSX** and an **HTML executive report** (charts, KPIs, top groups).

## Prerequisites
- **LLM credentials** for your chosen provider (e.g., OpenAI, Anthropic). Enable exactly one chat node and connect credentials.
- **Windows host** only if you want to auto-extract from `.rvt/.ifc` via `RvtExporter.exe`. If you already have an XLSX, Windows is **not required**.
- Optional: Internet access on the LLM side for price lookups (model/tooling dependent).

## How to use
1. **Import** this JSON into n8n.
2. Open the **Setup** node(s) and set:
   - `project_file` — path to your `.rvt/.ifc` or to an existing grouped `*_rvt.xlsx`
   - `path_to_converter` — `C:\\DDC_Converter_Revit\\datadrivenlibs\\RvtExporter.exe` (optional)
   - `country` — used to guide price sources/standards (e.g., `Germany`)
3. In the canvas, **enable one LLM node** (e.g., OpenAI or Anthropic) and connect credentials; keep others disabled.
4. **Execute workflow** (Manual Trigger). It will detect/build the XLSX, run analysis, then write the **Excel** and open the **HTML** report.

## Outputs
- **Excel**: `Price_Estimation_Report_YYYY-MM-DD.xlsx` with sheets:
  - `Summary`, `Detailed Elements`, `Material Summary`, `Top 10 Groups`
- **HTML**: executive report with charts (project totals, top materials, top groups).
- Per-group fields include: *Material (EU/DE/US), Quantity & Unit, Price per Unit (EUR), Total Cost (EUR), Assumptions, Confidence*.

## Notes & tips
- Quantities in the input are **already aggregated per group** — do **not** multiply by element count.
- If you prefer XLSX-only extraction, run your converter with a `-no-collada` flag upstream.
- Keep ASCII-safe paths and ensure write permissions to the output folder.

## Categories
Data Extraction · Files & Storage · ETL · CAD/BIM · Cost Estimation

## Tags
`cad-bim`, `price-estimation`, `cost`, `revit`, `ifc`, `xlsx`, `html-report`, `llm`, `materials`, `qto`

## Author
 [DataDrivenConstruction.io ](https://DataDrivenConstruction.io )
 [info@datadrivenconstruction.io](mailto:info@datadrivenconstruction.io)

## Consulting and Training
We work with leading construction, engineering, consulting agencies and technology firms around the world to help them implement open data principles, automate CAD/BIM processing and build robust ETL pipelines.

If you would like to test this solution with your own data, or are interested in adapting the workflow to real project tasks, feel free to contact us.


**Docs & Issues:**  
  [Full Readme on GitHub](https://github.com/datadrivenconstruction/cad2data-Revit-IFC-DWG-DGN-pipeline-with-conversion-validation-qto)

## 📊 Basic Information

- **Workflow ID:** 7652
- **Complexity:** advanced
- **Node Count:** 57
- **Views:** 912
- **Downloads:** 91
- **Created:** 2025/8/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7652)

## 👤 Author

- **Name:** Artem Boiko
- **Username:** @datadrivenconstruction

## 🏷️ Categories

- AI Summarization
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **code** (×17)
- **set** (×8)
- **@n8n/n8n-nodes-langchain.openAi** (×2)
- **if** (×5)
- **splitInBatches** 
- **@n8n/n8n-nodes-langchain.agent** 
- **@n8n/n8n-nodes-langchain.lmChatAnthropic** 
- **spreadsheetFile** (×2)
- **stickyNote** (×10)
- **readBinaryFile** (×2)
- **executeCommand** (×2)
- **merge** 
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
