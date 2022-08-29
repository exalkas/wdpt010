function demoSync() {

    console.log('synchrounous demo')
}
demoAsync()
demoSync()

async function demoAsync() {

    setTimeout(() => console.log('asynchrounous demo'))
    
}
