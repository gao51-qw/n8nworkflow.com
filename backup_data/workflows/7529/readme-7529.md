# Transform cloud documentation into security baselines with OpenAI and GDrive

> ## What this template does

Transforms provider documentation (URLs) into an **auditable, enforceable multicloud security control baseline**. It:

* Fetches and sanitizes HTML
* Uses AI to **extract security requirements** (strict 3-line TXT blocks)
* **Composes enforceable controls** (strict 7-line TXT blocks with true-equivalence consolidation)
* **Builds the final baseline** (TXT or JSON, see *Outputs*) with a `Technology:` header
* Returns a downloadable artifact via webhook and can **append/create** the file in Google Drive

## Why it’s useful

Eliminates manual copy-paste and produces a consistent, portable baseline ready for review, audit, or enforcement tooling—ideal for rapidly generating or refreshing baselines across cloud providers and services.

## Multicloud support

The workflow is **multicloud by design**. Provide the target cloud in the request and run the same pipeline for:

* **AWS**, **Azure**, **GCP** (out of the box)
* Extensible to other providers/services by adjusting prompts and routing logic

## How it works (high level)

1. `POST /create` (Basic Auth) with `{ cloudProvider, technology, urls[] }`
2. Input validation → generate `uuid` → resolve Google Drive folder (search-or-create)
3. Download & sanitize each URL
4. AI pipeline: **Extractor → Composer → Baseline Builder → (optional) Baseline Auditor**
5. Append/create file in Drive and return a **downloadable artifact** (TXT/JSON) via webhook

## Request (webhook)

**Method:** `POST`
**URL:** `https://&lt;your-n8n&gt;/webhook/create`
**Auth:** Basic Auth
**Headers:** `Content-Type: application/json`

### Example input (Postman/CLI)

```json
{
  "cloudProvider": "aws",
  "technology": "Amazon S3",
  "urls": [
    "https://docs.aws.amazon.com/AmazonS3/latest/userguide/security-best-practices.html",
    "https://www.trendmicro.com/cloudoneconformity/knowledge-base/aws/S3/",
    "https://repost.aws/knowledge-center/secure-s3-resources"
  ]
}
```

## Field reference

* `cloudProvider` *(string, required)* — case-insensitive. Supported: `aws`, `azure`, `gcp`.
* `technology` *(string, required)* — e.g., `"Amazon S3"`, `"Azure Storage"`, `"Google Cloud Storage"`.
* `urls` *(string\[], required)* — 1–20 `http(s)` URLs (official/reputable docs).

**Optional (Google Drive destination):**

* `gdriveTargetId` *(string)* — Google Drive **folderId** used for append/create.
* `gdrivePath` *(string)* — Path like `"DefySec/Baselines"` (folders are created if missing).
* `gdriveTargetName` *(string)* — Folder name to find/create under `root`.

**Optional (Assistant overrides):**

* `assistantExtractorId`, `assistantComposerId`, `assistantBaselineId`, `assistantAuditorId` *(strings)*

**Resolution precedence**

1. Drive: `gdriveTargetId` → `gdrivePath` → `gdriveTargetName` → default folder.
2. Assistants: explicit IDs above → dynamic resolution by name (expects `1_DefySec_Extractor`, `2_DefySec_Control_Composer`, `3_DefySec Baseline Builder`, `4_DefySec_Baseline_Auditor`).

## Validation

* Rejects empty `urls` or non-`http(s)` schemes; normalizes `cloudProvider` to `aws|azure|gcp`.
* Sanitizes fetched HTML (removes scripts/styles/headers) before AI steps.

## Outputs

* **Primary:** downloadable **TXT** file `controls_&lt;technology&gt;_&lt;timestamp&gt;.txt` (via webhook).
* **Composer outcomes:** if no groups to consolidate → `NO_CONTROLS_TO_BE_CONSOLIDATED`; if nothing valid remains → `NO_CONTROLS_FOUND`.&#x20;
* **JSON path:** when the Builder stage is configured for **JSON-only** output (strict schema), the workflow returns a `.json` artifact and the Auditor validates it (see next section).&#x20;

## Techniques used (from the built-in assistants)

