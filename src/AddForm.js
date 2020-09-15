import React from 'react';
// import { render } from '@testing-library/react';

class AddForm extends React.Component {
state = { name: ''}

handleChange = (e) => {
    this.setState({ name: e.target.value });
}

handleSubmit = (e) => {
    e.preventDeafult();
    this.props.addItem(this.state.name);
    this.setState({ name: ''})
    console.log(this.state.name)
}

    render() {
        const { name } = this.state;

        return (
            <form onSubmit={this.handleSubmit}> 
                <input
                value={name}
                name="name"
                onChange={this.handleChange}
                 required 
                 placeholder="ADD ITEM"
                  />
            </form>
        )
    }
}

export default AddForm;