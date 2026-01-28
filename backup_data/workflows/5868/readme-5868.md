# Validate CAD and BIM files against Excel standards (Revit, IFC, AutoCAD, DGN)

> *This workflow contains community nodes that are only compatible with the self-hosted version of n8n.*

## CAD-BIM Multi-Format Validation Pipeline

This workflow enables automated validation of CAD and BIM files in multiple formats (Revit, IFC, DWG, DGN) for compliance with project standards and requirements.

### Key Features

- Converts Revit, IFC, DWG, and DGN models into open data tables
- Runs automated validation checks on model naming, structure, attributes, and completeness
- Generates error reports and QTO (Quantity Take-Off) tables for all processed files

### How it works

1. Upload one or more project files in Revit (.rvt), IFC (.ifc), DWG, or DGN formats
2. The pipeline automatically processes each file and validates against configurable rules in Excel form
3. Error summaries and QTO tables are generated 
4. All outputs are available for download as Excel 


- **Converter Path:**  
  Make sure the converter executable (e.g. `RvtExporter.exe`) is placed in `DDC Exporter\datadrivenlibs\`.  
  Specify the full path in the workflow settings if required.



- **Troubleshooting:**  
  - If conversion fails, double-check the path to the executable.
  - Only supported formats can be processed (see GitHub Readme).
  - Review logs in `/output` for error details.

- **Docs & Issues:**  
  [Full Readme on GitHub](https://github.com/datadrivenconstruction/cad2data-Revit-IFC-DWG-DGN-pipeline-with-conversion-validation-qto)

## Consulting and Training
We work with leading construction, engineering, consulting agencies and technology firms around the world to help them implement open data principles, automate CAD/BIM processing and build robust ETL pipelines.

If you would like to test this solution with your own data, or are interested in adapting the workflow to real project tasks, feel free to contact us.

## Author
 [DataDrivenConstruction.io ](https://DataDrivenConstruction.io )
 [info@datadrivenconstruction.io](mailto:info@datadrivenconstruction.io)

**Docs & Issues:**  
  [Full Readme on GitHub](https://github.com/datadrivenconstruction/cad2data-Revit-IFC-DWG-DGN-pipeline-with-conversion-validation-qto)

## 📊 Basic Information

- **Workflow ID:** 5868
- **Complexity:** advanced
- **Node Count:** 29
- **Views:** 805
- **Downloads:** 80
- **Created:** 2025/7/11
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/5868)

## 👤 Author

- **Name:** Artem Boiko
- **Username:** @datadrivenconstruction

## 🏷️ Categories

- Engineering

## 🔗 Nodes Used

- **manualTrigger** 
- **set** (×6)
- **stickyNote** (×11)
- **readBinaryFile** (×3)
- **merge** (×2)
- **code** 
- **writeBinaryFile** 
- **executeCommand** (×2)
- **if** (×2)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 29 nodes with 17 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