* **Provider-aware extraction with strict TXT contract (3 lines):** Extractor limits itself to the declared provider/technology, outputs only `Description/Reference/SecurityObjective`, and applies a **reflexive quality check** before emitting.&#x20;
* **Normalization & strict header parsing:** Composer normalizes whitespace/fences, requires the `CloudProvider/Technology` header, and ignores anything outside the exact 3-line block shape.&#x20;
* **True-equivalence grouping & consolidation:** Composer groups **only** when intent, enforcement locus/mechanism, scope, and mode/setting all match—otherwise items remain distinct.&#x20;
* **7-line enforceable control format:** Composer renders each (consolidated or unique) control in **exactly seven labeled lines** to keep results auditable and automatable.&#x20;
* **Builder with JSON-only schema & technology inference:** Builder parses 7-line blocks, infers `technology`, consolidates true equivalents again if needed, and returns **pure JSON** matching a canonical schema (with counters in `meta`).&#x20;
* **Self-evaluation loop (Auditor):** Auditor **unwraps transport**, validates **schema & content**, checks provider terminology/scope/automation, and returns either `GOOD_ENOUGH` or a **JSON instruction set** for the Builder to fix and re-emit—enabling reflective improvement.&#x20;
* **Reference prioritization:** Across stages, official provider documentation is preferred in `References` (AWS/Azure/GCP).&#x20;

## Customization & extensions

* **Prompt-reflective techniques:** keep (or extend) the Auditor loop to add more review passes and quality gates.&#x20;
* **Compliance assistants:** add assistants to analyze/label controls for **HIPAA, PCI DSS, SOX** (and others), emitting mappings, gaps, and remediation notes.
* **Implementation context:** feed internal implementation docs, runbooks, or **Architecture Decision Records (ADRs)**; use these as **grounding** to generate or refine controls (works with local/self-hosted LLMs, too).
* **Local/self-hosted LLMs:** swap OpenAI nodes for your on-prem LLM endpoint while keeping the pipeline.
* **Provider-specific outputs:** extend the final stage to export Policy-as-Code or IaC snippets (Rego/Sentinel, CloudFormation Guard, Bicep/ARM, Terraform validations).

## Assistant configuration & prompts

* Full assistant configurations and prompts (Extractor, Composer, Baseline Builder, **Baseline Auditor**) are available here:
  **[https://github.com/followdrabbit/n8nlabs/tree/main/Lab03%20-%20Multicloud%20AI%20Security%20Control%20Baseline%20Builder/Assistants](https://github.com/followdrabbit/n8nlabs/tree/main/Lab03%20-%20Multicloud%20AI%20Security%20Control%20Baseline%20Builder/Assistants)**

## Security & privacy

* No hardcoded secrets in HTTP nodes; use n8n’s Credential Manager.
* Drive operations are optional and folder-scoped.
* For sensitive environments, switch to a local LLM and provide only sanitized/approved inputs.

## Quick test (curl)

```bash
curl -X POST "https://&lt;your-n8n&gt;/webhook/create" \
  -u "&lt;user&gt;:&lt;pass&gt;" \
  -H "Content-Type: application/json" \
  -d '{
        "cloudProvider":"aws",
        "technology":"Amazon S3",
        "urls":[
          "https://docs.aws.amazon.com/AmazonS3/latest/userguide/security-best-practices.html"
        ]
      }' \
  -OJ
```


## 📊 Basic Information

- **Workflow ID:** 7529
- **Complexity:** advanced
- **Node Count:** 46
- **Views:** 414
- **Downloads:** 41
- **Created:** 2025/8/18
- **Last Updated:** 2026/1/16
- **Source:** [View on n8n.io](https://n8n.io/workflows/7529)

## 👤 Author

- **Name:** Raphael De Carvalho Florencio
- **Username:** @followdrabbit

## 🏷️ Categories

- AI Summarization
- Multimodal AI

## 🔗 Nodes Used

- **if** (×4)
- **code** (×11)
- **webhook** 
- **set** (×2)
- **httpRequest** 
- **@n8n/n8n-nodes-langchain.openAi** (×6)
- **splitInBatches** 
- **googleDrive** (×6)
- **switch** 
- **respondToWebhook** (×3)
- **stickyNote** (×10)

## 🚀 How to Use

1. Download the workflow JSON file
2. Import it into your n8n instance
3. Configure the credentials for the nodes
4. Activate and test the workflow

## 🔀 Workflow Structure

This workflow contains 46 nodes with 33 node connections.

---

*This workflow was sourced from [n8n.io](https://n8n.io) community templates.*
