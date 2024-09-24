/*
        Simple API example
        NODEJS natives http
*/
const http = require("node:http")

//database
const db = [
        {name: "lobo", valid: false},
        {name: "test", valid: true}
]

//server
const server = http.createServer((req,res) =>
{
        let getName = null

        const getUrl = req.url.split("/")[1] || null

        db.forEach((e) =>{
                if(getUrl === e.name && e.valid === true){
                        getName = e.name
                }
                else{
                        return null
                }
        })

        res.setHeader("Content-type","application/json")
        res.setHeader("Acces-Control-Allow-Origin","*")

        if(getName){
                res.writeHead(200)

                res.end(JSON.stringify({
                        status: 200,
                        info: getName
                }))
        }
        else if(req.url === "/"){
                res.writeHead(200)

                res.end(JSON.stringify({
                        status: 200,
                        info: db
                }))
        }
        else{
                res.writeHead(404)

                res.end(JSON.stringify({
                        status: 404,
                        info: getName
                }))
        }
})

server.listen(3331)
