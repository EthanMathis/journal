console.log("Welcome to the main module")

import { EntryListComponent } from "./JournalEntryList.js";
import { getEntries, postEntry } from "./Data/DataManager.js";
import { apiObj } from "./apiObject.js";

const startJournal = () => {
    getEntries()
    .then(entriesFromAPI => {
        EntryListComponent(entriesFromAPI);
        
    })
}
startJournal();
//  event listener for the button element
document.getElementById("submit").addEventListener("click", (event) => {
    event.preventDefault()
    const newEntryObj = apiObj();
    postEntry(newEntryObj).then(parsedResponse => {
        console.log("trying to test the button", parsedResponse)
    })
} );


// selects the "date" section from the form
var field = document.querySelector("#JournalDate");
 // tells the date picker to pick a new date
var date = new Date(); 

// Set the date the today
field.value = date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString().padStart(2, 0) + 
    '-' + date.getDate().toString().padStart(2, 0);