$(document).ready(function(){
    var jobs = ["Retail","Food Service/Hospitality","Education","IT/Computers","Construction and Real Estate","Health Care","Transportation","Self-Employed"];

    function jobBtns(){
        for(let i = 0;i<jobs.length;i++){
            var newBtn = $("<button>").text(jobs[i]).attr("id",i+1).addClass("jobId");
            $(".jobsBtns").append(newBtn);
        }
    }
    jobBtns();

    $(".jobId").on('click', function () {
        $(".panel-body").empty();
        var tags = [
            "Funny",
            "Sad",
            "Infuriating",
            "Touching",
            "Inspirational",
            "Motivational",
            "Scary",
            "Depressing",
            "Crazy",
            "IFUW"]
        var category = $(this).attr('id');
        $(".panel-heading").text($(this).text());
        $.get('api/stories/' + category, function(data){
            for(let i = 0; i<data.length;i++){
                var x = $('<div><br>').text("Tags: "+tags[data[i].tag_id1]+", "+tags[data[i].tag_id2]+", "+tags[data[i].tag_id1]).addClass("storyDiv");
                var y = $('<h3>').text(data[i].vent_story).addClass("storyID");
                x.append(y)
                $(".panel-body").append(x);
            };
        })
    });
});

