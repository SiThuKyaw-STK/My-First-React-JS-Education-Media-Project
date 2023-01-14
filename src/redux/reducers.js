import {combineReducers} from "redux";

const initialData = {

}


export const userReducer = (state = null, { type, payload }) => {
    switch (type) {
        case "userAdd": return state = payload;
        case "userRemove": return state = payload;
        default:
            return state;
    }
}
export const byGradeReducer = (state = { type: 'ByGrade', id: null, title: '' }, { type, payload }) => {
    switch (type) {
        case "setGrade": return state = payload;
        default: return state;
    }
}
export const byTeacherReducer = (state = { type: 'ByTeacher', id: null, title: '' }, { type, payload }) => {
    switch (type) {
        case "setTeacher": return state = payload;
        default: return state;
    }
}

export const byGradeSubjectReducer = (state = { type: 'ByGradeSubject',grade_id:null, id: null, title: '',grade:'' }, { type, payload }) => {
    switch (type) {
        case "setGradeSubject": return state = payload;
        default: return state;
    }
}

const reducers = combineReducers({
    userData: userReducer,
    byGradeData: byGradeReducer,
    byTeacherData: byTeacherReducer,
    byGradeSubjectData: byGradeSubjectReducer,
});

export default reducers;
