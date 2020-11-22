// moblie toggle nav
$(document).ready(function() {
    // board Tab menu
    $(".tab-link").click(function () {
        const id = $(this).attr("data-tab");
        $(".tab-link").removeClass("active");
        $(this).addClass("active");

        $(".tab-content").removeClass("current");
        $("#" + id).addClass("current");
    });

});

if (document.body.clientWidth < 768) {

    const showMenu = (toggleId, navId, close) => {
        const toggle = document.getElementById(toggleId)
        const nav = document.getElementById(navId)
        const cBtn = document.getElementById(close)


        if (toggle && nav) {
            toggle.addEventListener('click', () => {
                nav.classList.toggle('show')
            })
        }

        if (cBtn) {
            cBtn.addEventListener('click', () => {
                nav.classList.remove('show')
            })
        }
    }

    showMenu('navToggle', 'nav-menu', 'closeBtn')

    $(document).ready(function () {
        // accordion
        $(".accordion").on("click", function () {
            if ($(this).hasClass("active")) {
                $(this).removeClass("active");
            } else {
                $(this).addClass("active");
            }
            $(this).next(".depth_2").slideToggle(200);
        });
    });
}


