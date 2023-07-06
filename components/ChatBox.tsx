import { Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { useEffect, useState } from 'react';

export function ChatBox() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((counter) => counter + 1);
  };

  useEffect(() => {
    console.log('sideeffect is effected' + count);
  }, [count]);

  return (
    <View>
      <Text>This is a chatbox by Affan</Text>
      <Button icon="file-document-outline" mode="elevated" onPress={handleClick}>
        Pressed Me {count}
      </Button>
    </View>
  );
}
