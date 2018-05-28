


        var button = document.getElementsByClassName("box");
        var i;

        for (i = 0; i < button.length; i++) {
            button[i].addEventListener("click", function() {
                /* Toggle between adding and removing the "active" class,
                to highlight the button that controls the panel */
                this.classList.toggle("open");

                /* Toggle between hiding and showing the active panel */
                var panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                    panel.style.display = "none";
                } else {
                    panel.style.display = "block";
                }
            });
        }

        // search
          input = document.getElementById('search-box');
          input.addEventListener('keyup',search);

        function search() {
            // Declare variables
            var filter, searchQuestions,question, i;

            var filter = input.value.toUpperCase();
            searchQuestions = document.getElementsByClassName(".questions");
            question = document.getElementsByClassName('question');
            for (i = 0; i < question.length; i++) {
                  a = question[i].getElementsByTagName("h2")[0];
                  if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                      question[i].style.display = "";
                  } else {
                      question[i].style.display = "none";
                  }
                }
              }
