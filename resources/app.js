// Img Select Options Start
(function($) {
    $.fn.mySelectDropdown = function(options) {
        return this.each(function() {
            var $this = $(this);

            $this.each(function() {
                var dropdown = $("<div />").addClass("f-dropdown selectDropdown");

                if ($(this).is(''))
                    dropdown.addClass('disabled');

                $(this).wrap(dropdown);

                var label = $("<span />").append($("<span />")
                    .text($(this).attr("placeholder"))).insertAfter($(this));
                var list = $("<ul />");

                $(this)
                    .find("option")
                    .each(function() {
                        var image = $(this).data('image');
                        if (image) {
                            list.append($("<li />").append(
                                $("<a />").attr('data-val', $(this).val())
                                .html(
                                    $("<span />").append($(this).text())
                                ).prepend('<img src="' + image + '">')
                            ));
                        } else if ($(this).val() != '') {
                            list.append($("<li />").append(
                                $("<a />").attr('data-val', $(this).val())
                                .html(
                                    $("<span />").append($(this).text())
                                )
                                .prepend('<img src="' + image + '">')
                            ));
                        }
                    });

                list.insertAfter($(this));

                if ($(this).find("option:selected").length > 0 && $(this).find("option:selected").val() != '') {
                    list.find('li a[data-val="' + $(this).find("option:selected").val() + '"]').parent().addClass("active");
                    $(this).parent().addClass("filled");
                    label.html(list.find("li.active a").html());
                }
            });

            if (!$(this).is(':disabled')) {
                $(this).parent().on("click", "ul li a", function(e) {
                    e.preventDefault();
                    var dropdown = $(this).parent().parent().parent();
                    var active = $(this).parent().hasClass("active");
                    var label = active ?
                        $('<span />').text(dropdown.find("select").attr("placeholder")) :
                        $(this).html();

                    dropdown.find("option").prop("selected", false);
                    dropdown.find("ul li").removeClass("active");

                    dropdown.toggleClass("filled", !active);
                    dropdown.children("span").html(label);

                    if (!active) {
                        dropdown
                            .find('option[value="' + $(this).attr('data-val') + '"]')
                            .prop("selected", true);
                        $(this).parent().addClass("active");
                    }

                    dropdown.removeClass("open");
                });

                $this.parent().on("click", "> span", function(e) {
                    var self = $(this).parent();
                    self.toggleClass("open");
                });

                $(document).on("click touchstart", function(e) {
                    var dropdown = $this.parent();
                    if (dropdown !== e.target && !dropdown.has(e.target).length) {
                        dropdown.removeClass("open");
                    }
                });
            }
        });
    };
})(jQuery);

$('select.f-dropdown').mySelectDropdown();
// Img select Option end




// Input Show Hide Start
// (function myFunction() {
//     $(function() {
//         var toggle;
//         return toggle = new Toggle('.calcBox');
//     });

//     this.Toggle = (function() {
//         class Toggle {
//             constructor(toggleClass) {
//                 this.el = $(toggleClass);
//                 this.tabs = this.el.find(".hs_pricing_toggle");
//                 this.panels = this.el.find(".panel");
//                 this.bind();
//             }

//             show(index) {
//                 var activePanel, activeTab;
//                 //update tabs
//                 this.tabs.removeClass('activate');
//                 activeTab = this.tabs.get(index);
//                 $(activeTab).addClass('activate');
//                 //update panels
//                 this.panels.hide();
//                 activePanel = this.panels.get(index);
//                 return $(activePanel).show();
//             }

//             bind() {
//                 return this.tabs.unbind('click').bind('click', (e) => {
//                     return this.show($(e.currentTarget).index());
//                 });
//             }

//         };

//         Toggle.prototype.el = null;

//         Toggle.prototype.tabs = null;

//         Toggle.prototype.panels = null;

//         return Toggle;

//     }).call(this);

// }).call(this);



var j = jQuery.noConflict();
j(document).ready(function() {
    j('.tab2c').hide();
    j('.tab1').click(function() {
        j('.tab1c').show();
        j('.tab2c').hide();
    });

    j('.tab2').click(function() {
        j('.tab2c').show();
        j('.tab1c').hide();
    });
});

