import React, { useRef, useEffect } from 'react';

import { Container, InputWrapper, Input, InputIcon, Messages } from './styles';

import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {


  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef])
  return (
    <Container>
      
      <Messages ref={messagesRef}>

        {Array.from(Array(25).keys()).map((n) => (
          <ChannelMessage 
          key={n}
          author="Leandro Santoro"
          date="20/08/2020"
          content="Hoje é dia 20 de agosto de 2020..."
        />
        ))}

        <ChannelMessage 
          author="Diego Fernandes"
          date="20/08/2020"
          content={<> <Mention>@Leandro Santoro</Mention>, hoje é dia 20 de agosto de 2020... </>}
          hasMention
          isBot
        />

      </Messages>
      

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre"/>
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}

export default ChannelData;