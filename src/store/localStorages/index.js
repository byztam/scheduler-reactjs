export const put = (key, value) => {
    localStorage.setItem(key, value);
}

export const get = (key) => {
    return localStorage.getItem(key);
}

export const remove = (key) => {
    localStorage.removeItem(key);
}

export const removeAll = () => {
    localStorage.clear();
}