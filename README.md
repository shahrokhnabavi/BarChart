# BarChart
___
BarChart is a javascript class that gives you ability to visualize your data and show it in the bar chart. This class has a lot of options which give it flexibility and also the using of this class is so simple.

### Features
* Changing the size of chart
* Customize labels
* Define multiple chart
* Each bar has its own color

### Upcoming Feature
* Show Chart Vertically or Horizontally
* Change the background color
* Change the size of font
* Show the value on each baras a label
* Set the color of each value of bars

### Demo
>[Demo On CodePen](https://codepen.io/shahrokhnabavi/pen/KZKPMV)

## Getting Started

### Installation & Usage
1. Import the class script into the page.
2. Set the options <kbd>var options = {}</kbd>
3. Make a new instance of class <kbd>new BarChart( options );</kbd>

### Options
* `container`: the id of canvas tag which is a holder place for the chart.
* `size`: size of chart holder place . the size is an object
	```
	var options = {
		size: { w: 500, h: 250 }
	}
	```
* `label`: this is an object of axises label
* `data`: An array of objects. Each element of array represents a bar in our chart

**Example**
```
<script type="text/javascript" src="chart.js"></script>
    <script type="text/javascript">
        new ChartBar({
            container: "chart",
            size: {w: 500, h: 600},
            label: {x: 'X Axis', y: 'Y Axis'},
            data: [
                {color: 'red', value: 80},
                {color: 'green', value: 20},
                {color: 'blue', value: 100},
                {color: 'silver', value: 50},
                {color: '#fbb', value: 10},
            ]
        });
    </script>
```

### License

The Easy Blog is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
