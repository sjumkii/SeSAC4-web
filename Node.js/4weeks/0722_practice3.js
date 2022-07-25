const express = require( 'express' );
const app = express();
const port = 8080;

app.set( 'view engine', 'ejs' );
app.use( express.static( 'public2' ));

app.get('/', (req, res) => {
    res.render("trendy");
});
app.listen(port, () => {
    console.log( 'Server port : ', port);
});