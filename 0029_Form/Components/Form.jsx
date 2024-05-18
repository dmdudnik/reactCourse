import React from "react";

class Form extends React.Component {
    state = {
        newName: '',
        newEmail: '',
    }


    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };


    render() {
        const { newName, newEmail } = this.state;

        return (
            <div>
                <input
                    type="text"
                    name="newName"
                    placeholder="newName"
                    value={newName}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="newEmail"
                    placeholder="E-mail"
                    value={newEmail}
                    onChange={this.handleChange}
                />
            </div>
        )
    }

}

export default Form;