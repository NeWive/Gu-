import React, { PureComponent } from 'react';
import './Comment.css';
import TextArea from "./TextArea";
import Input from "./Input";
import {Button} from "./Button";
import { connect } from 'react-redux';
import { setCommentHandler } from "../function/OnChangeHandler";
import {validate} from "../function/Validate";
import { urlInterfaceGroup } from "../config/url.config";
import axios from "axios";
import LoadingForButton from "./LoadingForButton";

function map(state) {
    return {
        commentSingle: state.commentSingle,
        commentValidate: state.commentValidate,
        comments: state.comments,
    }
}

class Comment extends PureComponent {
    constructor(props) {
        super(props);
        this.lastTime = null;
        this.gapTime = 1000;
        this.validImgInterface = urlInterfaceGroup.validateCode.interface;
        this.onChangeHandler = setCommentHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.requestForValidateImg = this.requestForValidateImg.bind(this);
        this.setComment = this.setComment.bind(this);
        this.imgClickHandler = this.imgClickHandler.bind(this);
        this.setIsRequesting = this.setIsRequesting.bind(this);
        this.clearHandler = this.clearHandler.bind(this);
        this.setHeight = this.setHeight.bind(this);
        this.setContainerHeight = this.setContainerHeight.bind(this);
        this.inputListName = [ 'commentSingle', 'commentValidate' ];
        this.mapToPostParam = {
            'commentSingle': 'content',
            'commentValidate': 'code',
        };
        this.state = {
            isRequesting: false,
        };
    }
    setContainerHeight() {
        this.props.dispatch({
            type: 'SET_CONTAINER_HEIGHT',
            value: (this.props.comments.length - 2) * 119 - 15,
        })
    }
    clearHandler() {
        this.props.dispatch({
            type: 'SET_SINGLE_COMMENT',
            value: '',
        });
        this.props.dispatch({
            type: 'SET_COMMENT_VALIDATE',
            value: '',
        });
    }
    setIsRequesting(v) {
        this.setState({
            isRequesting: v,
        })
    }
    imgClickHandler(e) {
        e.preventDefault();
        e.stopPropagation();
        let nowTime = +new Date();
        if(nowTime - this.lastTime > this.gapTime || !this.lastTime) {
            this.requestForValidateImg();
            this.lastTime = nowTime;
        }
    }
    async requestForValidateImg() {
        let toRemoveDom = document.getElementById('validateCodeImg');
        let parent = document.getElementById('validate_code_box');
        parent.removeChild(toRemoveDom);
        let {data} = await axios({
            method: 'GET',
            url: urlInterfaceGroup.validateCode.interface,
            responseType: 'blob'
        });
        let imgDom = document.createElement('img');
        imgDom.onload = () => {
            window.URL.revokeObjectURL(imgDom.src);
        };
        imgDom.src = window.URL.createObjectURL(data);
        imgDom.id = 'validateCodeImg';
        parent.appendChild(imgDom);
    }
    setComment(list) {
        this.props.dispatch({
            type: 'SET_COMMENT',
            value: list,
        });
    }
    setHeight(height) {
        this.props.dispatch({
            type: 'COMMENT_LIST_WINDOW_HEIGHT',
            value: height,
        });
    }
    async submitHandler() {
        let formObj = {};
        for(let item of this.inputListName) {
            let obj = {};
            obj['value'] = this.props[item];
            obj['id'] = item;
            let msg = validate(obj);
            if(msg !== 'pass'){
                alert(msg);
                return ;
            }
            formObj[this.mapToPostParam[item]] = this.props[item];
        }
        this.setIsRequesting(true);
        try {
            axios.defaults.withCredentials=true;
            let { 'data': { status } } = await axios.post(urlInterfaceGroup.comment.interface, JSON.stringify(formObj));
            if(status === 'code_error') {
                alert('验证码错误');
                document.getElementById('commentValidate').value = '';
                this.requestForValidateImg();
            }else if(status === 'ok'){
                alert('发送成功');
                let { 'data': { list } } = await axios.get(urlInterfaceGroup.commentList.interface);
                await this.setComment(list);
                await this.setHeight(342/list.length);
                await this.setContainerHeight();
                document.getElementById('commentValidate').value = '';
                document.getElementById('commentSingle').value = '';
                await this.requestForValidateImg();
                await this.clearHandler();
            }else {
                alert('Ops~网络开小差惹');
            }
        }catch (e) {
            console.log(e);
            alert('Ops~网络开小差惹');
        }finally {
            this.setIsRequesting(false);
        }
    }
    render() {
        return (
            <div id="Comment">
                <div className="textarea_box">
                    <TextArea style={{
                                width: 556,
                                height: 231,
                                paddingLeft: 15,
                                paddingTop: 14,
                                paddingBottom: 14,
                                paddingRight: 15,
                                }}
                                placeHolder={'写点什么...'}
                                id={'commentSingle'}
                                changeHandler={this.onChangeHandler(this)}/>
                    <div className="words_length_table" style={{
                        color: this.props.commentSingle.length > 80 ? 'red' : ''
                    }}>
                        {
                            `${this.props.commentSingle.length}/80`
                        }
                    </div>
                </div>
                <div className="validate_box">
                    {/* eslint-disable-next-line no-script-url,jsx-a11y/anchor-is-valid */}
                    <div id={'validate_code_box'} onClick={this.imgClickHandler}>
                        <img src={this.validImgInterface}
                             alt="" id={'validateCodeImg'}
                             width={'75px'}
                             height={'32px'}/></div>
                    <Input css={{
                                width: 147,
                                height: 37,
                                backgroundColor: '#FFFFFF',
                            }}
                            placeHolder={'验证码'}
                            id={'commentValidate'}
                            changeHandler={this.onChangeHandler(this)}/>
                    <Button style={{
                                    width: 163,
                                    height: 37,
                                    backgroundColor: '#58C4FF',
                                    cursor: this.state.isRequesting ? 'not-allowed' : 'pointer'
                                }}
                                clickHandler={this.state.isRequesting ? () => {} : this.submitHandler}>
                        {
                            this.state.isRequesting ? <LoadingForButton/> : '发送'
                        }
                    </Button>
                </div>
            </div>
        )
    }
}

export default connect(map)(Comment);