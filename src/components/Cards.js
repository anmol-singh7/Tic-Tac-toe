import React from 'react';
import {connect} from 'react-redux';
import {Start,Change} from '../actions';
import '../Designs/board.css';

class Cards extends React.Component{
    // constructor(){
    //     super();
    //   this.state={
    //     array:[]
    //   }
    // }
    componentDidMount=()=>{
        let arr=[];
        for( var i=0;i<9;i++){
        arr.push({status:null,
                  id:i,
                  color:"white"})
          };
        this.props.Start(arr);
    }  
     render(){
        //  let list=this.componentDidMount();  
        //console.log("map",this.props.List)  
         const ans = this.props.List.array
         const CardList=ans.map((item)=>{ 
              return(
                <div className='box' style={{color:item.color}}key={item.id} onClick={()=>this.props.Change(item.id)}>
                    {item.status}
                </div>                            
              )
             });
        return(<div>
                  <div className='game-board'>
                       {CardList} 
                  </div>
            <div onClick={() => this.componentDidMount()}> <button >Restart</button></div>
                </div>
        );
     }

};
const mapStateToProps=(state)=>{
   // console.log('statexyz',state.List)
    return {List:state.List}
}
export default connect(mapStateToProps,{Start,Change})(Cards);
// export default Cards;