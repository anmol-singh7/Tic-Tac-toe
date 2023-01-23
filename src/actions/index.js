export const Start=(arr)=>{
    return{
        type:"START",
        payload:arr
    }
};
export const Change=(id)=>{
    return{
        type:"CHANGE",
        payload:id
    }
}