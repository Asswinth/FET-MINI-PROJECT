interface UserData {
    username: string;
    email: string;
  }
  
  interface EmployeeData {
    id: number;
    name: string;
    department: string;
    salary: string;
  }
  
  $(document).ready(function(){
    const userData: UserData = {
      username: "Asswinth",
      email: "asswinth@gmail.com"
    };
  
    const employeesData: EmployeeData[] = [
      { id: 1, name: 'Nithish', department: 'Finance', salary: '$60,000' },
      { id: 2, name: 'Nithan', department: 'Human Resources', salary: '$55,000' }
    ];
  
    $('#username').text(userData.username);
    $('#email').text(userData.email);
    $('#welcome-username').text(userData.username);
  
    const tableBody = $('#table-body');
    employeesData.forEach((item: EmployeeData) => {
      const row = `<tr>
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${item.department}</td>
                    <td>${item.salary}</td>
                  </tr>`;
      tableBody.append(row);
    });
  });
  