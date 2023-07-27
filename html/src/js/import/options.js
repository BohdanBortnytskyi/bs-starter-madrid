export const options = {
  mathUtils: {
    // map number x from range [a, b] to [c, d]
    map: (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c,
    // linear interpolation
    lerp: (a, b, n) => (1 - n) * a + n * b,
    clamp: (num, min, max) => num <= min ? min : num >= max ? max : num,
    // Random float
    getRandomFloat: (min, max) =>
      (Math.random() * (max - min) + min).toFixed(2),
    calcWinsize: () => ({width: window.innerWidth, height: window.innerHeight})
  },
  body: $("body"), // document.body
  header: $(".page-header"),
  popup: {
    type:"inline",
    midClick: true,
    callbacks: {
      // elementParse: function(item) {
      //   var isFirstTime = true;
      //   var videos = document.querySelectorAll(".rd-timeline-content video");
      //   videos.forEach(element => {
      //     if (element.dataset.for === item.src) {
      //       var source = element.querySelector('source');
      //       source.src = source.dataset.url;
      //       if (isFirstTime) {
      //         element.load();
      //         isFirstTime = false;
      //       }
      //     }
      //   });
      // },
      close: function() {
        var videos = document.querySelectorAll(".rd-timeline-content video");
        videos.forEach(element => {
          element.pause();
        });
      }
    }
  },
  charts: {
    hypotheken: {
      type: "bar",
      data: {
        labels: ["4.3", "2.5"],
        values: ["", ""],
        datasets: [
          {
            label: "4",
            backgroundColor: [
              "rgb(1, 69, 97)",
              "rgb(1, 69, 97)",
              "rgb(1, 69, 97)",
            ],
            stack: "Stack 0",
            data: [4.338, 2.461],
            borderColor: "#003b4d",
            borderWidth: 0,
            datalabels: {
              display: false,
            },
          },
        ],
      },
      options: {
        plugins: {
          deferred: {
            delay: 800,
          },
        },
        legend: {
          display: false,
        },
        title: {
          display: false,
        },
        layout: {
          maxHeight: 10,
          maxWidth: 10,
        },
        tooltips: {
          enabled: false,
          mode: "index",
          //intersect: false
        },
        responsive: true,
        scales: {
          yAxes: [
            {
              stacked: true,
              offset: true,
              ticks: {
                display: false,
                fontFamily: "Rotis SemiSans Pro",
                fontColor: "rgb(1, 69, 97)",
                padding: 10,
                fontSize: 16,
                beginAtZero: true,
              },
              gridLines: [
                {
                  display: false,
                },
              ],
              barThickness: 20,
            },
          ],
          xAxes: [
            {
              display: false,
              barPercentage: 0.65
            },
          ],
        },
      },
    },
    mitarbeiter: {
      type: "doughnut",
      data: {
        labels: ["A", "B", "C"],
        datasets: [
          {
            data: [14, 38, 624],
            backgroundColor: [
              "rgb(233, 141, 0)",
              "rgb(243, 179, 97)",
              "rgb(245, 197, 135)",
            ],
            borderColor: "#fae8cd",
            borderWidth: 3,
            lineWidth: 1
          },
        ],
      },
      options: {
        plugins: {
          deferred: {
            delay: 2400,
            //delay: 1200
          },
          datalabels: {
            display: true,
          },
        },
        legend: {
          display: true,
          position: "bottom",
          labels: {
            // This more specific font property overrides the global property
            fontColor: "#003b4d"
          },
        },
        title: {
          display: false,
        },
        tooltips: {
          enabled: false,
        },
        responsive: true,
        maintainAspectRatio: true,
        cutoutPercentage: 75,
        animation: {
          animateRotate: true,
          animateScale: false,
        },
        // rotation: 0.05 * Math.PI,
        // padding: 20,
      },
    },
    bestand: {
      type: "horizontalBar",
      data: {
        labels: ["2018", "2019", "2020", "2021"],
        values: ["", "", "", ""],
        datasets: [
          {
            label: "Gewerbe Ausland",
            backgroundColor: [
              "rgb(1, 69, 97)",
              "rgb(1, 69, 97)",
              "rgb(1, 69, 97)",
              "rgb(234, 141, 0)",
            ],
            stack: "Stack 0",
            data: [1727802422, 1682887984, 2432093895, 3032093895],
            borderColor: "rgb(201 224 229)",
            borderWidth: 5,
            hoverBorderColor: "rgb(201 224 229)",
          },
          {
            label: "Gewerbe Inland",
            backgroundColor: [
              "rgb(54, 101, 125)",
              "rgb(54, 101, 125)",
              "rgb(54, 101, 125)",
              "rgb(240, 164, 62)",
            ],
            stack: "Stack 0",
            data: [5996889778, 6446473869, 7044621395, 8044621395],
            borderColor: "rgb(201 224 229)",
            borderWidth: 5,
            hoverBorderColor: "rgb(201 224 229)",
          },
          {
            label: "Wohnungsbau Schweiz",
            backgroundColor: [
              "rgb(94, 131, 149)",
              "rgb(94, 131, 149)",
              "rgb(94, 131, 149)",
              "rgb(249, 210, 162)",
            ],
            stack: "Stack 0",
            data: [4209771176, 4087410609, 4380009258, 5280009258],
            borderColor: "rgb(201 224 229)",
            borderWidth: 5,
            hoverBorderColor: "rgb(201 224 229)",
          },
          {
            label: "Wohungsbau Inland",
            backgroundColor: [
              "rgb(129, 162, 177)",
              "rgb(129, 162, 177)",
              "rgb(129, 162, 177)",
              "rgb(254, 244, 232)",
            ],
            stack: "Stack 0",
            data: [15882931195, 17009780327, 16098837341, 14098837341],
            values: ["31,956", "35,498", "38,411", "41,662"],
            borderColor: "rgb(201 224 229)",
            borderWidth: 5,
            hoverBorderColor: "rgb(201 224 229)",
          },
        ],
      },
      options: {
        plugins: {
          deferred: {
            delay: 800,
          },
        },
        hover: {
          intersect: true,
          animationDuration: 0
        },
        legend: {
          display: false,
        },
        title: {
          display: false,
        },
        animation: {
          onComplete: function() {
            const chartInstance = this.chart,
              ctx = chartInstance.ctx;

            ctx.font = Chart.helpers.fontString(
              window.innerWidth < 768 ? 24 : 32,
              "bold",
              "Rotis SemiSans Pro"
            );
            ctx.textAlign = "left";
            ctx.textBaseline = "middle";

            this.data.datasets.forEach((dataset, i) => {
              if (this.data.datasets.length - 1 != i) return;
              const meta = chartInstance.controller.getDatasetMeta(i);

              meta.data.forEach(function(bar, index) {
                const data = dataset.values[index];
                ctx.fillStyle = "#003b4d";
                ctx.fillText(data, bar._model.x, bar._model.y);
              });
            });
          }
        },
        tooltips: {
          enabled: false,
          mode: "point",
          //intersect: false
        },
        responsive: true,
        scales: {
          yAxes: [
            {
              stacked: true,
              offset: true,
              ticks: {
                display: true,
                fontFamily: "Rotis SemiSans Pro",
                fontColor: "#003b4d",
                padding: 10,
                fontSize: 18,
                beginAtZero: true,
              },
              gridLines: [
                {
                  display: false,
                },
              ],
              barThickness: 34,
            },
          ],
          xAxes: [
            {
              display: false,
            },
          ],
        },
      },
    },
  },
};
