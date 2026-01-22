document.addEventListener("DOMContentLoaded", () => {
    const headerText = "NEHA NAIR";
    const header = document.getElementById("typewriter-header");
    header.textContent = "";
    let index = 0;


    function typeHeader() {
        if(index < headerText.length) {
            header.textContent += headerText.charAt(index);
            index++;
            setTimeout(typeHeader, 100);
        }
    }

    typeHeader();
    
    const paragraphs = document.querySelectorAll(".main-text");

    paragraphs.forEach((p, index) => {
        p.classList.remove("show");
        setTimeout(() => {
            p.classList.add("show");
        }, index * 200); 
    });

    const Links = document.querySelectorAll(".links");

    Links.forEach(link => {
        link.addEventListener("mouseenter", () => {
            link.style.boxShadow = "0 0 25px 10px rgba(255, 200, 50, 0.8)";
            link.style.transform = "scale(1.05)";
        });

        link.addEventListener("mouseleave", () => {
            link.style.boxShadow = "none";
            link.style.transform = "scale(1)";
        });
    });
});



