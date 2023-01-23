const INITIAL_STATE = {
    array: [],
    count :9,
    bool:true
};

export default (state=INITIAL_STATE,action)=>{
    switch(action.type){

        case "START":{ 
                        return {array:action.payload,
                                 count:9,
                                 bool:true }
              
        }
        case "CHANGE":{
           // console.log('array', state.array[action.payload])
            if(state.array[action.payload].status===null&&state.bool ){
            if(state.count%2!==0){
             state.array[action.payload].status='x';
             state.count-=1;
            }
            else{
                state.array[action.payload].status = 'o';
                state.count -= 1;
            }
                if (state.count <= 5) {
                    const arr = state.array;
                    for (var i = 0; i < 3 && state.bool; i++) {
                        if (state.bool && ((arr[3 * i].status == 'x' && arr[3 * i + 1].status == 'x' && arr[3 * i + 2].status == 'x') || (arr[3 * i].status == 'o' && arr[3 * i + 1].status == 'o' && arr[3 * i + 2].status == 'o'))) {
                           // console.log('equal1', i);
                            arr[3 * i].color = "red";
                            arr[3 * i + 1].color = "red";
                            arr[3 * i + 2].color = "red";
                            state.bool = false;
                        }
                        if (state.bool && ((arr[i].status == 'x' && arr[i + 3].status == 'x' && arr[i + 6].status == 'x') || (arr[i].status == 'o' && arr[i + 3].status == 'o' && arr[i + 6].status == 'o'))) {

                           // console.log('equal2', i);
                            arr[i].color = "red";
                            arr[i + 3].color = "red";
                            arr[i + 6].color = "red";
                            state.bool = false
                        }
                    }

                    if (state.bool && (arr[0].status == 'x' && arr[4].status == 'x' && arr[8].status == 'x') || (arr[0].status == 'o' && arr[4].status == 'o' && arr[8].status == 'o')) {
                        //console.log('equal3');
                        arr[0].color = "red";
                        arr[4].color = "red";
                        arr[8].color = "red";
                        state.bool = false;
                    }
                    else if (state.bool && (arr[2].status == 'x' && arr[4].status == 'x' && arr[6].status == 'x') || (arr[2].status == 'o' && arr[4].status == 'o' && arr[6].status == 'o')) {
                       // console.log('equal4');
                        arr[2].color = "red";
                        arr[4].color = "red";
                        arr[6].color = "red";
                        state.bool = false;
                    }
                }
            return {
                array:state.array,
                count:state.count,
                bool:state.bool
                }
            }
            return state;
           
        }

        default:
            return state;
    }
}