function Car (color, convertible) {
  this.speed = 0
  this.color = color
  this.convertible = convertible
}

Car.prototype.accelerate = function (num) {
  this.speed += num
}

Car.prototype.setColor = function (newColor) {
  this.color = newColor
}

module.exports = Car
