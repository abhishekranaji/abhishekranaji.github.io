const pickr = Pickr.create({
    el: '.pickr',
    theme: 'nano', // or 'monolith', or 'nano'

    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
    ],

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            hsla: true,
            hsva: true,
            cmyk: true,
            input: true,
            clear: true,
            save: true
        }
    }
});


function menu(id) {
    var id = "#"+id;
    var x = document.getElementsByClassName("menu-window");
    var len = x.length;
    var i;
    for (i=0; i<len; i++) {
        if (x[i].querySelectorAll(id).length == 1) {
            var y = x[i].querySelectorAll('#widget');
            console.log(y);
            var y_len = y.length;
            
            for (var j=0; j<y_len; j++) {
                if (y[j].style.display === "none") {
                    y[j].style.display = "block";
                } else {
                    y[j].style.display = "none";
                }
            }
        }
    }
}
function info(id) {
    var id = "#"+id;
    var x = document.getElementsByClassName("menu-window");
    var len = x.length;
    var i;
    for (i=0; i<len; i++) {
        if (x[i].querySelectorAll(id).length == 1) {
            var y = x[i].querySelectorAll('#title');
            var z = x[i].querySelectorAll('#widget');
            var y_len = y.length;
            var z_len = z.length;
            for (var j=0; j<z_len; j++) {
                if (z[j].style.display === "block") {
                    z[j].style.display = "none";
                }
            }
            for (var j=0; j<y_len; j++) {
                if (y[j].style.display === "none") {
                    y[j].style.display = "block";
                } else {
                    y[j].style.display = "none";
                }
            }
            
        }
    }
}
