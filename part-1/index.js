
const App = () => {
	return (
		<div>
			<FirstComponent />
            <NamedComponent name="Bryan"/>
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));