  const add = (cart, req) => {
    cart.push(req.body);
    return JSON.stringify(cart, null, 4);
  };

  const change = (cart, req) => {
    
    const find = cart.contents.find(el => el.id === +req.params.id);
  
    find.quantity += req.body.quantity;
    return JSON.stringify(cart, null, 4);
  };
  const del = (cart, req) => {
    const find = cart.contents.find(el => el.id === +req.params.id);
    cart.contents.splice(cart.contents.indexOf(find.id), 1);
    return JSON.stringify(cart, null, 4);
  };
  
  module.exports = {
    add,
    change,
    del,
  };
  