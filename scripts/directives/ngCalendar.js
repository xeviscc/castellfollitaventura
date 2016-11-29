/*jshint loopfunc: true */
angular.module('jkuri.calendar', [])

    .directive('ngCalendar', ['$timeout', function($timeout) {
        'use strict';

        var setScopeValues = function (scope, attrs) {
            scope.locale = attrs.locale || 'ca';
            scope.todayText = attrs.todayText || 'Avui';
            scope.monthText = attrs.monthText || 'Mes';
            scope.weekText = attrs.weekText || 'Setmana';
            scope.dayText = attrs.dayText || 'Dia';
            scope.events = scope.$eval(attrs.events) || undefined;
            scope.view = attrs.view || 'week';
            scope.timegap = attrs.timegap || 90;
            scope.firstWeekDaySunday = attrs.firstWeekDaySunday || false;
        };

        return {
            controller: 'CalendarController',
            restrict: 'EA',
            scope: {
                from: '=',
                to: '='
            },
            link: function (scope, element, attrs) {
                setScopeValues(scope, attrs);

                scope.days = [];
                scope.weekDays = [];
                scope.weekHours = [];
                scope.dayNames = [];
                scope.times = [];
                scope.headerText = null;

                moment.locale(scope.locale);

                var date = moment(),
                    today = moment();

                var generateMonthCalendar = function (date) {
                    var lastDayOfMonth = date.endOf('month').date(),
                        month = date.month(),
                        year = date.year(),
                        n = 1,
                        enabled,
                        is_today,
                        events;

                    var firstWeekDay = scope.firstWeekDaySunday === true ? date.set('date', 2).day() : date.set('date', 1).day();
                    if (firstWeekDay !== 1) {
                        n -= firstWeekDay - 1;
                    }

                    // pass dates to a controller
                    var passDates = angular.copy(date);
                    scope.from = passDates.set('date', 1).format('YYYY-MM-DD');
                    scope.to = passDates.set('date', lastDayOfMonth).format('YYYY-MM-DD');

                    scope.headerText = date.format('MMMM YYYY');
                    scope.days = [];
                    events = angular.copy(scope.$eval(attrs.events));

                    for (var i = n; i <= lastDayOfMonth; i += 1) {
                        var cmpDate = moment(year + '-' + (month + 1) + '-' + i, 'YYYY-MM-DD'),
                            cmpDateFormatted = cmpDate.format('YYYY-MM-DD'),
                            dEvents = [];

                        enabled = i > 0 ? true : false;
                        is_today = cmpDateFormatted === today.format('YYYY-MM-DD') ? true : false;

                        angular.forEach(events, function(e, k) {
                            if (moment(e.dia).format('YYYY-MM-DD') === cmpDateFormatted) {
                                events[k].dia = new Date(e.dia);
                                dEvents.push(e);
                            }
                        });

                        scope.days.push({
                            day: i,
                            month: month + 1,
                            year: year,
                            enabled: enabled,
                            today: is_today,
                            events: dEvents
                        });
                    }
                };

                var generateWeekCalendar = function (date) {
                    var firstDayOfWeek = angular.copy(date).startOf('week'),
                        lastDayOfWeek = angular.copy(date).endOf('week'),
                        currentDate = firstDayOfWeek,
                        n = 1,
                        is_today = false,
                        day_title, date_format, d_events = [],
                        events = angular.copy(scope.$eval(attrs.events));

                    scope.week_days = [];

                    scope.headerText = firstDayOfWeek.format('Do MMMM') + ' - ' + lastDayOfWeek.format('Do MMMM');

                    for (var i = 0; i < 7; i++) {
                        is_today = currentDate.format('YYYY-MM-DD') === today.format('YYYY-MM-DD') ? true : false;
                        day_title = currentDate.format('ddd - Do MMMM');
                        d_events = [];

                        angular.forEach(events, function(e, k) {
                            if (moment(e.hora).format('YYYY-MM-DD') === currentDate.format('YYYY-MM-DD')) {
                                var hora = moment(e.hora);
                                events[k].hora = hora.format('HH:mm');

                                var periods = 0, n = true;
                                while (n) {
                                    if (hora < to) {
                                        from.add(scope.timegap, 'm');
                                        periods += 1;
                                    } else {
                                        n = false;
                                    }
                                }

                                events[k].periods = periods;

                                d_events.push(e);
                            }
                        });

                        scope.week_days.push({day_title: day_title, date: currentDate.format('YYYY-MM-DD'), today: is_today, events: d_events});
                        currentDate.add('1', 'd');
                    }

                };

                var generateDayCalendar = function () {
                    scope.today = angular.copy(today).format('YYYY-MM-DD');
                    scope.current_date = angular.copy(date).format('YYYY-MM-DD');
                    scope.headerText = date.format('Do MMMM');


                };

                var generateDayNames = function () {
                    var date = scope.firstWeekDaySunday === true ?  moment('2015-06-07') : moment('2015-06-01');
                    for (var i = 0; i < 7; i += 1) {
                        scope.dayNames.push(date.format('ddd'));
                        date.add('1', 'd');
                    }
                };

                var generateTimes = function () {
                    var date = moment('2015-06-01'),
                        show = true;

                    //Set starting at 9. doing it 7 times
                    date.add(9*60, 'm');
                    //for (var i = 0; i < 48; i += 1) {
                    for (var i = 0; i < 8; i += 1) {
                        scope.times.push({time: date.format('HH:mm'), show: show});
                        date.add(scope.timegap, 'm');
                        //date.add(30, 'm');
                        //show = !show;
                    }
                };

                var generateCalendar = function (view) {
                    switch (view) {
                        case 'month': generateMonthCalendar(date); break;
                        case 'week': generateWeekCalendar(date); break;
                        case 'day': generateDayCalendar(date); break;
                        default: generateMonthCalendar(date);
                    }
                    //initDragAndDrop();
                };

                /*
                 var initDragAndDrop = function () {
                 if (scope.view !== 'week') {
                 return;
                 }
                 interact('.event')
                 .draggable({
                 inertia: false,
                 snap: {
                 targets: [
                 interact.createSnapGrid({ x: 58, y: 10 })
                 ],
                 range: Infinity,
                 relativePoints: [ { x: 0, y: 0 } ]
                 },
                 })
                 .resizable({
                 inertia: false
                 })
                 .on('resizemove', function (event) {
                 var target = event.target;

                 var newWidth  = parseFloat(target.offsetWidth) + event.dx,
                 newHeight = parseFloat(target.offsetHeight) + event.dy;

                 target.style.width  = newWidth + 'px';
                 target.style.height = newHeight + 'px';
                 })
                 .on('dragmove', function(event) {
                 var target = event.target,
                 x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
                 y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

                 target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

                 target.setAttribute('data-x', x);
                 target.setAttribute('data-y', y);
                 });
                 };
                 */

                // init
                if (scope.events === undefined) {
                    generateCalendar(scope.view);
                }

                generateDayNames();
                generateTimes();

                scope.prevYear = function () {
                    date.subtract(1, 'Y');
                    generateCalendar(scope.view);
                };

                scope.prevMonth = function () {
                    date.subtract(1, 'M');
                    generateCalendar(scope.view);
                };

                scope.nextMonth = function () {
                    date.add(1, 'M');
                    generateCalendar(scope.view);
                };

                scope.nextYear = function () {
                    date.add(1, 'Y');
                    generateCalendar(scope.view);
                };

                scope.prevWeek = function () {
                    date.subtract(1, 'w');
                    generateCalendar(scope.view);
                };

                scope.nextWeek = function () {
                    date.add(1, 'w');
                    generateCalendar(scope.view);
                };

                scope.prevDay = function () {
                    date.subtract(1, 'd');
                    generateCalendar(scope.view);
                };

                scope.nextDay = function () {
                    date.add(1, 'd');
                    generateCalendar(scope.view);
                };

                scope.setToday = function () {
                    date = moment();
                    generateCalendar(scope.view);
                };

                scope.switchView = function (view) {
                    scope.view = view;
                    generateCalendar(view);
                };

                attrs.$observe('events', function() {
                    generateCalendar(scope.view);
                });

            },
            template:
            '<div class="ng-calendar">' +
            '  <div class="ng-calendar-actions">' +
            '    <div class="ng-calendar-actions-left">' +
            '      <button type="button" class="btn btn-default btn-sm" ng-click="setToday()">{{ todayText }}</button>' +
            '    </div>' +
            '    <!--<div class="ng-calendar-actions-right">' +
            '      <div class="btn-group" role="group">' +
            '        <button type="button" class="btn btn-default btn-sm" ng-class="{active: view == \'month\'}" ng-click="switchView(\'month\')">{{ monthText }}</button>' +
            '        <button type="button" class="btn btn-default btn-sm" ng-class="{active: view == \'week\'}" ng-click="switchView(\'week\')">{{ weekText }}</button>' +
            '        <button type="button" class="btn btn-default btn-sm" ng-class="{active: view == \'day\'}" ng-click="switchView(\'day\')">{{ dayText }}</button>' +
            '      </div>' +
            '    </div>-->' +
            '  </div>' +
            '  <div class="ng-calendar-header" ng-show="view == \'month\'">' +
            '     <div class="ng-calendar-header-left">' +
            '       <i class="fa fa-backward" ng-click="prevYear()"></i>' +
            '       <i class="fa fa-angle-left" ng-click="prevMonth()"></i>' +
            '     </div>' +
            '     <span class="text">{{ headerText }}</span>' +
            '     <div class="ng-calendar-header-right">' +
            '       <i class="fa fa-angle-right" ng-click="nextMonth()"></i>' +
            '       <i class="fa fa-forward" ng-click="nextYear()"></i>' +
            '     </div>' +
            '  </div>' +
            '  <div class="month-calendar" ng-show="view == \'month\'">' +
            '    <div class="day-names">' +
            '      <span ng-repeat="d in dayNames">{{ d }}</span>' +
            '    </div>' +
            '    <div class="month-days">' +
            '      <div class="day" ng-repeat="d in days" ng-class="{today: d.today}">' +
            '        <span class="date" ng-class="{disabled: !d.enabled}">{{ d.day }}</span>' +
            '        <span class="event" ng-repeat="e in d.events">' +
            '          {{ e.from | date:"HH:mm" }} {{ e.title }}' +
            '        </span>' +
            '      </div>' +
            '    </div>' +
            '  </div>' +
            '  <div class="ng-calendar-header" ng-show="view == \'week\'">' +
            '     <div class="ng-calendar-header-left">' +
            '       <i class="fa fa-backward" ng-click="prevMonth()"></i>' +
            '       <i class="fa fa-angle-left" ng-click="prevWeek()"></i>' +
            '     </div>' +
            '     <span class="text">{{ headerText }}</span>' +
            '     <div class="ng-calendar-header-right">' +
            '       <i class="fa fa-angle-right" ng-click="nextWeek()"></i>' +
            '       <i class="fa fa-forward" ng-click="nextMonth()"></i>' +
            '     </div>' +
            '  </div>' +
            '  <div class="week-calendar" ng-show="view == \'week\'">' +
            '    <div class="week-calendar-header">' +
            '      <span></span>' +
            '      <span ng-repeat="d in week_days">{{ d.day_title }}</span>' +
            '    </div>' +
            '    <div class="hours">' +
            '      <span ng-repeat="t in times">' +
            '        <span ng-show="t.show">{{ t.time }}</span>' +
            '      </span>' +
            '    </div>' +
            '    <div class="day-hours" ng-repeat="wd in week_days">' +
            '      <span ng-repeat="t in times" ng-class="{today: wd.today}">' +
            '        <a href="#" ng-click="selecciona(wd, t)"><span>' +
            '          Selecciona <!--<span ng-repeat="e in wd.events">' +
            '            <span class="event" ng-show="t.time === e.from" style="height: {{ e.periods * 20 }}px">' +
            '              {{ e.from }} - {{ e.to }}<br/>{{ e.title }}'+
            '            </span>' +
            '          </span>-->' +
            '        </span></a>' +
            '      </span>' +
            '    </div>' +
            '  </div>' +
            '  <div class="ng-calendar-header" ng-show="view == \'day\'">' +
            '     <div class="ng-calendar-header-left">' +
            '       <i class="fa fa-backward" ng-click="prevWeek()"></i>' +
            '       <i class="fa fa-angle-left" ng-click="prevDay()"></i>' +
            '     </div>' +
            '     <span class="text">{{ headerText }}</span>' +
            '     <div class="ng-calendar-header-right">' +
            '       <i class="fa fa-angle-right" ng-click="nextDay()"></i>' +
            '       <i class="fa fa-forward" ng-click="nextWeek()"></i>' +
            '     </div>' +
            '  </div>' +
            '  <div class="day-calendar" ng-show="view === \'day\'">' +
            '    <div class="day-calendar-header">' +
            '    </div>' +
            '    <div class="hours">' +
            '      <span ng-repeat="t in times">' +
            '        <span ng-show="t.show">{{ t.time }}</span>' +
            '      </span>' +
            '    </div>' +
            '    <div class="day-hours">' +
            '      <span ng-repeat="t in times" ng-class="{today: current_date === today}">' +
            '      </span>' +
            '    </div>' +
            '  </div>' +
            '</div>'
        };

    }]);