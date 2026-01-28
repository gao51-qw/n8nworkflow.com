# ETL: Extract and Parse Revit Model Data to Structured Excel

> Convert a **Revit model** to **Excel** and parse it into structured items ready for downstream ETL.
This minimal template runs a local `RvtExporter.exe`, checks success, derives the expected `*_rvt.xlsx` filename, reads it from disk, and parses it to data items in n8n.

## What it does
1. **Setup**: define `path_to_revit_converter` and `revit_file`.
2. **Run converter**: execute `RvtExporter.exe "&lt;converter&gt;" "&lt;revit_file&gt;"` (writes `*_rvt.xlsx` next to the RVT).
3. **Check success**: branch on converter error output.
4. **Read Excel**: compute `&lt;revit_file&gt; → *_rvt.xlsx` and read it from disk.
5. **Parse**: convert the workbook into structured items (rows → items).

## Prerequisites
- **Windows** host (local executable and filesystem paths).
- DDC Revit toolkit installed: `C:\\DDC_Converter_Revit\\datadrivenlibs\\RvtExporter.exe`.
- A local `.rvt` you can read; the converter will write `*_rvt.xlsx` next to it.

## How to use
1. **Import** this JSON into n8n.
2. Open **“Setup – Define file paths”** and set:
   - `path_to_revit_converter`: `C:\\DDC_Converter_Revit\\datadrivenlibs\\RvtExporter.exe`
   - `revit_file`: e.g., `C:\\Sample_Projects\\your_project.rvt`
3. Run **Manual Trigger**.
4. On success, the flow will read `*_rvt.xlsx` and emit parsed items.

## Outputs
- On disk: `&lt;YourProject&gt;_rvt.xlsx` (created by the converter).
- In n8n: parsed rows as items, ready for **Transform**/**Load** phases.

## Notes & tips
- If your converter writes the Excel to a **different folder/file name**, update the “**Success – Create Excel filename**” node to point to the actual path.
- Ensure write permissions in the project folder and avoid non-ASCII characters in paths when possible.
- This template is purposefully minimal (Extract-only). Chain it with your own **Transform**/**Load** steps.

## Categories
Data Extraction · Files & Storage · ETL · CAD/BIM

## Tags
`cad-bim`, `revit`, `ifc`, `dwg`, `extract`, `xlsx`, `etl`

## Author
 [DataDrivenConstruction.io ](https://DataDrivenConstruction.io )
 [info@datadrivenconstruction.io](mailto:info@datadrivenconstruction.io)


## Consulting and Training
We work with leading construction, engineering, consulting agencies and technology firms around the world to help them implement open data principles, automate CAD/BIM processing and build robust ETL pipelines.

If you would like to test this solution with your own data, or are interested in adapting the workflow to real project tasks, feel free to contact us.


**Docs & Issues:**  
  [Full Readme on GitHub](https://github.com/datadrivenconstruction/cad2data-Revit-IFC-DWG-DGN-pipeline-with-conversion-validation-qto)

## 📊 Basic Information

- **Workflow ID:** 7654
- **Complexity:** intermediate
- **Node Count:** 14
- **Views:** 547
- **Downloads:** 54
- **Created:** 2025/8/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7654)

## 👤 Author

- **Name:** Artem Boiko
- **Username:** @datadrivenconstruction

## 🏷️ Categories

- Engineering
- Multimodal AI

## 🔗 Nodes Used

- **manualTrigger** 
- **set** (×3)
- **executeCommand** 
- **if** (×2)
- **readBinaryFile** 
- **spreadsheetFile** 
- **stickyNote** (×5)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 14 nodes with 8 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
