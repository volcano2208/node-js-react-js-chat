import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from "react-chat-engine-advanced";

const ChatsPage = (props: any) => {
  const chatProps = useMultiChatLogic(
    "ec17b1d8-6f5e-4297-9c2a-1e1a9a42569d",
    props.user.username,
    props.user.secret
  );

  return (
    <div style={{height: "100vh"}}>
      <MultiChatSocket {...chatProps}></MultiChatSocket>
      <MultiChatWindow
        {...chatProps}
        style={{height: "100%"}}
      ></MultiChatWindow>
    </div>
  );
};
export default ChatsPage;
