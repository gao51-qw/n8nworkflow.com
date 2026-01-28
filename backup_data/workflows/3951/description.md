# 🧾 Personal Invoice Processor

This N8N workflow automates the extraction and organization of **personal invoices in Colombia** received via **Gmail**. It includes the following key steps:

## 🔁 Flow Summary

1. **Email Trigger**
   - Polls Gmail every **30 minutes** for emails with `.zip` attachments (assumed to contain invoices).
   - Expects ZIP file following DIAN standards.

2. **ZIP File Handling**
   - Extracts all files.
   - Filters only **PDF** and **XML** files for processing.

3. **Data Extraction & Processing**
   - Uses **LangChain Agent + OpenAI (GPT-4o-mini)** to extract:
     - Tipo de documento (Factura / Nota Crédito)
     - Número de factura
     - Fecha de emisión (YYYY-MM-DD)
     - NIT emisor y receptor (sin dígito de verificación)
     - Razón social del emisor
     - Subtotal, IVA, Total
     - CUFE
     - Resumen de compra (max 20 words, formatted sentence)

4. **Validation**
   - Ensures **Total = Subtotal + IVA** using a calculator node.

5. **Storage**
   - Uploads the original PDF to **Google Drive**.
   - Renames the file to: `YYYY-MM-DD-NUMERO_FACTURA.pdf`.
   - Inserts or updates invoice details in **Google Sheets** using a unique `Key` (`NIT_Emisor + Numero_Factura`) to prevent duplication.

---

&gt; ⚙️ Designed for personal use with minimal latency tolerance and high automation reliability.