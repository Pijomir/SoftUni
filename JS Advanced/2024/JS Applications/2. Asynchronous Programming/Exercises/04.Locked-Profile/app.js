function lockedProfile() {
    const mainRefElement = document.getElementById('main');

    async function getProfilesInfo() {
        try {
            const url = 'http://localhost:3030/jsonstore/advanced/profiles';
            const response = await fetch(url);
            const data = await response.json();
            mainRefElement.innerHTML = '';
            let count = 1;
            Object.entries(data).forEach(el => {

                const divElement = document.createElement('div');
                divElement.className = 'profile';
                divElement.innerHTML = `<img src="./iconProfile2.png" class="userIcon" />
                <label>Lock</label>
                <input type="radio" name="user${count}Locked" value="lock" checked>
                <label>Unlock</label>
                <input type="radio" name="user${count}Locked" value="unlock"><br>
                <hr>
                <label>Username</label>
                <input type="text" name="user${count}Username" value=${el[1].username} disabled readonly />
                <div id="user${count}HiddenFields">
                   <hr>
                   <label>Email:</label>
                   <input type="email" name="user${count}Email" value="${el[1].email}" disabled readonly />
                   <label>Age:</label>
                   <input type="email" name="user${count}Age" value="${el[1].age}" disabled readonly />
                </div>
                <button>Show more</button>`;

                mainRefElement.appendChild(divElement);
                count++;
            });

            let allUsers = document.querySelectorAll(".profile");
            allUsers.forEach(el => el.children[9].style.display = "none");
            const allBtns = document.querySelectorAll("button");
            allBtns.forEach(el => el.addEventListener("click", onClickBtn));
        } catch {
            throw 'Error';
        }

        function onClickBtn(event) {
            let profileRef = event.target.parentElement;
            let radioLock = profileRef.children[2];
            let usernameRef = profileRef.children[9];
            if (!radioLock.checked) {
                if (event.target.textContent == "Show more") {
                    usernameRef.style.display = "block";
                    changeText(event.target);
                } else {
                    usernameRef.style.display = "none";
                    changeText(event.target);
                }
            }
        }
     
        function changeText(button) {
            button.textContent = button.textContent == "Show more" ? "Hide it" : "Show more";
        }
    }

    getProfilesInfo()
}