$(document).ready(function(){

    getStories();

    function getStories(){
        $.get('api/stories/:category',function(data){
            for(let i = 0; i<data.length;i++){
                var x = $('<div>').text(i+1).addClass("storyDiv");
                var y = $('<br><p>').text(data[i].vent_story)
                x.append(y)
                $(".panel-body").append(x);
            }
        })
    }

})

$(".dropdown-toggle").on('change', function () {
    alert($(this).find('option:selected').attr('id'));
});