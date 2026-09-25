// =========================
// AGOSHMC - SCRIPT.JS
// =========================

// Sayfa tamamen yüklendiğinde çalışır
document.addEventListener("DOMContentLoaded", () => {

    // Menü bağlantılarına yumuşak geçiş
    const menuLinks = document.querySelectorAll('a[href^="#"]');

    menuLinks.forEach(link => {
        link.addEventListener("click", event => {

            const targetId = link.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });


    // Sayfa açıldığında küçük animasyon
    const sections = document.querySelectorAll(
        ".card, .empty-box, .section-title"
    );

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }

            });
        },
        {
            threshold: 0.12
        }
    );

    sections.forEach(section => {
        observer.observe(section);
    });


    // AGOSHMC konsol mesajı
    console.log(
        "%cAGOSHMC",
        "color:#19e6d2;font-size:25px;font-weight:bold;"
    );

    console.log(
        "Minecraft Türkmençe platformasyna hoş geldiňiz!"
    );

});
