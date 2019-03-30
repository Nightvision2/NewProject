function getJSON(filePath, callback) {
  fetch(filePath)
    .then(file => file.json())
    .then(json => {
      if (callback && typeof callback === "function") {
        callback(json);
      }
    })
    .catch(error => console.log(error));
}

function renderTodoCards() {
  document.getElementsById("js-list");
}
