import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import axios from 'axios'
import MenuComponent from '../components/Menu';
import BookCard from '../components/BookCard';
import FilterComponent from '../containers/Filter'
 



class App extends Component {
	componentWillMount() {
		const { setBooks } = this.props;
		axios.get('/books.json').then(({ data }) => {
			setBooks(data)

		})
	}


	render() {
		const { books, isReady  } = this.props;

		return (
			<>
				<Container>
					<MenuComponent />
<FilterComponent />

					<div class="ui four cards">
						{!isReady ? 'LOADING...'
							: books.map((book, i) =>
								<BookCard key={i} {...book} />)}</div>
				</Container>

			</>
		)
	}
}

export default  App;
