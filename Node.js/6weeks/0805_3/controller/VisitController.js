const model = require("../model/Visitor");

exports.get_visitors = (req, res) => {
    model.get_visitors(function(result){
        console.log( "result : ", result );
        console.log( 'index' );
        res.render("index", { data: result });
    })
}

exports.post_insert = (req, res) => {
    console.log( req.body );

    model.insert(req.body.name, req.body.comment, function(result) {
        res.send( {id: result} );
    });
}