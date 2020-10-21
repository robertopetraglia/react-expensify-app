import expenses from '../fixtures/expenses'
import expensesReducer from '../../reducers/expenses'

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = { 
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense by id not found', () => {
    const action = { 
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should add an expense', () => {
    const expense = [{
        id: '4',
        description: 'Bill',
        note: '',
        amount: 1950,
        createdAt: 0
    }]
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, expense])
})

test('should edit an expense', () => {
    const note = 'Gum note'
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            note
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state[0].note).toBe(note)
})

test('should not edit an expense if expense not found', () => {
    const note = 'Gum note'
    const action = {
        type: 'EDIT_EXPENSE',
        id: '4',
        updates: {
            note
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should set expense', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[0]]
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0]])
})