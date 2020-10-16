// Get expenses total

export default function getTotalExpenses(expenses) {
    return expenses.reduce(
        ( accumulator, currentValue ) => accumulator + currentValue.amount, 
    0)
}