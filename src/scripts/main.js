console.log("Welcome to the main module")

import { EntryListComponent } from "./JournalEntryList.js";
import { getEntries } from "./Data/DataManager.js";

const startJournal = () => {
    getEntries()
    .then(entriesFromAPI => {
        EntryListComponent(entriesFromAPI);
        
    })
}
startJournal();