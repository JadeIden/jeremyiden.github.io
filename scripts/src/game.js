Game = {
    start: function(){
        Crafty.init(480, 320);
        Crafty.background('green');

        Crafty.e('2D, DOM, Color, Fourway')
            .attr({x: 0, y: 0, w: 100, h: 100})
            .color("#696969")
            .fourway(200);
    }
};