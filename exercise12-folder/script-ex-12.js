const buttons = document.querySelectorAll(".details-button");
const details = document.querySelectorAll(".program-details");
const defaultText = document.getElementById("default-text");
const program = document.getElementById("program");


buttons.forEach(function(button){
    button.addEventListener('click', function(){
        details.forEach(function(detail){
            detail.hidden = true;
        });

        const target = button.dataset.target;
        document.getElementById(target).hidden = false;
        
        program.value = target;

        defaultText.hidden = true;
    });
});

