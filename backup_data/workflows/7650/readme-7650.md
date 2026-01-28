# Batch Convert CAD/BIM Files to XLSX/DAE with Validation and Reporting

> # CAD2DATA: Batch Converter (Revit/IFC/DWG/DGN → XLSX/DAE)

Batch-convert CAD/BIM files to analysis-ready **XLSX** and optional **DAE** with automatic verification and a clean HTML report. Runs locally via `RvtExporter.exe` and PowerShell on Windows.

Supports configurable export modes — **basic (~309 categories)**, **standard (~724)**, and **complete (~1209)** — plus optional outputs such as **bounding boxes**, **Revit schedules**, and **PDF drawings**.

## What it does
- Scans a **source folder** (optionally including subfolders) for `.rvt`, `.ifc`, `.dwg`, or `.dgn`.
- For each file, runs: `RvtExporter.exe [input] [output.xlsx] [output.dae] [options]`.
- Verifies outputs (existence + size) and aggregates results.
- Generates a **summary HTML report** and opens it automatically on completion.

## Converter options
- **Export modes:** `basic` | `standard` | `complete` | `custom`
- **Flags:** `bbox` (BoundingBox to XLSX), `schedule` (Revit schedules), `sheets2pdf` (Sheets → PDF)
- **Disable:** `-no-xlsx`, `-no-collada`
- **Custom files:** `[&lt;output file&gt;]` and `[&lt;category file&gt;]` (used with `custom`)

**Examples**
- `basic bbox` — minimal export + BoundingBox  
- `complete schedule sheets2pdf` — full export + schedules + PDFs  
- `standard -no-collada` — XLSX only (skip DAE)

## Prerequisites
- **Windows** host (PowerShell + local executable).
- DDC Revit toolkit installed:  
  `C:\DDC_Converter_Revit\datadrivenlibs\RvtExporter.exe`
- Read access to the source folder and write access to the output folder.

## How to use
1. **Import** this JSON workflow into n8n.
2. Open **Set Configuration Parameters** and set:
   - `converter_path`: `C:\DDC_Converter_Revit\datadrivenlibs\RvtExporter.exe`
   - `source_folder`: folder with your projects
   - `output_folder`: folder for results
   - `include_subfolders`: `true` / `false`
   - `file_extension`: `.rvt` | `.ifc` | `.dwg` | `.dgn`
   - `options`: see **Converter options**
3. Run **Manual Trigger**.
4. The workflow discovers files → runs conversions → verifies outputs → writes and opens the HTML report.

## Outputs
- `*_ext.xlsx` — tabular data per input file.
- `*_ext.dae` — lightweight 3D (if not disabled with `-no-collada`).
- `CAD_Conversion_Report_YYYY-MM-DD_HH-MM-SS.html` — summary with:
  - success rate and progress
  - per-file and total processing time
  - input/output sizes and file paths

## Notes & tips
- Uses PowerShell `Get-ChildItem` for discovery and `cmd /c start` to open the report.
- With `-no-collada`, success/verification is XLSX-only (DAE is skipped).
- Prefer ASCII paths and ensure write permissions in the output folder.

## Categories
Data Extraction · Files & Storage · ETL · CAD/BIM

## Tags
`cad-bim`, `revit`, `ifc`, `dwg`, `dgn`, `converter`, `batch`, `xlsx`, `dae`, `qto`
## Author
DataDrivenConstruction.io

## Author
 [DataDrivenConstruction.io ](https://DataDrivenConstruction.io )
 [info@datadrivenconstruction.io](mailto:info@datadrivenconstruction.io)

## Consulting and Training
We work with leading construction, engineering, consulting agencies and technology firms around the world to help them implement open data principles, automate CAD/BIM processing and build robust ETL pipelines.

If you would like to test this solution with your own data, or are interested in adapting the workflow to real project tasks, feel free to contact us.


**Docs & Issues:**  
  [Full Readme on GitHub](https://github.com/datadrivenconstruction/cad2data-Revit-IFC-DWG-DGN-pipeline-with-conversion-validation-qto)


## 📊 Basic Information

- **Workflow ID:** 7650
- **Complexity:** advanced
- **Node Count:** 41
- **Views:** 331
- **Downloads:** 33
- **Created:** 2025/8/20
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7650)

## 👤 Author

- **Name:** Artem Boiko
- **Username:** @datadrivenconstruction

## 🏷️ Categories

- Document Extraction
- Multimodal AI

## 🔗 Nodes Used

- **stickyNote** (×15)
- **manualTrigger** 
- **code** (×8)
- **merge** (×4)
- **set** (×2)
- **executeCommand** (×6)
- **if** 
- **splitOut** 
- **wait** 
- **writeBinaryFile** 
- **scheduleTrigger** 

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 41 nodes with 23 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
