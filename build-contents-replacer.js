/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';
import glob from 'glob';

const replaceContents = (contents, searchValue, replaceValue) => {
    return contents.replace(new RegExp(searchValue, 'g'), replaceValue);
};

const replaceInFile = async (filePath) => {
    const contents = await fs.promises.readFile(filePath, 'utf8');
    const removedTestIdContents = replaceContents(contents, ',?\\s*["\']data-testid["\']\\s*:\\s*["\']([^"\']*)["\']', '');
    // eslint-disable-next-line max-len
    const updatedContents = replaceContents(removedTestIdContents, '~style/designToken/ThemeToken.module.scss', 'tksui-components/lib/styles/ThemeToken.module.css');
    await fs.promises.writeFile(filePath, updatedContents, 'utf8');
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
            await replaceInFile(file);
        }
        console.log('ThemToken path replacement complete.');
    } catch (err) {
        console.error('Error finding files:', err);
    }
};

replaceBuildContents();
