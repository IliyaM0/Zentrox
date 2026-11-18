/* showcase animation */
export function initHeroAnimation() {

    const tl = gsap.timeline({
        defaults: {
            ease: "power3.out",
        }
    });

    tl.from(".hero-macbook", {
        y: 50,
        opacity: 0,
        duration: 1,
    })

    .from(".hero-phone", {
        x: 80,
        y: 30,
        rotate: 10,
        opacity: 0,
        duration: 0.8,
    }, "-=0.5")

    .from(".hero-airpods", {
        x: 40,
        y: -80,
        rotate: 20,
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
    }, "-=0.55")

    /* airpod and iphone float animation */
    .call(() => {

        gsap.to(".hero-phone", {
            y: -10,
            rotate: -2,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });

        gsap.to(".hero-airpods", {
            y: -15,
            rotate: 5,
            duration: 3.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });

        /* hero section particles animation */
        gsap.to(".hero-particle", {
            y: -15,
            opacity: 0.6,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: {
                each: 0.4,
                repeat: -1,
                yoyo: true
            }
        });

    });

    /* Title word change animation */
    const words = [
        "Future",
        "Innovation",
        "Next Era",
        "Power"
    ];

    const dynamicWord = document.querySelector("#dynamicWord");
    let index = 0;

    if (dynamicWord) {
        setInterval(() => {

            gsap.to(dynamicWord, {
                opacity: 0,
                y: 10,
                duration: 0.3,
                ease: "power2.out",
                onComplete: () => {

                    index = (index + 1) % words.length;

                    dynamicWord.textContent = words[index];

                    gsap.to(dynamicWord, {
                        opacity: 1,
                        y: 0,
                        duration: 0.4,
                        ease: "power2.out"
                    });

                }
            });

        }, 2500);
    }

}