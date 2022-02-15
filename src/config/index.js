const config = {
    vars: {
        backendBase: 'http://127.0.0.1:4523/mock/629501/',
    },
};

import varsAliyun from './vars.aliyun';

if (varsAliyun) config.vars = { ...config.vars, ...varsAliyun };

export default config