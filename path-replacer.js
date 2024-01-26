/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';
import {glob as globModule} from 'glob';

const replaceInFile = async (filePath, searchValue, replaceValue) => {
    const contents = await fs.promises.readFile(filePath, 'utf8');
    const updatedContents = contents.replace(new RegExp(searchValue, 'g'), replaceValue);
    await fs.promises.writeFile(filePath, updatedContents, 'utf8');
};

const replacePaths = async () => {
    const absolutePath = path.resolve('lib/esm/src/components/**/T*.js');
    const ignorePattern = '**/*.interface.js';

    try {

        const files = globModule.sync(absolutePath, {nodir: true, ignore: ignorePattern});
        console.log('Files found:', files);

        // eslint-disable-next-line no-restricted-syntax
        for (const file of files) {
            // eslint-disable-next-line no-await-in-loop
            await replaceInFile(file, '~style/designToken/ThemeToken.module.scss', 'tksui-components/lib/styles/ThemeToken.module.css');
        }
        console.log('ThemToken path replacement complete.');
    } catch (err) {
        console.error('Error finding files:', err);
    }
};

replacePaths();
