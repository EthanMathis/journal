// Purpose: To render a list of entry components 

import { JournalEntryComponent } from "./JournalEntry.js"


export const EntryListComponent = (arrayOfEntries) => {
    // Use the journal entry data from the data module component
    let entryHTML = "<h3>List of Entries</h3>";
    const entryLog = document.querySelector(".entry-log")
    for (const entry of arrayOfEntries) {
       entryHTML += JournalEntryComponent(entry);

    };
    entryLog.innerHTML += entryHTML;
};