$(document).ready(function(app){
    var tags = ["funny","sad","infuriating","touching","inspirational","motivational",
    "scary","depressing","crazy","i &$*@&# up"];

    var addTags = function(){
        var tagDiv = $("<div>");
        for(let i = 0;i<tags.length;i++){
            var tag = $("<input>").attr("type","checkbox")
            .attr("id",i);
            var label = $("<label>").attr("for",tags[i]).text(tags[i]);
            tagDiv.append(tag,label);
        }
        $("#tagArr").append(tagDiv);
    }

    

    addTags();    

    $("#submit-btn").on("click", function(){
        var id = $(".custom-select").find('option:selected').attr('id');
        console.log(id)
        var tagsArr=[]
        var storie = $('#userStory').val().trim();
        
        var checked = 0;
        $('input[type=checkbox]').each(function () {
            if(this.checked){
                checked++;
                tagsArr.push(this.id);
            }
            
        });
        checkTags();
        
        function checkTags(){
            if (checked>0 && checked <= 3){
                var newStorie = {
                    work_id1:id,
                    user_id:0,
                    vent_story:storie,
                    tag_id1:tagsArr[0],
                    tag_id2:tagsArr[1],
                    tag_id3:tagsArr[2]
                };
                $.post("/api/stories", newStorie)
                    .then(function(){
                        alert("Thanks for sharing!");
                        document.location.href="/homepage";
                    }
                    );
            }else{alert('Please select a tag for your story')};
        }
        
            //need to write the route to getStories
  
    })
})