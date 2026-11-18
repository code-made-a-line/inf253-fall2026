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

const form = document.querySelector("#program-registration-form");
const confirmationMessage = document.getElementById("program-confirmation");

form.addEventListener("submit", function(event){
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const programOption = document.getElementById("program");
    const program = programOption.options[programOption.selectedIndex].text;

    const message = "Thank you, " + name + "!" + " You have been registered for the " + program + " program.";

    confirmationMessage.textContent = message;

    confirmationMessage.hidden = false;
});