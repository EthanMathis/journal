import { startJournal } from "../main.js"
import { entryList } from "../entryList.js"

export const getEntries = () => {
    return fetch("http://localhost:8089/entries")
    .then(response => response.json())

}

export const postEntry = (entry) => {
    return fetch("http://localhost:8089/entries", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
    .then(response => response.json())
    
}

export const deletePost = (postId) => {
    return fetch(`http://localhost:8089/entries/${postId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
  
    })
        .then(response => response.json())
        .then(getEntries)
  }

  export const showPostList = () => {
      const listElement = document.querySelector(".entry-log");
      getEntries().then((allPosts) => {
          listElement.innerHTML = entryList(allPosts.reverse())
      })
  }