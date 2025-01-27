"use client";

import { useState } from "react";
import TodoCard from "./components/TodoCard/TodoCard";

export default function Home() {
  const [cards, setCards] = useState<string[]>(["123"]);
  const [card, setCard] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  // Функция для обновления имени задачи
  const updateCardName = (oldName: string, newName: string) => {
    setCards((prevCards) =>
      prevCards.map((card) => (card === oldName ? newName : card))
    );
  };

  // Фильтрация задач по поисковому запросу
  const filteredCards = cards.filter((name) =>
    name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="mx-auto p-10 mt-10 max-w-lg h-auto border-2 border-gray-200 shadow-md rounded-xl bg-gray-50">
      <div className="flex flex-col items-center">
        <h1 className="text-center text-4xl font-bold text-gray-700 mb-6">
          Todo List
        </h1>

        {/* Поиск */}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full mb-6 border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Search todos..."
        />

        {/* Список задач */}
        <div className="w-full flex flex-col gap-4">
          {filteredCards.map((name: string) => (
            <TodoCard
              key={name}
              name={name}
              setCards={setCards}
              updateCardName={updateCardName}
            />
          ))}
        </div>

        {/* Добавление новой задачи */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!card.trim() || cards.includes(card.trim())) return;
            setCards((prev) => [...prev, card.trim()]);
            setCard("");
          }}
          className="mt-8 w-full"
        >
          <label htmlFor="new-task" className="text-lg font-medium text-gray-600">
            Add new Task
          </label>
          <input
            type="text"
            value={card}
            onChange={(e) => setCard(e.target.value)}
            className="w-full mt-2 border-2 border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter new task..."
            required
          />
          <button
            type="submit"
            className="mt-4 w-full bg-indigo-500 text-white py-2 rounded-lg shadow hover:bg-indigo-600 transition-all"
            disabled={!card.trim() || cards.length >= 4}
          >
            Add Task
          </button>
        </form>

        {/* Информация о лимите задач */}
        {cards.length >= 4 && (
          <p className="mt-4 text-sm text-red-500">
            Maximum of 4 tasks allowed.
          </p>
        )}
      </div>
    </main>
  );
}
