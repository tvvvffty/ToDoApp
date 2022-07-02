import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, KeyboardAvoidingView, TouchableOpacity, Text, View, Platform, TextInput, Keyboard, Button, Switch } from 'react-native';
import Task from './components/Task'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'


function PersonalTask ({navigation }) {
  const [task, setTask] = useState();
  const [taskItems, setTaskitems] = useState([]);
  
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskitems([...taskItems, task])
    setTask(null);
  }
  
  const completedTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskitems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <View style={styles.items}>
          {
            taskItems.map((item, index) => {
              return (
              <TouchableOpacity key={index} onPress={( ()=> completedTask() )}>
                <Task text={item}/>
              </TouchableOpacity>
              )
            })
          }
        </View>
      </View>

    <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}
    >
      <TextInput style={styles.input} placeholder={'Add a task'} value={task} onChangeText={text => setTask(text)} />
      <TouchableOpacity onPress={() => handleAddTask()}>
        <Ionicons style={styles.addIcon}name='ios-add-circle'/>
      </TouchableOpacity>
    </KeyboardAvoidingView>
    </View>
  );
  
}

function WorkTask ({navigation }) {
  const [task, setTask] = useState();
  const [taskItems, setTaskitems] = useState([]);
  
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskitems([...taskItems, task])
    setTask(null);
  }
  
  const completedTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskitems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <View style={styles.items}>
          {
            taskItems.map((item, index) => {
              return (
              <TouchableOpacity key={index} onPress={( ()=> completedTask() )}>
                <Task text={item}/>
              </TouchableOpacity>
              )
            })
          }
        </View>
      </View>

    <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}
    >
      <TextInput style={styles.input} placeholder={'Add a task'} value={task} onChangeText={text => setTask(text)} />
      <TouchableOpacity onPress={() => handleAddTask()}>
        <Ionicons style={styles.addIcon}name='ios-add-circle'/>
      </TouchableOpacity>
    </KeyboardAvoidingView>
    </View>
  );
  
}

function ToggleSwtich (){
  <Switch></Switch>
}

const Drawer = createDrawerNavigator();


export default function App() {
  const [isDarkTheme, setDarkTheme] = React.useState(false);
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName = "Task">
        <Drawer.Screen name="Personal Task" component={PersonalTask} />
        <Drawer.Screen name = "Work Task" component={WorkTask} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8EAED',
    },
      taskWrapper: {
        paddingTop: 30,
        paddingHorizontal: 20,
      },
      items: {
        marginTop: 30,
      },
      writeTaskWrapper: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
      },
      input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60, 
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 265,
      },
      addIcon: {
        fontSize: 60,
        color: '#93C5FD',
      }
  });


