Game = {
    start: function(){
        Crafty.init(480, 320);
        Crafty.background('white');

        Crafty.sprite(128, "images/magic.png", {
            wizard: [0,0,0,0]
        });

        var iso = Crafty.isometric.size(128);
        var tile1 = Crafty.e("2D, DOM, wizard, Mouse")
            .attr("z", 1)
            .areaMap([64,0],[128,32],[128,96],[64,128],[0,96],[0,32])
            .bind("click", function(e){
                if(e.button == 2){
                    this.destroy();
                }
            });
    }
};