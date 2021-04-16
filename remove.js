// I have divided the code like this because ... the task was to divide the code.
function removeItem(products, req, res, db) {
    const cart = db.get('cart').value();
    if (cart.indexOf(parseInt(req.params.id)) !== -1) {
        db.get('cart')
            .pull(parseInt(req.params.id))
                .write();
        res.send({ 'status': 'YAY!', 'text': 'Product has been removed from cart' });
    } else {
        res.send({ 'status': 'Nope!', 'text': 'Product does not exists in cart' });
    }
}

exports.removeItem = removeItem;