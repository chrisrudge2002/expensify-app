
export default (expenses) => (expenses.reduce((total, exp) => total + exp.amount, 0));
