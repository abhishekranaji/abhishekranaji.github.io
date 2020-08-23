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


const newLocal = {"color1" : [{"type":"color-widget", "value": "xyz"}],"color2" : [{"type":"color-widget", "value": "dsa"}]};
function menu(id) {
    var previouskey;
    var info =  [];
    var id = id;
    var res = id.split("-")[0];
    Object.entries(newLocal).forEach(([keys]) => {
    for (const [key, value] of Object.entries(newLocal[`${keys}`][0])) {
        console.log([`${keys}`])
        if (document.getElementById(`${res}-widget-area`).querySelector(`.${keys}`)) {

        } else {
            if (`${key}` === "type") {
                var x = document.getElementById(`${value}`);
                x.classList.add(`${keys}`);
                if (document.getElementById(`${res}-widget-area`).querySelectorAll(`#${res}-title`)) {
                    var y = document.getElementById(`${res}-widget-area`).querySelector(`#${res}-widget`);
                    if (y.innerHTML == "") {
                        x.style.display = "flex";
                        y.innerHTML = x.outerHTML;
                    } else {
                        x.style.display = "flex";
                        y.innerHTML += x.outerHTML;
                    }
                }
                // color widget 
                if (`${value}` == "color-widget") {
                    document.getElementById(`${res}-widget-area`)
                }
                // Resiezer
                var resizer = document.createElement('div');
                resizer.className = "info-resizer1";
                var z = document.getElementById(`${res}-resize`);
                z.appendChild(resizer);
                resizer.addEventListener('mousedown', initDrag, false);
                var startX, startY, startHeight;
                function initDrag(e) {
                    startY = e.clientY;
                    startHeight = parseInt(document.defaultView.getComputedStyle(z).height, 10);
                    document.documentElement.addEventListener('mousemove', doDrag, false);
                    document.documentElement.addEventListener('mouseup', stopDrag, false);
                }

                function doDrag(e) {
                    z.style.height = (startHeight + e.clientY - startY) + 'px';
                    y.style.height = (startHeight + e.clientY - startY)-28 + 'px';
                    y.style.maxHeight = (startHeight + e.clientY - startY)-28 + 'px';
                }

                function stopDrag(e) {
                    document.documentElement.removeEventListener('mousemove', doDrag, false);
                    document.documentElement.removeEventListener('mouseup', stopDrag, false);
                }
            }
        }
      }} );  
}
function info_button(id) {
    var id = id;
    var res = id.split("-");
    var y_id = "#"+ res[0];
    var x = document.getElementsByClassName("right-nav-window");
    var title = y_id+"-title";
    var len = x.length;
    var i;
    for (i=0; i<len; i++) {
        if (x[i].querySelectorAll(`#${id}`).length == 1) {
            var y = x[i].querySelectorAll(title);
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
