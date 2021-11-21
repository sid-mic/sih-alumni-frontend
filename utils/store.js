export function store(key, value) {
    sessionStorage.setItem(key, value);
}

export function retrieve(key) {
    return sessionStorage.getItem(key);
}

export function api_token_store_name() {
    return 'api-token';
}