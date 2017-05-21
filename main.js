$(document).ready(function () {

function getQuote (){
    var url = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
    $.getJSON(url, function (data){
        
     $(".quote").html(data[0].content);
     $(".author").html("- " + data[0].title)
     
    });
};
$(".btn").on("click", function(){
    getQuote();
});
});