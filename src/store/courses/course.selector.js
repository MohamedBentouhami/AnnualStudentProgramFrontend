export const selectCourseTitleById = (state, id) => {
    const course = state.course.courses.find((course) => course.id == id);
    return `${course.code.toUpperCase()} - ${course.title}`
}