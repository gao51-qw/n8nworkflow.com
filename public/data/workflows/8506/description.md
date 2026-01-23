## 📝 Description  

This workflow automates the process of extracting text from receipt or document images using **OCR.space** and presenting the results in a clean, styled form.  

It’s especially useful for cases like **receipt digitization, invoice parsing, table recognition, or quick OCR text extraction** directly inside n8n without third-party dashboards.  

The workflow is lightweight and self-contained - all you need is an OCR.space API key.

---

## 🔄 How it works  

1. **Form Trigger – Upload File**  
   A simple form collects the image (max 1 MB) and asks whether the file contains a table.  

2. **Normalize Inputs**  
   Converts the “Yes/No” response into a boolean flag `isTable` and keeps the uploaded file attached.  

3. **OCR.space API Call**  
   Sends the uploaded image to the OCR.space API with the correct parameters:  
   - `language=pol` (Polish by default, can be changed)  
   - `OCREngine=2`  
   - `isTable` flag  

4. **Display Results**  
   The parsed text (`ParsedResults[0].ParsedText`) is rendered in a styled card with monospace formatting for easier reading and copy-paste.

---

## 🎯 Use cases  

- Receipt OCR for expense tracking  
- Invoice or document text digitization  
- Table parsing from scanned files  
- Quick OCR text preview in n8n flows  

---

## ⚙️ Requirements  

- [OCR.space API key](https://ocr.space/ocrapi) (Header Authentication)  
- n8n instance running ≥ v1.20  

---

## 📌 Notes & Customization  

- **Language**: change `language` parameter (`eng`, `deu`, etc.) to match your input.  
- **Validation**: add a file size check if you expect larger files.  
- **Error handling**: add an Error Trigger if you anticipate API rate limits.  
- **Table vs Text**: enabling `isTable` improves structured data parsing.  

---

## 🔑 Keywords  

`OCR`, `receipt parsing`, `document OCR`, `invoice automation`, `text extraction`, `table recognition`, `AI OCR`, `OCR.space`, `workflow automation`