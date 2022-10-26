import React from 'react';

import { shouldShowVariant } from '../helpers/shouldShowTestVariant';
export class ForceRerender extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: this.props.testGroup === 0,
            isClient: false,
        };
    }
    componentDidMount() {
        this.setState({
            display: shouldShowVariant({
                testId: this.props.testId,
                testGroup: this.props.testGroup,
                lower: this.props.lower,
                upper: this.props.upper,
            }),
            isClient: true,
        });
    }
    render() {
        return this.state.display ? (
            <div
                id={this.props.id}
                className={this.props.className}
                style={
                    !this.state.isClient && this.props.testGroup === 0
                        ? {
                              visibility: 'hidden',
                          }
                        : {}
                }
            >
                {this.props.children}
            </div>
        ) : null;
    }
}
