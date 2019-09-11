/**
 * Created by Olya on 02.09.2019.
 */
document.addEventListener("DOMContentLoaded", function () {
        let card = document.querySelectorAll(".card");
        for (let i = 0; i < card.length; i++) {
            let btn = card[i].querySelector(".button");

            card[i].addEventListener('click', function () {
                if (card[i].classList.contains("grayscale")) {
                    card[i].classList.remove("grayscale");
                }
            });
            btn.addEventListener('click', function (event) {
                event.preventDefault();
                if (!card[i].classList.contains("grayscale")) {
                    card[i].addEventListener('mouseleave', function _listener() {
                        card[i].classList.add("grayscale");
                        card[i].removeEventListener("mouseleave", _listener);
                    });
                }
            });
        }
    }
);