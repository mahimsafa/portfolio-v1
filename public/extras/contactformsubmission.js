$('#contact-form').on('submit',function(e){
    //optional validation code here

    e.preventDefault();
  
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycby6-tKE3pyKqHQ8sYjTo5Xg1R2LhE7rKbaSUiFZHToMbBiTR6Gh4upTGoU2t53n0yuN/exec",
        method: "POST",
        dataType: "json",
        data: $(".contact1-form").serialize(),
        success: function(response) {
            
            if(response.result == "success") {
                $('.contact1-form')[0].reset();
                alert('Thank you for contacting us.');
                return true;
            }
            else {
                alert("Something went wrong. Please try again.")
            }
        },
        error: function() {
            
            alert("Something went wrong. Please try again.")
        }
    })
});