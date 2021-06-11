import React from 'react';
import Search from './components/Search.jsx';
import JobFeed from './components/JobFeed.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
    }
    this.onSearch = this.onSearch.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    console.log(e.target.value);
  }

  onSearch(location) {
    axios.get(`/${location}`)
    .then(data => {
      console.log('You here?', data);
      this.setState({
        jobs: data.data
      })
    })
    .catch(error => {
      console.log('oops something went wrong!');
    })
  }

  render() {
      return (
        <div className='main-container'>
          {/* <Navbar /> */}
          <h1>JOBBA THE HUNT</h1>
          <Search />
          <JobFeed jobs={this.state.jobs} search={this.onSearch}/>
        </div>
        );
 }
}

export default App;