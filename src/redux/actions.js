export const addUser = (payload) => {
    return {
        type: "userAdd",
        payload: payload
    }
}
export const removeUser = (payload) => {
    return {
        type: "userRemove",
        payload: payload
    }
}
export const setGrade = (payload) => {
    return {
        type: "setGrade",
        payload: payload
    }
}

export const setTeacher = (payload) => {
    return {
        type: "setTeacher",
        payload: payload
    }
}

export const setGradeSubject = (payload) => {
    return {
        type: "setGradeSubject",
        payload: payload
    }
}

const actions = {
    addUser, removeUser,setGrade,setTeacher,setGradeSubject
}
export default actions;
