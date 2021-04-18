// this is a test Deno file
// this will be used to test the Deno api and related stuff


console.log("hello from Deno!");

var count = 0;

console.log("starting web server");
addEventListener("fetch", (event) => {
	
	count++;
	
	const response = new Response("Hello World! this page has been visited " + count + " times!!", {
		headers: { "content-type": "text/plain" },
	});
	event.respondWith(response);
});
