# Convert CAD & BIM (Revit, IFC, AutoCAD) in dataBase (DataFrame)

> A minimal workflow to convert a **Revit/IFC/DWG** project into analysis-ready **XLSX** (and optional **DAE**) with a single run. Set two variables, execute, and the converter does the rest.

## What it does
- **Inputs:** `path_to_converter` and `path_project_file` (RVT/IFC/DWG).
- **Runs:** `RvtExporter.exe "&lt;converter&gt;" "&lt;project_file&gt;"`.
- **Outputs:** writes `&lt;ProjectName&gt;_rvt.xlsx` (and `*_rvt.dae` if enabled by your converter).

## Prerequisites
- **Windows** host (local executable + filesystem).
- DDC Revit toolkit installed: `C:\\DDC_Converter_Revit\\datadrivenlibs\\RvtExporter.exe`.
- A local project file you can read.

## How to use
1. **Import** this JSON into n8n.
2. Open **“Set path to file and converter”** and set:
   - `path_to_converter`: `C:\\DDC_Converter_Revit\\datadrivenlibs\\RvtExporter.exe`
   - `path_project_file`: e.g., `C:\\Sample_Projects\\your_project.rvt`
3. Run **Manual Trigger** → the command node executes the converter.

## Notes & tips
- Ensure the path points to the executable inside **`datadrivenlibs`**.
- Use ASCII-safe paths; ensure write permissions next to the project file.
- This is intentionally **simple**: chain it with your own **Parse/Transform/Load** steps as needed.

## Categories
Data Extraction · Files & Storage · ETL · CAD/BIM

## Tags
`cad-bim`, `revit`, `ifc`, `dwg`, `converter`, `xlsx`, `dae`

## Author
 [DataDrivenConstruction.io ](https://DataDrivenConstruction.io )
 [info@datadrivenconstruction.io](mailto:info@datadrivenconstruction.io)

## Consulting and Training
We work with leading construction, engineering, consulting agencies and technology firms around the world to help them implement open data principles, automate CAD/BIM processing and build robust ETL pipelines.

If you would like to test this solution with your own data, or are interested in adapting the workflow to real project tasks, feel free to contact us.


**Docs & Issues:**  
  [Full Readme on GitHub](https://github.com/datadrivenconstruction/cad2data-Revit-IFC-DWG-DGN-pipeline-with-conversion-validation-qto)

## 📊 Basic Information

- **Workflow ID:** 5867
- **Complexity:** intermediate
- **Node Count:** 7
- **Views:** 530
- **Downloads:** 53
- **Created:** 2025/7/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5867)

## 👤 Author

- **Name:** Artem Boiko
- **Username:** @datadrivenconstruction

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **stickyNote** (×4)
- **manualTrigger** 
- **set** 
- **executeCommand** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 7 nodes with 2 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
