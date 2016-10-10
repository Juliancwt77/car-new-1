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

Car.prototype.decelerate = function (dec) {
  this.speed -= dec
}

Car.prototype.stop = function () {
  this.speed = 0
}

module.exports = Car
