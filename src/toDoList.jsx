import { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";

function DoList() {
    let [toDos, setToDos] = useState([]);
    
    function addNewToDo() {
        let input = document.querySelector("input");
        let inputValue = input.value;
        if(inputValue === ""){
            input.placeholder = "enter some text bro";
        }else {
            handleAdd(inputValue);
            input.value = "";
        }
    }

    function handleAdd(value) {
        const newToDo = { id: Date.now(), text: value };
        setToDos([...toDos, newToDo]);
    }

    function HandleDelete(id) {
        const updatedToDos = toDos.filter(toDo => toDo.id !== id);
        setToDos(updatedToDos);
    }
    
    useEffect(() => {
        const handleLoad = () => {
            GetStorge();
        };
        window.addEventListener('load', handleLoad);
        return () => {
          window.removeEventListener('load', handleLoad);
        };
    }, []);

    useEffect(() => {
        const handleBeforeUnload = (event) => {
            LocalStorgeAdd();
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
          window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [toDos]);

    function LocalStorgeAdd() {
        localStorage.setItem("ToDosStorge", JSON.stringify(toDos));
    }

    function GetStorge() {
        let pastStorage = localStorage.getItem("ToDosStorge");
        if(pastStorage) {
            setToDos(JSON.parse(pastStorage));
        }
    }

    function keyPress(e) {
        if (e.key == 'Enter') {
            addNewToDo();
        }else{
        }
    }

    return (
        <div className="h-screen w-screen flex justify-center">
            <div className="lg:w-1/2 xl:w-7/10 md:w-7/10 h-fit w-screen flex items-center flex-col overflow-y-auto flex-wrap">
                <div className="w-full h-12 flex justify-center items-center flex-row mt-10 mb-2">
                    <input onKeyDown={keyPress} type="text" className="border-4 border-black w-7/10 lg:w-1/2 h-10/10 rounded-l-3xl p-3 indent-0 md:indent-3  text-sm sm:text-md lg:text-2xl flex justify-center items-center" placeholder="What do you want to do today?" />
                    <button className="h-10/10 w-2/10 lg:w-1/10 bg-blue-500 text-white rounded-r-3xl p-3" onClick={addNewToDo}>Add</button>
                </div>
                <div className="w-9/10 lg:w-6/10 h-fit flex flex-col">
                    <ul className="h-fit w-full flex flex-col items-center justify-center">
                        {toDos.map((toDo) => (
                            <li key={toDo.id} className="w-full h-10 flex flex-row border-white border-b-2">
                                <p className="w-9/10 text-xl h-full flex items-center">{toDo.text}</p>
                                <MdDelete onClick={() => {HandleDelete(toDo.id)}} className="w-10 h-10 text-red-600 hover:cursor-pointer"/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default DoList;
