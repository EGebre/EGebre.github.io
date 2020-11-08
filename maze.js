

$(function maze(){
    
    $("#start").click(function(){       
            $(".boundary").removeClass("youlose");

            $("#status").text("GAME STARTED!.");

            $(".boundary").mouseover(function(){
                $(".boundary").addClass("youlose");
            })
           
            $(".boundary").mouseover(function(){    
                
                if ( ($(".boundary").hasClass("youlose"))){
                    $("#status").text("You Lose! :(");
                }
            })
        
            
            $("#end").mouseover(function(){
               
                
                if ( !($(".boundary").hasClass("youlose"))){
                    $("#status").text("You win! :)");
                }
                else{
                    $("#status").text("You Lose! :(");
                }
        
            })
    })

    
})



$(document).on("ready", maze);
