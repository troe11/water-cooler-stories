$(document).ready(function(){

    $(".jobId").on('click', function () {
        $(".panel-body").empty();
        var category = $(this).attr('id');
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
});

