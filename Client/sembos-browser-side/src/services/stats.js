export default function getStats() {
    return fetch('http://localhost:3000/stats', {
        method: 'GET',
        headers: {
            "Content-Type": 'application/json'
        }
    })
    .then((res) => {
        if (!res.ok) throw new Error("Fetch of stats failed");
        return res.json();
    });
}
