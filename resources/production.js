$(document).ready(function() {
    // Sliders

    //// Slider Top
    $(".js-items-slider-container .slider-for").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: ".js-items-slider-container .slider-nav",
    });
    $(".js-items-slider-container .slider-nav").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: ".js-items-slider-container .slider-for",
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        arrows: false,
        accessibility: true,
        onAfterChange: function(slide, index) {
            //   $(".current-slide").attr("data-id", "contact0000");
            let cureerentItemSlider = $(".current-slide").attr("data-id");
            let allItems = document.querySelectorAll('[data-names="tablePro"]');
            //   console.log(allItems);

            allItems.forEach((item) => {
                item.style.display = "none";
                let dataId = item.getAttribute("id");
                console.log(dataId);
                if (cureerentItemSlider === item.getAttribute("id")) {
                    item.style.display = "block";
                }
            });

            //   console.log(this.$slides.get(index));
            $(".current-slide").removeClass("current-slide");
            $(this.$slides.get(index)).addClass("current-slide");
        },
        onInit: function(slick) {
            $(slick.$slides.get(0)).addClass("current-slide");
        },
    });
});
// Back To Top Start
window.onscroll = document.getElementById("toTop");

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// Back To Top End