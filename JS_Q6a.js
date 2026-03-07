// Simulate async task with a callback
function getUser(callback) {
  setTimeout(() => {
    console.log("Fetched user");
    callback({ id: 1, name: "Alice" });
  }, 1000);
}
function getPosts(user, callback) {
  setTimeout(() => {
    console.log(`Fetched posts for ${user.name}`);
    callback(["Post 1", "Post 2"]);
  }, 1000);
}
// Nested callbacks (callback hell)
getUser(function (user) {
  getPosts(user, function (posts) {
    console.log("Posts:", posts);
  });
});
