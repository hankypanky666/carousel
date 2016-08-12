// 1) контейнер
// 2) ширина картинки или 150
// 3) количество кратинок за одну прокрутку
// 4) количество видимых картинок

class Carousel {
    constructor(options) {
        this.container = document.getElementById(options.container);
        this.width = options.width
            || parseInt(getComputedStyle(this.container, "").width) - parseInt(getComputedStyle(this.container, "").paddingLeft) * 2
            || this.container.parentElement.clientWidth;
        this.imgWidth = options.imgWidth || 150;
        this.imgCount = options.imgCount || 1;
        this.imgCountView = options.count || 3;

        this._init();
        console.log(this);
    }

    _init() {
        let elemWidth = this._getElementWidth();
        let containerWidth = this._getFullWidth(elemWidth);
        this.container.querySelector('ul').style.width = containerWidth + 'px';
        this._setElementWidth(elemWidth);
        this._addButtons();

        console.log('elemWidth: ', elemWidth);
        console.log('container: ', containerWidth);
    }

    _getElementWidth () {
        return Math.floor(parseFloat(parseInt(this.width) / this.imgCountView));
    }

    _setElementWidth (w) {
        var els = this.container.querySelectorAll('li');
        for (let i = 0; i < els.length; i++) {
            els[i].style.width = w + "px";
            els[i].style.textAlign = "center";
        }
    }

    _getFullWidth (w) {
        return parseInt(w * this.container.querySelectorAll('li').length);
    }

    _addButtons () {
        let prev = document.createElement('a');
        let next = document.createElement('a');
        let img = document.createElement('img');
        prev.appendChild(img).setAttribute('src', 'img/prev.png');
        next.appendChild(img.cloneNode()).setAttribute('src', 'img/next.png');
        prev.className = 'prev c-link';
        next.className = 'next c-link';
        next.style.height = next.style.lineHeight = this.container.clientHeight + 'px';
        prev.style.height = prev.style.lineHeight = this.container.clientHeight + 'px';

        this.container.appendChild(next);
        this.container.insertBefore(prev, this.container.firstChild);
    }
}

class UpdateElement {
    constructor(options) {
        this.parent = options.parent || null;
        this.target = options.target;
        this.targetClass = options.targetClass || null;
        this.element = options.element || 'div';
        this._init();
    }

    _init() {
        var el = document.createElement(this.element);

        if(this.targetClass){
            el.className = this.targetClass;
        }

        //console.log(el);
        if(this.parent) {
            this.parent.querySelectorAll(this.target);
        } else {
            var elms = document.body.querySelectorAll(this.target);
            elms.forEach(function (item, index) {
                console.log(item);
            });
            //console.log(elms);
        }
    }

}


