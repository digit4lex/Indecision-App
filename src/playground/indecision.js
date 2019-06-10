const appRoot = document.getElementById("app");

let app = {
    title: 'Indecision',
    subtitle: 'Rocks',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault()

    const option = e.target.elements.option.value;

    if (option){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderCounterApp()
    }
    
};

const onRemoveAll = () => {
    app.options = []
    renderCounterApp()
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option)
}

const renderCounterApp = () => {
    let template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}  
            <p> {app.options.length > 0 ? 'Here are your options:' : 'No options' } </p>
                <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should i do?</button>            
                <button onClick={onRemoveAll}>Remove all</button>
                
            <ol>    
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
                
            </ol>
            <form onSubmit={onFormSubmit}>
            <input type="text" name="option"></input>
            <button >Add Option</button>
            </form>
        </div>
        );

        ReactDOM.render( template, appRoot );
};

renderCounterApp()

/* let count = 0;

const addOne = () => {
    count++;
    renderCounterApp();
};

const minusOne = () => {
    count--;
    renderCounterApp();
};

const reset = () => {
    count = 0;
    renderCounterApp();
};

const appRoot = document.getElementById("app");

const renderCounterApp = () => {
    const templateTwo  = (
        <div>
            <h1>Count = {count}</h1>
            <button onClick={addOne} className="button">Butonsito +1</button>
            <button onClick={minusOne} className="button">Butonsito -1</button>
            <button onClick={reset} className="button">Butonsito Reset</button>
        </div>
    );

    ReactDOM.render( templateTwo, appRoot );

};

renderCounterApp(); */

/* // User information

let user = {
    name: 'Ale',
    age: '20',
    location: 'Chile'
};

function getLocation(location) {
    if (location){
        return <p>Location: {location}</p>
    } 
}

let templateTwo = (
    <div>
        <h1> {user.name ? user.name : 'Anonymous'} </h1>
        {(user.age && user.age >= 18) ? <p>Age: {user.age}</p> : 'underage'}
        {getLocation(user.location)}
    </div>
); */