// this is a test dneo file
// this will be used to test the deno api and related stuff


console.log("hello from deno!!");

const port = 4500;

console.log("starting web server on port: " + port);
const body = new TextEncoder().encode("Hello World");
for await (const conn of Deno.listen({ port: port })) {
  (async () => {
    for await (const { respondWith } of Deno.serveHttp(conn)) {
      respondWith(new Response(body));
    }
  })();
}
