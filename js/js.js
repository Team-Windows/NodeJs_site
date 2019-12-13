function getGroupsList(var element){
  $.ajax({
    method :"GET",
    url : "http://localhost:2000/groups",
    format : "json",
    success : function (group_list) {
      $.each( group_list, function( i,group ) {
        var li_list =$( "<li>" ).attr("id", i ).html(group.name).addClass("wm_fz-25");
        li_list.appendTo( element );
      });
    }
  });
}

function addGroup() {
  let name = $('#i-group').val();
  let request = $.ajax({
    method :"POST",
    url : "http://localhost:2000/groups",
    data : {name : name},
    format : "json",
  });
  request.done(function( message ) {
    getGroups();
    message = message.message;
    $( "#message" ).text( message );
  });
  request.fail(function( jqXHR, textStatus ) {
    $("#message").text("Le champ est requis !");
  });
}

function getUsersList(var element){
  $.ajax({
    method :"GET",
    url : "http://localhost:2000/users",
    format : "json",
    success : function (user_list) {
      $.each( user_list, function( i,user ) {
        var li_list =$( "<li>" ).attr("id", i ).html(user.name).appendTo( "<span>" ).attr("title", name.veux );
        var div_lvl2_infos = li_list.appendTo("div").addClass("w70");
        var div_lvl2_btn = $("<input>").attr("type","submit").addClass("btn-sup");
        var div_lvl1 = div_lvl2_info.appendTo("div").addClass("flex flex_row");
         div_lvl1 = div_lvl2_btn.appendTo(div_lvl1)
        div_lvl1.appendTo( element );
      });
    }
  });
}
