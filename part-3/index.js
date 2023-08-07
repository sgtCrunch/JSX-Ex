
const App = () => {
	return (
		<div>
			<Person name="Bryan" age={17} hobbies={["Basketball", "Reading", "Swimming"]} />
			<Person name="James" age={33} hobbies={["Eating", "Drinking", "Running"]} />
			<Person name="Isabell" age={25} hobbies={["Video Games", "Board Games", "Sleeping"]} />

		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));