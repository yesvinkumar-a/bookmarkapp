$(function(){
    var url: "http://localhost/localhost-bookmarkapp/php-code/json.php",
    $.getJSON(url, function(result) {
        console.log(result);
        $.each(result, function(i, field) {
            var id = field.id;
            var link = field.link;
            var category = field.duration;
            $("#bookmarkList").append("<a class='item' href='form.html?id=" + id + "&link=" + link + "&category=" + category "<h2>" + link + " </h2><p>" + category + "</p></a>");
        });
    });
})
