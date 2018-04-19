$(document).ready(function(){

    $(".jobId").on('click', function () {
        var category = $(this).attr('id');
        console.log(category);
        $.get('api/stories/' + category, function(data){
            console.log(data);
            for(let i = 0; i<data.length;i++){
                var x = $('<div>').text(i+1).addClass("storyDiv");
                var y = $('<br><p>').text(data[i].vent_story)
                x.append(y)
                $(".panel-body").append(x);
            };
        })
    });

    // getStories();

    function getStories(){
        $.get('api/stories/',function(data){
            for(let i = 0; i<data.length;i++){
                var x = $('<div>').text(i+1).addClass("storyDiv");
                var y = $('<br><p>').text(data[i].vent_story)
                x.append(y)
                $(".panel-body").append(x);
            }
        })
    }

})

