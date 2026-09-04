import api from "../../utils/axios";

export const getConversations = async () => {
    try {
        const { data } = await api.get("/api/chat/get-conversations");

        console.log("Conversations API response:", data);

        return Array.isArray(data) ? data : data.conversations || [];
    } catch (error) {
        console.log("Get conversations error:", error);
        return [];
    }
};