const productsContainer = document.getElementById("product-list");

export function product1st(){
    const config = {
        bound: true,
        startAt: 0,
        perView: 4,
        gap:10,
        autoplay: 2000,
        breakpoints : {
            992: {
                perView:3,
            },
            768: {
                perView:2,
            },
            576: {
                perView:1,
            }
        }
    }
    
    productsContainer && new Glide('.glide',config).mount()
}

const config2 = {
    type: 'carousel',
    startAt: 0,
    perView: 4,
    gap:10,
    autoplay: 2000,
    breakpoints : {
        992: {
            perView:3,
        },
        768: {
            perView:2,
        },
        576: {
            perView:1,
        }
    }
}

productsContainer && new Glide('.glide2',config2).mount();


export function singleThumbs() {
    const config3 = {
        perWiew: 5,
        breakpoints: {
            992: {
                perWiew: 3,
            },
            768: {
                perWiew: 2,
            },
            576: {
                perWiew: 1,
            },
        },
    };
    
    new Glide(".product-thumb", config3).mount();
}

