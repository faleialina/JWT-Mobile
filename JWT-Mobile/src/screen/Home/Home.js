import { Button, Image, Text, View } from 'react-native'
import styles from './style'

export default function Home({ navigation }) {
	return (
		<View style={styles.container}>
			<View style={styles.card}>
				<Image
					source={require('../../assets/checking.svg')}
					style={styles.img}
				/>
				<Text>Gets things with TODs</Text>
				<Text>
					Lorem ipsum dolor sit amet consectetur. Eget sit nec et euismod.
					Consequat urna quam felis interdum quisque. Malesuada adipiscing
					tristique ut eget sed.
				</Text>
				<Button
					title='Get Started'
					onPress={() => navigation.navigate('Auth')}
				/>
			</View>
		</View>
	)
}
