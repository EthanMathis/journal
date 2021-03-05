/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */

export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
        <h4>Topic: ${entry.concept}</h4>
        <p>${entry.entry}</p>
        <p>Date of Entry: ${entry.date}</p>
        <p>${entry.mood}
        </section>
    `
}