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
        shape.attr({ fill: "#f03" })
      break;
      case "star":
        var r = 20 + 80 * Math.random(),
            x = (dim.width - r) * Math.random(),
            y = (dim.height - r) * Math.random(),
            n = 3 + Math.round(11 * Math.random())
        shape = this.paper.star(x, y, r, r / 2, n);
        shape.attr({ fill: "#79DE00" })
      break;
    }
    shape.attr({ opacity: 0.5, "stroke-width": 3, stroke: "#333" })
  }
});

var Demo = new ShapesDemo();