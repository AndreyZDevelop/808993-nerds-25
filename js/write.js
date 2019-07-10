 var write = document.querySelector(".popup");
    var popup = document.querySelector(".modal");
    var close = document.querySelector(".modal-close");

    var myName = popup.querySelector("[name=name");
    var myEmail = popup.querySelector("[name=email]");
    var myLetter = popup.querySelector("[name=comment]");

    var nameStorage = localStorage.getItem("name");
    var emailStorage = localStorage.getItem("email");

    var form = popup.querySelector("form");

    var isStorageSupport = true;
    var firstStorage = "";
    var secondStorage = "";

    try {
      firstStorage = localStorage.getItem("name");
      secondStorage = localStorage.getItem("email");
    } catch (err) {
      isStorageSupport = false;
    }

    write.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.add("modal-show");
      if (nameStorage || emailStorage) {
        myName.value = nameStorage;
        myEmail.value = emailStorage;
        myLetter.focus();
      } else {
        myName.focus();
      }
    });

    close.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
    });

    form.addEventListener("submit", function (evt) {
      if (!myName.value || !myEmail.value || !myLetter.value) {
        evt.preventDefault();
        if (!myName.value) {
          myName.classList.add("modal-error");
        }

        if (!myEmail.value) {
          myEmail.classList.add("modal-error");
        }

        if (!myLetter.value) {
          myLetter.classList.add("modal-error");
        }

      } else {
        if (isStorageSupport) {
        localStorage.setItem("name", myName.value);
        localStorage.setItem("email", myEmail.value);
      }
    }
   });

    window.addEventListener("keydown", function (evt) {
         if (evt.keyCode === 27) {
          if (popup.classList.contains("modal-show")) {
            evt.preventDefault();
            popup.classList.remove("modal-show");
          }
         }
    })