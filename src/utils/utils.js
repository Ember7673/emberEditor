const utils = {
  isEmpty: function (value) {
    if (value == null) {
      return true;
    }
    for (var key in value) {
      return false;
    }
    return true;
  }
}

export default utils;