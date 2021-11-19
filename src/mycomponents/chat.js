import socketIo from "socket.io-client";
import './chat.css';

import React, { useEffect, useState } from 'react';
import { userName } from "./home";
import Message from "./message";
import ReactScrollToBottom from "react-scroll-to-bottom";

let socket;

const ENDPOINT = "https://u-c-app.herokuapp.com/"

export default function Chat() {
   
   const [id, setid] = useState("");
   const [messages, setmessages] = useState([]);

    let send=()=>{
       const message=document.getElementById('messageInput').value;
        socket.emit('processing-message', {message, id});
        document.getElementById('messageInput').value="";
    };

    useEffect(() => {
        socket = socketIo(ENDPOINT, { transports: ['websocket'] });

        socket.on('connect', () => {
            setid(socket.id); 
        })
        
        socket.emit('user-joined',{ userName });

        socket.on('welcome',(data)=>{
            setmessages([...messages,data]);
        });

        socket.on('sendall', (data)=>{
            setmessages([...messages,data]);
        });

        socket.on('leave', (data)=>{
            setmessages([...messages,data]);
        });
       
        return () => {
           socket.emit('disconnected');
           socket.off();
        }
    }, []);

    useEffect(() => {
        socket.on('send-message', (data)=>{
            setmessages([...messages,data]);
        });
        return () => {
           socket.off();
        }
    }, [messages])

    return (
        <div id='welcome'>
            <h1 className="text-center">Welcome</h1>

            <ReactScrollToBottom className="box" id="box">
             { messages.map((content,i)=>< Message user={content.id===id?"":content.user}  message={content.message} side={content.id===id?"right":"left"} />)}
            </ReactScrollToBottom>

            <div className="send ">
                <div className="text-center " action="#" id="send-container">
                    <input type="text" className="messageInput" id="messageInput" />
                    <button className="btn btn-primary send-button" id="send-button" onClick={send} type="button">Send</button>
                </div>
            </div>
        </div>
    )

}

