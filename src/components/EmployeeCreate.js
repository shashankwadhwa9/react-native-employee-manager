import React, { Component } from 'react';
import { Card, CardSection, Input, Buttton } from './common';

class EmployeeCreate extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Input label="Name" placeholder="Jane" />
                </CardSection>

                <CardSection>
                    <Input label="Phone" placeholder="555-555-5555" />
                </CardSection>

                <CardSection>
                </CardSection>

                <CardSection>
                    <Buttton>
                        Create
                    </Buttton>
                </CardSection>
            </Card>
        );
    }
}

export default EmployeeCreate;
