// Full Slider Start
$('.slider').slick({
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 1,
    speed: 1000,
    dots: true,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: true,
    pauseOnDotsHover: false,
    responsive: [{
            breakpoint: 480,
            settings: {
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});
// Full Slider End

// Prduct Slider Start
$('.product-items').slick({
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 3,
    speed: 1000,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: true,
    pauseOnDotsHover: false,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]
});
// Prduct Slider end

// Media Slider


$('.media-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    autoplaySpeed: 500,
    slidesToShow: 1,
    speed: 1000,
    pauseOnFocus: false,
    pauseOnHover: true,
    pauseOnDotsHover: false,
});

// Media Slider End

$(document).ready(function() {
    $('.center-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        arrows: true,
        dots: false,
        speed: 900,
        centerPadding: '20px',
        infinite: true,
        autoplaySpeed: 5000,
        autoplay: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            }

        ]
    });
});

// NEws Slider