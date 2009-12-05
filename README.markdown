# Raphaël Shapes plugin - 0.0.1

### What is it?
An extension to the Raphael Vector Library.<br/>
Currently it provides the following shapes:<br/>
- polygon (throw in raw SVG polygon string)<br/>
- n-gon<br/>
- star

### Usage

Basic usage:

    // Creates canvas 800 × 500 at 10, 10
    var paper = Raphael(10, 10, 800, 500);

Add a hexagon

    // Creates an n-gon with radius 100 and 6 sides at 50, 60
    var ngon = paper.ngon(50, 60, 100, 6)

Update an n-gon

    // Updates the n-gon to have 5 edges
    ngon.attr("path", paper.ngon_path(100, 5))

Add a star

    // Creates a star with inner radius 40, outer radius 100 and 9 points at 200, 60
    var star = paper.star(200, 60, 50, 100, 9)

Update a star

    // Updates the star to have 11 points
    star.attr("path", paper.star_path(50, 100, 11))

### Dependencies
- [Raphael JS](http://raphaeljs.com/)
- [Prototype JS](http://prototypejs.org/)

### Important
- This plugin is still under development
- It requires the Prototype JS library

### To-do
- writing tests
- testing with sets
- adding cross
- adding arrow