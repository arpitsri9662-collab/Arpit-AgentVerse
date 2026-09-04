import api from "../../utils/axios";

export const createConversation = async () => {
    try {
        const { data } = await api.post("/api/chat/create-conversation");
        return data;
    } catch (error) {
        console.log("Create conversation error:", error);
        return null;
    }
};