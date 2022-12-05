import socketIo from "socket.io-client";
import './chat.css';

import React, { useEffect, useState } from 'react';
import { userName } from "./Home";
import Message from "./message";
import ReactScrollToBottom from "react-scroll-to-bottom";

let socket;

const ENDPOINT = "http://localhost:8000"
// const ENDPOINT = "https://my-u-c-server.herokuapp.com/"

export default function Chat() {

    const [id, setid] = useState("");
    const [messages, setmessages] = useState([]);


    let send = () => {
        const message = document.getElementById('messageInput').value;
        if (message !== "") {
            socket.emit('processing-message', { message, id });
            document.getElementById('messageInput').value = "";
        }

    };

    useEffect(() => {
        socket = socketIo(ENDPOINT, { transports: ['websocket'] });

        socket.on('connect', () => {
            setid(socket.id);
        });
        socket.emit('user-joined', { userName });

        return () => {

            socket.off();
        }
    }, []);

    useEffect(() => {

        socket.on('welcome', (data) => {
            setmessages([...messages, data]);
        });
        return () => {
            socket.off();
        }
    }, [messages]);

    useEffect(() => {

        socket.on('sendall', (data) => {
            setmessages([...messages, data]);

        });
        return () => {
            socket.off();
        }
    }, [messages]);


    useEffect(() => {
        socket.on('send-message', (data) => {
            setmessages([...messages, data]);
        });
        return () => {
            socket.off();
        }
    }, [messages]);


    useEffect(() => {

        socket.on('leave', (data) => {
            setmessages([...messages, data]);
        });
        return () => {
            socket.off();
        }
    }, [messages]);

    return (
       
            <div className="container-fluid">
                

                <ReactScrollToBottom className="box" id="box">
                    {messages.map((content, i) => < Message key={i} user={content.id === id ? "" : content.user} message={content.message} side={content.id === id ? "right" : "left"} />)}
                </ReactScrollToBottom>

                <div className="send">
                    <div className="text-start" action="#" id="send-container">
                        <input onKeyPress={(event) => event.key === 'Enter' ? send() : null} type="text" 
                        className="form-control" placeholder="Type here..." id="messageInput" />
                        <button className="btn  send-button" id="send-button" onClick={send} type="button">Send
                        </button>
                    </div>
                </div>
            </div>

    )

}

