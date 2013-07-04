/**!
 * @preserve Color animation 20120928
 * Copyright 2013, Gerald Aistleitner <gerald.aistleitner@gmail.com>
 * Released under the MIT and GPL licenses.
 */
$.fn.nozoom = function() {
    var $this = this;
    var originalWidth = this.width();
    var originalHeight = this.height();
    var $offset = this.offset();

    var originalBottom = $(window).height() - $offset.top - this.height();
    var originalRight = $(window).width() - $offset.left - this.width();
    $(document).ready(function() {
        var zoom = document.documentElement.clientWidth / window.innerWidth;
        $this.css({
            'width': originalWidth / zoom,
            'height': originalHeight / zoom,
            'bottom': originalBottom / zoom,
            'right': originalRight / zoom
        });
    });
    $(window).resize(function() {
        var zoom = document.documentElement.clientWidth / window.innerWidth;
        $this.css({
            'width': originalWidth / zoom,
            'height': originalHeight / zoom,
            'bottom': originalBottom / zoom,
            'right': originalRight / zoom
        });
    });
};
