import React ,{Component , Fragment} from 'react'

class Form extends Component {
    state = {
        name : '',
        lastName : '',
        age : 0
    }

    handleSubmit (event) {
        event.preventDefault()
        
        console.log(this.state)
    }

    handleChange (event) {
        this.setState({
            [event.target.id] : event.target.value
        })
    }

    render(){

        return (
            <Fragment>
                <form onSubmit={this.handleSubmit}>

                <label htmlFor='name'>Nombre:</label>
                <input id='name' type='text' name='name' onChange={this.handleChange}/>

                <label htmlFor='lastname'>Apellido:</label>
                <input id='lastname' type='text' name='lastname' onChange={this.handleChange}/>

                <label htmlFor='age'>Edad:</label>
                <input id='age' type='text' name='age' onChange={this.handleChange}/>

                <button type='submit' value='Enviar'>enviar</button>

                </form>
            </Fragment>
        )

    }
}

export default Form