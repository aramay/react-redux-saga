// a reducer takes in 2 things

// the action -> info about what happened

// copy of current state

function postComments (state = [], action) {
  switch (action.type) {

     case 'ADD_COMMENT':
         // return new state
       console.log('post comment helper ', state)
       console.log('post comment helper ', action)

       return [
           ...state,
           {
               user: action.author,
               text: action.comment
           }
         ]
     case 'REMOVE_COMMENT':
      console.log("remove comment reducer ", action)
      
      return [
         ...state.slice(0, action.i),
         ...state.slice(action.i + 1)

         ]

     default:
       return state
   }
  return state
}

function comments (state = [], action) {
  console.log(state)
  console.log(action)
  return {
      // take the current state
     ...state,
      // overwrite this post with new one
     [action.postId]: postComments(state[action.postId], action)
   }
  return state
}

export default comments
