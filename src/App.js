import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setBooks } from './actions/books'
import axios from 'axios'
import { Container } from 'semantic-ui-react';

import MenuComponent from './components/Menu';
import BookCard from './components/BookCard';




class App extends Component {
	componentWillMount() {
		const { setBooks } = this.props;
		axios.get('/books.json').then(({ data }) => {
			setBooks(data)

		})
	}


	render() {
		const { books, isReady } = this.props;

		return (
			<>
				<Container>
					<MenuComponent />
					<div class="ui four cards">
						{!isReady ? 'LOADING...'
							: books.map((book, i) =>
								<BookCard key={i} {...book} />)}</div>
				</Container>

			</>



		)


	}

}

const mapStateToProps = ({ books }) => ({
	books: books.items,
	isReady: books.isReady,
})
const mapDispatchToProps = dispatch => ({
	setBooks: books => dispatch(setBooks(books))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
