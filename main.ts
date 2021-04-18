// this is a test Deno file
// this will be used to test the Deno api and related stuff


console.log("hello from Deno!");

console.log("starting web server");
addEventListener("fetch", (event) => {
  const response = new Response("Hello World!", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
