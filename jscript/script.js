  // Get the modal elements
  const modal1 = document.getElementById("myModal1");
  const modal2 = document.getElementById("myModal2");
  const modal3 = document.getElementById("myModal3");
  const modal4 = document.getElementById("myModal4");
  const modal5 = document.getElementById("myModal5");
  const modal6 = document.getElementById("myModal6");
  const modal7 = document.getElementById("myModal7");
  const modal8 = document.getElementById("myModal8");
  const modal9 = document.getElementById("myModal9");
  // Get the buttons that open the modals
  const btn1 = document.getElementById("openModal1");
  const btn2 = document.getElementById("openModal2");
  const btn3 = document.getElementById("openModal3");
  const btn4 = document.getElementById("openModal4");
  const btn5 = document.getElementById("openModal5");
  const btn6 = document.getElementById("openModal6");
  const btn7 = document.getElementById("openModal7");
  const btn8 = document.getElementById("openModal8");
  const btn9 = document.getElementById("openModal9");
  // Get the close buttons
  const close1 = document.getElementById("closeModal1");
  const close2 = document.getElementById("closeModal2");
  const close3 = document.getElementById("closeModal3");
  const close4 = document.getElementById("closeModal4");
  const close5 = document.getElementById("closeModal5");
  const close6 = document.getElementById("closeModal6");
  const close7 = document.getElementById("closeModal7");
  const close8 = document.getElementById("closeModal8");
  const close9 = document.getElementById("closeModal9");

  // When the user clicks the buttons, open the corresponding modals
  btn1.onclick = function() {
      modal1.style.display = "block";
  };

  btn2.onclick = function() {
      modal2.style.display = "block";
  };

  btn3.onclick = function() {
      modal3.style.display = "block";
  };
  btn4.onclick = function() {
    modal4.style.display = "block";
};

btn5.onclick = function() {
    modal5.style.display = "block";
};

btn6.onclick = function() {
    modal6.style.display = "block";
};
btn7.onclick = function() {
    modal7.style.display = "block";
};

btn8.onclick = function() {
    modal8.style.display = "block";
};

btn9.onclick = function() {
    modal9.style.display = "block";}



  // When the user clicks on the close buttons, close the modals
  close1.onclick = function() {
      modal1.style.display = "none";
  };

  close2.onclick = function() {
      modal2.style.display = "none";
  };

  close3.onclick = function() {
      modal3.style.display = "none";
  };
  close4.onclick = function() {
    modal4.style.display = "none";
};

close5.onclick = function() {
    modal5.style.display = "none";
};

close6.onclick = function() {
    modal6.style.display = "none";
};
close7.onclick = function() {
    modal7.style.display = "none";
};

close8.onclick = function() {
    modal8.style.display = "none";
};

close9.onclick = function() {
    modal9.style.display = "none";
};
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target === modal1 || event.target === modal2 || event.target === modal3) {
          event.target.style.display = "none";
      }
  };





  