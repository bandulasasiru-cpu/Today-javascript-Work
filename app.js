let customerList = [];

function addCustomerOnAction() {
    console.log("Add Customer");

    let txtName = document.getElementById("txtName").value;
    let txtAge = document.getElementById("txtAge").value;
    let txtAddress = document.getElementById("txtAddress").value;
    let txtSalary = document.getElementById("txtSalary").value;
    let txtContact = document.getElementById("txtContact").value;

    console.log(txtName);
    console.log(txtAge);
    console.log(txtAddress);
    console.log(txtSalary);
    console.log(txtContact);

    let customer = {
        name: txtName,
        age: txtAge,
        address: txtAddress,
        salary: txtSalary,
        contact: txtContact
    };

    customerList.push(customer);

    console.log(customerList);

    let body = "";

    for (let customer of customerList) {
        body += `
    <tr>
        <td>${customer.name}</td>
        <td>${customer.age}</td>
        <td>${customer.address}</td>
        <td>${customer.salary}</td>
        <td>${customer.contact}</td>
    </tr>  
    `;
    }
    console.log(body);

    document.getElementById("tbl").innerHTML = body;

    let customer = {
        name: "saman",
        age: "12",
        address: "walana",
        salary: 75000,
        contact: {
            provider: "Dialog",
            contactNo: "077124530",
            data: {
                sample: "0001",
                test01: {
                    vm: "KP90",
                    sv: "KP80"
                }
            }
        }
    }
}
    orders: [
        {
            name:"egg bun",
            qtyOnHand:5,
            unitPrice:150
        },
        {
            name:"veg bun",
            qtyOnHand:2,
            unitPrice:100
        }
    ]
