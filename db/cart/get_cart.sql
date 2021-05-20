SELECT cart_id from carts
WHERE user_id = $1 AND active = TRUE;