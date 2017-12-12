// "use strict";

(function() {
    var lbMargin = 20,
        rtMargin = 10,
        margin   = lbMargin + rtMargin,
        barSpace = 5;

    // Define our constructor
    this.ChartBar = function()
    {
        // Define option defaults
        var defaults = {
            data: [],
            container: "chart",
            size: {w: 500, h: 250},
            label: {x: 'X Axis', y: 'Y Axis'},
        }

        // Create opt by extending defaults with the passed in arugments
        if (arguments[0] && typeof arguments[0] === "object") {
            this.opt = extendDefaults(defaults, arguments[0]);
        }

        initialize.call(this);
    }

    // Public Methods
    ChartBar.prototype.render = function() {
        this.render();
    }

    // Private Methods
    function extendDefaults(source, properties)
    {
        var property;
        for (property in properties) {
            if (properties.hasOwnProperty(property)) {
                source[property] = properties[property];
            }
        }
        return source;
    }

    // Initialize the canvas
    function initialize()
    {
        var canvas = document.getElementById( this.opt.container );

        canvas.width  = this.opt.size.w;
        canvas.height = this.opt.size.h;
        this.ctx = canvas.getContext("2d");

        render.call(this);
    }

    //Axis
    function axis()
    {
        var ctx  = this.ctx,
            lRth = this.opt.size.w - rtMargin,
            lBtn = this.opt.size.h - lbMargin;

        ctx.beginPath();
        ctx.moveTo(lbMargin, rtMargin);
        ctx.lineTo(lbMargin, lBtn);
        ctx.lineTo(lRth,     lBtn);
        ctx.stroke();
    }

    //Bars
    function bars()
    {
        var ctx  = this.ctx,
            w    = this.opt.size.w,
            h    = this.opt.size.h,
            prct = w - margin,
            barWidth = Math.floor((h - margin - barSpace) / this.opt.data.length ) - barSpace;


        ctx.setTransform(1, 0, 0, 1, 0, 0);
        this.opt.data.forEach( (item, index) => {
            let value = item.value * prct / 100;

            ctx.fillStyle = item.color;
            ctx.fillRect(lbMargin+1,(index*(barWidth+barSpace)) + rtMargin + barSpace, value, barWidth);
        });
    }

    //Labels
    function labels()
    {
        var ctx = this.ctx,
            w   = this.opt.size.w,
            h   = this.opt.size.h,
            offset = 10;

        ctx.setTransform(1, 0, 0, 1, 0, 0);

        ctx.fillStyle    = '#000000';
        ctx.textAlign    = 'center';
        ctx.textBaseline = 'middle';
        ctx.font         = '12px Verdana';

        ctx.fillText(this.opt.label.x, Math.floor((w-margin)/2), h-offset);

        ctx.rotate(3 * Math.PI / 2)
        ctx.fillText(this.opt.label.y, -(margin+Math.floor((h-margin)/2)), offset );
    }

    // Render the Chart
    function render()
    {
        //Axis
        axis.call(this);

        // Text
        labels.call(this);

        // Bars
        if( this.opt.data.length )
            bars.call(this);
    }
}());
