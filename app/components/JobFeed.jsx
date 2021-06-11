import React from 'react';

class JobFeed extends React.Component {
  constructor(props) {
    super(props),
    this.state={
      location: ''
    }
    this.submitClick= this.submitClick.bind(this);
    this.onChange = this.onChange.bind(this);

  }
  onChange = (e) => {
    this.setState({
      location: e.target.value
    })
  }

  submitClick = () => {
    this.props.search(this.state.location);
  }

  render() {
  return (
    <div className='feed-container'>
    <h2>Missions</h2>

    <div className='feed-container-form'>
      <input onChange={this.onChange} className='search-container-input' type='text' placeholder='CHOOSE YOUR STAR SYSTEM'></input>
      <input className='btn' type='submit' value='MAY THE FORCE BE WITH YOU' onClick={this.submitClick}></input>
      </div>

      <div>
      {this.props.jobs.map((job, i) => {
        return (
         <div key={i}>
           <li className='feed-container-item'>
             <h4>{job.company.display_name}</h4>
             <div >
              {job.title.replace(/<\/?[^>]+>/gi, '')}
             </div>
             <div className='feed-item-byline'>
               <span className='feed-item-byline-location'>
                 {job.location.display_name}
               </span>
               <p>{job.description.replace(/<\/?[^>]+>/gi, '')}</p>
               <a href={job.redirect_url}>Warp to this Mission</a>
             </div>
           </li>
         </div>
        )
      })}
      </div>
    </div>
  )
 }
}

export default JobFeed;