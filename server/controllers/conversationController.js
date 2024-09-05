import Conversation  from '../models/conversations.js';

export const newConversation = async (req, res) => {

    console.log("Request reached the server for creating a conversation");

    try {
        console.log("Request reached inside")
        const senderid = req.body.senderId;
        const recieverId = req.body.recieverId;

        const exist = await Conversation.findOne({ members: { $all: [senderid, recieverId] } });

        console.log("Exist", exist);

        if (exist) {
            return res.status(200).json({ message: "Conversation already exists", exist });
        }


        const newConversation = new Conversation({
            members: [senderid, recieverId],
        });

        await newConversation.save();

        return res.status(201).json(newConversation);

    }
    catch (error) {
        return res.status(500).json({ message: "Something went wrong", error });
    }
}