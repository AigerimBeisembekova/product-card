const userCardContainer = document.querySelector("#user-card-container");
const loadingMessage = document.querySelector(".loading-message");
const deleteAllBtn = document.getElementById("delete-all-btn");
const getUsersBtn = document.getElementById("get-users-btn");
const deleteUserBtn = document.getElementById("delete-user-btn");
const userCardTemplate = document.getElementById("user-card-template");

// localStorage.removeItem("users");

let users = JSON.parse(localStorage.getItem("users"));

getUsersBtn.addEventListener("click", () => {
  if (users && users.length === 4) {
    alert("Все пользователи уже отображены");
    return;
  }
  loadingMessage.classList.remove("loading-message-hide");
  setTimeout(() => {
    fetch("users.json")
      // fetch("users-error.json") // проверка ошибки
      .then((response) => {
        if (!response.ok) {
          throw new Error("Не удалось загрузить данные");
        }
        return response.json();
      })
      .then((data) => {
        users = data.users;
        renderUsers();
        localStorage.setItem("users", JSON.stringify(users));

        loadingMessage.classList.add("loading-message-hide");
      })
      .catch((error) => {
        console.error(new Error("Ошибка загрузки данных", { cause: error }));
        loadingMessage.textContent = "Ошибка при загрузке данных";
        loadingMessage.classList.remove("loading-message-hide");
      });
  }, 2000);
});

function createUserCard(user) {
  const cardClone = userCardTemplate.content.cloneNode(true);
  cardClone.querySelector(".user-id").textContent = user.id;
  cardClone.querySelector(".user-name").textContent = user.name;
  cardClone.querySelector(".user-surname").textContent = user.surname;
  cardClone.querySelector(".user-email").textContent = user.email;
  cardClone.querySelector(".user-age").textContent = user.age;

  userCardContainer.appendChild(cardClone);
}

function renderUsers() {
  userCardContainer.innerHTML = "";

  users.forEach((user) => {
    createUserCard(user);
  });
}

deleteAllBtn.addEventListener("click", () => {
  users = [];
  userCardContainer.innerHTML = "";
  loadingMessage.classList.add("loading-message-hide");
  localStorage.setItem("users", JSON.stringify(users));
});

deleteUserBtn.addEventListener("click", () => {
  const userId = prompt("Введите ID пользователя, которого хотите удалить");

  if (userId === null) {
    return;
  }

  const filteredUsers = users.filter((user) => {
    return user.id !== Number(userId);
  });

  if (filteredUsers.length === users.length) {
    alert("Пользователь не найден");
    return;
  }
  users = filteredUsers;
  renderUsers();
  localStorage.setItem("users", JSON.stringify(users));
});

if (users) {
  loadingMessage.classList.add("loading-message-hide");

  renderUsers();
} else {
  getUsersBtn.click();
}
