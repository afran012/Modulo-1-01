import React, { Component } from 'react';
import List from '../components/List';
import styled from 'styled-components';

const StyleContainer = styled.div`
   background-color: beige;
`

export default class Container extends Component {
    render() {
        return (
            <StyleContainer>
                <List/>
            </StyleContainer>
        )
    }
}
