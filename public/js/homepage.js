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
        var category = $(this).attr('id');
        $(".panel-heading").text($(this).text());
        $.get('api/stories/' + category, function(data){
            for(let i = 0; i<data.length;i++){
                var x = $('<div>').text(i+1).addClass("storyDiv");
                var y = $('<br><p>').text(data[i].vent_story)
                x.append(y)
                $(".panel-body").append(x);
            };
        })
    });
});

