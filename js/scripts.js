/*!
 * Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
 */
//
// Scripts
//
var fname = document.getElementById("name").value;
var email = document.getElementById("email").value;
var subject = document.getElementById("subject").value;
var message = document.getElementById("message").value;
let formObject = {
  fname: fname,
  email: email,
  subject: subject,
  message: message,
};

function validateForm() {
  fname = document.getElementById("name").value;
  email = document.getElementById("email").value;
  subject = document.getElementById("subject").value;
  message = document.getElementById("message").value;
  formObject = {
    fname: fname,
    email: email,
    subject: subject,
    message: message,
  };

  if (formObject.fname === "") {
    alert("Must have a username");
    document.getElementById("name").focus();
    return false;
  }

  if (formObject.email === "") {
    alert("Must have a EmailAddress");
    document.getElementById("email").focus();
    return false;
  }

  if (formObject.subject === "") {
    alert("Must have a Subject");
    document.getElementById("subject").focus();
    return false;
  }
  if (formObject.message === "") {
    alert("Must have a Message");
    document.getElementById("message").focus();
    return false;
  }

  // Validate name: Only letters allowed
  if (!/^[a-zA-Z]+(?:[a-zA-Z])?$/.test(formObject.fname)) {
    alert("Invalid name. It should contain only letters.");
    document.getElementById("name").focus();
    return false;
  }

  // Validate email format
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formObject.email)) {
    alert("Invalid email address. Please provide a valid email.");
    document.getElementById("email").focus();
    return false;
  }

  return true;
}
window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

// form script

$("#submit-form").submit((e) => {
  e.preventDefault();
  const response = validateForm();
  if (response === false) {
    return;
  }

  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbzAzYJSz634dYEutdBgBW3P83H_MDzn4UP7KihuKDuHdXOykD3WfxCQVDHs6fx_hMil/exec",
    data: formObject,
    method: "post",
    success: function (response) {
      console.log(formObject);
      console.log(response);
      alert("Form submitted successfully");

      window.location.reload();
      // window.location.href="https://google.com"
    },
    error: function (err) {
      alert("Something went wrong");
    },
  });
});
