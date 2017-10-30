$(document).ready(function () {
  $("> div", "#questionsDispos").draggable({
    helper: "clone",
    revert: "invalid",
    cursor: "move",
    handle: "h3",
    connectToSortable: ".questions"
  });

  $(".questions").accordion({
    header: "> div > h3",
    collapsible: true,
    active: false,
    autoActivate: true,
    heightStyle: "content"
  });

  $(".questions").sortable({
    axis: "y",
    handle: "h3",
    items: "div",
    receive: function (event, ui) {
      $(ui.item).removeClass();
      $(ui.item).removeAttr("style");
      $(".questions").accordion("add", "<div>" + ui.item.hmtl() + "</div>");
    }
  });

  $("#questionsDispos").accordion({
    header: "> div > h3",
    collapsible: true,
    active: false,
    autoHeight: true
  });
  $("button").button();
  $('#addAccordion').click(function () {
    var newDiv = "<div><h3>Q4 New Question</h3><div>New Content</div></div>";
    $('.questions').append(newDiv)
    $('.questions').accordion("refresh");
  });

  // data = {
  //   "took": 2,
  //   "timed_out": false,
  //   "_shards": {
  //     "total": 5,
  //     "successful": 5,
  //     "skipped": 0,
  //     "failed": 0
  //   },
  //   "hits": {
  //     "total": 7,
  //     "max_score": 0.8630463,
  //     "hits": [
  //       {
  //         "_index": "wikibooks",
  //         "_type": "topics",
  //         "_id": "AV9rBwfsVCo5YZGY-YnN",
  //         "_score": 0.8630463,
  //         "_source": {
  //           "title": "java programming book text",
  //           "content": "this is sample text"
  //         }
  //       },
  //       {
  //         "_index": "wikibooks",
  //         "_type": "topics",
  //         "_id": "AV9m5rcvVCo5YZGY-YnI",
  //         "_score": 0.84748024,
  //         "_source": {
  //           "title": "java programming book text 1",
  //           "content": "this is sample text 1"
  //         }
  //       },
  //       {
  //         "_index": "wikibooks",
  //         "_type": "topics",
  //         "_id": "AV9m5paCVCo5YZGY-YnH",
  //         "_score": 0.5730107,
  //         "_source": {
  //           "title": "java programming book text",
  //           "content": "this is sample text"
  //         }
  //       },
  //       {
  //         "_index": "wikibooks",
  //         "_type": "topics",
  //         "_id": "AV9rB_rKVCo5YZGY-YnR",
  //         "_score": 0.5131662,
  //         "_source": {
  //           "title": "java programming book text 4",
  //           "content": "this is sample text 4"
  //         }
  //       },
  //       {
  //         "_index": "wikibooks",
  //         "_type": "topics",
  //         "_id": "AV9rBxM3VCo5YZGY-YnO",
  //         "_score": 0.393369,
  //         "_source": {
  //           "title": "java programming book text 1",
  //           "content": "this is sample text 1"
  //         }
  //       },
  //       {
  //         "_index": "wikibooks",
  //         "_type": "topics",
  //         "_id": "AV9rB9CIVCo5YZGY-YnP",
  //         "_score": 0.393369,
  //         "_source": {
  //           "title": "java programming book text 2",
  //           "content": "this is sample text 2"
  //         }
  //       },
  //       {
  //         "_index": "wikibooks",
  //         "_type": "topics",
  //         "_id": "AV9rB_GnVCo5YZGY-YnQ",
  //         "_score": 0.393369,
  //         "_source": {
  //           "title": "java programming book text 3",
  //           "content": "this is sample text 3"
  //         }
  //       }
  //     ]
  //   }
  // };
  console.log("hello");
  var div_name = "title";

  $.ajax({
    type: "GET",
    url: "documents/search",
    dataType: "json",
    success: function (data) {
      create_divs(data);
    }
  });

});

function create_divs(data) {
  for (i = 0; i < 10; i++) {
    var $div1 = $("<div>", {id: "title_" + [i]});
    $("#data" + i).append($div1);
    var $div2 = $("<div>", {id: "content_" + [i]});
    $("#data" + i).append($div2);
  }

  for (i = 0; i < 10; i++) {
    for(let j = 0;j < 10; j++) {
      console.log("****"+i,data[i].hits.hits[j]._source.title);
      $("#title_" + [j]).text("Title:    " + data[i].hits.hits[j]._source.title);
      $("#content_" + [j]).text("Content:  " + data[i].hits.hits[j]._source.content);
    }
  }
}
