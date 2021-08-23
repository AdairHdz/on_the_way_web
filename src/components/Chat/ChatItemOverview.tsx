const ChatItemOverview = () => {
    return (
        <div className="bg-white border-b-2 border-gray-200 flex gap-5 p-3">
            <div className="h-14 w-14 rounded-full bg-gray-300"></div>
            <div className="flex-grow flex flex-col">
                <p className="font-bold text-blue-500">Nombre de usuario</p>
                <div className="font-thin h-full text-gray-600 text-sm flex items-end">
                    <p>Resumen de mensaje...</p>
                </div>
            </div>
            <p className="h-full align-top text-sm font-thin mr-2 text-gray-600 italic">Concretado</p>
        </div>
    )
}

export default ChatItemOverview