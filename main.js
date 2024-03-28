(function() {
  var StarterPack;

  StarterPack = (function() {
    StarterPack.prototype._classAttribute = 20;

    function StarterPack() {
      this.initDimensions();
      this.initResizeActions();
      this.initMenuSliding();
      this.initSlider();
      this.initCustomScrollbar();
      this.initPortfolioImages();
      this.initPortfolio();
      this.initFancyBox();
    }

    StarterPack.prototype.initFancyBox = function() {
      return $(".group-gallery").fancybox({
        transitionIn: 'fade',
        transitionOut: 'fade',
        cyclic: 'true',
        'autoScale': 'true',
        'centerOnScroll': 'true',
        'padding': 0,
        'margin': 0,
        'showCloseButton': 'true',
        'hideOnOverlayClick': 'false',
        'titleShow': 'true',
        'titlePosition': 'inside',
        beforeShow: function() {
          return this.title = $(this.element).data("caption");
        }
      });
    };

    StarterPack.prototype.initCustomScrollbar = function() {
      var content;
      content = $('.scrollable');
      content.mCustomScrollbar({
        scrollInertia: 0,
        scrollButtons: {
          enable: false
        },
        advanced: {
          updateOnContentResize: true
        }
      });
      return $('.reverse-scrollable').mCustomScrollbar({
        scrollInertia: 0,
        scrollButtons: {
          enable: false
        },
        advanced: {
          updateOnContentResize: true
        },
        mouseWheel: {
          invert: true
        }
      });
    };

    StarterPack.prototype.initMenuSliding = function() {
      $('.open-menu').click(function(e) {
        $('body').toggleClass("cbp-spmenu-push-toright");
        $('.open-menu').toggleClass("cbp-spmenu-push-toright");
        $('.left-menu').toggleClass("cbp-spmenu-open");
        return e.preventDefault();
      });
      return $('.close-menu').click(function(e) {
        $('body').toggleClass("cbp-spmenu-push-toright");
        $('.open-menu').toggleClass("cbp-spmenu-push-toright");
        $('.left-menu').toggleClass("cbp-spmenu-open");
        return e.preventDefault();
      });
    };

    StarterPack.prototype.initSlider = function() {
      var navArrows, slider, sliderWrap, slitslider;
      navArrows = $('.nav-arrows');
      slitslider = $('.slider').slitslider();
      navArrows.children(':last').click(function() {
        slitslider.next();
        return false;
      });
      navArrows.children(':first').click(function() {
        slitslider.previous();
        return false;
      });
      sliderWrap = $('.bxSlider-wrap');
      slider = sliderWrap.find('.bxSlider');
      slider.bxSlider({
        mode: "horizontal",
        speed: 800,
        slideMargin: 2,
        auto: false,
        selector: ">.item",
        controls: false
      });
      return sliderWrap.find('.carousel-control').click(function(e) {
        var button;
        button = $(this);
        if (button.data('slide') === 'next') {
          slider.goToNextSlide();
        }
        if (button.data('slide') === 'prev') {
          slider.goToPrevSlide();
        }
        return e.preventDefault();
      });
    };

    StarterPack.prototype.initDimensions = function() {
      var bottomHeight, homepage, homepage1, homepage2, homepage3, homepage4, leftContainer, picturesHeight, rightContainer, topHeight, windowHeight, windowWidth;
      windowHeight = $(window).height();
      windowWidth = $(window).width();
      homepage = $('.homepage');
      homepage1 = $('.homepage-1');
      homepage2 = $('.homepage-2');
      homepage3 = $('.homepage-3');
      homepage4 = $('.homepage-4');
      rightContainer = homepage.find('.right-container');
      leftContainer = homepage.find('.left-container');
      homepage.css("width", windowWidth + "px");
      picturesHeight = homepage3.find('.pictures').outerHeight();
      if (windowWidth > 991) {
        rightContainer.css("height", "100%");
        leftContainer.css("height", "100%");
        $('.full-container').css("height", "100%");
        homepage.css("height", windowHeight + "px");
        homepage2.find('.brand').css("height", windowHeight - 60 + "px");
        homepage3.find('.main-section .title').css("bottom", picturesHeight + 100 + "px");
        $('.gallery-single').find('.slider').css("height", windowHeight - 60 + "px");
        $('.post').find('.slider').css("height", windowHeight - 60 + "px");
        $('.product').find('.slider').css("height", windowHeight - 60 + "px");
      } else if (homepage.hasClass('homepage-1')) {
        rightContainer.css("height", windowHeight - 60 + "px");
        leftContainer.css("height", "auto");
        topHeight = rightContainer.height();
        homepage.css("height", topHeight + bottomHeight + "px");
      } else if (homepage.hasClass('homepage-2')) {
        homepage2.find('.brand').css("height", "200px");
      } else if (homepage.hasClass('homepage-3')) {
        rightContainer.css("height", "auto");
        leftContainer.css("height", windowHeight - 60 + "px");
        if (windowWidth > 787) {
          homepage3.find('.main-section .title').css("bottom", picturesHeight + 85 + "px");
        } else {
          homepage3.find('.main-section .title').css("bottom", "auto");
        }
      } else if (homepage.hasClass('gallery-single')) {
        $('.gallery-single').find('.slider').css("height", "auto");
      } else if (homepage.hasClass('blog')) {
        leftContainer.css("height", windowHeight - 60 + "px");
        rightContainer.css("height", "auto");
        bottomHeight = rightContainer.height();
        homepage.css("height", windowHeight - 30 + bottomHeight + "px");
      } else if (homepage.hasClass('post')) {
        if (windowWidth > 787) {
          $('.post').find('.slider').css("height", windowHeight - 60 + "px");
        } else {
          $('.post').find('.slider').css("height", "auto");
        }
      } else if (homepage.hasClass('product')) {
        if (windowWidth > 787) {
          $('.product').find('.slider').css("height", windowHeight - 60 + "px");
        } else {
          $('.product').find('.slider').css("height", "auto");
        }
      } else if (homepage.hasClass('shopper')) {
        leftContainer.css("height", windowHeight - 60 + "px");
      } else if (homepage.hasClass('traveler')) {
        leftContainer.css("height", windowHeight - 60 + "px");
      } else if (homepage.hasClass('gallery')) {
        if (!homepage.hasClass('half')) {
          leftContainer.css("height", windowHeight - 60 + "px");
        }
      }
      homepage2.find('.image').css("height", windowHeight - 60 + "px");
      homepage4.find('.slider').css("height", windowHeight - 60 + "px");
      $('.shopper .bxSlider-wrap .item').each(function() {
        var figureHeight, item;
        item = $(this);
        figureHeight = item.find('figure').height();
        return item.find('.product-box').css("height", figureHeight + 1 + "px");
      });
      return $('.traveler .statistic').each(function() {
        var item, itemHeight;
        item = $(this);
        itemHeight = item.width();
        return item.css("height", itemHeight + "px");
      });
    };

    StarterPack.prototype.initResizeActions = function() {
      return $(window).resize(this.initDimensions);
    };

    StarterPack.prototype.initPortfolioImages = function() {
      return $('.gallery-wrap').find('article').each(function() {
        var item;
        item = $(this);
        item.find('.group-gallery').css({
          'background-image': "url('" + item.data('image') + "')"
        });
        return item.find('.group-gallery').attr("href", item.data('image'));
      });
    };

    StarterPack.prototype.initPortfolio = function() {
      var $container, defaultW, windowW;
      $container = $('.gallery-wrap');
      windowW = $(window).width();
      if ($container.hasClass('isotope')) {
        $container.isotope('destroy');
      }
      defaultW = parseInt($container.outerWidth() / 12);
      if (windowW < 992) {
        defaultW = parseInt($container.outerWidth() / 8);
      }
      $container.find('.width2').outerWidth(defaultW * 2);
      $container.find('.width4').outerWidth(defaultW * 4);
      $container.find('.width8').outerWidth(defaultW * 8);
      $container.find('.width6').outerWidth(defaultW * 6);
      $container.find('.height2').outerHeight(defaultW * 2);
      $container.find('.height4').outerHeight(defaultW * 4);
      $container.find('.height8').outerHeight(defaultW * 8);
      $container.find('.height6').outerHeight(defaultW * 6);
      if (windowW < 768) {
        defaultW = $container.outerWidth();
        $container.find('article').outerWidth(defaultW);
        $container.find('article').outerHeight(defaultW);
      }
      $container.isotope({
        itemSelector: 'article',
        layoutMode: 'perfectMasonry',
        perfectMasonry: {
          columnWidth: defaultW,
          rowHeight: defaultW
        }
      });
      return $('.gallery-filters').find('button').click(function(e) {
        var $el, selector;
        $('.gallery-filters').find('ul').find('.active').removeClass('active');
        $el = $(this);
        $el.parent().addClass('active');
        selector = $el.attr('data-filter');
        $container.isotope({
          filter: selector
        });
        return e.preventDefault();
      });
    };

    return StarterPack;

  })();

  $('document').ready(function() {
    return new StarterPack();
  });

}).call(this);
function scrolleffect2(){
  var count = $(".left-container").children().length - 1;
  var height = $(".homepage.gallery figure").height() + 2;
  for(i=2;i<=count;i++)
    $(".left-container > figure:nth-child(" + i + ")").css({
      'margin-top':-height
    });
}
function scrolleffect(){
    var count = $(".left-container").children().length - 2;
    var count2 = $(".right-container").children().length-1;
    var height3 = $(".homepage.gallery figure").height();
    n3=-count*height3;
    var current_image = 1;
    var left_current_image = count+2;
    var started = 1;
    $(window).on('mousewheel', function(e) {
        if(started == 1) {
          var delta = e.originalEvent.deltaY;
          if (delta > 0) {
            started = 1.5;
            var height = $(".homepage.gallery figure").height();
            var n = -height;
            $(".right-container > figure:nth-child(" + current_image + ")").stop().animate({
              'margin-top': n
            },500, "swing", function() { started = 1; } );
            $(".left-container > figure:nth-child(" + left_current_image + ")").prev().stop().animate({
              'margin-top': 0
            },500, "swing", function() { started = 1; } );
            if(current_image<count2)
                current_image+=1;
            if(left_current_image>3)
            left_current_image-=1;
            console.log(current_image);
          }
          else {
            started = 1.5;
            var height = $(".homepage.gallery figure").height();
            var n = -height;
            $(".right-container > figure:nth-child(" + current_image + ")").stop().animate({
              'margin-top': 0
            },500, "swing", function() { started = 1;} );
            $(".left-container > figure:nth-child(" + left_current_image + ")").prev().stop().animate({
              'margin-top': n
            },500, "swing", function() { started = 1; } );
            if(current_image>1)
              current_image-=1;
            if(left_current_image<count+2)
            left_current_image+=1;
            console.log(current_image);
          }
          return false;
        }
      });
}
 $('document').ready(function() {
  scrolleffect();
  scrolleffect2();
 });
