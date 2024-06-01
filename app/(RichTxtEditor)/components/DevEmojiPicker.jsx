"use client";
import React, { useState, useEffect } from "react";
import Emoji from "./Emoji.json";
import JsonSearch from "search-array";
import { FiSearch } from "react-icons/fi";
import * as Emojione from 'emojione';

const DevEmojiPicker = ({ emojiTxt }) => {
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("Smileys & Emotion");
  const [filteredEmojis, setFilteredEmojis] = useState([]);
  const [hoveredEmoji, setHoveredEmoji] = useState(null);

  const getData = () => {
    const categories = new Map();
    Emoji.forEach((item) => {
      const { category, emoji } = item;
      if (!categories.has(category)) {
        categories.set(category, { ctgName: category, emoji: emoji });
      }
    });
    setUniqueCategories(Array.from(categories.values()));
  };

  const searcher = new JsonSearch(Emoji);

  const handleFindEmoji = (e) => {
    const { value } = e.target;
    console.log(searcher.query(value));
    setFilteredEmojis(searcher.query(value));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <section className="w-fit h-80 rounded-lg space-y-2 text-black bg-white border p-2 flex flex-col">
      <div className="relative">
        <input
          type="text"
          spellCheck="false"
          onChange={handleFindEmoji}
          value={hoveredEmoji && hoveredEmoji}
          className="w-full p-1 px-2 pl-8 rounded-full bg-slate-100 border text-sm outline-slate-200 outline-offset-4"
          placeholder="Search by tag or alias"
        />
        <FiSearch className="absolute top-2 left-2 text-slate-600" />
      </div>
      <ul className="grid grid-cols-9 gap-1 bg-slate-100 rounded-md border p-1 text-xl items-center justify-center">
        {uniqueCategories.map((elem, index) => (
          <li
            key={index}
            className="cursor-pointer transition-all hover:scale-105"
            onClick={() => {
              setFilteredEmojis([]);
              setCurrentCategory(elem.ctgName);
              console.log(elem.ctgName);
            }}
          >
            {elem.emoji}
          </li>
        ))}
      </ul>

      <ul className="w-full h-full items-start content-start justify-start overflow-y-scroll grid grid-cols-9 gap-1 text-xl">
        {!filteredEmojis.length > 0
          ? Emoji.filter((e, i) => e.category === currentCategory).map(
              (elem, index) => (
                <li
                  className="cursor-pointer hover:scale-95 transition-all"
                  onMouseEnter={() =>
                    setHoveredEmoji(elem.emoji + elem.aliases[0])
                  }
                  onClick={emojiTxt(elem.emoji)}
                  onMouseLeave={() => setHoveredEmoji(null)}
                  key={index}
                >
                  {elem.emoji}
                </li>
              )
            )
          : filteredEmojis.map((elem, index) => (
              <li
                className="cursor-pointer hover:scale-95 transition-all"
                onMouseEnter={() =>
                  setHoveredEmoji(elem.emoji + elem.aliases[0])
                }
                onClick={() => emojiTxt(elem.emoji)}
                onMouseLeave={() => setHoveredEmoji(null)}
                key={index}
              >
                {elem.emoji}
              </li>
            ))}
      </ul>
    </section>
  );
};

export default DevEmojiPicker;
