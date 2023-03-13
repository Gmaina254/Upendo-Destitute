// Change nav background color on scroll

$(window).scroll(function () {
  $("nav").toggleClass("scrolled", $(this).scrollTop() > 50);
});

// Swiper js

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false 
    }, 
    loop: true,
});

// Clear contact field

function clearFields() {
// Get all the input fields and textarea by their IDs
    var nameField = document.getElementById("nameInput");
    var emailField = document.getElementById("emailInput");
    var subjectField = document.getElementById("subjectInput");
    var messageField = document.getElementById("messageInput");

    // Clear the values of all the input fields and textarea
    nameField.value = "";
    emailField.value = "";
    subjectField.value = "";
    messageField.value = "";

    stateHandle();
}


let input = document.querySelector(".input");
let button = document.querySelector(".button");

button.disabled = true; //setting button state to disabled

input.addEventListener("change", stateHandle);

function stateHandle() {
  if (document.querySelector(".input").value === "") {
    button.disabled = true; //button remains disabled
  } else {
    button.disabled = false; //button is enabled
  }
}

// Success Alert

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

    const alert = (message, type) => {
        const wrapper = document.createElement('div')
        wrapper.innerHTML = [
            `<div class="alert alert-${type} alert-dismissible" role="alert">`,
            `   <div>${message}</div>`,
            '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
            '</div>'
        ].join('')

        alertPlaceholder.append(wrapper)
    }

    const alertTrigger = document.getElementById('liveAlertBtn')
        if (alertTrigger) {
            alertTrigger.addEventListener('click', () => {
                alert('Thank you for reaching us, please call us or contact us through our email below.', 'success')
            })
        }