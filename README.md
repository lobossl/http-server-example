[START Server]
node server.js

[TESTING]
- http://localhost/
<code>
{
    "status": 404,
    "username": null,
    "error": true
}
</code>

- http://localhost/test
<code>
{
    "status": 200,
    "username": "/test",
    "error": false
}
</code>
