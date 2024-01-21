$(document).ready(function() {
    $("body").append("<p>Hello World :D</p>");
});




  $(document).ready(function() {
    // Çerezlerin kabul edilip edilmediğini kontrol et
    var cookiesAccepted = document.cookie.includes('cookiesAccepted=true');

    if (!cookiesAccepted) {
        // Çerez kabul mesajını göster
        $('body').append('<div id="cookieConsentPopup" style="position: fixed; bottom: 0; width: 100%; background: rgba(0,0,0,0.8); color: white; padding: 20px; text-align: center; z-index: 10000;">Bu site çerez kullanmaktadır. Devam ederek çerez kullanımını kabul etmiş olursunuz. <button id="acceptCookiesButton">Kabul Et</button></div>');

        // Ekranı karart
        $('body').append('<div id="darkOverlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 9999;"></div>');

        // Çerezleri kabul et düğmesine tıklanınca
        $('#acceptCookiesButton').click(function() {
            // Çerezleri kabul ettiğini belirten bir çerez ayarla
            document.cookie = 'cookiesAccepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT';

            // Çerez kabul mesajını ve karanlık örtüyü kaldır
            $('#cookieConsentPopup, #darkOverlay').remove();
        });
    }
});


$(document).ready(function() {
    // Çerez kabul mesajını göster
    $('body').append('<div id="animatedElement" style="width: 100px; height: 100px; background: red;"></div>');

    // Animasyonu başlat
    $('#animatedElement').animate({
        opacity: 0.25
    }, 2000, function() {
        // Animasyon tamamlandığında burası çalışır
        console.log('Animasyon tamamlandı!');
    });
});



$(document).ready(function() {
    // Dönen bir kare oluştur
    $('body').append('<div id="rotatingSquare" style="width: 100px; height: 100px; background: red; position: relative;"></div>');

    // Animasyonu başlat
    $('#rotatingSquare').animate({  borderSpacing: -180 }, {
        step: function(now, fx) {
            $(this).css('transform','rotate('+now+'deg)'); 
        },
        duration: 2000
    }, 'linear');
});


$(document).ready(function(){
    $("#toggleMode").click(function(){
      $("body").toggleClass("dark-mode");
    });
  });