import React from "react";
import { connect } from "react-redux";
import Form from "./Form";

function mapStateToProps(state) {
    return {
        isLoading: state.isLoading,
        fields: state.person,
        people: state.people,
        saveStatus: state.saveStatus,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onSubmit: (people) => {
            dispatch(savePeople(people));
        },
    };
}

export const FormContainer = connect(mapStateToProps, mapDispatchToProps)(Form);

export default FormContainer;
