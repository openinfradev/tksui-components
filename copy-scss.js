
import {copy} from 'fs-extra';
copy('src/main/react/style', 'lib/styles')
    .then(() => console.log('copied'))
    .catch(err => console.error(err))
