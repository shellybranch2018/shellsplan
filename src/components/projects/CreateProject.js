import React from 'react'
import { connect } from 'react-redux'
import { createProject } from '/shellsplan/src/store/actions/projectActions'

class CreateProject extends React.Component {
    state = {
        title:'',
        content:''

    }
    handleChange = (e) => {
        
        this.setState({
// Since the same handle change function is being fired, we use [e.target.id] to separate one event from another
            [e.target.id]:e.target.value
        })
        
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state)
        this.props.createProject(this.state)
        
    }

  render() {
    return (
      <div className="container">
      <form onSubmit={this.handleSubmit} className="white"> 
        <h5 className="grey-text text-darken-3">Create new project</h5>
        <div className="input-field"> 
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
        </div>
        <div className="input-field"> 
            <label htmlFor="content">Project Content</label>
            <textarea id="content" onChange={this.handleChange} className="materialize-textarea"></textarea>           
        </div>
        <div className="input-field">
        <button className="btn pink lighten-1 z-depth-0">Create</button>
        </div>
      </form>
        
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
 return {
   createProject: (project) => dispatch(createProject(project))
 }
}

export default connect(null, mapDispatchToProps)(CreateProject)
