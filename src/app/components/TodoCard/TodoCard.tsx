import { MdDelete, MdEdit, MdSave } from "react-icons/md";
import { useState } from "react";

interface TodoCardProps {
  name: string;
  setCards: React.Dispatch<React.SetStateAction<string[]>>;
  updateCardName: (oldName: string, newName: string) => void;
}

export default function TodoCard({
  name,
  setCards,
  updateCardName,
}: TodoCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);

  return (
    <div className="flex items-center justify-between w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg rounded-2xl text-white p-4 hover:scale-105 transition-transform duration-300">
      {isEditing ? (
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className="flex-grow bg-white text-black p-2 rounded-lg shadow-inner focus:ring-2 focus:ring-purple-300 outline-none"
        />
      ) : (
        <h1 className="text-xl font-semibold truncate">{name}</h1>
      )}
      <div className="flex items-center gap-4">
        {isEditing ? (
          <button
            onClick={() => {
              updateCardName(name, newName);
              setIsEditing(false);
            }}
            className="bg-green-500 hover:bg-green-400 text-white p-2 rounded-lg shadow-md transition-all"
          >
            <MdSave className="text-xl" />
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-500 hover:bg-blue-400 text-white p-2 rounded-lg shadow-md transition-all"
          >
            <MdEdit className="text-xl" />
          </button>
        )}
        <button
          onClick={() => {
            setCards((prevCards) =>
              prevCards.filter((cardName) => cardName !== name)
            );
          }}
          className="bg-red-500 hover:bg-red-400 text-white p-2 rounded-lg shadow-md transition-all"
        >
          <MdDelete className="text-xl" />
        </button>
      </div>
    </div>
  );
}
