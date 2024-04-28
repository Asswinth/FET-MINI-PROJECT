$(document).ready(function () {
    var userData = {
        username: "Asswinth",
        email: "asswinth@gmail.com"
    };
    var employeesData = [
        { id: 1, name: 'Nithish', department: 'Finance', salary: '$60,000' },
        { id: 2, name: 'Nithan', department: 'Human Resources', salary: '$55,000' }
    ];
    $('#username').text(userData.username);
    $('#email').text(userData.email);
    $('#welcome-username').text(userData.username);
    var tableBody = $('#table-body');
    employeesData.forEach(function (item) {
        var row = "<tr>\n                    <td>".concat(item.id, "</td>\n                    <td>").concat(item.name, "</td>\n                    <td>").concat(item.department, "</td>\n                    <td>").concat(item.salary, "</td>\n                  </tr>");
        tableBody.append(row);
    });
});
