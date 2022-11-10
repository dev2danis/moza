const envStore = {
    state: {
        projectName: process.env.VUE_APP_PROJECT_NAME
    },
    getters: {
        getProjectName: state => state.projectName
    }
}


export default envStore