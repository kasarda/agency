if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window
        for (let i = 0; i < this.length; i++)
            callback.call(thisArg, this[i], i, this)
    }
}

if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {

    if (typeof start !== 'number')
      start = 0

    if (start + search.length > this.length)
      return false

    else
      return this.indexOf(search, start) !== -1

  }
}