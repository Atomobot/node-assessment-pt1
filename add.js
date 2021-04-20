//code for adding item to cart
function addItem(products, req, res, db) {
	//this checks that the product exists
    if (products.find(x => x.id === parseInt(req.params.id)) !== undefined) {
		//get cart
        const cart = db.get('cart').value();
		//checking that the product is not in cart
        if (cart.indexOf(parseInt(req.params.id)) === -1) {
            db.get('cart')
                .push(parseInt(req.params.id))
                .write();
            res.send({ 'status': 'YAY!', 'text': 'Product has been added to cart' });
        } else { //failure if product is in cart
            res.send({ 'status': 'NOPE!', 'text': 'Product already exists in cart' });
        }
    } else { //failure if no product exists
        res.send({ 'status': 'DERP!', 'text': 'Product with this ID does not exist' });
    }
}

exports.addItem = addItem;