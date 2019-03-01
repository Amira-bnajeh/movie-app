import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

export default class Modelpopup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false,
            title:'',
            image: '',
            rate: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })       
      }
    
      submitmovie =()=>{
            this.props.newMovie({title:this.state.title,image:this.state.photo, rate:this.state.rate})
            this.setState({
                visible : false
            });
      }

    openModal=()=>{
        this.setState({
            visible : true
        });
    }

    closeModal=()=> {
        this.setState({
            visible : false
        });
    }

    render() {
        return (
            <section>
                
                <input type="button" value="Add Movie" onClick={() => this.openModal()} />
                <Modal 
                    visible={this.state.visible}
                    width="400"
                    height="300"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <div>
                        <p>
                            <input type="text" name="title" onChange={this.handleChange} placeholder="add title" />
                        </p>
                        <p>
                            <input type="text" name="image" onChange={this.handleChange} placeholder="add photo" />
                        </p>
                        <p>
                            <input type="text" name="rate" onChange={this.handleChange} placeholder="add rating" />
                        </p>
                        <p>
                        <input type="button" value="Add" onClick={this.submitmovie}/>
                        </p>
                        
                    </div>
                </Modal>
            </section>
        );
    }
}