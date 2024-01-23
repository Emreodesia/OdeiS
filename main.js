
// Check if cookies are accepted

  $(document).ready(function() {
    
    var cookiesAccepted = document.cookie.includes('cookiesAccepted=true');

    if (!cookiesAccepted) {
        
        $('body').append('<div id="cookieConsentPopup" style="position: fixed; bottom: 0; width: 100%; background: rgba(0,0,0,0.8); color: white; padding: 20px; text-align: center; z-index: 10000;">This site uses cookies. By continuing you accept the use of cookies. <button id="acceptCookiesButton">Accept</button></div>');

        $('body').append('<div id="darkOverlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 9999;"></div>');

        $('#acceptCookiesButton').click(function() {
            
            document.cookie = 'cookiesAccepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT';

        
            $('#cookieConsentPopup, #darkOverlay').remove();
        });
    }
});


<<<<<<< HEAD


=======
//Animation

$(document).ready(function() {
  
    $('body').append('<div id="animatedElement" style="width: 100px; height: 100px; background: red;"></div>');

 
    $('#animatedElement').animate({
        opacity: 0.25
    }, 2000, function() {
        
        console.log('Animasyon tamamlandı!');
    });
});



$(document).ready(function() {
    
    $('body').append('<div id="rotatingSquare" style="width: 100px; height: 100px; background: red; position: relative;"></div>');

    
    $('#rotatingSquare').animate({  borderSpacing: -180 }, {
        step: function(now, fx) {
            $(this).css('transform','rotate('+now+'deg)'); 
        },
        duration: 2000
    }, 'linear');
});

>>>>>>> 6d8aebe61526cab3c9112c8a25bb7618fc8cd234
//Dark Mode 
$(document).ready(function(){
    $("#toggleMode").click(function(){
      $("body").toggleClass("dark-mode");
    });
  });

//Timer

  $(document).ready(function() {
    var countdown = 10; // Geri sayım süresi (saniye)
    var timerElement = $('#timer');

    function updateTimer() {
        timerElement.text(countdown);
        countdown--;

        if (countdown < 0) {
            // Geri sayım bittiğinde yapılacak işlemleri buraya ekleyebilirsiniz
            timerElement.text("Time's up!");
        } else {
            setTimeout(updateTimer, 1000);
        }
    }

    // Sayfa yüklendiğinde geri sayım başlatılır
    updateTimer();
});
