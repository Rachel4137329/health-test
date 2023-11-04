import { Injectable } from '@angular/core';

@Injectable()
export class ChartOptionsService {

  readonly chartsOptions: Map<string, object> = new Map([
    [
      'breastfeadingYearlyTrend',
      {
        chart: {
          type: "spline"
        },
        title: {
          text: "תינוקות יונקים - מגמה שנתית לפי גיל"
        },
        xAxis: {
          categories: ["2016", "2017", "2018", "2019", "2020", "2021",
            "2022", "2023"]
        },
        yAxis: {
          title: {
            text: "מהתינוקות % "
          }
        }
      },
    ],
    [
      'inpatientFacility',
      {
        chart: {
          type: 'column'
        },
        title: {
          text: 'Historic World Population by Region'
        },
        subtitle: {
          text: 'Source: Wikipedia.org'
        },
        legend: {
          // layout: 'vertical' as 'vertical',
          // align: 'left' as 'left',
          // verticalAlign: 'top' as 'top',
          x: 250,
          y: 100,
          // floating: true,
          borderWidth: 1,
          /*
                backgroundColor: (
                  (Highcharts.theme && Highcharts.theme.legendBackgroundColor) ||
                  '#FFFFFF'), shadow: true*/
        },
        xAxis: {
          categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'], title: {
            text: null
          }
        },
        yAxis: {
          min: 0, title: {
            text: 'Population (millions)', align: 'high' as 'high'
          },
          labels: {
            overflow: 'justify' as 'justify'
          }
        },
        tooltip: {
          valueSuffix: ' millions'
        },
        plotOptions: {
          bar: {
            dataLabels: {
              enabled: true
            }
          }
        },
        credits: {
          enabled: false
        },
      }
    ],
  ]);

  constructor() { }

  getChartOptionsByName(name: string) {
    if (this.chartsOptions.has(name)) { //todo baeutify code
      let chartOptions: any = this.chartsOptions.get(name);
      let data = this.getDataByName(name)
      chartOptions.series = data;
      return chartOptions;
    }
    return null;
  }

  private getDataByName(name: string) {
    return [
      {
        name: 'גיל חודש',
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5]
      },
      {
        name: 'גיל 3 חודשים',
        data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1]
      },
      {
        name: 'גיל 6 חודשים',
        data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9]
      },
      {
        name: 'גיל 12 חודשים',
        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6]
      }
    ];
  }
}
