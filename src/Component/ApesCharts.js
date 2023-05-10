import ReactApexChart from 'react-apexcharts';
import React from 'react'
class AreaApexChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
    
        series: [{
          name: "AKASHI Price",
          data: [{
            x: new Date('2018-02-12').getTime(),
            y: 76
          }, {
            x: new Date('2018-03-12').getTime(),
            y: 92
          }, {
            x: new Date('2018-04-12').getTime(),
            y: 932
          }, {
            x: new Date('2018-05-12').getTime(),
            y: 922
          }]
        }],

        options: {
          chart: {
            type: 'area',
            zoom: {
              enabled: false
            },
            toolbar:{
                show:false
              }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth',
            width: 2
          },
          colors:['#ABE5A1'],

          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              gradientToColors: ['#ABE5A1'],
              shadeIntensity: 1,
              type: 'vertical',
              opacityFrom: 1,
              opacityTo: 0,
              stops: [0, 100]
            },
          },
          xaxis: {
            type: 'datetime',
            labels: {
                datetimeFormatter: {
                  year: 'yyyy',
                  month: "MM/yyyy",
                  day: '',
                  hour: 'HH:mm',
                },
            },
          },
          yaxis: {
            opposite: false,
          },
          legend: {
            horizontalAlign: 'left'
          },
          title: {
            text: 'AKASHI Price',
            align: 'center',
            style: {
              fontSize: '20px'
            }
          }
        },
      };
    }


    render() {
      return (
        <div className="mb-24" id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="area" width={this.props.width} height={this.props.height}/>
        </div>
        );
    }
}
export default AreaApexChart;