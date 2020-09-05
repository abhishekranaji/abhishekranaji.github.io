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
    console.log((trid)) 
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
// console.log(trees)
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
    let container = document.createElement("div");
    container.setAttribute("class","tree_ui_container");
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



tree("scene_tree",[d])
add_ui_for_tree("scene_tree", "scene_data");
tree_add_nodes("scene_tree", "d5", [{id:"d6", text: "6", type:"light"}]);
console.log(trees)
// let container = document.createElement("div");
// append_tree_div_to_ui(container, trees["left_menu"].data, "left_area")
// console.log(create_tree_div(container, trees["left_menu"].data))

// tree_add_ui_id("top_left", "left_menu", {type:"grouped"})
// tree_add_ui_id("bottom_left", "left_menu", {type:"grouped"})
// console.log(trees)
// {
//     id:"",
//     text:"",
//     type:"",
//     has_children: boolean,
//     children:[]
// }

// tree_add_ui(uid, tid)

// tree("left_menu",["ground","direction"])
// tree_add_node("left_menu","ground",{"dcsac":"cdsvdf"});

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