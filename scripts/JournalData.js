const journal = [
    {
        id: 1,
        date: "02/23/2021",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Fine"
    },
    {
        id: 2,
        date: "02/26/2021",
        concept: "Complex Javascript",
        entry: "I tried learn how to structure my .js files and organize my functions. It hurt my brain.",
        mood: "Sad"
    }
] 

export const getJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}