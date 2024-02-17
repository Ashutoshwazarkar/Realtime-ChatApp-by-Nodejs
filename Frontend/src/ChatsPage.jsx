import { MultiChatSocket , MultiChatWindow , useMultiChatLogic} from "react-chat-engine-advanced";

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
    'daf91fa1-f282-454d-8fbe-b299ef5d5539', 
    props.user.username,
    props.user.secret
    )
  return (
    <div style={{height : "100vh"}}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{height: "100%"  }} />
    </div>
  );
};

export default ChatsPage;