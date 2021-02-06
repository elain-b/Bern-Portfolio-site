$(document).ready(function () {

    $('#form').submit(function (event) {
      var formData = $('#form').serialize();
      $.ajax({
        url: "https://docs.google.com/forms/u/5/d/e/1FAIpQLSe4We74wldrvFfMZljvvpWB9K9P6DCdoc96HMqeQ1_vXmrMAQ/formResponse",
        data: formData,
        type: "POST",
        dataType: "xml",
        statusCode: {
          0: function () {
            // $(".end-message").slideDown();
            // $(".submit-btn").fadeOut();
            window.location.href = "thanks.html";
          },
          200: function () {
            $(".false-message").slideDown();
          }
        }
      });
      event.preventDefault();
    });

  });
