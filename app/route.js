// Generated by CoffeeScript 1.7.1
module.exports = function(route) {
  return route.text('hello', function(data, req, res, next) {
    console.log('hello text event');
    return res.reply('hello world');
  });
};