import { addDays, isBefore, isSameDay, subYears } from 'date-fns';
import Heatmap from 'react-calendar-heatmap';
import { Container } from './styles';

type HeatMapValue = { date: Date; count: number };

export function RandomCalendar() {
  const startDate = subYears(new Date(), 1);
  const endDate = new Date();

  const generateHeatMapValues = (startDate: Date, endDate: Date) => {
    const values: HeatMapValue[] = [];
    let currentDate = startDate;
    while (isBefore(currentDate, endDate) || isSameDay(currentDate, endDate)) {
      const count = Math.random() * 4;
      values.push({ date: currentDate, count: Math.round(count) });
      currentDate = addDays(currentDate, 1);
    }
    return values;
  };

  return (
    <Container>
      <div className="wrapper">
        <Heatmap
          startDate={startDate}
          endDate={endDate}
          values={generateHeatMapValues(startDate, endDate)}
          gutterSize={3.5}
          showWeekdayLabels
          classForValue={(item: HeatMapValue) => {
            let clmapedCount = 0;
            if (item !== null) {
              clmapedCount = Math.max(item.count, 0);
              clmapedCount = Math.min(item.count, 4);
            }
            return `scale-${clmapedCount}`;
          }}
        />
      </div>
      <span>not real data</span>
    </Container>
  );
}
