export const loginForm = () => {
    return `
    <div class="loginForm">
        <h3>Login</h3>
        <div>
            <input value=""
            name="name"
            class="loginForm__input"
            type="text"
            placeholder="User Name" />
        </div>
        <div>
            <input value=""
            name="email"
            class="loginForm__input"
            type="text"
            placeholder="name@place.com" />
        </div>

    <button id="login__submit">Login</button>
    <button id="login__cancel">Cancel</button>
    </div>
    `
}