var ctx = document.getElementsByClassName("myChart").getContext('2d');
document.getElementsByClassName
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#3498db",
        "#95a5a6",
      ],
      data: [12, 19, 3]
    }]
  }
});