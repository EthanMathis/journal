export const getEntries = () => {
    return fetch("http://localhost:8089/entries")
    .then(response => response.json())

}

export const postEntry = (entry) => {
    return fetch("http://localhost:8089/entries", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
    .then(response => response.json())

}
