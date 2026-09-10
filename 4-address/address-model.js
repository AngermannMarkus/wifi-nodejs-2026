const addressModel = {
    data: [
        {
            id: 1,
            firstname: 'Max',
            lastname: 'Mustermann',
            street: 'Musterstrasse 1',
            city: 'Teststadt'
        },
        {
            id: 2,
            firstname: 'Markus',
            lastname: 'Angermann',
            street: 'Musterstrasse 80',
            city: 'Teststadt'
        },
        {
            id: 3,
            firstname: 'Test',
            lastname: 'Nachname',
            street: 'Teststrasse 80',
            city: 'Teststadt'
        },
    ],
    getAll() {
        return this.data;
    },
    deleteById(id) {
        this.data = this.data.filter((address) => address.id !== id);
    }
};

export default addressModel;