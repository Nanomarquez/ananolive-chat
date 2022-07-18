import React from "react";
import * as C from "./styles";
import { MdDonutLarge, MdChat, MdMoreVert } from "react-icons/md";
import * as EmailValidator from "email-validator";
import { auth, db } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";

const SidebarHeader = ({ setUserChat }) => {
  const [user] = useAuthState(auth);
  const refChat = db
    .collection("chats")
    .where("users", "array-contains", user.email);
  const [chatsSnapshot] = useCollection(refChat);

  const handleCreateChat = () => {
    const emailInput = prompt("Escriba el email al que quiera mandarle mensaje");

    if (!emailInput) return;

    if (!EmailValidator.validate(emailInput)) {
      return alert("E-mail inválido!");
    } else if (emailInput === user.email) {
      return alert("Tiene que ser un email distinto al tuyo!");
    } else if (chatExists(emailInput)) {
      return alert("Chat ya existe");
    }

    db.collection("chats").add({
      users: [user.email, emailInput],
    });
  };

  const chatExists = (emailChat) => {
    return !!chatsSnapshot?.docs.find(
      (chat) => chat.data().users.find((user) => user === emailChat)?.length > 0
    );
  };

  return (
    <C.Container>
      <C.Avatar
        src={user?.photoURL}
        onClick={() => [auth.signOut(), setUserChat(null)]}
      />
      <C.Options>
        <MdDonutLarge />
        <MdChat onClick={handleCreateChat} />
        <MdMoreVert />
      </C.Options>
    </C.Container>
  );
};

export default SidebarHeader;