document.onload = function(){
    setup_right_menu()
};

var template_2_dom = (qid) => {
    let template = document.getElementById(qid).innerHTML;
    let parser = new DOMParser();
    let doc = parser.parseFromString(template, 'text/html');
    return doc.body.firstChild
}

var qry = (qery) => {
    return document.querySelector(qery)
}

var by_id = (s_id) => {
    return document.getElementById(s_id)
}


var setup_right_menu = () => {
    // create_round_menu_item("transformation_view")
    // add above 2 right_menu
}
// clicked button event


var create_right_window_item = (id, button_text, title) => {
    // get template
    let right_menu_window_item = template_2_dom("right-window-template");
    right_menu_window_item.id = `${id}`;
    let resize_drag_div = right_menu_window_item.querySelector(".resize-drag");
    right_menu_window_item.querySelector(".resize-div").id = `${id}-resize`;
    let right_btn = right_menu_window_item.querySelector(".right-window-button");
    let resize_div = right_menu_window_item.querySelector(".resize-div");
    // right_btn.setAttribute("id", `${id}-button`);
    // var z = right_menu_window_item;
    
    right_btn.onclick = function(e){
        toggle_menu_drag_display(right_menu_window_item.querySelector(".widget-area"), resize_div, "right_menu_slide_in 200ms ease-in-out")
        let card_windows = (right_menu_window_item.querySelectorAll(".card-window"))
        var y = right_menu_window_item.querySelector(".widget-content")
        resize_drag_div.addEventListener('mousedown', initDrag, false);
        var startY, startHeight;
        function initDrag(e) {
            startY = e.clientY;
            startHeight = parseInt(document.defaultView.getComputedStyle(resize_div).height, null);
            console.log(startY)
            document.documentElement.addEventListener('mousemove', doDrag, false);
            document.documentElement.addEventListener('mouseup', stopDrag, false);
        }

        function doDrag(e) {
            resize_div.style.height = (startHeight + e.clientY - startY) + 50 + 'px';
            y.style.height = (startHeight + e.clientY - startY) + 'px';
            y.style.maxHeight = startHeight - 50 + 'px';
            resize_div.style.maxHeight = startHeight  + 'px';
        }

        function stopDrag(e) {
            document.documentElement.removeEventListener('mousemove', doDrag, false);
            document.documentElement.removeEventListener('mouseup', stopDrag, false);
        }
    }
    right_menu_window_item.querySelector("[role='title']").onclick = () => {toggle_menu_drag_display(right_menu_window_item.querySelector(".widget-content"), resize_div)}
    by_id("right_area").appendChild(right_menu_window_item);
}

var add_to_right_window_item = (wid, item) => {
    by_id(wid).querySelector(".widget-content").append(item)
}

var toggle_menu_drag_display = (obj, resize_div, animation_in) => {
    // qry(q).getAttribute
    let drag_comp = resize_div.querySelector(".resize-drag");
    if(obj.style.display === "none"){
        let display_type = obj.getAttribute("disp_type")
        if(display_type === null)
            display_type = ""
        obj.style.display = display_type
        obj.style.height = "auto"
        resize_div.style.height = null
        if (animation_in) { obj.style.animation = animation_in; }
        if (obj.querySelector(".widget-content")) {
            if(obj.querySelector(".widget-content").style.display !== "none") {
                drag_comp.style.display = display_type
            }
        }else {
            drag_comp.style.display = display_type
        }      
    }else{
        obj.setAttribute("disp_type", obj.style.display)
        obj.style.display = "none"
        resize_div.style.height = "54px"
        if (obj.querySelector(".widget-content")) {
            if(obj.querySelector(".widget-content").style.display !== "none") {
                drag_comp.style.display = "none"
            }
        } else {
            drag_comp.style.display = "none"
        }
    }
}

var toggle_menu_display = (obj, animation_in, animation_out) => {
    if(obj.style.opacity === "0"){
        let display_type = obj.getAttribute("disp_type")
        if(display_type === null)
            display_type = "1"
        display_type = "1"
        obj.setAttribute("disp_type", display_type)
        if (animation_in) { obj.style.animation = animation_in;
            obj.style.opacity = display_type;
            obj.addEventListener("animationend", function changeOpacity() {obj.style.opacity = display_type})
        }else {
            obj.style.opacity = display_type;
        }        
    }else{
        obj.setAttribute("disp_type", 0)
        if(animation_out) {obj.style.animation = animation_out;
             obj.addEventListener("animationend", function changeOpacity() {obj.style.opacity = 0})
        }else {
            obj.style.opacity = 0
        }
    }
}


