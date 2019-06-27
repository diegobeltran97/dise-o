(function(Window) {
  var App = {
    htmlElements: {
      cardProgress: document.getElementsByClassName("myChart-js"),
      btncardPolling: $('.card-parent')

      
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
      App.htmlElements.btncardPolling.click( function() {
        $(".collapse").collapse('toggle');
      })
      console.log("inicio");
      App.graph();
    }
  };
  Window.App = App;
})(window);
