export const saveState = (state) => {
  let stareAsString = JSON.stringify(state)
  localStorage.setItem('our-state', stareAsString)
}
export const restoreState = (settingState, nextTaskId) => {
  let state = {
    tasks: [],
    filterValue: 'All'
  }
  let stateAsString = localStorage.getItem('our-state')
  if (stateAsString != null) {
    state = JSON.parse(stateAsString)
    state.tasks.forEach(t => {
      if (t.id >= nextTaskId) {
        nextTaskId = t.id + 1
      }
    })
    settingState(state, nextTaskId)
  }
}