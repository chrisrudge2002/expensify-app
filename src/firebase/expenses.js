import  database from './firebase';

export const addExpenseToDatabase = async (expense) => {
    const result = await database.ref('expenses').push(expense);
    return {
        ...expense,
        id: result.key
    };    
};

export const editExpenseInDatabase = async (id, updates) => {
    await database.ref(`expenses/${id}`).update({...updates});    
};

export const removeExpenseFromDatabase = async (id) => {
    await database.ref(`expenses/${id}`).remove();
}

export const getExpensesFromDatabase = async () => {
    const snapshot = await database.ref('expenses').once('value');
    const expenses = [];
    snapshot.forEach((item) => {
        expenses.push({
            ...item.val(),
            id: item.key
        });
    });
    return expenses;
};