const models = require("../model");


exports.get_visitors = (req, res) => {
    models.Visitor.findAll() 
    .then((result) => {
        console.log( "result : ", result );
        console.log( "index" );
        res.render("index", { data: result });
    });
}

exports.post_comment = (req,res) => {
    let object = {
        name: req.body.name,
        comment: req.body.comment
    };
    models.Visitor.create( object )
    .then((result) => {
        console.log( result );
        res.send({id: 1})
    })
}

exports.get_visitor = (req,res) => {
    models.Visitor.findOne({
        where: { id: req.query.id}
    }).then((result) => {
        console.log( result );
        res.send( { result : result });
    })
}

exports.patch_comment = (req,res) => {
    let newObj = {
        name : req.body.name,
        comment: req.body.comment
    };
    models.Visitor.update( newObj, { where: { name: '3' } } )
    .then((result) => {
        console.log( result );
        res.send( '수정성공' );
    })
}

exports.delete_comment = (req,res) => {
    models.Visitor.destroy({
        where: { id: req.body.id }
    }).then((result) => {
        console.log( result );
        res.send( "삭제 성공" );
    })
}