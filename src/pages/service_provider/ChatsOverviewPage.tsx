import ChatItemOverview from "../../components/Chat/ChatItemOverview"

const ChatsOverviewPage = () => {
    return (
        <div>
            <div className="border-b-2 border-gray-300 p-5 bg-white">
                <input
                    type="text"
                    name=""
                    id=""
                    className="w-5/6 mx-auto block rounded-full border-2 border-gray-300 bg-gray-200 text-gray-600"
                    placeholder="Buscar..." />
            </div>
            <div className="bg-white h-screen">
                <ChatItemOverview />
                <ChatItemOverview />
            </div>
        </div>
    )
}

export default ChatsOverviewPage