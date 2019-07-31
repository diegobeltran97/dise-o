(function(Window) {
  var App = {
    htmlElements: {
      cardProgress: document.getElementsByClassName("myChart-js"),
      cardPolling:  $('.cardpolling'),
      btncardPolling: $('.card-parent'),
      btnSteps: $('.btn-steps'),
      btnState: $('.btn-state-js'),
      options: $('#options')

      
    },
    cardActivty: {
       element: document.getElementsByClassName('card-activity'),
       status: true,
       addActivity: function(){
           Array.from( App.cardActivty.element).map( card => {
                if ( App.cardActivty.status == true) {
                    card.addEventListener('click', App.cards );
                }
           })
       }
    },
    dashboard: function(){
      let opcion = Array.from( App.htmlElements.options.children());
      // Default status of steps
      App.dashboardCardPolling();

      opcion.forEach(function(element, index ) {
        var btn = element.querySelector('.btn-state-js');
        var i = index;
        if ( btn != null) {
          btn.setAttribute("step", i);
          element.setAttribute("step", i);
          
        }
      
        if ( element.getAttribute("status") == "false" ) {
              element.setAttribute("style", "display:none;");
          }
          
      })
      //Dinamyc Steps
      let options =  App.htmlElements.options.children();
      App.htmlElements.btnState.click( function (e) {
         var btnSelected = e.target;
         App.nextStep(btnSelected.getAttribute("step"))
      })

      App.htmlElements.btncardPolling.click( function() {
     
        $("#options").toggle();
    
      })

      App.htmlElements.btnSteps.click( function() {
        $("#options").show();
        App.nextStep(0);   
       
      })


    },

    dashboardCardPolling: function () {

      App.htmlElements.cardPolling.each(function(index) {
        $(".card-parent").attr("data-toggle","collapse")
        $(".card-parent").attr("data-target",index)
        $(".card-header").attr("class",index)
        $(".collapser").attr("data-parent",index)
      });
    },

    nextStep: function( n){
      var i = parseInt(n);
      var opcion = Array.from( App.htmlElements.options.children());
       opcion[i].setAttribute("style", "display:none;");
       opcion[i + 1].setAttribute("style", "display:inline");
    },

    graph: function() {
      Array.from(App.htmlElements.cardProgress).map(element => {
        let myChart = new Chart(element, {
          type: "doughnut",
          data: {
            datasets: [
              {
                backgroundColor: ["#2ecc71", "#3498db", "#95a5a6"],
                data: [12, 19, 3]
              }
            ]
          }
        });
      });
    },

    cards: function(){
       console.log('hey');

    },

    init: function() {
      App.cardActivty.addActivity();
       App.dashboard();
    
      App.graph();
    }
  };
  Window.App = App;
})(window);
