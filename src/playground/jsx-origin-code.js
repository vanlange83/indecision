//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

console.log('App.js is running')

const app = {
    title: 'Some Title',
    subtitle: 'My subtitle things',
    options: ['call', 'text']
}

const onFormSubmit = (e) => {
    e.preventDefault()

    const option = e.target.elements.option.value
    
    if (option) {
        app.options.push(option)
        e.target.elements.option.value = ''
    }
    renderForm()
}

const removeAll = () => {
    
    app.options = []
    renderForm()
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum]
    alert(option)
}

const renderForm = () => {

    let template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle &&  <p>{app.subtitle}</p>}
              <p>{app.options.length > 0 ? 'Here are your options mate' : 'No options'}</p>
                <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
                <button onClick={removeAll}>Remove all</button>
              <ol>
                {
                    app.options.map((item) => {
                        return <li key={item}>{item}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    )

    ReactDOM.render(template, appRoot)
}



const appRoot = document.querySelector('#root')

renderForm()
