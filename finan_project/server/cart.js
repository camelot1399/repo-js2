  const add = (cart, req) => {
    cart.push(req.body);
    return JSON.stringify(cart, null, 4);
  };

  const change = (cart, req) => {
    const find = cart.find(el => el.id === +req.params.id);
    find.quantity += req.body.quantity;
    return JSON.stringify(cart, null, 4);
  };
  const remove = (cart, req) => {
    const find = cart.find(el => el.id === +req.params.id);
    cart.splice(cart.indexOf(find), 1);
    return JSON.stringify(cart, null, 4);
  };
  
  module.exports = {
    add,
    change,
    remove,
  };
  