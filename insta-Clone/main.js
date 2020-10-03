

fetch('http://starlord.hackerearth.com/insta')
    .then(res => res.json())
    .then((out) => {
        create_ui(out);
}).catch(err => console.error(err));

var template_2_dom = (qid) => {
    let template = document.getElementById(qid).innerHTML;
    let parser = new DOMParser();
    let doc = parser.parseFromString(template, 'text/html');
    return doc.body.firstChild
}

var by_id = (s_id) => {
    return document.getElementById(s_id)
}

var create_ui = (data) => {
    for(var i=0; i<data.length; i++) {
        var ui_temp = template_2_dom('card-template');
        var image_place = ui_temp.querySelector('.card-image');
        image_place.style.backgroundImage = `url(${data[i].Image})`;
        var likes_place =  ui_temp.querySelector('.likes');
        var time_place =  ui_temp.querySelector('.time');
        likes_place.innerHTML += data[i].likes;
        time_place.innerHTML = data[i].timestamp;
        by_id("article-container").appendChild(ui_temp);
        console.log(image_place.style.backgroundImage)
    }
}

// Sorting 

by_id("bt_like").onclick = () => {
    by_id("article-container").innerHTML = ""
    fetch('http://starlord.hackerearth.com/insta')
    .then(res => res.json())
    .then((out) => {
        if (by_id("article-container").getAttribute("like-sort") !== "undefined") {
            if (by_id("article-container").getAttribute("like-sort") === "assend") {
                by_id("article-container").setAttribute("like-sort", "desend");
                out.sort(function(x, y){
                    return y.likes - x.likes;
                })   
            } else {
                by_id("article-container").setAttribute("like-sort","assend");
                out.sort(function(x, y){
                    return x.likes - y.likes;
                }) 
            }
        }else {
            by_id("article-container").setAttribute("like-sort", "desend");
            out.sort(function(x, y){
                return y.likes - x.likes;
            })
        }
        create_ui(out);
    }).catch(err => console.error(err));
}