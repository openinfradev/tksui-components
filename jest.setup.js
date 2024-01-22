import {TextEncoder, TextDecoder} from 'util';

// When this code is missing, we will be faced error "ReferenceError: TextEncoder is not defined"
Object.assign(global, {TextDecoder, TextEncoder});
