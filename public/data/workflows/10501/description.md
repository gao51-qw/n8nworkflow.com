## Description:
This workflow automates the entire student exam evaluation process using AI and Google Workspace tools — no manual correction needed!

Teachers simply submit a form with their name and a scanned copy of a student’s answer sheet. The flow then:

Uses Gemini Document Analysis to extract answers from the scanned sheet.

Passes the extracted answers to an AI Evaluation Agent, equipped with the Question Paper and Correct Answer Sheet (connected via Google Docs tools).

The AI cross-checks each student answer, counts correct and incorrect responses, and calculates the total marks.

The results are recorded in two Google Sheets:

A Summary Sheet with overall student performance (Name, Teacher, Total Marks, etc.)

A Detailed Report Sheet logging each question, correct answer, student’s answer, and correctness status.

This workflow turns the tedious task of exam evaluation into a seamless AI-driven automation — ensuring speed, accuracy, and transparency in academic grading.

## Highlights:
✅ AI Document Understanding (Gemini Model)
✅ Intelligent Answer Comparison
✅ Automated Mark Calculation
✅ Real-Time Google Sheets Update
✅ No Code — Fully Built in n8n