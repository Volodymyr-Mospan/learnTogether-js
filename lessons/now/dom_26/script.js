const BASE_URL = "https://68544e946a6ef0ed662eba96.mockapi.io/users/id";

fetch(BASE_URL)
  .then((resp) => resp.json)
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
