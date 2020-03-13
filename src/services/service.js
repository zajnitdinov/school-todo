export default class Service {
    _baseUrl = 'http://localhost:8000';

    getResource = async (url) => {
        const res = await fetch(`${this._baseUrl}${url}`);
        console.log(res);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, receiver ${res.status}`);
        }
        return await res.json();
    };

    getAllPerson = async () => {
        return await this.getResource('/person/');
    };

    getPerson = async (id) => {
        return await this.getResource(`/person/${id}`);
    }

    getAllItems = async () => {
        const res = await this.getResource('/items/');
        return res.map(this._transformItem);
    };

    getItem = async (id) => {
      const item = await this.getResource(`items/${id}`);
      return item._transformItem(item);
    };

    addItem = async (title) => {
        const item = {
            title,
            checked: false,
            description: '',
            date: new Date()
        };
        const response = await fetch(`${this._baseUrl}/items`, {
            method: 'POST',
            body: JSON.stringify(item)
        });
        await response.json();
    };

    _transformItem = (item) => {
        return {
            ...item,
            date: new Date(item.date)
        }
    }
}