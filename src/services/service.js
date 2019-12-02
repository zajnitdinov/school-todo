export default class Service {
    items = [
        {
            id: 1,
            title: 'Item #1',
            checked: true,
            description: 'information #1',
            date: new Date()
        },
        {
            id: 2,
            title: 'Item #2',
            checked: false,
            description: 'information #2',
            date: new Date()
        },
        {
            id: 3,
            title: 'Item #3',
            checked: false,
            description: 'information #3',
            date: new Date()
        }
    ];

    getItems() {
        return new Promise((res) => {
            setTimeout(() => {
                res(this.items)
            }, 700)
        })
    }
}