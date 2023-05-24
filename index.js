require("dotenv").config();
const app = require("./src/app")
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'secret',       
}));
const port = process.env.PORT || 4000;

app.listen(port);

console.log(`Listen on port ${port}`);