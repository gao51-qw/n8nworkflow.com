import fs from 'fs';
import path from 'path';

const SOURCE_DIR = 'c:/Users/Administrator/AppData/Roaming/Code/User/globalStorage/kilocode.kilo-code/tasks/';
const TARGET_DIR = 'd:/n8nworkflows.xyz/exports/kilo_tasks/';

async function exportTasks() {
    if (!fs.existsSync(TARGET_DIR)) {
        fs.mkdirSync(TARGET_DIR, { recursive: true });
    }

    const tasks = fs.readdirSync(SOURCE_DIR);
    const summary = [];

    for (const taskId of tasks) {
        const taskPath = path.join(SOURCE_DIR, taskId);
        if (!fs.statSync(taskPath).isDirectory()) continue;

        const metadataPath = path.join(taskPath, 'task_metadata.json');
        let title = taskId;
        let dateStr = '';

        if (fs.existsSync(metadataPath)) {
            try {
                const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
                if (metadata.title) {
                    title = metadata.title;
                }
                if (metadata.createdAt) {
                    const date = new Date(metadata.createdAt);
                    dateStr = date.toISOString().replace(/T/, '_').replace(/\..+/, '').replace(/:/g, '-');
                }
            } catch (e) {
                console.error(`Error reading metadata for ${taskId}: ${e.message}`);
            }
        }

        // Clean title for filename
        const cleanTitle = title.replace(/[\\/:*?"<>|]/g, '_').substring(0, 100);
        const folderName = dateStr ? `${dateStr}_${cleanTitle}` : cleanTitle;
        const targetTaskPath = path.join(TARGET_DIR, folderName);

        if (!fs.existsSync(targetTaskPath)) {
            fs.mkdirSync(targetTaskPath, { recursive: true });
        }

        const filesToCopy = ['api_conversation_history.json', 'task_metadata.json', 'ui_messages.json'];
        for (const file of filesToCopy) {
            const srcFile = path.join(taskPath, file);
            if (fs.existsSync(srcFile)) {
                fs.copyFileSync(srcFile, path.join(targetTaskPath, file));
            }
        }

        summary.push({
            title,
            date: dateStr,
            folder: folderName
        });
        console.log(`Exported: ${folderName}`);
    }

    // Generate summary.md
    const summaryContent = [
        '# Kilo Tasks Export Summary',
        '',
        '| Date | Task Title | Folder |',
        '| --- | --- | --- |',
        ...summary.sort((a, b) => b.date.localeCompare(a.date)).map(s => `| ${s.date} | ${s.title} | [${s.folder}](./${encodeURIComponent(s.folder)}) |`)
    ].join('\n');

    fs.writeFileSync(path.join(TARGET_DIR, 'summary.md'), summaryContent);
    console.log('Summary generated.');
}

exportTasks().catch(console.error);
