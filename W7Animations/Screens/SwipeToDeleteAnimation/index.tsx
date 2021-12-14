// SwipeToDeleteAnimation

import { StatusBar } from 'expo-status-bar';
import React, 
    { useCallback, 
    useRef, 
    useState 
} from 'react';
import { SafeAreaView, 
    StyleSheet, 
    Text, 
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ListItem from './components/ListItem';

const TITLES = [
  'Record the dismissible tutorial 🎥',
  'Leave 👍🏼 to the video',
  'Check YouTube comments',
  'Subscribe to the channel 🚀',
  'Leave a ⭐️ on the GitHub Repo',
];

interface TaskInterface {
  title: string;
  index: number;
  checked: boolean;
}

const TASKS: TaskInterface[] = TITLES.map((title, index, checked) => ({ title, index, checked: false }));

// const TASKS = [
//   {
//     index: 0,
//     title: 'Record the dismissible tutorial 🎥',
//     checked: false,
//   },
//   { ... }, { ... }, { ... }
// ];

const BACKGROUND_COLOR = '#181A20';

export default function SwipeToDeleteAnimation() {
    const [tasks, setTasks] = useState(TASKS);

    const onDismiss = useCallback((task: TaskInterface) => {
        setTasks((tasks) => tasks.filter((item) => item.index !== task.index));
    }, []);

    function onChecked(utask: TaskInterface) {
        const updatedTasks = tasks.map(task => ({ ...task }));
        updatedTasks.find(task => {
            if (task.index === utask.index) {
                //task.checked === false ? (task.checked = true) : (task.checked = false);
                task.checked = !task.checked
            }
        });
        setTasks(updatedTasks);
    }


    const scrollRef = useRef(null);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Tarefas</Text>
      <ScrollView ref={scrollRef} style={{ flex: 1 }}>
        {tasks.map((task) => (
          <ListItem
            simultaneousHandlers={scrollRef}
            key={task.index}
            task={task}
            onDismiss={onDismiss}
            onChecked={onChecked}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  title: {
    fontSize: 60,
    marginVertical: 20,
    paddingLeft: '5%',
    color: '#fff',
  },
});

export { TaskInterface };