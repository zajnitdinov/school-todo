export default class Service {
    _baseUrl = 'http://localhost:8000';

    getResource = async (url) => {
        const res = await fetch(`${this._baseUrl}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, receiver ${res.status}`);
        }
        return await res.json();
    };

    getAllItems = async () => {
        const res = await this.getResource('/items/');
        return res.map(this._transformItem);
    };

    getItem = async (id) => {
      const item = await this.getResource(`items/${id}`);
      return item._transformItem(item);
    };

    _transformItem = (item) => {
        return {
            ...item,
            date: new Date(item.date)
        }
    }
}