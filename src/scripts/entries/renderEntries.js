// Purpose: To render a list of entry components 

import { JournalEntryComponent } from "./JournalEntry.js"


export const renderEntryList = (arrayOfEntries) => {
    // Use the journal entry data from the data module
    let entryHTML = "<h3>List of Entries</h3><hr>";
    const entryLog = document.querySelector(".entry-log")
    for (const entry of arrayOfEntries) {
       entryHTML += JournalEntryComponent(entry);

    };
    entryLog.innerHTML += entryHTML;
};