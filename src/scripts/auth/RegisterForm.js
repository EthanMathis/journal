export const registerForm = () => {
    return `
    <div class="registerForm">
        <h3>Login</h3>
        <div>
            <input value=""
            name="name"
            class="registerForm__input"
            type="text"
            placeholder="User Name" />
        </div>
        <div>
            <input value=""
            name="registerEmail"
            class="registerForm__input"
            type="text"
            placeholder="name@place.com" />
        </div>

    <button id="register__submit">Login</button>
    <button id="register__cancel">Cancel</button>
    </div>
    `
}