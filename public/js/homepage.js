$(document).ready(function(){
    // $("submit #coldCount").on("click",function(){
    //     event.preventDefault();
    //     console.log("hi")
    // })

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
                var y = $('<h4>').text(data[i].vent_story).addClass("storyID");

                var hot = $('<input>').attr("type","image")
                .addClass("submit")
                .attr("src","../assets/hotTab.png")
                .attr("data",data[i].story_id)
                .attr("id","hotCount")
                .click(function(){
                    $.ajax({
                        method: "put",
                        url:"/api/stories",
                        data:{
                            story_id:data[i].story_id,
                            hot_count:data[i].hot_count+=1
                        }
                    }).then(function(){
                        location.reload();
                    })
                });

                var hcRow = $("<div>").addClass("row").attr('id','hcRow');

                var hotCount = $("<p>").text(data[i].hot_count+"°")
                .attr("id","counter");

                var cold = $('<input>').attr("type","image")
                .addClass("submit")
                .attr("src","../assets/coldTab.png")
                .attr("data",data[i].story_id)
                .attr("id","coldCount")
                .click(function(){
                    $.ajax({
                        method: "put",
                        url:"/api/stories",
                        data:{
                            story_id:data[i].story_id,
                            hot_count:data[i].hot_count-=1
                        }
                    }).then(function(){
                        location.reload();
                    })
                });

                hcRow.append(hot,hotCount,cold);
                x.append(y,hcRow);

                $(".panel-body").append(x);
            };
        })
        
    });

    $("#tellBtn").on('click', function(){
        document.location.href="/add";
    });

    

});