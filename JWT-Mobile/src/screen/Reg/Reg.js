import { Pressable, Text, TextInput, View } from 'react-native'
import styles from './style'

export default function Reg({ navigation }) {
	return (
		<View style={styles.container}>
			<View style={styles.card}>
				<Text>Welcome to Onboard! </Text>
				<TextInput style={styles.input} placeholder='Enter your Email' />
				<TextInput style={styles.input} placeholder='Enter your Email' />
				<TextInput style={styles.input} placeholder='Enter your Email' />
				<TextInput
					style={styles.input}
					secureTextEntry={true}
					placeholder='Enter Password'
				/>
				<Text>Forget password ?</Text>
				<Pressable
					style={styles.btn}
					onPress={() => navigation.navigate('Home')}
				>
					<Text style={styles.btnText}>{'Register'}</Text>
				</Pressable>
				{/* <Button title='Register' style={styles.btn}/> */}
				<Text onPress={() => navigation.navigate('Home')}>
					Don’t have an account ?<Text style={styles.textSignUp}> Sign Up</Text>
				</Text>
			</View>
		</View>
	)
}
