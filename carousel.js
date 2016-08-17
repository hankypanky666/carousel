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

        this._elemWidth = 0;
        this._mLeft = 0;
        this._mRight = 0;
        this._elemMarginStatus = 0;

        this._init();
        console.log(this);
    }

    _init() {
        this._elemWidth = this._getElementWidth();
        let containerWidth = this._getFullWidth(this._elemWidth);
        this.container.querySelector('ul').style.width = containerWidth + 'px';
        this._setElementWidth(this._elemWidth);
        this._addButtons();

        console.log('elemWidth: ', this._elemWidth);
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
        next.addEventListener('click', this._listNext.bind(this));
        prev.addEventListener('click', this._listPrev.bind(this));
    }

    _listNext (e) {
        if (Math.abs(this._elemMarginStatus) >= (this._getFullWidth(this._elemWidth) - this._elemWidth * this.imgCountView)){
            e.target.disabled = !e.target.disabled;
        } else {
            this._elemMarginStatus -= this._elemWidth;
            this.container.querySelector('ul').style.marginLeft = this._elemMarginStatus + 'px';
        }

    }

    _listPrev (e) {
        if (!this._elemMarginStatus <= 0) {
            this._elemMarginStatus += this._elemWidth;
            this.container.querySelector('ul').style.marginLeft = this._elemMarginStatus + 'px';
        } else {
            e.target.disabled = !e.target.disabled;
        }
    }
}



