$(function(){
    var url = "http://localhost/Projects/localhost-bookmarkapp/php-code/bookmark_list.php";
    $.getJSON(url, function(result) {
        //alert(result.length);
  			if(result.length>1) {
  				$("#listview").empty();
  				$.each(result, function(i, field) {
  					var id = field.id;
  					var link = field.link;
  					var category = field.category;
  					$("#bookmarkList").append("<a class='item list-group-item' target='_blank' href='" + link + "'><h4 class='list-group-item-heading'>" + link + " </h4><p class='list-group-item-text'>" + category + "</p></a>");
  				});
  			}
  			else {
  				$("#bookmarkList").append("No results found");
  			}
    });

    $("#insert").click(function() {
           var link = $("#link").val();
           var category = $("#category").val();
           var dataString = "link=" + link + "&category=" + category + "&insert=";
           if ($.trim(link).length > 0 & $.trim(category).length > 0) {
               $.ajax({
                   type: "POST",
                   url: "http://localhost/Projects/localhost-bookmarkapp/php-code/bookmark_insert.php",
                   data: dataString,
                   crossDomain: true,
                   cache: false,
                   beforeSend: function() {
                       $("#insert").val('Connecting...');
                   },
                   success: function(data) {
                       if (data == "success") {
                           alert("inserted");
                           //$("input").val('');
                           //$("#insert").val('submit');
                           $('#myModal').modal('hide');
                           location.reload();
                       } else if (data == "error") {
                           alert("error");
                       }
                   }
               });
           }
           return false;
       });
})
