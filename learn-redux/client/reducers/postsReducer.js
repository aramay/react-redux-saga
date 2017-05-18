// a reducer takes in 2 things

// the action -> info about what happened

// copy of current state

function posts (state = [], action) {
//   console.log(state, action)

//   console.log(action)
//   console.log(state[action.index])
  switch (action.type) {

     case 'INCREMENT_LIKES':
       console.log('increment likes')
       const i = action.index
       
       return [
            ...state.slice(0, i),
            {...state[i], likes: state[i].likes + 1},
            ...state.slice(i + 1)
         ]

     default:
       return state
   }
   //   return state
}

// spread operator exmaple - debug
// var x = [
//             {...state[i], likes: state[i].likes + 1}
//          ]
//    console.log('increment likes ', x)

export default posts
