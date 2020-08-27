
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
    let resize_div = right_menu_window_item.querySelector(".resize-div");
    resize_div.id = `${id}-resize`;
    let right_btn = right_menu_window_item.querySelector(".right-window-button");
    // right_btn.setAttribute("id", `${id}-button`);
    right_btn.onclick = function(e){
        toggle_display(right_menu_window_item.querySelector(".widget-area"))
    }
    right_menu_window_item.querySelector("[role='title']").onclick = () => {toggle_display(right_menu_window_item.querySelector(".widget-content"))}
    
    by_id("right_area").appendChild(right_menu_window_item);
}

var add_to_right_window_item = (wid, item) => {
    by_id(wid).querySelector(".widget-content").append(item)
}

var toggle_display = (obj) => {
    // qry(q).getAttribute
    if(obj.style.display === "none"){
        let display_type = obj.getAttribute("disp_type")
        if(display_type === null)
            display_type = ""
        
        obj.style.display = display_type
    }else{
        obj.setAttribute("disp_type", obj.style.display)
        obj.style.display = "none"
    }
    
}

var create_round_button = (id, text) => {
    
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
    widget_item.id = `${tarid}-target-widget`;
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

create_right_window_item("info", "i");
let item = color_widget("info","#000000")
let item1 = color_widget("material","#ffffff")
let item3 = intensity_widget("info", 0.2)
let item4 = visibility_widget("info", true)
let item5 = target_widget("material")
let item6 = map_widget("material")
let item7 = alpha_map_widget("material")

create_right_window_item("transformation","t");
let item8 = position_widget("transformation")
add_to_right_window_item("transformation", item8)
let item9 = rotation_widget("transformation")
add_to_right_window_item("transformation", item9)
let item10 = scale_widget("transformation")
add_to_right_window_item("transformation", item10)
let item11 = option_widget("transformation")
add_to_right_window_item("transformation", item11)
// console.log(by_id("info"));
add_to_right_window_item("info", item)
add_to_right_window_item("info", item3)
add_to_right_window_item("info", item4)

// create_right_window_item("transformation", "t", "title");
// let t = transformation_widget()
// add_to_right_window_item("transformation", t)


create_right_window_item("material", "m", "Material");
add_to_right_window_item("material", item1)
add_to_right_window_item("material", item5)
add_to_right_window_item("material", item6)
add_to_right_window_item("material", item7)