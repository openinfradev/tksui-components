/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';
import {glob} from 'glob';

const replaceRules = [
    {
        before: '(,\\s*["\']data-testid["\']\\s*:\\s*["\'][^"\']*["\'])|(\\s*["\']data-testid["\']\\s*:\\s*["\'][^"\']*["\']\\s*,?)',
        after: '',
    },
    {
        before: '~style/designToken/ThemeToken.module.scss',
        after: 'tksui-components/lib/styles/ThemeToken.module.css',
    },
];
const replaceContent = async (filePath) => {

    let fileContent = await fs.promises.readFile(filePath, 'utf8');

    replaceRules.forEach((rule) => {
        const regex = new RegExp(rule.before, 'g');
        fileContent = fileContent.replace(regex, rule.after);
    });

    await fs.promises.writeFile(filePath, fileContent, 'utf8');
};


const replaceBuildContents = async () => {

    const absolutePath = path.resolve('lib/esm/src/components/**/T*.js');
    const ignorePattern = '**/*.interface.js';

    try {

        const files = glob.sync(absolutePath, {nodir: true, ignore: ignorePattern});
        console.log('Files found:', files);

        // eslint-disable-next-line no-restricted-syntax
        for (const file of files) {
            // eslint-disable-next-line no-await-in-loop
            await replaceContent(file);
        }
        console.log('ThemToken path replacement complete.');
    } catch (err) {
        console.error('Error finding files:', err);
    }
};

replaceBuildContents().then(() => { /* Nothing to do */ });
