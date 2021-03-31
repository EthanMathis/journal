export const renderForm = () => {
    const formDOM = document.querySelector(".form-container");
    formDOM.innerHTML = entryForm();
}

const entryForm = () => {
    return `<form>
    <fieldset>
        <div class="date">
            <label for="JournalDate">Date of Entry</label><br>
            <input type="date" name="JournalDate" id="JournalDate">
        </div>
        <div class="topicMood">
            <div class="topic">
                <label for="Topic">Topic</label><br>
                <input type="text" name="Topic" id="Topic">
            </div>
            <div class="mood">
                <label for="mood">Mood</label><br>
                <select name="mood" id="mood">
                    <option value="0">How are you feeling?</option>
                    <option value="happy">Happy</option>
                    <option value="fine">Fine</option>
                    <option value="sad">Sad</option>
                </select>
            </div>
        </div>
        <div class="entry">
            <label for="JournalEntry">Journal Entry</label><br>
            <textarea id="JournalEntry" name="JournalEntry"></textarea>
        </div>
        
        <div>
            <button id="submit">Submit</button>
        </div>
    </fieldset>
</form>`
}