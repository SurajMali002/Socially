demo = {
  initPickColor: function() {
    $('.pick-class-label').click(function() {
      var new_class = $(this).attr('new-class');
      var old_class = $('#display-buttons').attr('data-class');
      var display_div = $('#display-buttons');
      if (display_div.length) {
        var display_buttons = display_div.find('.btn');
        display_buttons.removeClass(old_class);
        display_buttons.addClass(new_class);
        display_div.attr('data-class', new_class);
      }
    });
  },


  initChartsPages: function() {

    ctx = document.getElementById('chartEmail').getContext("2d");

    var firstvalue = localStorage.getItem('societyproblemsnum');
    var secondvalue = localStorage.getItem('illegalconstructionsnum');
    var thirdvalue  = localStorage.getItem('bullyingproblemsnum');
    var fourthvalue = localStorage.getItem('otherproblem');

    myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: [1,2,3,4],
        datasets: [{
          label: "Emails",
          pointRadius: 0,
          pointHoverRadius: 0,
          backgroundColor: [

            '#4acccd',
            '#fcc468',
            '#ef8157',
            '#e3e3e3',
          ],
          borderWidth: 0,
          data: [firstvalue,secondvalue,thirdvalue,fourthvalue],
  
        }]
      },

      options: {

        legend: {
          display: false
        },

        pieceLabel: {
          render: 'percentage',
          fontColor: ['white'],
          precision: 2
        },

        tooltips: {
          enabled: true
        },

        scales: {
          yAxes: [{

            ticks: {
              display: false
            },
            gridLines: {
              drawBorder: false,
              zeroLineColor: "transparent",
              color: 'rgba(255,255,255,0.05)'
            }

          }],

          xAxes: [{
            barPercentage: 1.6,
            gridLines: {
              drawBorder: false,
              color: 'rgba(255,255,255,0.1)',
              zeroLineColor: "transparent"
            },
            ticks: {
              display: false,
            }
          }]
        },
      }
    });

  },

 

  showNotification: function(from, align) {
    color = 'primary';

    $.notify({
      icon: "nc-icon nc-bell-55",
      message: "Welcome to <b>Paper Dashboard</b> - a beautiful bootstrap dashboard for every web developer."

    }, {
      type: color,
      timer: 8000,
      placement: {
        from: from,
        align: align
      }
    });
  }

};
document.addEventListener("keydown", function(e) {
  if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
    e.preventDefault();
  }
}, false);
document.addEventListener("keydown", function(e) {
  if (e.keyCode == 83 && (navigator.platform.match("linux") ? e.metaKey : e.ctrlKey)) {
    e.preventDefault();
  }
}, false);
document.addEventListener("keydown", function(e) {
  if (e.keyCode == 83 && (navigator.platform.match("Windows") ? e.metaKey : e.ctrlKey)) {
    e.preventDefault();
  }
}, false);
var elem = document.getElementById("bodyid");

/* When the openFullscreen() function is executed, open the video in fullscreen.
Note that we must include prefixes for different browsers, as they don't support the requestFullscreen method yet */
function goFull() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
  document.getElementById('fullandexitscreenid').className =  'nc-icon fad fa-times-circle'
  document.getElementById("fullandexitscreenid").style.marginTop = "1px";
  document.getElementById("fullandexitscreenid").style.fontSize = "19px";
  document.getElementById( "screencontronav" ).setAttribute( "onClick", "closeFullscreen();" );
  document.getElementById('screenfullorexitext').innerHTML = "exit full screen";
}
/* Close fullscreen */
function closeFullscreen() {
            if (document.exitFullscreen)
                document.exitFullscreen();


  document.getElementById('fullandexitscreenid').className =  'nc-icon nc-layout-11'
  document.getElementById("fullandexitscreenid").style.marginTop = "1px";
  document.getElementById("fullandexitscreenid").style.fontSize = "19px";
  document.getElementById( "screencontronav" ).setAttribute( "onClick", "goFull();" );
  document.getElementById('screenfullorexitext').innerHTML = "full screen";
}