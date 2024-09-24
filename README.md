http://localhost/

```
{
    "status": 404,
    "username": null,
    "error": true
}
```

http://localhost/test

```
{
    "status": 200,
    "username": "/test",
    "error": false
}
```

```
let port = 80
let http = require("node:http")

//example database
let db = [
        {username: "/test"}
]

let server = http.createServer((req,res) =>
{
        if(req.method === "GET"){
                let username = null

                db.forEach((e) =>{
                        if(req.url === e.username){
                                username = e.username
                        }
                })

                res.setHeader("Content-type","application/json")
                res.setHeader("Acces-Control-Allow-Origin","*")

                if(username !== null){
                        res.writeHead(200)

                        res.end(JSON.stringify({
                                status: 200,
                                username: username,
                                error: false
                        }))
                }
                else{
                        res.writeHead(404)

                        res.end(JSON.stringify({
                                status: 404,
                                username: username,
                                error: true
                        }))
                }
        }
        else{
                res.end(`error`)
        }
})

server.listen(port,() =>{
        console.log(`[DEBUG] Starting http server on port ${port}.`)
})
```
