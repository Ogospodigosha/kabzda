type ActionType={
    type: string
}
export type StateType ={
    collapsed: boolean
}
export const TOGGLE_CONSTANT = "TOGGLE-COLLAPSED"
export const reduser = (state:StateType, action: ActionType): StateType => {
    //по каким-то правилам изменяет стейт и выплевывает измененный стейт
    switch (action.type){
        case TOGGLE_CONSTANT:

            return {...state, collapsed: !state.collapsed}
        default:
            throw new Error("Bad ection type")
    }
    return state
}