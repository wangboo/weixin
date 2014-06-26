// Generated by CoffeeScript 1.7.1
var Route, route;

Route = (function() {
  function Route() {
    var self;
    self = this;
    ['text', 'image', 'voice', 'video', 'location', 'link', 'event'].forEach(function(type) {
      self["" + type + "_cache"] = {};
      return self[type] = function(name, fn) {
        return self["" + type + "_cache"][name] = fn;
      };
    });
  }

  return Route;

})();

route = new Route();

require('./route')(route);

console.log(route);

module.exports = function(req, res, next) {
  var data, fn;
  data = req.weixin;
  console.log(route["" + data.MsgType + "_cache"]);
  console.log(route["" + data.MsgType + "_cache"][data.Content]);
  console.log(typeof data.Content);
  fn = route["" + data.MsgType + "_cache"][data.Content];
  if (fn) {
    return fn(data, req, res, next);
  } else {
    return console.log("can`t find route to process, MsgType=" + data.MsgType + ", Content=" + data.Content + ", route=" + route);
  }
};