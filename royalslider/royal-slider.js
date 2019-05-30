jQuery(document).ready(function($) {
        $(".royalSlider .royalSlider__images").royalSlider({
            autoScaleSlider: true,
            autoScaleSliderWidth: 1000,
            autoScaleSliderHeight: 714,
            addActiveClass: true,
            arrowsNav: false,
            controlNavigation: 'none',
            imageScaleMode: 'fill',
            imageAlignCenter: true,
            keyboardNavEnabled: false,
            navigateByClick: false,
            numimagesToPreload: 8,
            sliderDrag: true,
            sliderTouch: true,
            slidesSpacing: 30,
            arrowsNavHideOnTouch: true,
            controlNavigation: 'bullets',
            easeInOut: 'easeInOutExpo',

            autoPlay: {
    		      enabled: false,
    	      },

            // This doesn't affect the drag animation.
            transitionSpeed: 500,

            visibleNearby: {
                enabled: true,
                // As this is set to 1, the slider will look "like a normal slider".
                centerArea: 1,
                center: true,
                navigateByCenterClick: false
            }

        });

        $(".royalSlider .royalSlider__images").each(function() {
          var $this = $(this);
          var rsi = $this.data('royalSlider');

          rsi.ev.on('rsBeforeAnimStart', function(event) {
            manipulateArrow(event.target.slider.next().children('.icon-arrow-left'), (event.target.currSlideId === 0));
            manipulateArrow(event.target.slider.next().children('.icon-arrow-right'), (event.target.numSlides - 1) === event.target.currSlideId);
          });
        })

        function manipulateArrow(jQueryElem, disable) {
          if (disable) {
            jQueryElem.css({
              cursor: 'default',
              opacity: 0.3,
              pointerEvents: 'none'
            });
          } else {
            jQueryElem.removeAttr('style');
          }
        }

        // All left arrow start disabled
        manipulateArrow($('.royalSlider__controls .icon-arrow-left'), true);

        $(document).on('click', '.royalSlider__controls .icon-arrow-left', function() {
          var $this = $(this);
          var rsi = $this.parents('.royalSlider').children('.royalSlider__images').data('royalSlider');

          rsi.prev();
        });

        $(document).on('click', '.royalSlider__controls .icon-arrow-right', function() {
          var $this = $(this);
          var rsi = $this.parents('.royalSlider').children('.royalSlider__images').data('royalSlider');

          rsi.next();
        });
    });