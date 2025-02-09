import React from 'react';
import { lostPageButtonList } from "../config/list.config";
import { Button } from '../element/Button';
import { Logo } from "../element/Logo";
import './Lost.css';
export function Success() {
    const toIndex = () => {
        const location = window.location;
        window.location.href = `${location.origin}/`;
    };
    const refresh = () => {
        window.location.reload();
    };
    const handlerMap = {
        'index': toIndex,
        'refresh': refresh
    };
    return (
        <div id="Lost">
            <div className="container">
                <div className="message">
                    <p className="func">
                        哇⊙ω⊙(<span className="args">200</span>);
                    </p>
                    {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                    <p className="annotation">
                        邮箱激活成功
                    </p>
                </div>
                <div className="button_box">
                    {
                        lostPageButtonList.map((item) => (
                            <div className="button" key={item.name}>
                                <Button clickHandler={handlerMap[item.name]} value={item.value}/>
                            </div>
                        ))
                    }
                </div>
                <div className="logo_box">
                    <Logo/>
                </div>
            </div>
        </div>
    )
}