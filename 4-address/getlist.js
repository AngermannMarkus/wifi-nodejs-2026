export default function getList(addressData) {
    return `<!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="utf-8" />
                <title>Addressbuch</title>
            </head>
            <body>
                <h1>Addressbuch</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Vorname</th>
                            <th>Nachname</th>
                        </tr>
                        <tbody>
                            ${addressData.map(createRow).join('')}
                        </tbody>
                    </thead>
                </table>
            </body>
            </html>`;
}

function createRow(address) {
    return `<tr>
    <td>${address.id}</td>
    <td>${address.firstname}</td>
    <td>${address.lastname}</td>
    <td><a href="/delete/${address.id}">löschen</a></td>
    </tr>`;
}