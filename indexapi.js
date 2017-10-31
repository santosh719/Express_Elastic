
$(document).ready(function () {
  $('.collapsible').collapsible({accordion: true});
  let promise = $.ajax({
    type: "POST",
    url: "documents/addAllDocuments",
    dataType: "json",
    success: function (data) {
      let t = setTimeout(searchAllDocs, 1000);
    }
  });

});

function create_divs(data) {
  for (let i = 0; i < 10; i++) {
    let $inner_div = $("<div>", {id: "innerdiv_" + [i], class: 'row'});
    $("#data" + i).append($inner_div);
    let $inner_div2 = $("<div>", {id: "innerdiv2_" + [i], class: 'col s12 m12'});
    $("#innerdiv_" + [i]).append($inner_div2);
    let ul1 = $("<ul>", {id: "innerul_" + [i], class: 'collapsible'}).attr('data-collapsible', 'accordion');
    $("#innerdiv2_" + [i]).append(ul1);
    for (let j = 0; j < 10; j++) {
      let $li = $("<li>", {id: "li_" + [i] + [j]});
      $("#innerul_" + [i]).append($li);
      let $title = $("<div>", {id: "title_" + [i] + [j], class: 'collapsible-header'});
      $("#li_" + [i] + [j]).append($title);
      $("#title_" + [i] + [j]).text("Title:  " + data[i].hits.hits[j]._source.title);
      let $content = $("<div>", {id: "content_" + [i] + [j], class: 'collapsible-body'});
      $("#li_" + [i] + [j]).append($content);
      $("#content_" + [i] + [j]).text("Content:  " + data[i].hits.hits[j]._source.content);
      $("#li_" + [i] + [j]).append("<br />");
    }
    $("#data" + i).append("<br />");
  }

}

function searchAllDocs() {
  $.ajax({
    type: "GET",
    url: "documents/search",
    dataType: "json",
    success: function (data) {
      create_divs(data);
    }
  });
}
