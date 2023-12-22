// /src/components/charts/LineChart.jsx
// Sunday, November 12th 2023, 4:27 am

import React, {useId} from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import * as d3 from 'https://cdn.skypack.dev/d3-shape@3';
import {useTheme, Box} from '@mui/material';
import {alpha} from '@mui/system';
import am5themes_Responsive from '@amcharts/amcharts5/themes/Responsive';

const LineChart = ({data}) => {
  const theme = useTheme();
  const id = useId();
  React.useEffect(() => {
    let root = am5.Root.new(id);
    root.durationFormatter.set('durationFormat', "h'am");
    const myTheme = am5.Theme.new(root);
    const responsive = am5themes_Responsive.new(root);
    myTheme.rule('Grid').setAll({
      strokeWidth: 0.3,
      stroke: alpha(theme.palette.text.dim, 0.2),
    });

    const yAxisRenderer = am5xy.AxisRendererY.new(root, {
      minGridDistance: 60,
    });
    responsive.addRule({
      name: 'AxisRendererX',
      relevant: (width, height) => {
        return width > 600;
      },
      applying: () => {
        yAxisRenderer.labels.template.set('forceHidden', false);
      },
      removing: () => {
        yAxisRenderer.labels.template.set('forceHidden', true);
      },
    });

    myTheme.rule('AxisLabel').setAll({
      fill: alpha(theme.palette.text.dim, 0.5),
      fontSize: '0.79rem',
      paddingRight: 18,
    });

    myTheme.rule('Tooltip').setAll({width: 100});

    root.setThemes([am5themes_Animated.new(root), myTheme, responsive]);
    root._logo.dispose();

    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        paddingLeft: 0,
        paddingRight: 0,
      })
    );

    let cursor = chart.set('cursor', am5xy.XYCursor.new(root, {}));
    cursor.lineY.set('visible', false);
    cursor.lineX.setAll({
      stroke: theme.palette.primary.main,
      strokeWidth: 1,
    });

    const xAxisRenderer = am5xy.AxisRendererX.new(root, {});
    xAxisRenderer.grid.template.set('forceHidden', true);
    xAxisRenderer.labels.template.setAll({
      paddingTop: 10,
      paddingLeft: 14,
    });

    let xAxis = chart.xAxes.push(
      am5xy.DurationAxis.new(root, {
        baseUnit: 'hour',
        renderer: xAxisRenderer,
        strictMinMax: true,
      })
    );

    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        min: 1,
        max: 100,
        calculateTotals: true,
        renderer: yAxisRenderer,
      })
    );

    let gradientColor = am5.LinearGradient.new(root, {
      stops: [
        {
          color: am5.color('rgba(59, 56, 219, 0.3)'),
        },
        {
          color: am5.color('rgba(255, 107, 181, 0.22)'),
        },
      ],
      rotation: 0,
    });
    let ttip = am5.Tooltip.new(root, {
      getFillFromSprite: false,
      labelText: '\t\t{name}\n\t\t\t\t[bold]{valueY}',
    });
    ttip.get('background').setAll({
      fill: theme.mode === 'light' ? '#99B2C6' : '#FFFF',
      strokeOpacity: 0,
    });
    let series = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: 'Users',
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: 'value',
        valueXField: 'time',
        curveFactory: d3.curveCardinal,
        tooltip: ttip,
      })
    );
    series.strokes.template.setAll({
      strokeGradient: gradientColor,
      strokeOpacity: 0.6,
    });
    series.fills.template.setAll({
      visible: true,
      fillOpacity: 0.6,
      fillGradient: gradientColor,
    });
    series.bullets.push(() => {
      return am5.Bullet.new(root, {
        locationY: 0,
        sprite: am5.Circle.new(root, {
          strokeWidth: 4,
          radius: 6,
          stroke: am5.color('#FF69B4'),
          fill: theme.palette.neutral.main,
        }),
      });
    });
    series.data.setAll(data);
    return () => root.dispose();
    // eslint-disable-next-line
  }, []);

  return <Box id={id} sx={{height: '100%', width: '100%'}}></Box>;
};

export default LineChart;
