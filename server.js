const { createServer } = require("http");
// 引入的http没有createServer项 先换到 express 启动
// const express = require("express");
const { parse } = require("url");
const next = require("next");

// 是否以开发模式启动Next
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = 4002;

console.log("app", app);

app.prepare().then(() => {
	createServer((req, res) => {
		// Be sure to pass `true` as the second argument to `url.parse`.
		// This tells it to parse the query portion of the URL.
		const parsedUrl = parse(req.url, true);
		const { pathname, query } = parsedUrl;

		// if (pathname === "/a") {
		// 	app.render(req, res, "/a", query);
		// } else if (pathname === "/b") {
		// 	app.render(req, res, "/b", query);
		// } else {
		// 	handle(req, res, parsedUrl);
		// }

		handle(req, res, parsedUrl);
	}).listen(port, (err) => {
		if (err) throw err;
		console.log(`> Ready on http://localhost:${port}`);
	});
});
