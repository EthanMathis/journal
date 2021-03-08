export const apiObj = () => {
    const topic = document.getElementById("Topic").value
    const JournalDate = document.getElementById("JournalDate").value
    const entry = document.getElementById("JournalEntry").value
    const mood = document.getElementById("mood").value
    return {
        date: JournalDate,
        concept: topic,
        entry: entry,
        mood: mood
    }
}