const content = {
    description: {
        en: `
            <h1>Technical Specification.</h1>
            <p>A VueJs (version 2 and above) calendar component needs to be developed.</p>
            <p>Requirements:</p>
            <ol>
            <li>It is necessary to implement the ability to switch between months and select a specific date on click.</li>
            <li>Attach an event to the click on a day that will return the selected date.</li>
            <li>Upon initialization, the component can accept a date property in the format "year-month-day" and switch the current month and day to it. If the date is not provided, take the current day.</li>
            <li>Implement the ability to change the language (month names, days of the week).</li>
            </ol>
            <p>The implementation uses Vue 3, TypeScript, Pinia. The implementation algorithm can be found on GitHub in the readme.md file.</p>
            `,
        ru: `<h1>Техническое задание.</h1>
            <p>Необходимо разработать на VueJs (2 версии и выше) компонент-календарь.</p>
            <p>Требования:</p>
            <ol>
            <li>Нужно сделать возможность переключения месяцев, а так же выбора конкретной даты при клике.</li>
            <li>На клик по дню повесить событие, которое будет возвращать выбранную дату.</li>
            <li>При инициализации компонент может принимать свойство даты в формате "год-месяц-день" и переключать текущий месяц и день на нее. Если дата не передана, то берем текущий день.</li>
            <li>Реализовать возможность смены языка (название месяцев, дней недели).</li>
            </ol>
            <p>В реализации использованы Vue 3, TypeScript, Pinia. Алгоритм реализации можно посмотреть на GitHub в файле readme.md</p>`,
    },
}

export default content