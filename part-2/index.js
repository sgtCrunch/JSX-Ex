
const App = () => {
	return (
		<div>
			<Tweet username="sgtCrunch" name="Bryan" date="06/05/2023" message="Donde esta la biblioteca!" />
			<Tweet username="sgtCrunch" name="Bryan" date="06/09/2023" message="El bigote grande, perro manteca!" />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));