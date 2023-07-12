function getWord(): string {
  const sentences = [
    "The sun shone brightly as the birds chirped in the trees. The children played in the park, laughing and running around. The dog chased a squirrel, barking excitedly. It was a beautiful day",
    "The old man sat on the bench, watching the world go by. He had seen a lot in his lifetime, but he still found beauty in the simple things. A flower blooming in the park, a child's laughter, the smell of fresh bread baking in the oven. These were the things that made life worth living",
    "The young woman sat at her desk, working on her computer. She was focused and determined, determined to finish her project on time. She had been working on it for weeks, and she was finally close to finishing. She took a deep breath and continued working",
    "The couple walked hand-in-hand through the park. They were talking and laughing, enjoying each other's company. They had been together for many years, and they were still very much in love. They were looking forward to spending the rest of their lives together",
    "The student sat in the classroom, listening to the lecture. She was taking notes, trying to understand the material. She knew that the test was coming up, and she wanted to be prepared. She was a good student, and she was confident that she would do well on the test",
    "The doctor examined the patient, asking questions and listening to the patient's symptoms. The doctor was trying to diagnose the patient's illness. The patient was worried, but the doctor was calm and reassuring. The doctor was confident that he would be able to help the patient",
    "The fireman fought the fire, trying to put it out. The fire was spreading quickly, and the fireman was working hard to contain it. He was risking his life to save others, and he was determined to succeed. The fireman was a hero",
    "The soldier fought in the war, risking his life to protect his country. He was brave and selfless, and he was willing to do whatever it took to win. The soldier was a hero",
    "The teacher taught her students, sharing her knowledge and wisdom. She was passionate about teaching, and she loved seeing her students learn. The teacher was a role model, and she inspired her students to be the best they could be",
    "The artist painted a picture, capturing the beauty of the world around her. She was talented and creative, and she had a unique vision. The artist was a master of her craft, and her paintings were works of art",
  ];
  const word: string =
    sentences[Math.floor(Math.random() * sentences.length)] ?? "";
  return word;
}

export default getWord;
