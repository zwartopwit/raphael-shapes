/*
 * raphael.shapes 0.0.1
 *
 * Copyright (c) 2009 Wout Fierens
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 */


// extending raphael with a polygon function (used with raw SVG polygon data)
Raphael.fn.polygon = function(point_string) {
  var poly_array = ["M"];
  $w(point_string).each(function(point, i) {
    point.split(",").each(function(c) {
      poly_array.push(parseFloat(c));
    });
    if (i == 0) poly_array.push("L");
  });
  poly_array.push("Z");
  return this.path(poly_array.compact());
};

// adding a n-gon element
Raphael.fn.ngon = function(cx, cy, r, n) {
  return this.path(this.ngon_path(r, n)).translate(cx, cy);
}

// adding a star element
Raphael.fn.star = function(cx, cy, r1, r2, n) {
  return this.path(this.star_path(r1, r2, n)).translate(cx, cy);
}

// n-gon path function
Raphael.fn.ngon_path = function(r, n) {
  var points = [], part = 360 / n;
  (n).times(function(i) {
    var a = i * part - 90,
        x = r * Math.cos(a * Math.PI / 180),
        y = r * Math.sin(a * Math.PI / 180);
    points.push((i == 0 ? "M" : "L") + x + "," + y);
  });
  points.push("Z");
  return points.join(" ");
}

// star path function
Raphael.fn.star_path = function(r1, r2, n) {
  var points = [], part = 360 / n;
  (n).times(function(i) {
    var a = i * part + 90,
        x = r1 * Math.cos(a * Math.PI / 180),
        y = r1 * Math.sin(a * Math.PI / 180);
    points.push((i == 0 ? "M" : "L") + x + "," + y);
    a += part / 2;
    x = r2 * Math.cos(a * Math.PI / 180),
    y = r2 * Math.sin(a * Math.PI / 180),
    points.push("L" + x + "," + y);
  });
  points.push("Z");
  return points.join(" ");
}



