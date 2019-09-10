/**
 * Created by Olya on 02.09.2019.
 */
document.addEventListener("DOMContentLoaded", function () {
        let card = document.querySelectorAll(".card");
        for (let i = 0; i < card.length; i++) {
            let btn = card[i].querySelector(".button");
            btn.addEventListener('click', function (event) {
                event.preventDefault();
                card[i].addEventListener('mouseleave', function _listener() {
                    card[i].classList.toggle("grayscale");
                    btn.textContent = btn.textContent === 'Подробнее' ? 'Забронировать' : 'Подробнее';
                    card[i].removeEventListener("mouseleave", _listener);
                });
            });
        }
    }
);