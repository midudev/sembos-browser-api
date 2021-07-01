export default function getStats() {
    return fetch('http://localhost:3000/stats')
    .then(res => res.json());
}
