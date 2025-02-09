export function product1st(){
    const config = {
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
    
    new Glide('.glide',config).mount()
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

new Glide('.glide2',config2).mount()