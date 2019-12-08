document.addEventListener('DOMContentLoaded', function (e) {
        console.log('DOM');

        const hamburger = document.querySelector('.hamburger');
        const links = document.querySelector('.bottom-nav');
        const seperateLinks = document.querySelectorAll('.links-list li');
        const hamburgerIcon = document.querySelector('.fa-bars');

        window.addEventListener('click', function(e){
                if (hamburger.contains(e.target)) {
                        if(links.classList.contains("hidden")) {
                                links.classList.remove("hidden");
                                links.classList.add("active");
                                hamburgerIcon.className = "fas fa-times";
                        } else {
                                links.classList.remove("active");
                                links.classList.add("hidden");
                                hamburgerIcon.className = "fas fa-bars";
                        }
                } else {
                        links.classList.remove("active");
                        links.classList.add("hidden");
                        hamburgerIcon.className = "fas fa-bars";
                        // Clicked outside the box
                }
        });

        for (let i = 0; i < seperateLinks.length; i++) {
                seperateLinks[i].addEventListener('click', () => {
                        links.classList.remove("active");
                        links.classList.add("hidden");
                });
        }
});