import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { ChartNames } from '../models/enums/chart-names.enum';
import { Nursing } from '../models/entities/nursing.model';
import { CharData } from '../models/entities/char-data.model';
import { Observable, from, map } from 'rxjs';
import { Institutes } from '../models/entities/institutes.model';

@Injectable()
export class ChartOptionsService {

  chartData: CharData[] = [];

  readonly chartsOptions: Map<ChartNames, any> = new Map([
    [
      ChartNames.NursingYearlyTrend,
      {
        chart: {
          type: "spline"
        },
        title: {
          text: "תינוקות יונקים - מגמה שנתית לפי גיל"
        },
        xAxis: {
          categories: ["2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023"]
        },
        yAxis: {
          title: {
            text: "מהתינוקות % "
          }
        }
      },
    ],
    [
      ChartNames.Institutes,
      {
        chart: {
          type: 'column'
        },
        title: {
          text: 'הפרש ציון מהממוצע הארצי לפי מאפיני מוסד/אשפוז'
        },
        legend: {
          x: 250,
          y: 100,
          borderWidth: 1,
        },
        xAxis: {
          categories: ['תנאים פיזיים', 'יעילות הטיפול', 'העצמת המטופל ', 'רצף טיפולי', 'מתן מידע', 'יחס וכבוד למטופל', 'נכונות להמליץ', 'מטופל בידיים טובות', 'שביעות רצון כללית'],
          title: {
            text: null
          }
        },
        yAxis: {
          min: -5, title: {
            text: 'הפרש מהממוצע הארצי', align: 'high' as 'high'
          },
          labels: {
            overflow: 'justify' as 'justify'
          }
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
    [
      ChartNames.NursingPercent,
      {
        chart: {
          type: "area"
        },
        title: {
          text: 'תינוקות יונקים - אחוז הנקה לפי גיל'
        },
        xAxis: {
          categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          title: {
            text: 'גיל בחודשים'
          },
          tickmarkPlacement: 'on',
        },
        yAxis: {
          title: {
            text: '% מהתינוקות'
          }
        }
        ,
        tooltip: {
          shared: true,
          valueSuffix: ' %'
        },
        plotOptions: {
          area: {
            stacking: 'percent',
            lineColor: '#666666',
            lineWidth: 1,

            marker: {
              lineWidth: 1,
              lineColor: '#666666'
            }
          }
        },
        credits: {
          enabled: false
        }
      }
    ]
  ]);

  constructor(private httpService: HttpService) {
  }

  getChartOptionsByName(name: ChartNames): Observable<any> {
    switch (name) {
      case ChartNames.NursingYearlyTrend: {
        return this.httpService.getNursingData().pipe(
          map(data => this.mapDataNursingYearlyTrend(name, data))
        );
      }
      case ChartNames.Institutes: {
        return this.httpService.getInstitutesData().pipe(
          map(data => this.mapDataInstitutes(name, data))
        );
      }
      case ChartNames.NursingPercent: {
        return this.httpService.getNursingData().pipe(
          map(data => this.mapDataNursingPrecent(name, data))
        );
      }
      default: {
        return new Observable;
      }
    }
  }

  mapDataNursingPrecent(name: ChartNames, data: Nursing[]): any {
    let chartData: CharData[] = [];
    const ages: number[] = this.chartsOptions.get(name)["xAxis"]['categories']
    const measures: string[] = ["הנקה מלאה", "הנקה משולבת", "ללא הנקה"];
    measures.forEach(measure => {
      let dataByMeasure: Nursing[] = data.filter(a => a.measure == measure);
      let chartDataElement: CharData = { name: measure, data: [] };
      ages.forEach(age => {
        chartDataElement.data.push((dataByMeasure.filter(a => a.age == age).length / data.filter(a => a.age == age).length) * 100);
      }
      );
      chartData.push(chartDataElement);
    });
    let chartOptions: any = this.chartsOptions.get(name);
    chartOptions.series = chartData as any;
    return chartOptions;
  }

  mapDataInstitutes(name: ChartNames, data: Institutes[]): any {
    let chartData: CharData[] = [];
    const subjects: string[] = this.chartsOptions.get(name)["xAxis"]['categories']
    const sizes: string[] = ['קטנים', 'מרכז על', 'בינוניים - גדולים'];
    data = data.filter(a => a.comparisonGroup == 'גודל מוסד');
    sizes.forEach(size => {
      let dataBySize: Institutes[] = data.filter(a => a.comparisonValue == size);
      let chartDataElement: CharData = { name: size, data: [] };
      subjects.forEach(subject => {
        chartDataElement.data.push(dataBySize.filter(a => a.subject == subject).reduce((a, b) => a + <number>b.avgDiff, 0))
      }
      );
      chartData.push(chartDataElement);
    });
    let chartOptions: any = this.chartsOptions.get(name);
    chartOptions.series = chartData as any;
    return chartOptions;
  }

  mapDataNursingYearlyTrend(name: ChartNames, data: Nursing[]): any {
    let chartData: CharData[] = [];
    const years: number[] = this.chartsOptions.get(name)["xAxis"]['categories']
    const ages: number[] = [1, 3, 6, 12];
    data = data.filter(a => a.year != null && a.measure == "הנקה מלאה" && a.age != null);
    ages.forEach(age => {
      let dataByAge: Nursing[] = data.filter(a => a.age == age);
      let chartDataElement: CharData = { name: `${age} חודשים `, data: [] };
      years.forEach(year => {
        chartDataElement.data.push(dataByAge.filter(a => a.year == year).length)
      }
      );
      chartData.push(chartDataElement);
    });
    let chartOptions: any = this.chartsOptions.get(name);
    chartOptions.series = chartData as any;
    return chartOptions;
  }
}