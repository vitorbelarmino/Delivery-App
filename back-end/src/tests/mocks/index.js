const userMock = {
	"message": "created",
	"data": {
		"name": "vitor belarmino",
		"email": "vitor.belarmino@hotmail.com",
		"role": "customer",
		"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Im5hbWUiOiJ2aXRvciBiZWxhcm1pbm8iLCJlbWFpbCI6InZpdG9yLmJlbGFybWlub0Bob3RtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzNDU2Iiwicm9sZSI6ImN1c3RvbWVyIn0sImlhdCI6MTY2NDIyOTY0OCwiZXhwIjoxNjY0ODM0NDQ4fQ.3vUbhF-CGAQJba3oaYe2H3NSKJuj078zv1bLq4s1BuI"
	}
}

const returnLoginMock = {
	"name": "vitor belarmino",
	"email": "vitor.belarmino@hotmail.com",
	"role": "customer",
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Im5hbWUiOiJ2aXRvciBiZWxhcm1pbm8iLCJlbWFpbCI6InZpdG9yLmJlbGFybWlub0Bob3RtYWlsLmNvbSIsInJvbGUiOiJjdXN0b21lciJ9LCJpYXQiOjE2NjQyMzgyMDgsImV4cCI6MTY2NDg0MzAwOH0.cy3QE1fgkeoNzAA0hEGV-2IA0Vpa-TdRRukatMmNy4k"
}

const findOneLoginMock = {
  dataValues: {
		id: 4,
		name: 'vitor belarmino',
		email: 'vitor.belarmino@hotmail.com',
		password: 'e10adc3949ba59abbe56e057f20f883e',
		role: 'customer'
	}
}

module.exports = {
  userMock,
  returnLoginMock,
  findOneLoginMock
};