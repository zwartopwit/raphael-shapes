var ShapesDemo = Class.create({
  initialize: function() {
    // set paper
    var dim = document.viewport.getDimensions();
    this.paper = Raphael($("paper"), dim.width, dim.height);
    // set events
    window.observe("resize", (function() {
      this.resize();
    }).bind(this));
  },
  resize: function() {
    var dim = document.viewport.getDimensions();
    this.paper.setSize(dim.width, dim.height);
  },
  addShape: function(shape) {
    var dim = document.viewport.getDimensions(),
        shape
    switch(shape) {
      case "ngon":
        var r = 20 + 80 * Math.random(),
            x = (dim.width - r) * Math.random(),
            y = (dim.height - r) * Math.random(),
            n = 3 + Math.round(11 * Math.random())
        shape = this.paper.ngon(x, y, r, n);
        shape.attr({ fill: "#f03" });
      break;
      case "star":
        var r = 20 + 80 * Math.random(),
            x = (dim.width - r) * Math.random(),
            y = (dim.height - r) * Math.random(),
            n = 3 + Math.round(11 * Math.random())
        shape = this.paper.star(x, y, r, r / 2, n);
        shape.attr({ fill: "#79DE00" });
      break;
      case "polygon":
        var raw_poly = "47.013,30.086 0.087,45.24 49.609,26.648 50.346,17.421 63.277,21.084 110.657,0.228 69.127,21.084 97.674,17.421 59.075,26.648 29.338,45.24",
            x = (dim.width) * Math.random(),
            y = (dim.height) * Math.random(),
            s = 3 * Math.random()
        shape = this.paper.polygon(x, y, raw_poly);
        shape.attr({ fill: "#00C7DC" }).scale(s, s).rotate(360 * Math.random());
      break;
    }
    shape.attr({ opacity: 0.5, "stroke-width": 3, stroke: "#333" })
  }
});

var Demo = new ShapesDemo();