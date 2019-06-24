(function(Window) {
  var App = {
    htmlElements: {
      cardProgress: document.getElementsByClassName("myChart-js"),
      cardActivty: document.getElementsByClassName('card-activity')
    },

    graph: function() {
      Array.from(App.htmlElements.cardProgress).map(element => {
        let myChart = new Chart(element, {
          type: "pie",
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

    init: function() {
      console.log("inicio");
      App.graph();
    }
  };
  Window.App = App;
})(window);
