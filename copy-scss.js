
import {copy} from 'fs-extra';

copy('src/styles', 'lib/styles')
    .then(() => console.log('copied'))
    .catch((err) => console.error(err));

