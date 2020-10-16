import getExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('should return 0 if no expenses', () => {
    const total = getExpensesTotal([])
    expect(total).toBe(0)
})

test('should correctly add up a single expense', () => {
    const res = getExpensesTotal([expenses[0]])
    expect(res).toBe(195)
})

test('should correctly add up a multiple expense', () => {
    const res = getExpensesTotal(expenses)
    expect(res).toBe(5790)
})
