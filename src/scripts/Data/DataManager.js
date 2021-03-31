import { entryEdit } from "../entries/entryEdit.js"
import { renderEntryList } from "../entries/renderEntries.js"


export const getEntries = () => {
    return fetch("http://localhost:8088/entries")
    .then(response => response.json())

}

export const postEntry = (entry) => {
    return fetch("http://localhost:8088/entries", {
        method: "POST", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
    .then(response => response.json())
    
}

export const deletePost = (postId) => {
    return fetch(`http://localhost:8088/entries/${postId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
  
    })
        .then(response => response.json())
        .then(getEntries)
  }

  export const updatePost = (postObj) => {
    return fetch(`http://localhost:8088/entries/${postObj.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postObj)
  
    })
        .then(response => response.json())
        .then(getEntries)
  }

  export const getSinglePost = (postId) => {
    return fetch(`http://localhost:8088/entries/${postId}`)
      .then(response => response.json())
  }

  export const showEdit = (entryObj) => {
      const entryElement = document.querySelector(".form-container")
      entryElement.innerHTML = entryEdit(entryObj)
  }

  export const showPostList = () => {
      getEntries().then((allPosts) => renderEntryList(allPosts))
  }
