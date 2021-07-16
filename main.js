module.exports = function () {
  return function (req, res, next) {
    // getAlias would get an object {alias:"alias/path",source:"/real/path"} or null
    const [alias, getAlias] = req.url;
    if (alias) {
      req.url = alias.source;
    }
    next();
  };
};
