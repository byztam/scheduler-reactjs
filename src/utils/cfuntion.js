const stringFormat = (str, params) => {
    if(params.length > 0) {
        for (let i = 0; i < params.length; i++) {
            str = str.replace('{' + i + '}', params[i]);
        }
    }
    return str;
};

export {
    stringFormat
};