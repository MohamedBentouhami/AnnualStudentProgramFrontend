export const selectStudentName = (state, id) => {
    const student = state.student.students.find((student) => student.id == id);
    return `${student.name}`
}