//   Inut sHOW hIDE eND


$('.button').first().addClass('active');

$('.button').click(function() {
        var $this = $(this);
        $siblings = $this.parent().children(),
            position = $siblings.index($this);
        console.log(position);

        $('.content div').removeClass('active').eq(position).addClass('active');

        $siblings.removeClass('active');
        $this.addClass('active');
    })
    // Calculation End
    // Back To Top Start
window.onscroll = document.getElementById("toTop");

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// Back To Top End
$(function() {
    $("#chkPassport").click(function() {
        if ($(this).is(":checked")) {
            $("#dvPassport").show();
        } else {
            $("#dvPassport").hide();
        }
    });
});
$(function() {
    $("#chkPassport1").click(function() {
        if ($(this).is(":checked")) {
            $("#dvPassport1").show();
        } else {
            $("#dvPassport1").hide();
        }
    });
});
$(function() {
    $("#chkPassport2").click(function() {
        if ($(this).is(":checked")) {
            $("#dvPassport2").show();
        } else {
            $("#dvPassport2").hide();
        }
    });
});
// Modal-Video


$(document).ready(function() {
    var $videoSrc;
    $('.video-btnm').click(function() {
        $videoSrc = $(this).data("src");
    });
    // console.log($videoSrc);
    $('#myModalMedia').on('shown.bs.modal', function(e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#myModalMedia').on('hide.bs.modal', function(e) {
        $("#video").attr('src', $videoSrc);
    })
});
// Modal-Video ENd


// show/hide galery start
document.querySelectorAll(".left-blue-nav ").forEach(a => {
        a.addEventListener("click", () => {
            document.querySelectorAll(".extra").forEach(t => {
                t.style.display = "none";
            })
            let id = a.getAttribute("data-open");
            document.getElementById(id).style.display = 'block';
        });
    })
    // show/hide galery end



// Show/Hide Function Start
jQuery(document).ready(function() {
    // .not("body > #elementtokeep").remove();
    $(".product-info-item").not(".product-info-item.activDefault").hide();
    // let activeProduct = document.getElementById("div1")[0];
    // activeProduct.style.display = "block !important";
});
jQuery(function() {
    jQuery('.showSingle').click(function() {
        jQuery('.product-info-item').hide('.pr-info');
        jQuery('#div' + $(this).attr('target')).slideToggle();

    });
});
$('input').on('change', function() {
    $('body').toggleClass('blue');
});
// Show/Hide Function End


// First Slider Start


// First Slider end


// Back To Top Start
window.onscroll = document.getElementById("toTop")

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// Back To Top End



// Rotate Animation Start
$("document").ready(function() {
    //arrange blocks in a circle
    var block = $("#rotator div").get(),
        increase = Math.PI * 2 / block.length,
        x = 0,
        y = 0,
        angle = 0;

    for (var i = 0; i < block.length; i++) {
        var elem = block[i];
        x = 100 * Math.cos(angle) + 75;
        y = 100 * Math.sin(angle) + 75;
        elem.style.position = 'absolute';
        elem.style.left = x + 'px';
        elem.style.top = y + 'px';
        var rot = 90 + (i * (360 / block.length));
        angle += increase;
    }

});
// Rotate animation end





//  Parent Video Slider
// Galery slider start


var owl = $('.screenshot_slider').owlCarousel({
    loop: true,
    responsiveClass: true,
    nav: true,
    margin: 0,
    autoplayTimeout: 4000,
    smartSpeed: 400,
    center: true,
    navText: ['&#8249;', '&#8250;'],
    responsive: {
        0: {
            items: 3,
        },
        600: {
            items: 5,
        },
        1200: {
            items: 5,
        }
    }
});
jQuery(document.documentElement).keydown(function(event) {

    if (event.keyCode == 37) {
        owl.trigger('prev.owl.carousel', [400]);
    } else if (event.keyCode == 39) {
        owl.trigger('next.owl.carousel', [400]);
        //owl.trigger('owl.next');
    }

});
// Img show Sgtart
var modal = document.getElementById("myModal");
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var items = document.querySelectorAll("#myImg")
items.forEach(item => {
    item.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
})
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
        modal.style.display = "none";
    }
    // Img show end