var color_widget = (cid, cval) => {
    let widget_item = template_2_dom("color-widget-template");
    widget_item.id = `${cid}-color-widget`;
    if (cval) { 
        let widget_item_color = widget_item.querySelector(".color-widget-pickr");
        widget_item_color.setAttribute("value", cval); 
    }
    return widget_item
}

var intensity_widget = (iid, ival) => {
    let widget_item = template_2_dom("intensity-widget-template");
    widget_item.id = `${iid}-intensity-widget`;
    let intensity_range_widget = widget_item.querySelector(".intensity"); 
    intensity_range_widget.value = ival;
    // set value to div
    widget_item.querySelector(".intensity-value").value = ival;
    // add event on range input
    intensity_range_widget.addEventListener('input', function() {
        let intensity_val = intensity_range_widget.value;
        widget_item.querySelector('.intensity-value').value = intensity_val
    })
    // add event on text
    widget_item.querySelector(".intensity-value").addEventListener('input', function() {
        let intensity_val = widget_item.querySelector(".intensity-value").value;
        if(intensity_val>1) {
            intensity_val = 1;
            widget_item.querySelector(".intensity-value").value = 1;
            widget_item.querySelector('.intensity').value = intensity_val;
        } else {
            widget_item.querySelector('.intensity').value = intensity_val;
        }
    })
    return widget_item
}

var visibility_widget = (vid, vval) => {
    let widget_item = template_2_dom("visibility-widget-template");
    widget_item.id = `${vid}-visibility-widget`;
    let widget_item_toggle = widget_item.querySelector(".toggle-widget-value");
    widget_item_toggle.checked = vval; 
    widget_item.querySelector(".toggle-widget-value").onclick = () => { };
    return widget_item
}

var target_widget = (tarid) => {
    let widget_item = template_2_dom("target-widget-template");
    let bottom_menu_select = template_2_dom("bottom-menu-target-select-template")
    console.log()
    widget_item.id = `${tarid}-target-widget`;
    bottom_menu_select.id = `${tarid}-target-widget-select-botton-menu`
    widget_item.querySelector("[name = select]").onclick = function(e){
        if (by_id("bottom_area").querySelector("#"+bottom_menu_select.id) === null) {
            bottom_menu_select.style.animation = "bottom_menu_slide_in 400ms"
            bottom_menu_select.style.opacity = "1";
            by_id("bottom_area").appendChild(bottom_menu_select);
        } else {
            toggle_menu_display(by_id(bottom_menu_select.id),"bottom_menu_slide_in 100ms", "bottom_menu_slide_out 100ms");
        }
    }
    widget_item.querySelector("[name = change]").onclick = function(e){
        toggle_menu_display(by_id("change"));
    }
    return widget_item
}

var map_widget = (mapid) => {
    let widget_item = template_2_dom("map-widget-template");
    widget_item.id = `${mapid}-map-widget`;
    return widget_item
}

var alpha_map_widget = (amid) => {
    let widget_item = template_2_dom("alpha-map-widget-template");
    widget_item.id = `${amid}-alpha-map-widget`;
    return widget_item
}

var transformation_widget = (poid) => {
    let widget_item = template_2_dom("transformation-widget-template");
    widget_item.id = `${poid}-position-widget`;
    return widget_item
}

var position_widget = (poid) => {
    let widget_item = template_2_dom("position-widget-template");
    widget_item.id = `${poid}-position-widget`;
    return widget_item
}

var rotation_widget = (roid) => {
    let widget_item = template_2_dom("rotation-widget-template");
    widget_item.id = `${roid}-rotation-widget`;
    return widget_item
}

