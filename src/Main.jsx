import React,{useState} from 'react'
import { useCreateIncomeMutation,useCreateExpenseMutation,useGetIncomeQuery, useGetExpenseQuery } from './Slice/apiSlice';


const Main = () => {
    const [createIncome, resIncomeInfo] = useCreateIncomeMutation();
    const [createExpense, resExpenseInfo] = useCreateExpenseMutation();
    const {data:incomeData} = useGetIncomeQuery()
    const {data:expenseData} = useGetExpenseQuery()
    console.log(expenseData,"data");

    const totalIncome = incomeData?.reduce((total , ele) => total + +ele.amount, 0)
    const totalExpense = expenseData?.reduce((total , ele) => total + +ele.amount, 0)
    const totalBalance = totalIncome - totalExpense



    console.log(resIncomeInfo,"income info");
    console.log(resExpenseInfo,"expense info");

    const getCurrentDate=()=> {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");
        return `${day}-${month}-${year}`;
      }
    const [values, setValues] = useState({
        type: "Income",
        category: "",
        amount: "",
        date: getCurrentDate()
      });
      console.log(values);

      const handleInputChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };

      const handleAddTransaction = () => {
        if(values.type === "Income"){
        createIncome(values)
        }else if(values.type === "Expense"){
        createExpense(values)
        }
      }

  return (
    <div className="bg-yellow-300/30 w-2/4 px-5 py-2 rounded-[10px]">
    <h1 className="text-3xl text-white font-black text-center">Expense Tracker</h1>
    <h1 className=" pt-2 tracking-wide text-center font-medium">Ik nyi scheme. 7 din me paisa double</h1>
    <h1 className="text-2xl font-semibold mt-12 text-center text-white">
      Total Balance: <span className="text-xl font-bold underline underline-offset-1">{totalBalance}$</span>
    </h1>
    <hr className="h-[2px] bg-gray-200 mt-5" />

    <div className="pt-10 flex gap-10">
      <select
        name="type"
        id="type"
        className="w-6/12 h-[40px] px-2 rounded-[8px]"
        value={values.type}
        onChange={handleInputChange}
      >
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </select>

      <input
        name="category"
        id="category"
        className="w-6/12 h-[40px] px-2 rounded-[8px]"
        value={values.category}
        onChange={handleInputChange}
        placeholder='Category'
      />
        
    </div>

    <div className="pt-10 flex gap-10">
      <input
        type="text"
        name="amount"
        placeholder="Amount"
        className="w-6/12 px-2 h-[40px] rounded-[8px]"
        value={values.amount}
        onChange={handleInputChange}
      />
      <input
        type="date"
        name="date"
        className="w-6/12 h-[40px] px-2 rounded-[8px]"
        value={values.date}
        onChange={handleInputChange}
      />
    </div>

    <button
      className="w-full bg-blue-500/70 rounded-[10px] text-white mt-10 py-2 text-lg font-semibold"
      onClick={handleAddTransaction}
    >
      Create
    </button>
  </div>
);
}

export default Main
 