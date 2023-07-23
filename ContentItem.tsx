import { View, Text, Image } from 'react-native';

export default function ContentItem({
  user, 
  description,
  type,
  question,
  answers
}) {

  const isFlashcard = type === 'flashcard';

  return (
    <View style={styles.container}>
    
      <View style={styles.header}>
        <Image 
          source={{uri: user.avatar}}
          style={styles.avatar}
        />
        <Text>{user.username}</Text>
      </View>

      <Text style={styles.description}>
        {description}
      </Text>

      {isFlashcard ? (
        <FlashcardContent 
          question={question}
        />
      ) : (
        <MCQContent
          question={question}
          answers={answers}
        />
      )}

      <InteractionBar />
      
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginVertical: 10,
    padding: 10    
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center' 
  },
  avatar: {
    width: 40, 
    height: 40,
    borderRadius: 20    
  },
  description: {
    fontSize: 14,
    color: 'gray'
  }
});
