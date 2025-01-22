$(document).ready(function () {
    // For Cricket form submission
    $("form[action='/submit-cricket']").on("submit", function (event) {
      event.preventDefault(); // Prevent default form submission
  
      var form = $(this);
      $.ajax({
        type: "POST",
        url: form.attr("action"),
        data: form.serialize(), // Serialize the form data
        success: function (response) {
          // Show the thank-you message in the Cricket section
          $("#thank-you-cricket").html('<p>Thank you for your Cricket booking!</p>');
        },
        error: function () {
          alert("There was an error submitting your form. Please try again.");
        }
      });
    });
  
    // For Football form submission
    $("form[action='/submit-football']").on("submit", function (event) {
      event.preventDefault();
  
      var form = $(this);
      $.ajax({
        type: "POST",
        url: form.attr("action"),
        data: form.serialize(),
        success: function (response) {
          // Show the thank-you message in the Football section
          $("#thank-you-football").html('<p>Thank you for your Football booking!</p>');
        },
        error: function () {
          alert("There was an error submitting your form. Please try again.");
        }
      });
    });
  
    // For Basketball form submission
    $("form[action='/submit-basketball']").on("submit", function (event) {
      event.preventDefault();
  
      var form = $(this);
      $.ajax({
        type: "POST",
        url: form.attr("action"),
        data: form.serialize(),
        success: function (response) {
          // Show the thank-you message in the Basketball section
          $("#thank-you-basketball").html('<p>Thank you for your Basketball booking!</p>');
        },
        error: function () {
          alert("There was an error submitting your form. Please try again.");
        }
      });
    });
  
    // For Newsletter form submission
    $("form[action='/submit-newsletter']").on("submit", function (event) {
      event.preventDefault();
  
      var form = $(this);
      $.ajax({
        type: "POST",
        url: form.attr("action"),
        data: form.serialize(),
        success: function (response) {
          // Show the thank-you message in the Newsletter section
          $("#thank-you-newsletter").html('<p>Thank you for subscribing to our newsletter!</p>');
        },
        error: function () {
          alert("There was an error submitting your form. Please try again.");
        }
      });
    });
  });
  