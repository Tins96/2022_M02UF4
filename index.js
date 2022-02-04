#!/usr/bin/node

let http = require("http");

let mongo_client = require("mongodb").MongoClient;

let url = "mongdb://localhost/";

console.log("Iniciando script mongo-http");

mongo_client.connect(url, function(error, conn){

	console.log("Dentro de MongoDB");

	if (error){
		console.log("ERROR!!!");
		return;
	}

	let db = conn.db("tffhd2");

	let characters = db.collection("characters").find();

	console.log(characers);

});

/*

http.createServer(function(req, res){
	res.writeHead(200);

	let saludo =  "<h1>ola k ase</h1>";

	res.end(saludo);

}).listen(1095);

*/
