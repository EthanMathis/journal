import { JournalEntryComponent } from "./JournalEntry.js"

export const entryList = (allPosts) => {
	let postHTML = "";
		//Loop over the array of posts and for each one, invoke the Post component which returns HTML representation
		for (const postObject of allPosts) {
			//what is a postObject?
			postHTML += JournalEntryComponent(postObject)
		}
		return postHTML;
	
}