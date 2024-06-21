function Contato() {
    return ( 
        <>
         <div className=" min-h-screen p-10 pt-24">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-white mb-6">Fale Conosco</h2>
                <div className="bg-blue-700 rounded-lg shadow-lg p-6">
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-gray-400">Nome</label>
                            <input 
                                type="text" 
                                id="name" 
                                className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"
                                placeholder="Seu nome"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-400">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"
                                placeholder="Seu email"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-gray-400">Mensagem</label>
                            <textarea 
                                id="message" 
                                rows="5" 
                                className="w-full p-2 rounded bg-gray-700 border border-gray-600 text-white"
                                placeholder="Sua mensagem"
                            ></textarea>
                        </div>
                        <div className="text-right">
                            <button type="submit" className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
     );
}

export default Contato ;