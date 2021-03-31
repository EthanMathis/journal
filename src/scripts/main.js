console.log("Welcome to the main module")

import { renderEntryList } from "./entries/renderEntries.js";
import { getEntries, postEntry, showPostList, deletePost, 
         updatePost, getSinglePost, showEdit } from "./Data/DataManager.js";
import { resetForm } from "./entries/JournalEntry.js"
import { renderForm } from "./entries/renderForm.js";

const main = document.querySelector(".journal")

export const startJournal = () => {
    renderForm()
    getEntries()
    .then(entriesFromAPI => {
        renderEntryList(entriesFromAPI);
        
    })
}
startJournal();

//  SUBMIT LISTENER
document.getElementById("submit").addEventListener("click", (event) => {
    event.preventDefault()
    // creates the API object to be sent to JSON server
    const newEntryObj = {
        date: document.getElementById("JournalDate").value,
        concept: document.getElementById("Topic").value,
        entry: document.getElementById("JournalEntry").value,
        mood: document.getElementById("mood").value
    };
    postEntry(newEntryObj)
    .then(parsedResponse => {
        showPostList()
        resetForm()
    })
} );

// DELETE LISTENER
main.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.id.startsWith("delete")) {
      const postId = event.target.id.split("__")[1];
      deletePost(postId)
        .then(response => {
          showPostList();
        })
    }
  })

  // EDIT LISTENER
main.addEventListener("click", event => {
  event.preventDefault();
  if (event.target.id.startsWith("edit")) {
    const entryId = event.target.id.split("__")[1];
    getSinglePost(entryId)
    .then(response => {
      showEdit(response)
    })
  }
})

// UPDATE LISTENER
main.addEventListener("click", event => {
  event.preventDefault();
  if (event.target.id.startsWith("update")) {
    const entryId = event.target.id.split("__")[1];
    // collect all details into a new object
    const date = document.querySelector("input[name='JournalDate']").value
    const concept = document.querySelector("input[name='Topic']").value
    const entry = document.querySelector("textarea[name='JournalEntry']").value
    const mood = document.querySelector("#mood").value

    const entryObject = {
      date: date,
      concept: concept,
      entry: entry,
      mood: mood,
      id: entryId
    }
    updatePost(entryObject)
    .then(response => {
      showPostList()
      resetForm()
    })
  }
})

// selects the "date" section from the form
const field = document.querySelector("#JournalDate");
 // tells the date picker to pick a new date
const date = new Date(); 

// Set the date the today
field.value = date.getFullYear().toString() + '-' + (date.getMonth() + 1).toString().padStart(2, 0) + 
    '-' + date.getDate().toString().padStart(2, 0);