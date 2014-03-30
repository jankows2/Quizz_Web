'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
 .controller('MyCtrl1', ['$scope','stockService',function($scope,stockService) {

        $scope.name='Company';

        $scope.newsList = [];

        $scope.stockList = [];

        $scope.totalPrice = 0;

        $scope.timeUp = 0;

        $scope.timesDown=0;

        $scope.simpleClass = 0;

        $scope.gauge_data = [];

        $scope.options = {thickness: 5, mode: "gauge", total: 100};

        $scope.result = [];

        $scope.dataLine = [];

        $scope.optionsLine = {
            axes: {
                x: {key: 'x', labelFunction: function(value) {return value;}, type: 'linear', tooltipFormatter: function(x) {return x;}},
                y: {type: 'linear'},
                y2: {type: 'linear'}
            },
            series: [
                        {y: 'value', color: 'steelblue', thickness: '2px', type: 'area', striped: true, label: 'Pouet'},
                         {y: 'otherValue', axis: 'y2', color: 'lightsteelblue'}
                    ],
            lineMode: 'linear',
            tension: 0.7
        }



        $scope.getCompany = function (company) {
            var total=0;
            var count = 1;
            var up = 1;
            var down = 1;
            stockService.get(company, function (data) {
                angular.forEach(data, function (stocks) {
                    $scope.totalPrice = [];
                    $scope.stockList = [];
                    $scope.dataLine = [];
                    $scope.gauge_data = [];
                    angular.forEach(stocks, function(stocks,index) {
                        $scope.stockList.push(stocks.stock)
                        $scope.dataLine.push({x: index, value: stocks.stock.price })
                        total += stocks.stock.price;
                        count = count + 1;
                        if(stocks.stock.percent_change >=0){
                            up = up +1
                        }
                        else{
                            down = down +1
                        }
                    })
                });
                $scope.timeUp = up
                $scope.timesDown = down
                $scope.simpleClass = ((up/30)*100).toFixed(2)
                $scope.totalPrice = ((total/count).toFixed(2))
                $scope.gauge_data.push(
                    {label: "Price", value:(total/count).toFixed(2), color: "#5398f1", suffix: "$"}
                )
            })
            stockService.getNews(company, function (data) {
                angular.forEach(data, function (feeds) {
                    $scope.newsList = [];
                    angular.forEach(feeds, function(value) {
                        $scope.newsList.push(value.feed)
                    })
                });
            })
            $scope.apply

        };

        $scope.getNews = function (news) {
            stockService.getNews(news, function (data) {
                angular.forEach(data, function (feeds) {
                    $scope.newsList = [];
                    angular.forEach(feeds, function(value) {
                        $scope.newsList.push(value.feed)
                    })
                });
            })
            $scope.apply
        };

        $scope.getUnseen = function(){
            var price = $scope.unseen.price
            var volume = $scope.unseen.volume
            var ytd = $scope.unseen.ytd
            var min = 100000000;
            var upDown = true;
            var tmp1 = 0;
            var tmp2 = 0;
            var tmp3 = 0
            var sum = 0;

            angular.forEach($scope.stockList, function(data){
                tmp1 = ((data.price - price)*(data.price - price)).toFixed(0)
                tmp2 = ((data.volume - volume)*(data.volume - volume)).toFixed(0)
                tmp3 =  ((data.ytd_change - ytd)*(data.ytd_change - ytd)).toFixed(0)
                sum = tmp1 + tmp2 + tmp3
                sum = Math.sqrt(sum).toFixed(0)

                console.log("sum befoer if " + sum)
                console.log('Min before if ' + min)

                if(min <= sum){
                   min =min

                }
                else{
                    min = sum
                    console.log('New min is ' + min)
                    console.log('Data change is ' + data.change)
                    if(data.change < 0){
                        upDown = false
                        console.log('UPdown is ' + upDown)
                    }
                    else{
                        upDown = true
                        console.log('Updwon is  ' + upDown)
                    }
                }

                sum = 0

                console.log('--------------------------------')
            })

            console.log('Finale value of min is ' + min + 'Sgould the stock go up ? ' + upDown )

        }
  }])
