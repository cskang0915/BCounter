const express = require("express")
const database = require("../database")
const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
	const bearerHeader = req.headers["authorization"]

	if(typeof bearerHeader !== 'undefined') {
		const bearer = bearerHeader.split(" ")
		const bearerToken = bearer[1]
	}
}