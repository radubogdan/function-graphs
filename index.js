/**
 * TODO
 *
 */
function FunctionGraph (options) {

    var self = this;
    self._graph = [];

    options.width = options.width || 60;
    options.height = options.height || 40;
    options.center = options.center || {
        x: Math.floor(options.width / 2)
      , y: Math.floor(options.height / 2)
    }

    for (var i = 0; i < options.height; ++i) {
        self._graph[i] = [];
        for (var ii = 0; ii < options.width; ++ii) {
            self._graph[i].push(" ");
        }
    }

    self._graph[options.center.y][options.center.x] = "+";

    for (var i = 0; i < options.width; ++i) {
        var character = "-";
        if (i === options.center.x) {
            character = "+";
        } else if (i === options.width - 1) {
            character = ">";
        }

        self._graph[options.center.y][i] = character;
    }

    for (var i = 0; i < options.height; ++i) {
        var character = "|";
        if (i === options.center.y) {
            character = "+";
        } else if (i === 0) {
            character = "^";
        }

        self._graph[i][options.center.x] = character;
    }

    function addPoint (x, y) {
        x = options.center.x + parseInt(x);
        y = options.center.y - parseInt(y);

        if (x >= options.width || x < 0 || y >= options.height || y < 0) {
            return;
        }

        if (!self._graph[y]) {
            return;
        }

        self._graph[y][x] = "#";
    }
    self.addPoint = addPoint;

    self.toString = function () {
        var str = "";
        for (var i = 0; i < self._graph.length; ++i) {
            str += self._graph[i].join("") + "\n";
        }

        return str;
    };
}

module.exports = FunctionGraph;
