/**
 * Created by Olya on 02.09.2019.
 */
document.addEventListener("DOMContentLoaded", function () {

        let room_card = document.querySelectorAll(".room_card");

        for (let i = 0; i < room_card.length; i++) {
            let btn = room_card[i].querySelector(".room_order_btn");
            btn.addEventListener('click', function () {
                room_card[i].addEventListener('mouseleave', function _listener () {
                    room_card[i].classList.toggle("grayscale");
                    if (room_card[i].classList.contains('grayscale')) {
                        btn.value = "Подробнее";
                    }
                    else {
                        btn.value = "Забронировать";
                    }
                    room_card[i].removeEventListener("mouseleave", _listener);
                });
            });
        }
    }
);