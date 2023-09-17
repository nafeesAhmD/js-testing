// let expenses = [];
// let totalAmount = 0;

// const categorySelect = document.getElementById('category-select');
// const amountInput = document.getElementById('amount-input');
// const dateInput = document.getElementById('date-input');
// const addBtn = document.getElementById('add-btn');
// const expensesTableBody = document.getElementById('expnese-table-body');
// const totalAmountCell = document.getElementById('total-amount');

// addBtn.addEventListener('click', function() {
//     const category = categorySelect.value;
//     const amount = Number(amountInput.value);
//     const date = dateInput.value;

//     if (category === '') {
//         alert('Please select a category');
//         return;
//     }
//     if (isNaN(amount) || amount <=0 ) {
//         alert('Please enter a valid amoun')
//         return;
//     }
//     if(date === '') {
//         alert('Please select a date')
//         return;
//     }
//     expenses.push({category, amount, date});

//     totalAmount += amount;
//     totalAmountCell.textContent = totalAmount;

//     const newRow = expensesTableBody.insertRow();

//     const categoryCell = newRow.insertCell();
//     const amountCell = newRow.insertCell();
//     const dateCell = newRow.insertCell();
//     const deleteCell = newRow.insertCell();
//     const deleteBtn = document.createElement('button');

//     deleteBtn.textContent = 'Delete';
//     deleteBtn.classList.add('delete-btn');
//     deleteBtn.addEventListener('click', function() {
//         expenses.splice(expenses.indexOf(expense), 1);

//         totalAmount -= expense.amount;
//         totalAmountCell.textContent = totalAmount;

//         expensesTableBody.removeChild(newRow);
//     });

//     const expense = expenses[expenses.length - 1];
//     categoryCell.textContent = expense.category;
//     amountCell.textContent = expense.amount;
//     dateCell.textContent = expense.date;
//     deleteCell.appendChild(deleteBtn);

// });

// for (const expense of expenses) {
//     totalAmount += expense.amount;
//     totalAmountCell.textContent = totalAmount;

//     const newRow = expensesTableBody.inserRow();
//     const categoryCell = newRow.insertCell();
//     const amountCell = newRow.insertCell();
//     const dateCell = newRow.insertCell();
//     const deleteCell = newRow.insertCell();
//     const deleteBtn = document.createElement('button');
//     deleteBtn.textContent = 'Delete';
//     deleteBtn.classList.add('delete-btn');
//     deleteBtn.addEventListener('click', function() {
//         expenses.splice(expenses.indexOf(expense), 1);

//         totalAmount -= expense.amount;
//         totalAmountCell.textContent = totalAmount;

//         expensesTableBody.removeChild(newRow);
//     });
//     categoryCell.textContent = expense.category;
//     amountCell.textContent = expense.amount;
//     dateCell.textContent = expense.date;
//     deleteCell.appendChild(deleteBtn);
// }




var expenses = []
var totolAmount = 0

var categorySelect = document.getElementById('category-select')
var amountInput = document.getElementById('amount-input')
var dateInput = document.getElementById('date-input')
var addBtn = document.getElementById('add-btn')
var expenseTableBody = document.getElementById('expnese-table-body')
var totolAmountCell = document.getElementById('total-amount')

addBtn.addEventListener('click', function(event){
    console.log("Hello",categorySelect)
    var category = categorySelect.value
    var amount = Number( amountInput.value)
    var date = dateInput.value  

    if(category === ''){
        alert('Please select a category')
        return
    }
    if(isNaN(amount) || amount <= 0){
        alert('Please enter a valid amount')
        return
    }
    if(date === ''){
        alert('Please select a date')
        return
    }
    expenses.push(category, amount, date)

    totolAmount += amount
    totolAmountCell.textContent = totolAmount

    var newRow = expenseTableBody.insertRow()

    var categaryCell = newRow.insertCell()
    var amountCell = newRow.insertCell()
    var dateCell = newRow.insertCell()
    var deleteCell = newRow.insertCell()
    var deleteBtn = document.createElement('button')

    deleteBtn.textContent = 'Delete'
    deleteBtn.classList.add('delete-btn')

    deleteBtn.addEventListener('click',function(){
        expenses.splice(expenses.indexOf(expense), 1)

        totolAmount -= expense.amount
        totolAmountCell.textContent = totolAmount

        expenseTableBody.removeChild(newRow)
    })
    var expense = expenses[expenses.length -1]
    categaryCell.textContent = expense.category
    amountCell.textContent = expense.amount
    dateCell.textContent = expense.date
    deleteCell.appendChild(deleteBtn)

})
    
for(var expense of expenses){
    totolAmount += expense.amount
    totolAmountCell.textContent = totolAmount

    var newRow = expenseTableBody.insertRow()
    var categaryCell = newRow.insertCell()
    var amountCell = newRow.insertCell()
    var dateCell = newRow.insertCell()
    var deleteCell = newRow.insertCell()
    var deleteBtn = document.createElement('button')

    
    deleteBtn.textContent = 'Delete'
    deleteBtn.classList.add('delete-btn')

    deleteBtn.addEventListener('click',function(){
        expenses.splice(expenses.indexOf(expenses), 1)

        totolAmount -= expenses.amount
        totolAmountCell.textContent = totolAmount

        expenseTableBody.removeChild(newRow)
    })
    categaryCell.textContent = expense.category
    amountCell.textContent = expense.amount
    dateCell.textContent = expense.date
    deleteCell.appendChild(deleteBtn)

}