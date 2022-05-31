// IntersectionObserver

document.addEventListener("DOMContentLoaded", () => {
    if ("IntersectionObserver" in window) {
        const imgs = document.getElementsByTagName("img");
        const imageObserve = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                // 通过该属性判断元素是否出现在视口内
                if (entry.isIntersecting) {
                    // entry.target能够取得那个dom元素
                    const img = entry.target;
                    img.src = img.dataset.src;
                    // 解除监视
                    imageObserve.unobserve(img);
                }
            });
        });
        [...imgs].forEach((img) => {
            // 开启监视每一个元素
            imageObserve.observe(img);
        });
    } else {
        alert("您的浏览器不支持IntersectionObserver！");
    }
});


// getBoundingClientRect

const imgs = document.getElementsByTagName('img');
// 判断元素是否出现在视口内
function isShow(el) {
    // 视口高度
    const clientH = window.innerHeight;
    const bound = el.getBoundingClientRect();
    // 判断元素左上角到视口顶部的距离是否小于视口高度
    return bound.top < clientH;
};

// 加载图片
function showImg(el) {
    if (!el.src) {
        el.src = el.dataset.src;
    }
}

// 懒加载
function lazyLoad() {
    console.log('加载了');
    [...imgs].forEach(el => {
        if (isShow(el)) {
            showImg(el);
        }
    })
};

lazyLoad();

// 节流函数
function throttle(fn, delay) {
    let timer = null;
    return () => {
        if (timer) {
            return;
        };
        timer = setTimeout(() => {
            fn(imgs);
            timer = null;
        }, delay);
    }
};

window.onscroll = throttle(lazyLoad, 500);