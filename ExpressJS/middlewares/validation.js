function checkPostFields(req, res, next) {
    const { title, content, keywords } = req.body 

    if(title && content && keywords) {
        next();
    } else {
        res.status(400).json({message: 'Missing required fields'})
    };
};

function checkUserField (req, res, next) {
    const {name,lastname} = req.body;

    if(name && lastname) {
        next();
    } else {
        res.status(400).json({message: 'Missing required fields'})
    };

}

function checkIsInteger(req, res, next) {
    const {id} = req.params;

    if(Number.isInteger(parseInt(id))) {
        next();
    } else {
        res.status(400).json({message: 'Invalid id value'})
    }

}

module.exports = {
    checkPostFields,
    checkIsInteger,
    checkUserField,
}