var scale_widget = (roid) => {
    let widget_item = template_2_dom("scale-widget-template");
    widget_item.id = `${roid}-scale-widget`;
    return widget_item
}
var option_widget = (oid) => {
    let widget_item = template_2_dom("option-widget-template");
    widget_item.id = `${oid}-option-widget`;
    return widget_item
}
var trees = []
var tree = (trid, pdata) => {
    let data;
    if (pdata === undefined) {
        data = [];
    }else if(Array.isArray(pdata)) {
        data = pdata
    }
    trees[trid] = {id: trid, data: data};
}
var tree_add_nodes = (trid, pid, nodes_array) => {
    let data = trees[trid].data;
    let p = searchTree(data, pid)
    if(p.children){
        p.children.push(...nodes_array) // append
        //a.push.apply(a, b)
    } else {
        p["children"] = nodes_array;
    }
    let ui_ids = Object.keys(trees[trid].ui)
    for (let i = 0; i<ui_ids.length; i++) {
        // get child container of pid
        let parent_div =  by_id(ui_ids[i]).querySelector(`[node_id = ${pid}]`);
        parent_div.querySelector(".node_haschild").classList.toggle("node_toggle");
        create_tree_div(parent_div.querySelector(".child_container"), nodes_array);
    }
    
}
var searchTree = (data, parent) => {
    for(i=0; i < data.length; i ++){
        if (data[i].id === parent){
            return data[i];
        }else if(data[i].children !== undefined && data[i].children.length !== 0){
            return searchTree(data[i].children, parent);
        }
    }
}
var d = {
    id:"d1",
    text:"1",
    type:"group",
    children:[
        {
            id:"d2",
            text:"2",
            type:"mesh"
        },
        {
            id:"d3",
            text:"3",
            type:"group",
            children:[
                {
                    id:"d4",
                    text:"4",
                    type:"mesh"
                },
                {
                    id:"d5",
                    text:"5",
                    type:"mesh"
                },
                {
                    id:"d7",
                    text:"asfcs",
                    type:"mesh"
                }
            ]
        }
    ]

}

var create_tree_div = (parent_div, data, pid) => {
    for(i=0; i < data.length; i++){
        let child_node = template_2_dom("tree_node_template");
        child_node.setAttribute("node_id", data[i].id);
        child_node.querySelector(".node_text").innerHTML = data[i].text;
        child_node.querySelector(".node_type").setAttribute("type", data[i].type);
        parent_div.appendChild(child_node);
        if(data[i].children !== undefined){
            child_node.querySelector(".node_haschild").classList.toggle("node_toggle");
            create_tree_div(child_node.querySelector(".child_container"), data[i].children, data[i].id);
        }
    }
}

var tree_div_toggle = () => {
    let child_containers = document.getElementsByClassName("parent_details");
    for (var i = 0; i < child_containers.length; i++) {
        child_containers[i].addEventListener("click", function() {
            this.parentElement.querySelector(".child_container").classList.toggle("non-active");
            this.parentElement.querySelector(".node_toggle").classList.toggle("node_toggle_non_active");
        })
    }
}

var container_divs = new WeakMap()
var add_ui_for_tree = (tid, uid) => {
    let button = template_2_dom("button-template");
    let container = document.createElement("div");
    container.setAttribute("class","tree_ui_container");
    container.style.opacity = 0;
    by_id(uid).appendChild(button);
    button.onclick = function(e){
        toggle_menu_display(container,"left_menu_slide_in 100ms","left_menu_slide_out 100ms")
    }
    by_id(uid).appendChild(container);
    let a = trees[tid];
    if(a.ui === undefined){
        a.ui = []
    }
    a.ui[uid] = {} // should be weak mapping or not required
    container_divs[uid] = container
    let data = trees[tid].data;
    create_tree_div(container, data);
    tree_div_toggle();
}
// Add top menu
var create_top_menu = () => {
    let top_menu = template_2_dom("top-menu-template");
    return top_menu
}

by_id("top_area").appendChild(create_top_menu())
tree("scene_tree",[d])
add_ui_for_tree("scene_tree", "scene_data");
tree_add_nodes("scene_tree", "d5", [{id:"d6", text: "6", type:"light"}]);

let item = color_widget("info","#000000")
let item1 = color_widget("material","#ffffff")
let item3 = intensity_widget("info", 0.2)
let item4 = visibility_widget("info", true)
let item5 = target_widget("material")
let item6 = map_widget("material")
let item7 = alpha_map_widget("material")
let item8 = position_widget("transformation")
let item9 = rotation_widget("transformation")
let item10 = scale_widget("transformation")
let item11 = option_widget("transformation")
let item12 = transformation_widget("transformation")

