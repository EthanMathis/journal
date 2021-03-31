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
        <button id="edit__${entry.id}">Edit</button>
        </section><hr>
    `
}

export const resetForm = () => {
    document.querySelector("input[name='journalDate']").value="";
    document.querySelector("input[name='Topic']").value="";
    document.querySelector("textarea[name='journalEntry']").value="";
    document.querySelector("#mood").value=0;
}