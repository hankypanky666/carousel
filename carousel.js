// 1) контейнер
// 2) ширина картинки или 150
// 3) количество кратинок за одну прокрутку
// 4) количество видимых картинок

class Carousel {
    constructor(options) {
        this.container = options.container;
        this.imgWidth = options.width || 150;
        this.imgCount = options.imgCount || 1;
        this.imgCountView = options.count || 3;
    }
}