create_right_window_item("transformation","t");
add_to_right_window_item("transformation", item12)
add_to_right_window_item("transformation", item8)
add_to_right_window_item("transformation", item9)
add_to_right_window_item("transformation", item10)
add_to_right_window_item("transformation", item11)

create_right_window_item("info", "i");
add_to_right_window_item("info", item)
add_to_right_window_item("info", item3)
add_to_right_window_item("info", item4)

create_right_window_item("material", "m", "Material");
add_to_right_window_item("material", item1)
add_to_right_window_item("material", item5)
add_to_right_window_item("material", item6)
add_to_right_window_item("material", item7)


var e = {
    ui : 
        {
            height : "100px",
            width : "150px",
            top : "100px",
            left : "100px"
        }
}
var modal_window = (wid, ui_data) => {
    let data;
    if (ui_data === undefined) {
        data = {};
    }else if(Array.isArray(ui_data)) {
        data = ui_data[0]
    }
    modal_windows[wid] = data;
}
var create_modal_window = (wid, title) => {
    let modal_window_template = template_2_dom("modal-window-template");
    modal_window_template.id = wid;
    modal_window_template.querySelector(".modal-window-title").append(title);
    modal_window_template.style.height = modal_windows[wid].ui.height;
    modal_window_template.style.width = modal_windows[wid].ui.width;
    modal_window_template.style.top = modal_windows[wid].ui.top;
    modal_window_template.style.left = modal_windows[wid].ui.left;
    by_id("center_area").append(modal_window_template);
    drag_resizable_modal_window(modal_window_template, by_id("ghost_window"), wid)
}

