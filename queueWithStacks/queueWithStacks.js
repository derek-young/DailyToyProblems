var Stack = function() {
  var _storage = [];

  this.push = function(num) {
    _storage[_storage.length] = num;
  }

  this.pop = function() {
    var num = _storage.splice([_storage.length - 1], 1)[0];
    return num;
  }

  this.size = function() {
    return _storage.length;
  }
}

var Queue = function() {
  var inbox = new Stack();
  var outbox = new Stack();

  this.enqueue = function(num) {
    inbox.push(num);
  }

  this.dequeue = function() {
    if (outbox.size() === 0) {
      while (inbox.size()) {
        outbox.push(inbox.pop());
      }
    }

    return outbox.pop();
  }
}
