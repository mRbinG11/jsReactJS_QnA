// Same async task using Promises
function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetched user");
      resolve({ id: 1, name: "Alice" });
    }, 1000);
  });
}
function getPosts(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Fetched posts for ${user.name}`);
      resolve(["Post 1", "Post 2"]);
    }, 1000);
  });
}

// Promise chaining
getUser()
  .then((user) => getPosts(user))
  .then((posts) => {
    console.log("Posts:", posts);
  })
  .catch((error) => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.info("Promise Completed!");
  });
