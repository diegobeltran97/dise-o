(function(Window) {
  var App = {
    htmlElements: {
      cardProgress: document.getElementsByClassName("myChart-js"),
      btncardPolling: $('.card-parent'),
      btnoption: $('.btn-option-js'),
      btnState: $('#btn-state-js'),
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
      

      opcion.forEach(function(element , index ) {
        let btn  = element.querySelectorAll('#btn-state-js');
        
    
        // if ( element.getAttribute("status") == "false" ) {
        //       element.setAttribute("style", "display:none;");
        //  }
          
      })
      //Dinamyc Steps
      let options =  App.htmlElements.options.children();
      App.htmlElements.btnState.click( function () {

      })
      App.htmlElements.btncardPolling.click( function() {
        $(".collapse").collapse('toggle');
        $("#option-1").toggle();
        $("#option-2").toggle();
      })

      App.htmlElements.btnoption.click( function() {
        $("#option-2").toggle();
        $("#option-1").toggle();
      })
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
