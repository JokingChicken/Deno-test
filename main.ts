// this is a test Deno file
// this will be used to test the Deno api and related stuff


console.log("hello from Deno!");

const serverstart = new Date().toLocaleString();
var visitcount = 0;
var lastvisit = "never"

console.log("starting web server");
addEventListener("fetch", (event) => {
	
	visitcount++;
	
	const response = new Response(
		`Hello World! 
		this page has been visited ${visitcount} times!!
		
		last visit was at: ${lastvisit}
		server started at: ${serverstart}`, {
		headers: { "content-type": "text/plain" },
	});
	
	lastvisit = new Date().toLocaleString();
	event.respondWith(response);
});
