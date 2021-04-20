//function code for remove item form cart

function removeItem(products, req, res, db) {
    const cart = db.get('cart').value();
	//checking cart for ID
    if (cart.indexOf(parseInt(req.params.id)) !== -1) {
        db.get('cart')
		//removes item from cart
            .pull(parseInt(req.params.id))
                .write();
        res.send({ 'status': 'YAY!', 'text': 'Product has been removed from cart' });
    } else { // nothing to remove
        res.send({ 'status': 'Nope!', 'text': 'Product does not exists in cart' });
    }
}

exports.removeItem = removeItem;