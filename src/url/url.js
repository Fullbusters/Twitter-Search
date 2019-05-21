
export function fetchGet(search ,query) {
    return fetch('http://localhost:8000' + search + query );
}