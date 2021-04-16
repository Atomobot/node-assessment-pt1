// I have divided the code like this because ... the task was to divide the code and
// this feels like the least unnecessary way to split the code
function addItem(products, req, res, db) {
    if (products.find(x => x.id === parseInt(req.params.id)) !== undefined) {
        const cart = db.get('cart').value();
        if (cart.indexOf(parseInt(req.params.id)) === -1) {
            db.get('cart')
                .push(parseInt(req.params.id))
                .write();
            res.send({ 'status': 'success', 'text': 'Product has been added to cart' });
        } else {
            res.send({ 'status': 'error', 'text': 'Product already exists in cart' });
        }
    } else {
        res.send({ 'status': 'error', 'text': 'Product with this ID does not exist' });
    }
}

exports.addItem = addItem;