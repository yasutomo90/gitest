let create_ul = (target_id, ul_id, ul_class) => {
    let set_ul = document.createElement("ul");
    set_ul.setAttribute("id", ul_id);
    set_ul.setAttribute("class", ul_class);
    let target = document.getElementById(target_id);
    target.appendChild(set_ul);
}

let create_li = (target_id, li_id, li_class) => {
    let set_li = document.createElement("li");
    set_li.setAttribute("id", li_id);
    set_li.setAttribute("class", li_class);
    let target = document.getElementById(target_id);
    target.appendChild(set_li);
}

let create_li_a = (target_id, li_id, li_class, a_blank, a_link, a_text) => {
    let set_li_a = document.getElementById("li");
    set_li_a.setAttribute("id", li_id);
    set_li_a.setAttribute("class", li_class);
    let set_a = document.createElement("a");
    if (a_blank == "y") {
        set_a.setAttribute("target", "_blank");
    }
    set_a.setAttribute("href", a_link);
    set_a.innerHTML = a_text;
    set_li_a.appendChild(set_a);
    let target = document.getElementById(target_id);
    target.appendChild(set_li_a);
}