import {reduser, StateType, TOGGLE_CONSTANT} from "./Reduser";

test('collapsed should be true', ()=>{
const state: StateType = {
    collapsed: false
}
const newState = reduser(state, {type: TOGGLE_CONSTANT})
expect(newState.collapsed).toBe(true);
})

test('collapsed should be false', ()=>{
    const state: StateType = {
        collapsed: true
    }
    const newState = reduser(state, {type: TOGGLE_CONSTANT})
    expect(newState.collapsed).toBe(false);
})

test('reducer should throw error', ()=>{
    const state: StateType = {
        collapsed: true
    }
    expect(()=>{
        reduser(state, {type: "Faketype"})
    } ).toThrowError();

})