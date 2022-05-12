const debounce = function (func, delay) {
    let timer = null

    return function (...args) {
        clearTimeout(timer)

        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }
}

const throttle = function (func, delay) {
    let flag = true

    return function (...args) {
        if (!flag) return

        flag = false

        setTimeout(() => {
            func.apply(this, args)
            flag = true
        }, delay)

    }
}