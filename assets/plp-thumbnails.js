class MediaThumbnail extends HTMLElement {
  constructor() {
    super();
    this.productId = this.getAttribute('data-product');
    this.productImage = document.querySelector(`.media--${this.productId} .product--image`);
    this.images = this.querySelectorAll('.variant--image');
    this.mediaLength = this.images.length - 1;
    this.slidePrev = this.querySelector('.slide--prev');
    this.slideNext = this.querySelector('.slide--next');
    this.count = 0;

    this.slidePrev.addEventListener('click', (event) => {
      event.preventDefault();
      this.prev()

    })
    this.slideNext.addEventListener('click', (event) => {
      event.preventDefault();
      this.next()
    })
  }

  toggleImage() {
    let imageSrc = this.images[this.count].getAttribute('src');
    this.productImage.setAttribute('src', imageSrc);
    this.productImage.setAttribute('srcset', imageSrc);
  }

  prev() {
    if(this.count == 0) {
      return false
    } else {
      this.count = this.count - 1;
    }
    this.toggleImage()

  }
  
  next(){
    if(this.count == this.mediaLength) {
      return false
    } else {
      this.count = this.count + 1;
    }
    this.toggleImage();
  }

  connectedCallback() {

    if(this.images.length <= 1) {
      this.remove()
    }
  }

}

customElements.define('media-thumbnail', MediaThumbnail);