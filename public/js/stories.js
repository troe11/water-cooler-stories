$(document).ready(function(){
    var tags = ["funny","sad","infuriating","touching","inspirational","motivational",
    "scary","depressing","crazy","i &$*@&# up"];

    var addTags = function(){
        var tagDiv = $("<div>");
        for(let i = 0;i<tags.length;i++){
            var tag = $("<input>").attr("type","checkbox")
            .attr("id",tags[i]);
            var label = $("<label>").attr("for",tags[i]).text(tags[i]);
            tagDiv.append(tag,label);
        }
        $("#tagArr").append(tagDiv);
    }

    function getStories(){
        $.get('api/stories',function(data){
            
        })
    }

    addTags();    

    $("#submit-btn").on("click", function(){
        var job = $("#job").val();
        var tagsArr=[]
        var storie = $('#userStory').val().trim();
        $('input[type=checkbox]').each(function () {
            if(this.checked){
                tagsArr.push(this.id);
            }
        });
        var newStorie = {
            user_id:0,
            vent_story:storie,
            tag_id1:tagsArr[0],
            tag_id2:tagsArr[1],
            tag_id3:tagsArr[2]
        }
        $.post("/api/stories", newStorie)
            .then(getStories);
            //need to write the route to getStories
  
    })
})