// Purpose: To render a list of entry components 

import { getJournalEntries } from "./JournalData.js"
import { JournalEntryComponent } from "./JournalEntry.js"


export const EntryListComponent = () => {
    // Use the journal entry data from the data module component
    let entryHTML = "<h3>List of Entries</h3>";
    const entryLog = document.querySelector(".entry-log")
    const entries = getJournalEntries();
    for (const entry of entries) {
       entryHTML += JournalEntryComponent(entry);

    };
    entryLog.innerHTML += entryHTML;
};