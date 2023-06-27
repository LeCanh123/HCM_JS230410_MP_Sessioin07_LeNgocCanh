




const addTaskReducer=(state=[],action)=>{
    switch(action.type){
        case "Add":


            return  [...state]
        case "Delete":

           return  [...state,]
        default:
            return  state;
        }} 
    export default addTaskReducer;