import { cp, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const source = join(projectRoot, 'node_modules', 'ngx-extended-pdf-viewer', 'assets');
const target = join(projectRoot, 'public', 'assets');

await mkdir(dirname(target), { recursive: true });
await cp(source, target, { recursive: true, force: true });
