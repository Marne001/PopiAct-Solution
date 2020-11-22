import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    Container
} from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

class ItemModal extends Component {
    state = {
        modal: false,
        name: ''
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
 
    onSubmit = e => {
        e.preventDefault();

        const newItem = {
            name: this.state.name
        }

        //Add item via addItem action
        this.props.addItem(newItem);

        // Close modal
        this.toggle();
    }

    render(){
        return(
            <div>
                { this.props.isAuthenticated ?  (
                <Button className="item-button"
                    outline color="secondary"
                    onClick={this.toggle}
                >
                    Add Information
                </Button> 
                ) : ( 
                <h4 className="mb-3 ml-4">Log In To manage POPI-Information</h4>
                )}

                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Add To Database</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">Information</Label>
                                <Input
                                type="text"
                                name="name"
                                id="item"
                                placeholder="Add Item"
                                onChange={this.onChange}
                                />
                                <Button 
                                color="dark"
                                style={{marginTop: '2rem'}}
                                block
                                >Add Information</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    item: state.item,
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {addItem})(ItemModal);