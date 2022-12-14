const initialValue={
  count:0
}

function rootReducer(state=initialValue,action){
 
  if(action.type === 'increment'){
    return {
      ...state,
      count:state.count + action.payload
    }
  }
  if(action.type === 'decrement'){
    return {
      ...state,
      count:state.count - action.payload
    }
  }
  return state
}

const store = Redux.createStore(rootReducer)

function showUI(){

  document.getElementById('res').innerHTML=store.getState().count
}

showUI();

store.subscribe(showUI)

document.getElementById('inc').addEventListener('click',function(){
  store.dispatch({type:'increment',payload:5})
})

document.getElementById('dec').addEventListener('click',function(){
  if(store.getState().count <=0){
    console.log('hi')
    store.getState().count=0;
  }else{
    store.dispatch({type:'decrement',payload:5})

  }

})
