import { Button, Text, View } from 'react-native'
import styles from './style'

export default function Home() {
	return (
		<View style={styles.container}>
			<Text>Gets things with TODs</Text>
			<Text>Lorem ipsum dolor sit amet consectetur. Eget sit nec et euismod. Consequat urna quam felis interdum quisque. Malesuada adipiscing tristique ut eget sed.</Text>
			<Button title='Get Started'/>
		</View>
	)
}
