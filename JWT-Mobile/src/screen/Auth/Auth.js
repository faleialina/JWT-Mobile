import { Button, Image, Text, TextInput, View } from 'react-native'
import styles from './style'

export default function Auth({ navigation }) {
	return (
		<View style={styles.container}>
			<View style={styles.card}>
				<Image source={require('../../assets/school.svg')} style={styles.img} />
				<Text>Welcome back</Text>
				<TextInput
					style={styles.input}
					placeholder='Enter your Email'
					placeholderTextColor={'red'}
				></TextInput>
				<TextInput
					style={styles.input}
					secureTextEntry={true}
					placeholder='Enter Password'
				/>
				<Text>Forget password ?</Text>
				<Button title='Login' />
				<Text onPress={() => navigation.navigate('Reg')}>
					Don’t have an account ? Sign Up
				</Text>
			</View>
		</View>
	)
}
