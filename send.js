const nodemailer = require('nodemailer')

const args = process.argv.slice(2)

const smtpTransport = nodemailer.createTransport({
	host: 'localhost',
	port: 25,
	greetingTimeout: 30000,
	tls: { rejectUnauthorized: false },
	debug: true
})

const mailOptions = {
	from: `${args[0]} <hindo@emarters.com>`,
	to: args[1],
	subject: args[2],
	text: 'Hello world?'
}

smtpTransport.sendMail(mailOptions, (error, response) => {
	if (error) {
		console.log(`Error:${error.message}`)
	} else if (response) {
		let ansr = response.response.split(':')[0]
		console.log(`Sended:${ansr}`)
	}
})
