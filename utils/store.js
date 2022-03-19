export function store(key, value) {
    localStorage.setItem(key, value);
}

export function retrieve(key) {
    return localStorage.getItem(key);
}

export function api_token_store_name() {
    return 'api-token';
}