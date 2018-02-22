import database from './firebase';

export const addExpenseToDatabase = async (expense, userid) => {
    const result = await database.ref(`users/${userid}/expenses`).push(expense);
    return {
        ...expense,
        id: result.key
    };    
};

export const editExpenseInDatabase = async (id, updates, userid) => {
    await database.ref(`users/${userid}/expenses/${id}`).update({...updates});    
};

export const removeExpenseFromDatabase = async (id, userid) => {
    await database.ref(`users/${userid}/expenses/${id}`).remove();
}

export const getExpensesFromDatabase = async (userid) => {
    const snapshot = await database.ref(`users/${userid}/expenses`).once('value');
    const expenses = [];
    snapshot.forEach((item) => {
        expenses.push({
            ...item.val(),
            id: item.key
        });
    });
    return expenses;
};