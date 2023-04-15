// v-32 make custom componenets like ExpenseItem.js and export it
//import it in top of app.js 
//custom componets should always start with capitals and we can call them in app.js just like html codes
//html codes diffrentiate them as from capital or small  letters i.e. capital for custom components and small for html code

//v-33
//in custom compo while returning jsx code it takes only one code hence to apply many jsx codes use parent <div> and add child <div> inside it

 //v-34
 //in custom comp i.e. Expense-item.js to give css styling we can give classname to <div> as shown in that jsx file

//v-35
//we can assign data to const and can recall them in return function in custom componenets as shown below
//   function ExpenseItem(){
//     const expenseDate=new Date(2023,2,28)
//     const expenseTitle='car insurance'
//     const expenseAmount=500000
//     return(
//         <div className='expense-item'>
//             <div>{expenseDate.toISOString()}</div>
//             <div className='expense-item__description'>
//                 <h2>{expenseTitle}</h2>
//                 <div className='expense-item__price'>{expenseAmount}</div>
//             </div>
//         </div>
//     )
// }

//v-36
//to reuse the custom components just increase the <ExpenseItem></ExpenseItem> in app.js and many custon comp will show
//use of props
//props holds all the properties of expenses in array i.2.id,title,amount,date and combines it is as props and we can name anything to props here use named props

//card.js
//its a custom composition and can be used as universal in the place of <div> so they it can get properties of card component

//v-48 useState hook
//its a react hook to change the current value to updated value
//state has to be called inside the main function or const and should not be called in any nested function



