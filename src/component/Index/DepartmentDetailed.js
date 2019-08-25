import React, { PureComponent } from 'react';
import { CloseButton } from "../../element/CloseButton";
import { connect } from 'react-redux';
import { departmentList } from "../../config/list.config";
import './DepartmentDetailed.css';
import {Motion, spring} from "react-motion/lib/react-motion";

function map(state) {
    return {
        departmentMotionIndex: state.departmentMotionIndex,
        isDepartmentSelMotive: state.isDepartmentSelMotive,
        departmentId: state.departmentId,
        departmentDescription: state.departmentDescription,
        isDepartmentReady: state.isDepartmentReady,
    }
}

class DepartmentDetailed extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            content: '',
            isMotive: false,
            start: 0,
            end: 1,
            toClose: false,
        };
        this.closeHandler = this.closeHandler.bind(this);
        this.contentHandler = this.contentHandler.bind(this);
        this.exchangeState = this.exchangeState.bind(this);
    }
    exchangeState() {
        this.setState({
            start: 1,
            end: 0
        })
    }
    setContent() {
        this.setState((preState) => {
            return {
                isMotive: !preState.isMotive,
            }
        });
    }
    contentHandler() {
        this.setContent();
    }
    async closeHandler() {
        await this.setContent();
        await this.exchangeState();
        this.props.dispatch({
            type: 'SET_IS_DEPARTMENT_READY',
        });
        this.props.dispatch({
            type: 'SET_IS_COVER_MOTIVE',
        });
    }
    componentDidMount() {
        this.contentHandler();
    }
    render() {
        return (
            <div className="department_detailed">
                <div className="close_button_box">
                    <CloseButton
                        style={{borderColor: '#FFFFFF'}}
                        clickHandler={this.closeHandler}/>
                </div>
                <div className="title_box">
                    <div className="title">
                        <p>
                            部门介绍 Departments
                        </p>
                        <p>
                            {
                                (() => {
                                    let name = this.props.departmentDescription[Number(this.props.departmentId) - 1].name;
                                    return `${name} ${departmentList.get(name)}`
                                })()
                            }
                        </p>
                    </div>
                </div>
                <div className="content">
                    {
                            <Motion
                                style={{opacity: spring(this.state.end)}}
                                defaultStyle={{opacity: this.state.start}}>
                                {
                                    ({ opacity }) => (
                                        <p style={{
                                            opacity: opacity
                                        }}>
                                            {
                                                this.state.isMotive ? `${this.props.departmentDescription[Number(this.props.departmentId) - 1].info}` : ''
                                            }
                                        </p>
                                    )
                                }
                            </Motion>
                    }
                </div>
            </div>
        )
    }
}

export default connect(map)(DepartmentDetailed);