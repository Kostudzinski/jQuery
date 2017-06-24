'use strict';

$(document).ready(function () {
    //  $('#first').css('background-color', 'blue').hide('slow');  


    //    Manipulowanie obiektami

    //    $('#first p').css('font-size', '16px')
    //    console.log($('p').text());
    //    $('p').text('Hello World');

    console.log($('p').html());
    $('p').html('Hello <b>World</b>');


    //    dodawanie tresci

    $('.pierwszy').append(' 123');
    $('.pierwszy').prepend('456 ');
    $('.pierwszy').after('<h3>Zostalem dodany</h3>');
    $('.pierwszy').before('<h4 class="drugi">Jestem przed wszystkimi</h4>');

    //    Usuwanie elementow

    //    $('.drugi').remove();
    //    $('.drugi span').remove();
    //    $('#first p').empty(); 
    //    - usunie tresc ale nie znacznik

    //    Metoda css() z wieloma parametrami
    $('#first p').css({
        'font-size': '16px',
        'background-color': 'yellow',
        'color': 'red'
    });

    //    Metoda val()
    var zmiennaVal = $('#formularz input').val();
    console.log(zmiennaVal);

    $('#formularz input').val('To jest test');

    //    Metody dodajace i usuwajace klasy
    $('.trzeci').addClass('czwarty piaty').removeClass('trzeci');

    //    Metoda find i each
    $('#znajdz').find('.find').css({
        'background-color': 'red',
        'color': '#FFFFFF',
        'font-size': '30px'
    });

    $('#kazdy ul li').each(function (index) {
        console.log($(this).text());
        $(this).addClass('list-item' + index);
    });

    //    Eventy
    //    $('#eventy button').each(function() {
    //        $(this).click(function() {
    //            console.log('Przycisk jest klikniety');
    //        })
    //    })

    //    $('#eventy button').each(function() {
    //        $(this).on({
    //            'click': function() {
    //                console.log('Przycisk został wcisniety');
    //            },
    //            
    //            'mouseover': function() {
    //                console.log('jestem nad przyciskiem');
    //            }
    //        })
    //    })


    clickMouseover();
//    fades();
//    slides()
    toggleDiv();
    animacja();

//    showHide();
});

$(window).resize(function () {
    changeColor();
});

$(window).scroll(function () {
    changePosition();
});

function clickMouseover() {

    $('#eventy button').each(function () {
        $(this).on({
            'click': function () {
                console.log('Przycisk został wcisniety');
            },

            'mouseover': function () {
                console.log('jestem nad przyciskiem');
            }
        })
    })

};

function changeColor() {
    $('#first').css('background-color', 'blue');
}

function changePosition() {
    var wysokosc = $('#main-nav').height();
    console.log(wysokosc);

    console.log($(window).scrollTop());

    if ($(window).scrollTop() >= 100) {

        $('#main-nav').css({
            'position': 'fixed',
            'width': '100%',
        })

    } else {
        $('#main-nav').css({
            'position': 'static',
            'width': '100%'
        })
    };
};


$("#first").click(function() {
   $("#eventy button").trigger('mouseover');
});

//TUUUUUUUUUUUUUUUUUUUUUU




function showHide() {
    var parent = $('#showHide');
    
    $(parent).hide(10000).show(5000);
}
//Zmniejsza i rozmiar i opacity


function fades() {
    var parent = $('#showHide');
    
    $(parent).fadeOut(5000).fadeIn(1000);
}
//Zmniejsza tylko opacity

function slides() {
    var parent = $('#showHide');
    $(parent).slideUp(5000).slideDown(1000);
}

//toggle
function toggleDiv() {
     var parent = $('#showHide');
    
    $(parent).click(function() {
        $(this).find('h1').toggle(1000);
    })

}

function animacja() {
    var parent = $('#animacja');
    $(parent).find('button').click(function() {
        $(parent).find('#animowany').animate({width:'100%'}, 5000, function() {
            $(this).animate({width: '200px'}, 'slow');
        });
    })
}










