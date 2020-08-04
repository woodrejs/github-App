import "./scss/index.scss";

window.onload = function () {
  /*
  ////VARIABLES
  const searchBtn = document.querySelector("#searchBtn");
  const searchZone = document.querySelector("#searchZone");
  const resultList = document.querySelector("#resultList");
  const resultcontainer = document.querySelector("#resultcontainer");
  ////CHECKBOXES
  const repositories = document.querySelector("#repositories");
  const users = document.querySelector("#users");
  const topics = document.querySelector("#topics");
  const issues = document.querySelector("#issues");
  ////SHOW INFO (NO RESULTS)
  const showInfo = () => {
    const info = document.createElement("span");
    info.innerHTML = "No results. Try again.";
    info.classList.add("info");
    resultcontainer.appendChild(info);
  };
  ////RESULT OBJECT
  function ResultItem(
    obj,
    link,
    avatarLink = null,
    text = null,
    secoundText = null
  ) {
    this.resultListItem = document.createElement("li");
    this.resultLink = document.createElement("a");
    this.resultAvatar = document.createElement("img");
    this.resultText = document.createElement("span");
    this.resultSecoundText = document.createElement("span");
    this.link = link;
    this.avatarLink = avatarLink;
    this.text = text;
    this.secoundText = secoundText;

    this.create = () => {
      obj.appendChild(this.resultListItem);
      this.resultListItem.appendChild(this.resultLink);
      this.resultLink.setAttribute("href", this.link);
    };
    this.setAvatar = () => {
      this.resultAvatar.setAttribute("src", this.avatarLink);
      this.resultLink.appendChild(this.resultAvatar);
    };
    this.setText = () => {
      this.resultText.innerHTML = this.text;
      this.resultLink.appendChild(this.resultText);
    };
    this.setSecoundText = () => {
      this.resultSecoundText.innerHTML += this.secoundText;
      this.resultLink.appendChild(this.resultSecoundText);
    };
  }
  ////GET DATA FROM API
  const headers = { Accept: "application/vnd.github.mercy-preview+json" };
  const conectWithAPI = (callback) => {
    const searchPhrase = searchZone.value;
    const baseURL = `https://api.github.com/search/${API}?q=`;

    fetch(`${baseURL}${searchPhrase}`, { headers: headers })
      .then((resp) => resp.json())
      .then((resp) => (resp.total_count == 0 ? showInfo() : callback(resp)))
      .catch((err) => console.log(err));
  };
  ////SEARCH ACTION
  let API;
  const search = () => {
    if (repositories.checked) {
      API = "repositories";
      resultList.innerHTML = "";
      conectWithAPI((resp) => {
        resp.items.forEach(({ html_url, owner, login }) => {
          const resultItem = new ResultItem(
            resultList,
            html_url,
            owner.avatar_url,
            owner.login
          );
          resultItem.create();
          resultItem.setAvatar();
          resultItem.setText();
        });
      });
    } else if (users.checked) {
      API = "users";
      resultList.innerHTML = "";
      conectWithAPI((resp) => {
        resp.items.forEach(({ html_url, avatar_url, login }) => {
          const resultItem = new ResultItem(
            resultList,
            html_url,
            avatar_url,
            login
          );
          resultItem.create();
          resultItem.setAvatar();
          resultItem.setText();
        });
      });
    } else if (topics.checked) {
      API = "topics";
      resultList.innerHTML = "";
      conectWithAPI((resp) => {
        resp.items.forEach(({ url, name, created_at }) => {
          const resultItem = new ResultItem(
            resultList,
            url,
            null,
            name,
            created_at
          );
          resultItem.create();
          resultItem.setText();
          resultItem.setSecoundText();
        });
      });
    } else if (issues.checked) {
      API = "issues";
      resultList.innerHTML = "";
      conectWithAPI((resp) => {
        resp.items.forEach(({ html_url, user, title }) => {
          const resultItem = new ResultItem(
            resultList,
            html_url,
            user.avatar_url,
            title
          );
          resultItem.create();
          resultItem.setAvatar();
          resultItem.setText();
        });
      });
    }
  };
  searchBtn.addEventListener("click", search);
  searchZone.addEventListener("keyup", (e) =>
    e.keyCode == 13 ? search() : false
  );
  ////RESULT CONTAINER SLIDE DOWN
  searchBtn.addEventListener("click", () => {
    resultcontainer.style.transform = "scale(1,1)";
  });
  searchZone.addEventListener("keyup", (e) =>
    e.keyCode == 13 ? (resultcontainer.style.transform = "scale(1,1)") : false
  );
  */
};
