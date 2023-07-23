// MCQContent.tsx

import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

import { getAnswer } from './services'; 

export default function MCQContent({ question, answers }) {

  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);

  const selectAnswer = (answerIndex) => {
    setSelected(answerIndex);
  }

  const revealAnswer = () => {
    getAnswer(question.id).then(res => {
      setRevealed(true);
    })
  }

  return (
    <View>
      <Text>{question.prompt}</Text>

      {answers.map((answer, index) => (
        <Button 
          key={index}
          title={answer.text}
          onPress={() => selectAnswer(index)}
          style={{
            backgroundColor: 
              index === selected ? 'blue' : 'grey'
          }}
        />
      ))}

      <Button title="Reveal" onPress={revealAnswer} />

      {revealed && (
        <Text>Correct answer: {question.answer}</Text> 
      )}

    </View>
  );

}
