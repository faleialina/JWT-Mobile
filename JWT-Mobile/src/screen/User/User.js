import React, { useState } from 'react'
import {
	Alert,
	CheckBox,
	Image,
	Modal,
	Pressable,
	Text,
	TextInput,
	View,
} from 'react-native'
import Clock from '../../components/Clock/Clock'
import styles from './style'

export default function User() {
	const [date, setData] = useState([
		{
			id: '1',
			title: 'Learning Programming by 12PM',
			flag: false,
		},
		{
			id: '2',
			title: 'Learn how to cook by 1PM',
			flag: false,
		},
		{
			id: '3',
			title: 'Learn how to play at 2PM',
			flag: false,
		},
		{
			id: '4',
			title: 'Have lunch at 4PM',
			flag: false,
		},
		{
			id: '5',
			title: 'Going to travel 6PM',
			flag: false,
		},
	])

	const [modalVisible, setModalVisible] = useState(false)

	const [addTaskValue, setAddTaskValue] = useState('')

	const changeData = el => {
		const resArray = date.map(elem =>
			el.id != elem.id
				? elem
				: {
						id: el.id,
						title: el.title,
						flag: !el.flag,
				  }
		)

		setData(resArray)
	}

	const addTask = () => {
		setData([
			{
				id: Math.floor(Math.random() * 100000000000) + 1,
				title: addTaskValue,
				flag: false,
			},
			...date,
		])
		setAddTaskValue('')
		setModalVisible(!modalVisible)
	}

	return (
		<View style={styles.container}>
			<Modal
				animationType='slide'
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					Alert.alert('Modal has been closed.')
					setModalVisible(!modalVisible)
				}}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<Text style={styles.modalText}>Please Add Name Task</Text>
						<TextInput
							onChange={e => setAddTaskValue(e.target.value)}
							style={styles.input}
						/>
						<View style={styles.wrapperBtnModal}>
							<Pressable
								style={[styles.button, styles.buttonClose]}
								onPress={addTask}
							>
								<Text style={styles.textStyle}>Add Task</Text>
							</Pressable>
							<Pressable
								style={[styles.button, styles.buttonClose]}
								onPress={() => setModalVisible(!modalVisible)}
							>
								<Text style={styles.textStyle}>Close</Text>
							</Pressable>
						</View>
					</View>
				</View>
			</Modal>

			<View style={styles.blocAvatar}>
				<Image
					style={styles.imgAvatar}
					source={require('../../assets/avatar.png')}
				/>
				<Text style={styles.textAvatar}>Welcome Jeegar goyani</Text>
			</View>

			<View style={styles.wrapperTextGood}>
				<Text style={styles.textGood}>Good Afternoon</Text>
			</View>
			<Clock />
			<View style={styles.wrapperTextList}>
				<Text style={styles.textList}>Task list</Text>
			</View>

			<View style={styles.wrapperTask}>
				<View style={styles.wrapperAdd}>
					<Text style={styles.textDaily}>Daily Task</Text>
					<Pressable onPress={() => setModalVisible(true)}>
						<Image
							style={styles.imgAdd}
							source={require('../../assets/add.png')}
						/>
					</Pressable>
				</View>

				<View style={styles.check}>
					{date.map((el, index) => (
						<View style={styles.wrapperCheckbox} key={index}>
							<CheckBox
								value={el.flag}
								onValueChange={() => changeData(el)}
								style={styles.checkbox}
							/>
							<Text style={styles.label}>{el.title}</Text>
						</View>
					))}
				</View>
			</View>
		</View>
	)
}
