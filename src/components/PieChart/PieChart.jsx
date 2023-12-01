// /src/components/charts/PieChart.jsx
// Sunday, November 12th 2023, 4:28 am

import React from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5percent from '@amcharts/amcharts5/percent';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import {Typography, Box, useTheme} from '@mui/material';

const PieChart = ({data: categoryValues}) => {
  const theme = useTheme();
  const id = React.useId();
  React.useEffect(() => {
    let root = am5.Root.new(id);
    root.setThemes([am5themes_Animated.new(root)]);
    let chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        layout: root.verticalLayout,
      })
    );

    root._logo.dispose();

    let ttip = am5.Tooltip.new(root, {
      labelText: '{category}:{value}',
    });
    ttip.get('background').setAll({
      strokeOpacity: 0,
    });

    let series0 = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: 'value',
        categoryField: 'category',
        radius: am5.percent(105),
        innerRadius: am5.percent(85),
        tooltip: ttip,
        endAngle: 277,
      })
    );
    let series1 = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: 'value',
        categoryField: 'category',
        radius: am5.percent(105),
        innerRadius: am5.percent(81),
        tooltip: ttip,
      })
    );
    let series2 = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: 'value',
        categoryField: 'category',
        radius: am5.percent(105),
        innerRadius: am5.percent(77),
        tooltip: ttip,
      })
    );
    let series3 = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: 'value',
        categoryField: 'category',
        radius: am5.percent(105),
        innerRadius: am5.percent(70),
        tooltip: ttip,
      })
    );
    let templeteSettings = {
      fillOpacity: 0.5,
      strokeOpacity: 0,
      templateField: 'settings',
    };
    series0.slices.template.setAll(templeteSettings);
    series1.slices.template.setAll(templeteSettings);
    series2.slices.template.setAll(templeteSettings);
    series3.slices.template.setAll(templeteSettings);

    let forceHidden = {forceHidden: true};
    series0.ticks.template.setAll(forceHidden);
    series0.labels.template.setAll(forceHidden);
    series1.ticks.template.setAll(forceHidden);
    series1.labels.template.setAll(forceHidden);
    series2.ticks.template.setAll(forceHidden);
    series2.labels.template.setAll(forceHidden);
    series3.ticks.template.setAll(forceHidden);
    series3.labels.template.setAll(forceHidden);

    series3.data.setAll([
      {
        category: 'Active',
        value: categoryValues.active,
        settings: {
          fill: theme.palette.primary.main,
          cornerRadius: 50,
        },
      },
      {
        category: 'unused',
        value: categoryValues.total - (categoryValues.active + 8),
        settings: forceHidden,
      },
    ]);
    series2.data.setAll([
      {
        category: 'hidden',
        value: categoryValues.active,
        settings: forceHidden,
      },
      {
        category: 'Completed',
        value: categoryValues.completed,
        settings: {
          fill: theme.palette.tertiary.main,
          cornerRadius: 50,
        },
      },
      {
        category: 'unused',
        value: categoryValues.total - (categoryValues.active + categoryValues.completed),
        settings: forceHidden,
      },
    ]);
    series1.data.setAll([
      {
        category: 'hidden',
        settings: forceHidden,
        value: categoryValues.active + categoryValues.completed - 8,
      },
      {
        category: 'Cancelled',
        value: categoryValues.cancelled,
        settings: {
          fill: theme.palette.pink.main,
          cornerRadius: 50,
        },
      },
      {
        category: 'unused',
        value:
          categoryValues.total -
          (categoryValues.active + categoryValues.cancelled + categoryValues.completed),
        settings: forceHidden,
      },
    ]);
    series0.data.setAll([
      {
        category: 'Remaining',
        value: categoryValues.active + categoryValues.cancelled + categoryValues.completed - 5,
        settings: forceHidden,
      },
      {
        category: 'Remaining',
        value:
          categoryValues.total -
          (categoryValues.active + categoryValues.cancelled + categoryValues.completed - 4),
        settings: {fill: theme.palette.background.main},
      },
    ]);
    let legend = chart.children.push(
      am5.Legend.new(root, {
        x: am5.percent(50),
        centerX: am5.percent(50),
        layout: am5.GridLayout.new(root, {
          maxColumns: 3,
          maxRows: 1,
          fixedWidthGrid: false,
        }),
        fillField: 'color',
        strokeField: 'color',
        nameField: 'name',
      })
    );
    legend.valueLabels.template.set('forceHidden', true);

    legend.data.setAll([
      {
        name: 'Active',
        color: theme.palette.primary.main,
      },
      {
        name: 'Cancelled',
        color: theme.palette.pink.main,
      },
      {
        name: 'Completed',
        color: theme.palette.tertiary.main,
      },
    ]);
    legend.markers.template.setAll({
      marginTop: 30,
      marginLeft: 10,
    });
    legend.labels.template.setAll({
      fill: theme.palette.text.dim,
      paddingLeft: 5,
      fontSize: 18,
      marginTop: 30,
    });

    return () => {
      root.dispose();
      legend.dispose();
    };
  }, []);

  const totalValues = categoryValues.active + categoryValues.cancelled + categoryValues.completed;
  return (
    <>
      <Box sx={{height: '390px', width: '100%', position: 'relative'}} id={id}></Box>
      <Box
        className='transform-center box-center'
        sx={{
          position: 'absolute',
          flexDirection: 'column',
          textAlign: 'center',
        }}
      >
        <Typography variant='h5' fontWeight='bold' color='text.dim'>
          {totalValues}%
        </Typography>
        <Typography color='text.dim'>Status</Typography>
      </Box>
    </>
  );
};

export default PieChart;