var drag_resizable_modal_window = (modal_window, ghostWindow, wid) => {
    var minWidth = 150;
    var minHeight = 100;

    // Thresholds
    var FULLSCREEN_MARGINS = -10;
    var MARGINS = 4;

    // End of what's configurable.
    var clicked = null;
    var onRightEdge, onBottomEdge, onLeftEdge, onTopEdge;

    var rightScreenEdge, bottomScreenEdge;


    var b, x, y;

    var redraw = false;

    var pane = modal_window;
    var ghostpane = ghostWindow;

    function setBounds(element, x, y, w, h) {
        element.style.left = x + 'px';
        element.style.top = y + 'px';
        element.style.width = w + 'px';
        element.style.height = h + 'px';
    }

    function hintHide() {
    setBounds(ghostpane, b.left, b.top, b.width, b.height);
    ghostpane.style.opacity = 0;
    }


    // Mouse events
    pane.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);

    // Touch events	
    pane.addEventListener('touchstart', onTouchDown);
    document.addEventListener('touchmove', onTouchMove);
    document.addEventListener('touchend', onTouchEnd);


    function onTouchDown(e) {
    onDown(e.touches[0]);
    e.preventDefault();
    }

    function onTouchMove(e) {
    onMove(e.touches[0]);		
    }

    function onTouchEnd(e) {
    if (e.touches.length ==0) onUp(e.changedTouches[0]);
    }

    function onMouseDown(e) {
    onDown(e);
    e.preventDefault();
    }

    function onDown(e) {
    calc(e);

    var isResizing = onRightEdge || onBottomEdge || onTopEdge || onLeftEdge;

    clicked = {
        x: x,
        y: y,
        cx: e.clientX,
        cy: e.clientY,
        w: b.width,
        h: b.height,
        isResizing: isResizing,
        isMoving: !isResizing && canMove(),
        onTopEdge: onTopEdge,
        onLeftEdge: onLeftEdge,
        onRightEdge: onRightEdge,
        onBottomEdge: onBottomEdge
    };
    }

    function canMove() {
    return x > 0 && x < b.width && y > 0 && y < b.height
    && y < 30;
    }

    function calc(e) {
    b = pane.getBoundingClientRect();
    x = e.clientX - b.left;
    y = e.clientY - b.top;

    onTopEdge = y < MARGINS;
    onLeftEdge = x < MARGINS;
    onRightEdge = x >= b.width - MARGINS;
    onBottomEdge = y >= b.height - MARGINS;

    rightScreenEdge = window.innerWidth - MARGINS;
    bottomScreenEdge = window.innerHeight - MARGINS;
    }

    var e;

    function onMove(ee) {
    calc(ee);

    e = ee;

    redraw = true;

    }

    function animate() {

    requestAnimationFrame(animate);

    if (!redraw) return;

    redraw = false;

    if (clicked && clicked.isResizing) {

        if (clicked.onRightEdge) {pane.style.width = Math.max(x, minWidth) + 'px'; modal_windows[wid].ui.width = pane.style.width;}
        if (clicked.onBottomEdge) {pane.style.height = Math.max(y, minHeight) + 'px'; modal_windows[wid].ui.height = pane.style.height;}

        if (clicked.onLeftEdge) {
        var currentWidth = Math.max(clicked.cx - e.clientX  + clicked.w, minWidth);
        if (currentWidth > minWidth) {
            pane.style.width = currentWidth + 'px';
            pane.style.left = e.clientX + 'px';	
            modal_windows[wid].ui.left = pane.style.left;
            modal_windows[wid].ui.width = pane.style.width;
        }
        }

        if (clicked.onTopEdge) {
        var currentHeight = Math.max(clicked.cy - e.clientY  + clicked.h, minHeight);
        if (currentHeight > minHeight) {
            pane.style.height = currentHeight + 'px';
            pane.style.top = e.clientY + 'px';
            modal_windows[wid].ui.top = pane.style.top;
            modal_windows[wid].ui.height = pane.style.height;
        }
        }

        hintHide();

        return;
    }

    if (clicked && clicked.isMoving) {

        if (b.top < FULLSCREEN_MARGINS || b.left < FULLSCREEN_MARGINS || b.right > window.innerWidth - FULLSCREEN_MARGINS || b.bottom > window.innerHeight - FULLSCREEN_MARGINS) {
        // hintFull();
        setBounds(ghostpane, 0, 0, window.innerWidth, window.innerHeight);
        ghostpane.style.opacity = 0.2;
        } else if (b.top < MARGINS) {
        // hintTop();
        setBounds(ghostpane, 0, 0, window.innerWidth, window.innerHeight / 2);
        ghostpane.style.opacity = 0.2;
        } else if (b.left < MARGINS) {
        // hintLeft();
        setBounds(ghostpane, 0, 0, window.innerWidth / 2, window.innerHeight);
        ghostpane.style.opacity = 0.2;
        } else if (b.right > rightScreenEdge) {
        // hintRight();
        setBounds(ghostpane, window.innerWidth / 2, 0, window.innerWidth / 2, window.innerHeight);
        ghostpane.style.opacity = 0.2;
        } else if (b.bottom > bottomScreenEdge) {
        // hintBottom();
        setBounds(ghostpane, 0, window.innerHeight / 2, window.innerWidth, window.innerWidth / 2);
        ghostpane.style.opacity = 0.2;
        } else {
        hintHide();
        }
        // moving
        pane.style.top = (e.clientY - clicked.y) + 'px';
        pane.style.left = (e.clientX - clicked.x) + 'px';
        modal_windows[wid].ui.top = pane.style.top;
        modal_windows[wid].ui.left = pane.style.left;

        return;
    }

    // This code executes when mouse moves without clicking

    // style cursor
    if (onRightEdge && onBottomEdge || onLeftEdge && onTopEdge) {
        pane.style.cursor = 'nwse-resize';
    } else if (onRightEdge && onTopEdge || onBottomEdge && onLeftEdge) {
        pane.style.cursor = 'nesw-resize';
    } else if (onRightEdge || onLeftEdge) {
        pane.style.cursor = 'ew-resize';
    } else if (onBottomEdge || onTopEdge) {
        pane.style.cursor = 'ns-resize';
    } else if (canMove()) {
        pane.style.cursor = 'move';
    } else {
        pane.style.cursor = 'default';
    }
    }

    animate();

    function onUp(e) {
    calc(e);
    clicked = null;
    }
    var close_btn = pane.querySelector(".close");
    close_btn.onclick = function() {
        pane.style.opacity = 0;
    }
}
var modal_windows = []
modal_window("change", [e])
// array structure

create_modal_window("change", "change");