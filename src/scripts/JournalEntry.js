/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */

export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
        <h4>Topic: ${entry.concept}</h4>
        <p>Date of Entry: ${entry.date}</p>
        <p>${entry.entry}</p>
        <p>${entry.mood}</p>
        <button id="delete__${entry.id}">Delete</button>
        </section><hr>
    `
}