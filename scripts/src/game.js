Game = {
    start: function(){
        Crafty.init(480, 320);
        Crafty.background('white');

        Crafty.sprite(128, "images/magic.png", {
            wizard: [0,0,0,0]
        });

        Crafty.sprite(256, 128, "images/dirt.png", {
            dirt_tile: [0,0,0,0]
        });

        var iso = Crafty.isometric.size(128);
        var tile1 = Crafty.e("2D, DOM, dirt_tile, Mouse")
            .attr("z", 1)
            .bind("click", function(e){
                if(e.button == 2){
                    this.destroy();
                }
            });

        iso.place(1, 1, 0, tile1);
        iso.place(2, 1, 0, tile1);
        iso.place(3, 1, 0, tile1);
    }
};