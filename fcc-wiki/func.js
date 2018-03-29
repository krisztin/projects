$(document).ready(function() {

    //get data from API
      function fetch(query) {
        return $.ajax({
          url: "//en.wikipedia.org/w/api.php",
          data: {
            action: "query",
            list: "search",
            srsearch: query,
            format: "json",
            srnamespace: 0,
            srlimit: 5
          },
          dataType: "jsonp"
        });
      }
    
     // rendering data credit: https://www.roessland.com/blog/free-code-camp-5-a-wikipedia-viewer/
      
      function render(results) {
        //var output = $("#results");
        var html = results.map(function(result) {
            return (
              '<div class="title">' +
              "<h3>" +
              result.title +
              "</h3>" +
              "</div>" +
              '<div class="snippet">' +
              result.snippet +
              " " +
              '<a class="more" href="https://en.wikipedia.org/wiki/' +
              result.title +
              'target="_blank"' +
              '">' +
              "more >>" +
              "</a>" +
              "</div>"
            );
          })
          .join("\n\n");
        $("#results").html("");
        $(html).appendTo($("#results"));
      }
      
      // search with button
      $("#searchBtn").on("click", function(e) {
        e.preventDefault();
        var query = $("#search").val();
        fetch(query).done(function(data) {
          render(data.query.search);
        });
      });
    
      // search with enter
      $("#search").keydown(function(e) {
        if (e.keyCode == 13) {
          var query = $("#search").val();
          fetch(query).done(function(data) {
            render(data.query.search);
          });
        }
      });
      
    // autofill - Work in Progress
    /*  
      $("#search").autocomplete({
        source: function(request, response) {
            $.ajax({
                url: "//en.wikipedia.org/w/api.php",
                dataType: "jsonp",
                data: {
                    action: "opensearch",
                    format: "json",
                    search: request.term,
                    srnamespace: 0,
                    srlimit: 5,
                },
                success: function(data) {
                    response(data[1]);
                }
            });
        }*/
      
    });