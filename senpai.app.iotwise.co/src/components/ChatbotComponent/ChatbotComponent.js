// Documentation: https://chatscope.io/storybook/react/?path=/story/components-chatcontainer--default-story
// Website: https://chatscope.io/
// Demo: https://mars.chatscope.io/

import React, { useEffect } from 'react'
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import "./ChatbotComponent.css"

import userAvatar from "./images/user-avatar.png"
import chatbotAvatarGif from "./images/chatbot-avatar.gif"
import chatbotAvatar from "./images/ninja.jpg"
//import chatbotAvatar from "./images/chatbot-avatar.png"

import {
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  ConversationHeader,
  VideoCallButton,
  VoiceCallButton,
  Avatar,
  InfoButton,
  MessageSeparator,
  TypingIndicator,
  AddUserButton,
  ArrowButton,
  AttachmentButton,
  EllipsisButton,
  SendButton,
  StarButton,
} from "@chatscope/chat-ui-kit-react";

const localSender = "Eduardo"

export const ChatbotComponent = () => {

  // Page Title
  useEffect(() => {
    document.title = "IoT Senpai® | Chatbot"
  })

  return (
    <div className='chatbot'>
      <ChatContainer>
        <ConversationHeader>

          <Avatar src={chatbotAvatarGif} name="IoT Senpai" />

          <ConversationHeader.Content 
            userName="IoT Senpai"
            info="Active 10 mins ago"
          />
          
          <ConversationHeader.Actions>
            <AddUserButton title='Add User' onClick={() => console.log('Click AddUserButton')} />
            <ArrowButton title='Arrow' onClick={() => console.log('Click ArrowButton')} />
            <AttachmentButton title='Attachment' onClick={() => console.log('Click AttachmentButton')} />
            <EllipsisButton title='Ellipsis' onClick={() => console.log('Click EllipsisButton')} />
            <InfoButton title='Info' onClick={() => console.log('Click InfoButton')} />
            <SendButton title='Send' onClick={() => console.log('Click SendButton')} />
            <StarButton title='Star' onClick={() => console.log('Click StarButton')} />
            <VideoCallButton title='Video Call' onClick={() => console.log('Click VideoCallButton')} />
            <VoiceCallButton title='Voice Call' onClick={() => console.log('Click VoiceCallButton')} />
          </ConversationHeader.Actions>
        </ConversationHeader>
        
        <MessageList typingIndicator={<TypingIndicator content="Username is typing" />}>

          <MessageSeparator content="Saturday, 30 November 2019" />

          <Message model={{
            message: "Hola Senpai",
            sentTime: "15 mins ago",
            sender: "Username",
            direction: "incoming",
            position: "single"
          }}>
            <Avatar src={userAvatar} name={"Username"} />
          </Message>

          <Message model={{
            message: "Hola Username",
            sentTime: "15 mins ago",
            sener: localSender,
            direction: "outgoing",
            position: "single"
          }}>
            <Avatar src={chatbotAvatar} name={"IoT Senpai"} />
          </Message>

        </MessageList>

        <MessageInput 
          placeholder="Type message here"
          onChange={(innerHtml, textContent, innerText, nodes) => {
            console.log('onChange', {innerHtml, textContent, innerText, nodes})
          }}
          onSend={(innerHtml, textContent, innerText, nodes) => {
            console.log('onSend', {innerHtml, textContent, innerText, nodes})
          }}
          onAttachClick={(evt) => {
            console.log('onAttachClick', {evt})
          }}
        />

      </ChatContainer>
    </div>
  )
}
