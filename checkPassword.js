"use strict"

function ask(question, answer, ok, fail) {
	var result = prompt(question, "");
	if (result.toLowerCase() == answer.toLowerCase()) ok();
	else fail();
}

var user = {
	login: "Vasiliy",
	password: "12345",

	loginOk: function() {
		console.log( this.login + " entered website" );
	},

	loginFail: function() {
		console.log( this.login + ": login error" );
	},

	checkPassword: function() {
		var self = this;
		ask("What is your password?", this.password,
			function() {
				self.loginOk();
			},
			function() {
				self.loginFail();
			}
		);
	}
};

var vasya = user;
user = null;
vasya.checkPassword();