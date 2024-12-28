import { html, page, render } from '../lib.js';
import { createSubmitHandler, showNotificationError, updateNav } from '../util.js';
import { register } from '../data/users.js';

const registerTemplate = (onRegister) => html`
<section id="register">
    <div class="form">
        <h2>Register</h2>
        <form class="register-form" @submit=${onRegister}>
            <input
                type="text"
                name="email"
                id="register-email"
                placeholder="email"
            />
            <input
                type="password"
                name="password"
                id="register-password"
                placeholder="password"
            />
                <input
                type="password"
                name="re-password"
                id="repeat-password"
                placeholder="repeat password"
            />
            <button type="submit">register</button>
            <p class="message">Already registered? <a href="/login">Login</a></p>
        </form>
    </div>
</section>`;

export function showRegister(ctx) {
    render(registerTemplate(createSubmitHandler(onRegister)));  
}

async function onRegister(data, form) {
    if (!data['email'] || !data['password']) {
        // return alert('All fields are required!');
        showNotificationError('All fields are required!');
        return;
    }

    if (data['password'] != data['re-password']) {
        showNotificationError('Passwords don\'t match');
        // return alert('Passwords don\'t match');
        return
    }

    await register(data['email'], data['password']);
    updateNav();
    page.redirect('/');
}