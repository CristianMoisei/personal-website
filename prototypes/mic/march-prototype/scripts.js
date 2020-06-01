     var scrolled = false;
     var footerState = 1
     var landingPageState = 1
     var businessInputState = 1


     function preloadImages(array) {
          if (!preloadImages.list) {
              preloadImages.list = [];
          }
          var list = preloadImages.list;
          for (var i = 0; i < array.length; i++) {
              var img = new Image();
              img.onload = function() {
                  var index = list.indexOf(this);
                  if (index !== -1) {
                      // remove image from the array once it's loaded
                      // for memory consumption reasons
                      list.splice(index, 1);
                  }
              }
              list.push(img);
              img.src = array[i];
          }
      }
      
     
     document.addEventListener('scroll', function() {
          if (window.pageYOffset >= 460) {
               document.getElementById('sticky-footer').classList.add('footer-in');
               document.getElementById('sticky-footer').classList.remove('footer-out');
               scrolled = true;
          }
          if (window.pageYOffset <= 460 && scrolled == true){
               document.getElementById('sticky-footer').classList.add('footer-out');
               document.getElementById('sticky-footer').classList.remove('footer-in');
               scrolled = false;
          }
     })

     function advanceFooter(){
          if (footerState == 1){
               document.getElementById('sticky-footer').src="img/sticky-footer-02.png";
               footerState = 2
          } else {
               document.getElementById('sticky-footer').src="img/sticky-footer-03.png";
          }
     }

     function advanceLandingPage(){
          if (landingPageState == 1){
            document.getElementById('landing-page').style.backgroundImage = "url('img/02.jpg')";
            landingPageState = 2
          } else {
            document.getElementById('landing-page').style.backgroundImage = "url('img/03.jpg')";

               setTimeout(function() {
                    // window.location.href = '02.html';
               }, 2000);
          }

     }

     function advanceAddressPage(){
          if (landingPageState == 1){
               document.getElementById('address').style.backgroundImage = "url('img/05.jpg')";
               document.getElementById('sticky-footer').classList.add('footer-in');
               landingPageState = 2
          } else {
          }

     }


     function advanceAddressFooter(){
          if (landingPageState == 2){
               document.getElementById('sticky-footer').src="img/06b.png";
               document.getElementById('address').style.backgroundImage = "url('img/07.jpg')";
               landingPageState = 3
               
          } else if (landingPageState == 3){
               document.getElementById('sticky-footer').src="img/08a.png";
               landingPageState = 4
          } else {
               document.getElementById('sticky-footer').src="img/08b.png";
               setTimeout(function() {
               document.getElementById('outer-container').style.display = "table";
               document.getElementById('outer-container').style.backgroundColor = "rgba(0, 41, 68, 0.8)";
               document.getElementById('sticky-footer').style.opacity = "0";


               }, 3000);
          }

     }