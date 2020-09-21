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
        previouskey = keys;
    for (const [key, value] of Object.entries(newLocal[`${keys}`][0])) {
        if (document.getElementById(`${res}-widget-area`).querySelector(`.${keys}`)) {

        } else {
            if (`${key}` === "type") {
                var x = document.getElementsByClassName(`${value}`);
                if (document.getElementById(`${res}-widget-area`).querySelectorAll(`#${res}-title`)) {
                    var y = document.getElementById(`${res}-widget-area`).querySelector(`#${res}-widget`);
                    console.log(x[0].outerHTML);
                    x[0].style.display = "flex";
                    x[0].id = previouskey;
                    y.innerHTML += x[0].outerHTML;
                    console.log(x);
                    // x.classList.remove(previouskey);
                    x[0].style.display = "none";
                }
                // document.getElementById(`${value}`).classList.remove(`${keys}`);
                
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
function nav_button(id) {
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
            var z = x[i].querySelectorAll('.widget');
            console.log(z)
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


// OPTION //

var x, i, j, l, ll, selElmnt, a, b, c, d;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("option-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  d = document.createElement("DIV");
  d.setAttribute("class", "select-items-text");
  d.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  a.innerHTML = d.outerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.setAttribute("class","select-items-text");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl, e;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            e = document.createElement("DIV");
            e.setAttribute("class", "select-items-text");
            e.innerHTML = this.innerHTML;
            h.innerHTML = e.outerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);





// resize code

var z = right_menu_window_item;
var y = right_menu_window_item.querySelector(".widget-content")
console.log(right_menu_window_item)
resize_drag_div.addEventListener('mousedown', initDrag, false);
var startY, startHeight;

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